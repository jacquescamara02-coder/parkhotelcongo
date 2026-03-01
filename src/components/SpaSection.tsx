import { Sparkles, Heart, Leaf, Droplets } from "lucide-react";
import { Card } from "@/components/ui/card";
import spa1Image from "@/assets/spa1.jpeg";
import spa2Image from "@/assets/spa2.jpeg";
import spa3Image from "@/assets/spa3.jpeg";
import spa4Image from "@/assets/spa4.jpeg";
import spa5Image from "@/assets/spa5.jpeg";
import spa6Image from "@/assets/spa6.jpeg";

const spaServices = [
  { icon: Droplets, title: "Massage aux pierres chaudes" },
  { icon: Heart, title: "Soins du visage" },
  { icon: Leaf, title: "Aromathérapie" },
  { icon: Sparkles, title: "Soins corporels" },
];

const spaImages = [spa1Image, spa2Image, spa3Image, spa4Image, spa5Image, spa6Image];

const SpaSection = () => {
  return (
    <section id="spa" className="section-padding bg-secondary/30">
      <div className="container-hotel">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Bien-être
          </span>
          <h2 className="title-section mt-3 mb-4">
            Spa & Détente
          </h2>
          <p className="subtitle">
            Offrez-vous un moment de détente dans notre spa. 
            Un espace calme pour récupérer après une journée de travail ou de voyage.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {spaImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Spa Park Hôtel - Photo ${index + 1}`}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[300px] md:min-h-[400px]" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Spa Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {spaServices.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:border-primary/30 transition-colors p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">{service.title}</h4>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
