import { Users, Presentation, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import salleGrandeImage from "@/assets/salle-reunion-grande.jpeg";
import sallePetiteImage from "@/assets/salle-reunion-petite.jpeg";
import sallePetite2Image from "@/assets/salle-reunion-petite2.jpeg";

const meetingRooms = [
  {
    name: "Grande Salle de Réunion",
    capacity: "100 personnes",
    description: "Idéale pour les conférences, séminaires et grands événements professionnels",
    image: salleGrandeImage,
    features: ["Projecteur", "Climatisation", "Sonorisation", "Wi-Fi"],
  },
  {
    name: "Salle de Réunion Privée",
    capacity: "20 personnes",
    description: "Parfaite pour les réunions d'affaires, comités et sessions de travail en petit groupe",
    images: [sallePetiteImage, sallePetite2Image],
    features: ["Tableau", "Climatisation", "Cadre intimiste", "Wi-Fi"],
  },
];

const MeetingRoomsSection = () => {
  return (
    <section id="salles" className="section-padding bg-background">
      <div className="container-hotel">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Nos Espaces
          </span>
          <h2 className="title-section mt-3 mb-4">
            Salles de Réunion & Spa
          </h2>
          <p className="subtitle">
            Des espaces professionnels parfaitement équipés pour vos événements, 
            et un spa pour votre bien-être.
          </p>
        </div>

        {/* Meeting Rooms */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {meetingRooms.map((room) => (
            <Card
              key={room.name}
              className="overflow-hidden card-hover bg-card border-0 shadow-card group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={room.image || room.images?.[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {room.capacity}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Presentation className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {room.name}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm mb-3">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <span key={f} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Spa Teaser */}
        <Card className="bg-card border-border p-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
            Spa & Bien-être
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Détendez-vous dans notre espace spa. Un havre de paix pour récupérer 
            après une journée de travail ou de voyage. Photos à venir bientôt.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default MeetingRoomsSection;
