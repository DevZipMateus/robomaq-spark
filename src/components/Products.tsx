import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Catálogo de produtos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mb-8">
            Conheça nossa linha completa de soluções em automação industrial
          </p>
          
          <div className="mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Categorias conforme o catálogo:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              {[
                "Perfis estruturais",
                "Tampas de perfil",
                "Acessórios para fixação",
                "Suportes para montagem",
                "Hastes de ventosa",
                "Ventosas",
                "Pinças pneumáticas",
                "Tesouras pneumáticas",
                "Módulos eletrônicos para sensores",
                "Chapas de acoplamento de robô"
              ].map((category, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background/50 border border-primary/10 rounded-lg hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-foreground font-medium">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/catalogo" className="inline-block group">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-10 md:px-14 py-6 md:py-7 text-lg md:text-xl font-semibold shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Veja nosso catálogo
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
