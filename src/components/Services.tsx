import { Wrench, RefreshCw, Scissors, Cog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import service1 from "@/assets/service_1.jpg";
import service2 from "@/assets/service_2.jpg";
import service3 from "@/assets/service_3.jpg";
import service4 from "@/assets/service_4.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Projetos e montagem de máscaras de robô",
      description: "Desenvolvimento completo de máscaras personalizadas para atender às necessidades específicas de cada processo de injeção plástica.",
      image: service1,
    },
    {
      icon: RefreshCw,
      title: "Serviços de retrofit (renovação) de máscaras de robô",
      description: "Modernização e adequação de máscaras existentes, prolongando sua vida útil e melhorando performance.",
      image: service2,
    },
    {
      icon: Scissors,
      title: "Dispositivos de corte de canais de injeção",
      description: "Soluções precisas para corte de canais, garantindo acabamento perfeito e otimização do processo produtivo.",
      image: service3,
    },
    {
      icon: Cog,
      title: "Desenvolvimento de dispositivos de apoio à produção",
      description: "Criação de dispositivos customizados para otimizar e automatizar processos de produção industrial.",
      image: service4,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Nossos serviços</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas em engenharia para automação e otimização de processos industriais
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <CardHeader className="p-4 md:p-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg md:text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6 pt-0">
                      <CardDescription className="text-sm md:text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
