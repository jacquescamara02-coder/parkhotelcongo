import { useState, useEffect } from "react";
import { Wine, Coffee, Armchair, CreditCard, Banknote } from "lucide-react";
import { Card } from "@/components/ui/card";
import receptionImage from "@/assets/reception.jpeg";
import reception2Image from "@/assets/reception2.jpeg";
import reception3Image from "@/assets/reception3.jpeg";
import reception4Image from "@/assets/reception4.jpeg";
import barImage from "@/assets/bar.jpeg";
import atmImage from "@/assets/atm.jpeg";

const receptionImages = [receptionImage, reception2Image, reception3Image, reception4Image];

const services = [
  {
    icon: Wine,
    title: "Bar & Lounge",
    description: "Une large sélection de boissons locales et internationales dans une ambiance chaleureuse",
    images: [barImage],
  },
  {
    icon: Coffee,
    title: "Réception 24h/24",
    description: "Notre équipe dévouée est à votre service à tout moment pour répondre à vos besoins",
    images: receptionImages,
  },
  {
    icon: Banknote,
    title: "ATM 24h/7j",
    description: "Un distributeur automatique disponible sur place pour vos retraits et transactions bancaires",
    images: [atmImage],
  },
];

const amenities = [
  { icon: Armchair, title: "Salon de détente" },
  { icon: CreditCard, title: "ATM 24h/7j" },
  { icon: Wine, title: "Bar bien approvisionné" },
  { icon: Coffee, title: "Service en chambre" },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (service.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % service.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [service.images.length]);

  return (
    <Card className="overflow-hidden card-hover bg-card border-0 shadow-card group">
      <div className="relative h-64 overflow-hidden">
        {service.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${service.title} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        {service.images.length > 1 && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {service.images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white scale-110" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
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
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-hotel">
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

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
