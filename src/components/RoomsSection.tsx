import { Bed, Bath, Wifi, Tv, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import room1Image from "@/assets/room1.jpeg";
import room2Image from "@/assets/room2.jpeg";
import lobbyImage from "@/assets/lobby.jpeg";

const rooms = [
  {
    name: "Chambre Standard",
    description: "Confort et simplicité pour un séjour agréable",
    image: room1Image,
    capacity: "2 personnes",
    features: ["Lit double", "Salle de bain privée", "Climatisation", "TV écran plat"],
  },
  {
    name: "Chambre Supérieure",
    description: "Plus d'espace pour un confort optimal",
    image: room2Image,
    capacity: "2-3 personnes",
    features: ["Grand lit", "Salle de bain privée", "Climatisation", "Wi-Fi gratuit"],
  },
  {
    name: "Suite Familiale",
    description: "Idéale pour les familles et séjours prolongés",
    image: lobbyImage,
    capacity: "3 personnes",
    features: ["Lit king-size", "Salon privé", "Minibar", "Vue sur cour"],
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Lit double": <Bed className="w-4 h-4" />,
  "Grand lit": <Bed className="w-4 h-4" />,
  "Lit king-size": <Bed className="w-4 h-4" />,
  "Salle de bain privée": <Bath className="w-4 h-4" />,
  "Climatisation": <Wind className="w-4 h-4" />,
  "TV écran plat": <Tv className="w-4 h-4" />,
  "Wi-Fi gratuit": <Wifi className="w-4 h-4" />,
};

const RoomsSection = () => {
  return (
    <section id="chambres" className="section-padding bg-secondary/30 african-pattern">
      <div className="container-hotel">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Nos Chambres
          </span>
          <h2 className="title-section mt-3 mb-4">
            Un Confort Exceptionnel
          </h2>
          <p className="subtitle">
            77 chambres soigneusement aménagées avec salles de bain privées et lits 
            confortables de 2 à 3 places pour un repos parfait.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card 
              key={room.name} 
              className="overflow-hidden card-hover bg-card border-0 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {room.capacity}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.features.map((feature) => (
                    <span 
                      key={feature}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-full"
                    >
                      {amenityIcons[feature] || null}
                      {feature}
                    </span>
                  ))}
                </div>

                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <a href="#reservation">Réserver cette chambre</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
