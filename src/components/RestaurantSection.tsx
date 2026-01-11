import { useState } from "react";
import { Utensils, Clock, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import restaurantImage from "@/assets/restaurant.jpeg";
import TableReservationForm from "./TableReservationForm";

const cuisines = [
  {
    name: "Cuisine Congolaise",
    description: "Plats traditionnels authentiques préparés avec passion",
    icon: "🇨🇩",
  },
  {
    name: "Cuisine Européenne",
    description: "Classiques européens revisités avec des saveurs locales",
    icon: "🇪🇺",
  },
  {
    name: "Cuisine Américaine",
    description: "Burgers, grillades et spécialités américaines",
    icon: "🇺🇸",
  },
];

const RestaurantSection = () => {
  const [isTableFormOpen, setIsTableFormOpen] = useState(false);

  return (
    <>
    <section id="restaurant" className="section-padding bg-background">
      <div className="container-hotel">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={restaurantImage}
                alt="Restaurant Park Hôtel"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Notre Chef</p>
                    <p className="text-sm text-muted-foreground">Des plats préparés avec amour</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Notre Restaurant
              </span>
              <h2 className="title-section mt-3 mb-4">
                Une Expérience Culinaire Unique
              </h2>
              <p className="subtitle">
                La satisfaction de nos clients est notre priorité. Découvrez une cuisine 
                délicieuse qui marie les saveurs du Congo, d'Europe et d'Amérique.
              </p>
            </div>

            {/* Cuisines */}
            <div className="space-y-4">
              {cuisines.map((cuisine) => (
                <div 
                  key={cuisine.name}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="text-3xl">{cuisine.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{cuisine.name}</h3>
                    <p className="text-sm text-muted-foreground">{cuisine.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Horaires d'ouverture</p>
                <p className="text-sm text-muted-foreground">Petit-déjeuner 6h-10h • Déjeuner 12h-15h • Dîner 18h-22h</p>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => setIsTableFormOpen(true)}
            >
              <Utensils className="w-5 h-5 mr-2" />
              Réserver une table
            </Button>
          </div>
        </div>
      </div>
    </section>

    <TableReservationForm 
      isOpen={isTableFormOpen} 
      onClose={() => setIsTableFormOpen(false)} 
    />
    </>
  );
};

export default RestaurantSection;
