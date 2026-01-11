import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Chambres", href: "#chambres" },
    { name: "Restaurant", href: "#restaurant" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-accent text-accent-foreground py-2">
        <div className="container-hotel flex justify-between items-center text-sm px-4">
          <div className="flex items-center gap-6">
            <a href="tel:+243997032330" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +243 997 032 330
            </a>
            <a href="mailto:info@parkhotelcongo.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              info@parkhotelcongo.com
            </a>
          </div>
          <p className="text-accent-foreground/80">Avenue Munongo n°50, Lubumbashi</p>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container-hotel px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#accueil" className="flex items-center gap-3">
              <img src={logo} alt="Park Hôtel Logo" className="w-14 h-14 object-contain" />
              <div>
                <h1 className="font-display font-bold text-xl text-foreground">Park Hôtel</h1>
                <p className="text-xs text-muted-foreground tracking-wide">LUBUMBASHI</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              >
                <a href="#reservation">Réserver</a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container-hotel px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
              >
                <a href="#reservation" onClick={() => setIsMobileMenuOpen(false)}>
                  Réserver maintenant
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
