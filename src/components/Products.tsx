import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Máscara de robô padrão",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f2524e?w=600&h=400&fit=crop",
      description: "Solução completa para automação de processos de injeção plástica",
    },
    {
      title: "Máscara personalizada",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      description: "Desenvolvemos projetos sob medida para atender suas necessidades específicas",
    },
    {
      title: "Sistema de retrofit",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      description: "Modernização completa de sistemas existentes com tecnologia de ponta",
    },
    {
      title: "Dispositivos de corte",
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&h=400&fit=crop",
      description: "Precisão e eficiência no corte de canais de injeção",
    },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de produtos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa linha completa de soluções em automação industrial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Para mais informações sobre nossos produtos e soluções personalizadas
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.open("https://wa.me/5547996294772", "_blank")}
          >
            <MessageCircle className="mr-2" />
            Entre em contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
