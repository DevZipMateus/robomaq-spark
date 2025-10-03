import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Máscara de robô padrão",
      description: "Solução completa para automação de processos de injeção plástica",
    },
    {
      title: "Máscara personalizada",
      description: "Desenvolvemos projetos sob medida para atender suas necessidades específicas",
    },
    {
      title: "Sistema de retrofit",
      description: "Modernização completa de sistemas existentes com tecnologia de ponta",
    },
    {
      title: "Dispositivos de corte",
      description: "Precisão e eficiência no corte de canais de injeção",
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Catálogo de produtos</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça nossa linha completa de soluções em automação industrial
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <CardDescription className="text-sm md:text-base">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base px-4">
            Para mais informações sobre nossos produtos e soluções personalizadas
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto px-6 md:px-8"
            onClick={() => window.open("https://wa.me/5547996294772", "_blank")}
          >
            <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Entre em contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
