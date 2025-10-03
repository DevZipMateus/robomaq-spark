import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import midia1 from "@/assets/midia_1.png";
import midia2 from "@/assets/midia_2.png";
import midia3 from "@/assets/midia_3.jpg";
import midia4 from "@/assets/midia_4.png";
import midia5 from "@/assets/midia_5.png";
import midia6 from "@/assets/midia_6.png";
import midia7 from "@/assets/midia_7.jpg";
import midia8 from "@/assets/midia_8.png";
import midia9 from "@/assets/midia_9.png";
import midia10 from "@/assets/midia_10.png";
import midia11 from "@/assets/midia_11.png";
import midia12 from "@/assets/midia_12.png";

const Hero = () => {
  const images = [midia1, midia2, midia3, midia4, midia5, midia6, midia7, midia8, midia9, midia10, midia11, midia12];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`ROBOMAQ produto ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow-lg animate-fade-in">
          ROBOMAQ ENGENHARIA
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Automatizando seu sucesso com soluções personalizadas em máscaras de robô e dispositivos para injeção plástica
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={() => scrollToSection("products")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 group"
          >
            Conheça nossos produtos
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/60 text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 backdrop-blur-sm"
          >
            Entre em contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
