import { Wine, Coffee, Armchair, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import receptionImage from "@/assets/reception.jpeg";
import barImage from "@/assets/bar.jpeg";

const services = [
  {
    icon: Wine,
    title: "Bar & Lounge",
    description: "Une large sélection de boissons locales et internationales dans une ambiance chaleureuse",
    image: barImage,
  },
  {
    icon: Coffee,
    title: "Réception 24h/24",
    description: "Notre équipe dévouée est à votre service à tout moment pour répondre à vos besoins",
    image: receptionImage,
  },
];

const amenities = [
  { icon: Armchair, title: "Salon de détente" },
  { icon: CreditCard, title: "Ecobank sur place" },
  { icon: Wine, title: "Bar bien approvisionné" },
  { icon: Coffee, title: "Service en chambre" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-hotel">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Nos Services
          </span>
          <h2 className="title-section mt-3 mb-4">
            Des Services d'Excellence
          </h2>
          <p className="subtitle">
            Profitez de nos installations modernes et de notre service attentionné 
            pour un séjour inoubliable à Lubumbashi.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="overflow-hidden card-hover bg-card border-0 shadow-card group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((amenity) => (
            <Card 
              key={amenity.title}
              className="bg-card border-border hover:border-primary/30 transition-colors p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <amenity.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">{amenity.title}</h4>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
