import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
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
      <motion.div
        className="hidden md:block bg-accent text-accent-foreground py-2"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>

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
            <motion.a
              href="#accueil"
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={logo} alt="Park Hôtel Logo" className="w-14 h-14 object-contain" />
              <div>
                <span className="font-display font-bold text-xl text-foreground">Park Hôtel</span>
                <p className="text-xs text-muted-foreground tracking-wide">LUBUMBASHI</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                >
                  <a href="#reservation">Réserver</a>
                </Button>
              </motion.div>
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-background border-t border-border overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="container-hotel px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {link.name}
                  </motion.a>
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
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
