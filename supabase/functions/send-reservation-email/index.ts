import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ReservationEmailRequest {
  type: "room" | "table";
  guest_name: string;
  email: string;
  phone: string;
  guests_count: number;
  special_requests?: string;
  // Room specific
  check_in?: string;
  check_out?: string;
  room_type?: string;
  // Table specific
  reservation_date?: string;
  reservation_time?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ReservationEmailRequest = await req.json();
    const hotelEmail = "info@parkhotelcongo.com";
    
    let subject: string;
    let htmlContent: string;
    let guestHtmlContent: string;

    if (data.type === "room") {
      subject = `Nouvelle réservation de chambre - ${data.guest_name}`;
      htmlContent = `
        <h1>Nouvelle réservation de chambre</h1>
        <h2>Détails du client</h2>
        <ul>
          <li><strong>Nom:</strong> ${data.guest_name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Téléphone:</strong> ${data.phone}</li>
        </ul>
        <h2>Détails de la réservation</h2>
        <ul>
          <li><strong>Type de chambre:</strong> ${data.room_type}</li>
          <li><strong>Check-in:</strong> ${data.check_in}</li>
          <li><strong>Check-out:</strong> ${data.check_out}</li>
          <li><strong>Nombre de personnes:</strong> ${data.guests_count}</li>
          ${data.special_requests ? `<li><strong>Demandes spéciales:</strong> ${data.special_requests}</li>` : ''}
        </ul>
      `;
      guestHtmlContent = `
        <h1>Confirmation de votre réservation - Park Hôtel</h1>
        <p>Cher(e) ${data.guest_name},</p>
        <p>Nous avons bien reçu votre demande de réservation de chambre. Notre équipe va la traiter dans les plus brefs délais.</p>
        <h2>Récapitulatif de votre réservation</h2>
        <ul>
          <li><strong>Type de chambre:</strong> ${data.room_type}</li>
          <li><strong>Check-in:</strong> ${data.check_in}</li>
          <li><strong>Check-out:</strong> ${data.check_out}</li>
          <li><strong>Nombre de personnes:</strong> ${data.guests_count}</li>
        </ul>
        <p>Nous vous contacterons sous peu pour confirmer la disponibilité.</p>
        <p>Cordialement,<br>L'équipe Park Hôtel Lubumbashi</p>
      `;
    } else {
      subject = `Nouvelle réservation de table - ${data.guest_name}`;
      htmlContent = `
        <h1>Nouvelle réservation de table</h1>
        <h2>Détails du client</h2>
        <ul>
          <li><strong>Nom:</strong> ${data.guest_name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Téléphone:</strong> ${data.phone}</li>
        </ul>
        <h2>Détails de la réservation</h2>
        <ul>
          <li><strong>Date:</strong> ${data.reservation_date}</li>
          <li><strong>Heure:</strong> ${data.reservation_time}</li>
          <li><strong>Nombre de personnes:</strong> ${data.guests_count}</li>
          ${data.special_requests ? `<li><strong>Demandes spéciales:</strong> ${data.special_requests}</li>` : ''}
        </ul>
      `;
      guestHtmlContent = `
        <h1>Confirmation de votre réservation de table - Park Hôtel</h1>
        <p>Cher(e) ${data.guest_name},</p>
        <p>Nous avons bien reçu votre demande de réservation de table. Notre équipe va la traiter dans les plus brefs délais.</p>
        <h2>Récapitulatif de votre réservation</h2>
        <ul>
          <li><strong>Date:</strong> ${data.reservation_date}</li>
          <li><strong>Heure:</strong> ${data.reservation_time}</li>
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
