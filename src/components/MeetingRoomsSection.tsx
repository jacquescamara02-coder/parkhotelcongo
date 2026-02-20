import { Users, Presentation } from "lucide-react";
import { Card } from "@/components/ui/card";
import salleGrandeImage from "@/assets/salle-reunion-grande.jpeg";
import sallePetiteImage from "@/assets/salle-reunion-petite.jpeg";

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
    image: sallePetiteImage,
    features: ["Tableau", "Climatisation", "Cadre intimiste", "Wi-Fi"],
  },
];

const MeetingRoomsSection = () => {
  return (
    <section id="salles" className="section-padding bg-background">
      <div className="container-hotel">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Nos Espaces
          </span>
          <h2 className="title-section mt-3 mb-4">
            Salles de Réunion
          </h2>
          <p className="subtitle">
            Deux espaces professionnels parfaitement équipés pour vos conférences, 
            séminaires et réunions d'affaires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {meetingRooms.map((room) => (
            <Card
              key={room.name}
              className="overflow-hidden card-hover bg-card border-0 shadow-card group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={room.image}
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
      </div>
    </section>
  );
};

export default MeetingRoomsSection;
