import { useState } from "react";
import { X, User, Mail, Phone, Users, Calendar, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface TableReservationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TableReservationForm = ({ isOpen, onClose }: TableReservationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    guest_name: "",
    email: "",
    phone: "",
    reservation_date: "",
    reservation_time: "",
    guests_count: "2",
    special_requests: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert into database
      const { error: dbError } = await supabase.from("table_reservations").insert({
        guest_name: formData.guest_name,
        email: formData.email,
        phone: formData.phone,
        reservation_date: formData.reservation_date,
        reservation_time: formData.reservation_time,
        guests_count: parseInt(formData.guests_count),
        special_requests: formData.special_requests || null,
      });

      if (dbError) throw dbError;

      // Send confirmation emails
      const { error: emailError } = await supabase.functions.invoke("send-reservation-email", {
        body: {
          type: "table",
          guest_name: formData.guest_name,
          email: formData.email,
          phone: formData.phone,
          reservation_date: formData.reservation_date,
          reservation_time: formData.reservation_time,
          guests_count: parseInt(formData.guests_count),
          special_requests: formData.special_requests,
        },
      });

      if (emailError) {
        console.error("Email error:", emailError);
      }

      toast.success("Réservation envoyée avec succès! Nous vous contacterons bientôt.");
      setFormData({
        guest_name: "",
        email: "",
        phone: "",
        reservation_date: "",
        reservation_time: "",
        guests_count: "2",
        special_requests: "",
      });
      onClose();
    } catch (error) {
      console.error("Erreur lors de la réservation:", error);
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-background rounded-2xl shadow-elevated max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-display font-bold text-foreground">
            Réserver une Table
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="table_name" className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Nom complet *
            </Label>
            <Input
              id="table_name"
              value={formData.guest_name}
              onChange={(e) => handleChange("guest_name", e.target.value)}
              placeholder="Votre nom"
              required
              className="border-border focus:border-primary"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="table_email" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Email *
              </Label>
              <Input
                id="table_email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="votre@email.com"
                required
                className="border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="table_phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Téléphone *
              </Label>
              <Input
                id="table_phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+243..."
                required
                className="border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="table_date" className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Date *
              </Label>
              <Input
                id="table_date"
                type="date"
                value={formData.reservation_date}
                onChange={(e) => handleChange("reservation_date", e.target.value)}
                min={today}
                required
                className="border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="table_time" className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Heure *
              </Label>
              <Select
                value={formData.reservation_time}
                onValueChange={(value) => handleChange("reservation_time", value)}
                required
              >
                <SelectTrigger className="border-border focus:border-primary">
                  <SelectValue placeholder="Choisir l'heure" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Guests count */}
          <div className="space-y-2">
            <Label htmlFor="table_guests" className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Nombre de personnes *
            </Label>
            <Select
              value={formData.guests_count}
              onValueChange={(value) => handleChange("guests_count", value)}
            >
              <SelectTrigger className="border-border focus:border-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "personne" : "personnes"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Special requests */}
          <div className="space-y-2">
            <Label htmlFor="table_requests" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              Demandes spéciales
            </Label>
            <Textarea
              id="table_requests"
              value={formData.special_requests}
              onChange={(e) => handleChange("special_requests", e.target.value)}
              placeholder="Allergies, anniversaire, préférences de placement..."
              rows={3}
              className="border-border focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Réserver ma table"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default TableReservationForm;
