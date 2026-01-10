import { useState } from "react";
import { Calendar, Users, Bed, Phone, Mail, User, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Demande de réservation envoyée!", {
      description: "Nous vous contacterons dans les plus brefs délais.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      roomType: "",
      guests: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservation" className="section-padding bg-accent text-accent-foreground">
      <div className="container-hotel">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Réservation
            </span>
            <h2 className="title-section mt-3 mb-4 text-accent-foreground">
              Réservez Votre Séjour
            </h2>
            <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous et notre équipe vous contactera 
              rapidement pour confirmer votre réservation.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nom complet
                </Label>
                <Input
                  id="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+243 XXX XXX XXX"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Nombre de personnes
                </Label>
                <Select onValueChange={(value) => handleChange("guests", value)} value={formData.guests}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 personne</SelectItem>
                    <SelectItem value="2">2 personnes</SelectItem>
                    <SelectItem value="3">3 personnes</SelectItem>
                    <SelectItem value="4">4+ personnes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Check-in */}
              <div className="space-y-2">
                <Label htmlFor="checkIn" className="text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date d'arrivée
                </Label>
                <Input
                  id="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleChange("checkIn", e.target.value)}
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Check-out */}
              <div className="space-y-2">
                <Label htmlFor="checkOut" className="text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date de départ
                </Label>
                <Input
                  id="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleChange("checkOut", e.target.value)}
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Room Type */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="roomType" className="text-foreground flex items-center gap-2">
                  <Bed className="w-4 h-4" />
                  Type de chambre
                </Label>
                <Select onValueChange={(value) => handleChange("roomType", value)} value={formData.roomType}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Choisissez un type de chambre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Chambre Standard (2 personnes)</SelectItem>
                    <SelectItem value="superieure">Chambre Supérieure (2-3 personnes)</SelectItem>
                    <SelectItem value="suite">Suite Familiale (3 personnes)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message" className="text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message (optionnel)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Demandes spéciales, questions..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Envoi en cours...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Envoyer la demande de réservation
                </span>
              )}
            </Button>

            {/* Contact info */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Vous pouvez aussi nous contacter directement au{" "}
              <a href="tel:+243997032330" className="text-primary font-semibold hover:underline">
                +243 997 032 330
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
