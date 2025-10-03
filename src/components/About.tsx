import { Target, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Target, label: "Precisão", value: "100%" },
    { icon: Users, label: "Clientes satisfeitos", value: "500+" },
    { icon: Award, label: "Anos de experiência", value: "10+" },
  ];

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
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop"
              alt="Engenharia de precisão"
              className="rounded-lg shadow-2xl w-full"
            />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 md:p-8 text-center border border-border hover:border-primary transition-colors"
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
