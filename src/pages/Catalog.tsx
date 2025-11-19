import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Catálogo Robomaq 2025</h1>
              <p className="text-muted-foreground mb-6">
                Confira nosso catálogo completo de produtos e soluções em automação industrial
              </p>
              <Button asChild className="gap-2">
                <a href="/catalogo-robomaq-2025.pdf" download>
                  <Download className="w-4 h-4" />
                  Baixar Catálogo PDF
                </a>
              </Button>
            </div>
            
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="/catalogo-robomaq-2025.pdf#toolbar=1&navpanes=1&scrollbar=1"
                width="100%"
                height="800px"
                style={{ border: "none" }}
                title="Catálogo Robomaq 2025"
                className="w-full"
              >
                <div className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Seu navegador não suporta visualização de PDFs diretamente.
                  </p>
                  <Button asChild>
                    <a href="/catalogo-robomaq-2025.pdf" download>
                      <Download className="w-4 h-4 mr-2" />
                      Clique aqui para baixar o catálogo
                    </a>
                  </Button>
                </div>
              </iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
