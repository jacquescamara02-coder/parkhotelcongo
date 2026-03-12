import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import courtyardImage from "@/assets/courtyard.jpeg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with parallax feel */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src={courtyardImage}
          alt="Park Hôtel Lubumbashi - Cour intérieure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
      </motion.div>

      {/* Content */}
      <div className="container-hotel relative z-10 px-4 py-20">
        <div className="max-w-2xl space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary-foreground text-sm font-medium">77 Chambres Confortables</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="title-display text-white text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Bienvenue au{" "}
            <span className="text-primary">Park Hôtel</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Au cœur de Lubumbashi, découvrez un cadre accueillant où confort et hospitalité congolaise 
            se rencontrent. Hébergement soigné et bonne cuisine vous attendent.
          </motion.p>

          {/* Location */}
          <motion.div
            className="flex items-center gap-2 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span>Avenue Munongo n°50, Centre-ville - Près de la Grande Poste</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
