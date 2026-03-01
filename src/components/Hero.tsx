import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import courtyardImage from "@/assets/courtyard.jpeg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={courtyardImage}
          alt="Park Hôtel Lubumbashi - Cour intérieure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="container-hotel relative z-10 px-4 py-20">
        <div className="max-w-2xl space-y-6 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary-foreground text-sm font-medium">77 Chambres Confortables</span>
          </div>

          {/* Title */}
          <h1 className="title-display text-white text-balance">
            Bienvenue au{" "}
            <span className="text-primary">Park Hôtel</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            Au cœur de Lubumbashi, découvrez un cadre accueillant où confort et hospitalité congolaise 
            se rencontrent. Hébergement soigné et bonne cuisine vous attendent.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Avenue Munongo n°50, Centre-ville - Près de la Grande Poste</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-elevated"
            >
              <a href="#reservation">Réserver maintenant</a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-6 bg-transparent"
            >
              <a href="#chambres">Découvrir nos chambres</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
