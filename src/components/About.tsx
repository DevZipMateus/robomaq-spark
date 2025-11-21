import { Target, Users, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import about1 from "@/assets/about_1.jpg";
import about2 from "@/assets/about_2.jpg";
import about3 from "@/assets/about_3.jpg";
import about4 from "@/assets/about_4.jpg";
import about5 from "@/assets/about_5.jpg";

const About = () => {
  const stats = [
    { icon: Target, label: "Precisão", value: "100%" },
    { icon: Users, label: "Clientes satisfeitos", value: "500+" },
    { icon: Award, label: "Anos de experiência", value: "10+" },
  ];

  const images = [about1, about2, about3, about4, about5];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Sobre nós</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-4">
            Somos uma empresa especializada em projetos e fabricação de máscaras de robô, além da comercialização de acessórios para processos de injeção plástica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="order-2 md:order-1">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={`Robomaq produto ${index + 1}`}
                      className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold">Nossa trajetória</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Ao longo da nossa trajetória, nos consolidamos como referência no fornecimento de máscaras de robô para injeção, oferecendo soluções personalizadas que atendem aos mais variados padrões e necessidades de cada cliente.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Nosso compromisso é com o cliente, sempre com máximo cuidado, atenção aos detalhes e foco na qualidade. Contamos com uma equipe de engenheiros altamente capacitados, prontos para desenvolver projetos sob medida e oferecer suporte técnico completo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
