import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/11/07/138447-768884583_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
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
