import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Catálogo de produtos</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça nossa linha completa de soluções em automação industrial
          </p>
        </div>

        <div className="text-center">
          <Link to="/catalog">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto px-6 md:px-8"
            >
              Veja nosso catálogo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
