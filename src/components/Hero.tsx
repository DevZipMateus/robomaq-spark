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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background pt-20 md:pt-24">
      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg animate-fade-in">
              ROBOMAQ ENGENHARIA
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Automatizando seu sucesso com soluções personalizadas em máscaras de robô e dispositivos para injeção plástica
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
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

          {/* Right Side - Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in max-w-lg mx-auto lg:mx-0" style={{ animationDelay: "0.3s" }}>
            <video
              src="/midia_13.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
