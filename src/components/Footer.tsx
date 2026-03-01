import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-hotel px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">P</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Park Hôtel</h3>
                <p className="text-xs text-white/60">LUBUMBASHI</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Votre adresse à Lubumbashi pour un séjour confortable 
              et une cuisine soignée.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <nav className="space-y-2">
              <a href="#accueil" className="block text-white/70 hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#chambres" className="block text-white/70 hover:text-primary transition-colors">
                Nos Chambres
              </a>
              <a href="#restaurant" className="block text-white/70 hover:text-primary transition-colors">
                Restaurant
              </a>
              <a href="#reservation" className="block text-white/70 hover:text-primary transition-colors">
                Réservation
              </a>
              <a href="#contact" className="block text-white/70 hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:+243997032330" 
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +243 997 032 330
              </a>
              <a 
                href="mailto:info@parkhotelcongo.com" 
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@parkhotelcongo.com
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Avenue Munongo n°50, Lubumbashi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>© {currentYear} Park Hôtel Lubumbashi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
