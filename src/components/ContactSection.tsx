import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Avenue Munongo n°50", "Commune de Lubumbashi", "Près de la Grande Poste, Centre-ville"],
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+243 997 032 330"],
    link: "tel:+243997032330",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+234 997 032 330"],
    link: "https://wa.me/234997032330",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@parkhotelcongo.com"],
    link: "mailto:info@parkhotelcongo.com",
  },
  {
    icon: Clock,
    title: "Réception",
    details: ["Ouverte 24h/24", "7 jours sur 7"],
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-hotel">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Contact
          </span>
          <h2 className="title-section mt-3 mb-4">
            Nous Trouver
          </h2>
          <p className="subtitle">
            Situé au cœur de Lubumbashi, Park Hôtel est facilement accessible 
            depuis les principaux points d'intérêt de la ville.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-secondary h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">Avenue Munongo n°50</h3>
              <p className="text-muted-foreground mb-4">
                Commune de Lubumbashi<br />
                Près de la Grande Poste, Centre-ville
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=-11.6608,27.4794"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Ouvrir dans Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </a>
                ) : (
                  item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">{detail}</p>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
