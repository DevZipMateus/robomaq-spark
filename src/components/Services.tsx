import { Wrench, RefreshCw, Scissors, Cog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Projetos e montagem de máscaras de robô",
      description: "Desenvolvimento completo de máscaras personalizadas para atender às necessidades específicas de cada processo de injeção plástica.",
    },
    {
      icon: RefreshCw,
      title: "Serviços de retrofit (renovação) de máscaras de robô",
      description: "Modernização e adequação de máscaras existentes, prolongando sua vida útil e melhorando performance.",
    },
    {
      icon: Scissors,
      title: "Dispositivos de corte de canais de injeção",
      description: "Soluções precisas para corte de canais, garantindo acabamento perfeito e otimização do processo produtivo.",
    },
    {
      icon: Cog,
      title: "Desenvolvimento de dispositivos de apoio à produção",
      description: "Criação de dispositivos customizados para otimizar e automatizar processos de produção industrial.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em engenharia para automação e otimização de processos industriais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
