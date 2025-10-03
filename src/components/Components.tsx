import { Package, Shield, Zap, Settings } from "lucide-react";
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

const Components = () => {
  const images = [midia1, midia2, midia3, midia4, midia5, midia6, midia7, midia8, midia9, midia10, midia11, midia12];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const components = [
    {
      icon: Package,
      name: "Garras pneumáticas",
      specs: ["Alta precisão", "Diversos tamanhos", "Materiais resistentes"],
    },
    {
      icon: Shield,
      name: "Ventosas especiais",
      specs: ["Diferentes formatos", "Alta aderência", "Certificadas"],
    },
    {
      icon: Zap,
      name: "Sensores industriais",
      specs: ["Tecnologia avançada", "Alta durabilidade", "Fácil instalação"],
    },
    {
      icon: Settings,
      name: "Acessórios diversos",
      specs: ["Conectores", "Adaptadores", "Ferramentas"],
    },
  ];

  return (
    <section id="components" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Componentes</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Linha completa de componentes e acessórios para sistemas de automação
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full aspect-video max-h-[300px] md:max-h-[400px] lg:max-h-[500px] rounded-2xl overflow-hidden mb-12 md:mb-16 bg-muted">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Componente ROBOMAQ ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{component.name}</h3>
                <ul className="space-y-2">
                  {component.specs.map((spec, i) => (
                    <li key={i} className="text-sm md:text-base text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:mt-12 text-center p-6 md:p-8 bg-card rounded-lg border border-border">
          <p className="text-sm md:text-lg text-muted-foreground px-4">
            Para consultar disponibilidade, especificações técnicas e valores, entre em contato com nossa equipe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Components;
