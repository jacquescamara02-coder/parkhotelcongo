import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://esm.sh/zod@3.25.76";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const ReservationSchema = z.object({
  type: z.enum(["room", "table"]),
  guest_name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(8).max(20),
  guests_count: z.number().int().min(1).max(20),
  special_requests: z.string().max(500).optional().nullable(),
  // Room fields
  check_in: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  check_out: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  room_type: z.string().max(50).optional(),
  // Table fields
  reservation_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  reservation_time: z.string().regex(/^\d{2}:\d{2}$/).optional(),
});

// HTML escape function to prevent injection
function escapeHtml(text: string | undefined | null): string {
  if (!text) return "";
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse and validate input
    const rawData = await req.json();
    const parseResult = ReservationSchema.safeParse(rawData);
    
    if (!parseResult.success) {
      console.error("Validation error:", parseResult.error.issues);
      return new Response(
        JSON.stringify({ error: "Invalid input data", details: parseResult.error.issues }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const data = parseResult.data;
    const hotelEmail = "info@parkhotelcongo.com";
    
    let subject: string;
    let htmlContent: string;
    let guestHtmlContent: string;

    // Escape all user input for HTML
    const safeName = escapeHtml(data.guest_name);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone);
    const safeRequests = escapeHtml(data.special_requests);
    const safeRoomType = escapeHtml(data.room_type);
    const safeCheckIn = escapeHtml(data.check_in);
    const safeCheckOut = escapeHtml(data.check_out);
    const safeDate = escapeHtml(data.reservation_date);
    const safeTime = escapeHtml(data.reservation_time);

    if (data.type === "room") {
      subject = `Nouvelle réservation de chambre - ${safeName}`;
      htmlContent = `
        <h1>Nouvelle réservation de chambre</h1>
        <h2>Détails du client</h2>
        <ul>
          <li><strong>Nom:</strong> ${safeName}</li>
          <li><strong>Email:</strong> ${safeEmail}</li>
          <li><strong>Téléphone:</strong> ${safePhone}</li>
        </ul>
        <h2>Détails de la réservation</h2>
        <ul>
          <li><strong>Type de chambre:</strong> ${safeRoomType}</li>
          <li><strong>Check-in:</strong> ${safeCheckIn}</li>
          <li><strong>Check-out:</strong> ${safeCheckOut}</li>
          <li><strong>Nombre de personnes:</strong> ${data.guests_count}</li>
          ${safeRequests ? `<li><strong>Demandes spéciales:</strong> ${safeRequests}</li>` : ''}
        </ul>
      `;
      guestHtmlContent = `
        <h1>Confirmation de votre réservation - Park Hôtel</h1>
        <p>Cher(e) ${safeName},</p>
        <p>Nous avons bien reçu votre demande de réservation de chambre. Notre équipe va la traiter dans les plus brefs délais.</p>
        <h2>Récapitulatif de votre réservation</h2>
        <ul>
          <li><strong>Type de chambre:</strong> ${safeRoomType}</li>
          <li><strong>Check-in:</strong> ${safeCheckIn}</li>
          <li><strong>Check-out:</strong> ${safeCheckOut}</li>
          <li><strong>Nombre de personnes:</strong> ${data.guests_count}</li>
        </ul>
        <p>Nous vous contacterons sous peu pour confirmer la disponibilité.</p>
        <p>Cordialement,<br>L'équipe Park Hôtel Lubumbashi</p>
      `;
    } else {
      subject = `Nouvelle réservation de table - ${safeName}`;
      htmlContent = `
        <h1>Nouvelle réservation de table</h1>
        <h2>Détails du client</h2>
        <ul>
          <li><strong>Nom:</strong> ${safeName}</li>
          <li><strong>Email:</strong> ${safeEmail}</li>
          <li><strong>Téléphone:</strong> ${safePhone}</li>
        </ul>
        <h2>Détails de la réservation</h2>
        <ul>
          <li><strong>Date:</strong> ${safeDate}</li>
          <li><strong>Heure:</strong> ${safeTime}</li>
          <li><strong>Nombre de personnes:</strong> ${data.guests_count}</li>
          ${safeRequests ? `<li><strong>Demandes spéciales:</strong> ${safeRequests}</li>` : ''}
        </ul>
      `;
      guestHtmlContent = `
        <h1>Confirmation de votre réservation de table - Park Hôtel</h1>
        <p>Cher(e) ${safeName},</p>
        <p>Nous avons bien reçu votre demande de réservation de table. Notre équipe va la traiter dans les plus brefs délais.</p>
        <h2>Récapitulatif de votre réservation</h2>
        <ul>
          <li><strong>Date:</strong> ${safeDate}</li>
          <li><strong>Heure:</strong> ${safeTime}</li>
          <li><strong>Nombre de personnes:</strong> ${data.guests_count}</li>
        </ul>
        <p>Nous vous contacterons sous peu pour confirmer la disponibilité.</p>
        <p>Cordialement,<br>L'équipe Park Hôtel Lubumbashi</p>
      `;
    }

    // Send email to hotel
    await resend.emails.send({
      from: "Park Hôtel <noreply@parkhotelcongo.com>",
      to: [hotelEmail],
      subject: subject,
      html: htmlContent,
    });

    // Send confirmation to guest
    await resend.emails.send({
      from: "Park Hôtel <noreply@parkhotelcongo.com>",
      to: [data.email],
      subject: `Confirmation - ${data.type === "room" ? "Réservation de chambre" : "Réservation de table"}`,
      html: guestHtmlContent,
    });

    console.log("Emails sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-reservation-email function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
