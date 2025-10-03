import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Serviços", id: "services" },
    { label: "Produtos", id: "products" },
    { label: "Componentes", id: "components" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black/50 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
          <img src={logo} alt="ROBOMAQ ENGENHARIA" className="h-12 w-auto transition-transform group-hover:scale-105" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/90 hover:text-white font-medium transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        <Button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:flex bg-primary hover:bg-primary/90 text-white"
        >
          Fale conosco
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-white font-medium text-left py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-white w-full"
            >
              Fale conosco
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
