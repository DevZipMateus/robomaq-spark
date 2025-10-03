import { Package, Shield, Zap, Settings } from "lucide-react";

const Components = () => {
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
    <section id="components" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Componentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Linha completa de componentes e acessórios para sistemas de automação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{component.name}</h3>
                <ul className="space-y-2">
                  {component.specs.map((spec, i) => (
                    <li key={i} className="text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 bg-card rounded-lg border border-border">
          <p className="text-lg text-muted-foreground">
            Para consultar disponibilidade, especificações técnicas e valores, entre em contato com nossa equipe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Components;
