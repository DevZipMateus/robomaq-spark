import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="ROBOMAQ ENGENHARIA" className="h-16 mb-4" />
            <p className="text-white/70 text-sm">
              Automatizando seu sucesso
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>(47) 99629-4772</li>
              <li>lucas.borba@robomaqengenharia.com.br</li>
              <li>Segunda a Sexta</li>
              <li>08h-12h | 13:30-17:30</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Redes sociais</h3>
            <a
              href="https://instagram.com/robomaq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Instagram size={20} />
              @robomaq
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} ROBOMAQ ENGENHARIA - CNPJ: 50.920.377/0001-37</p>
          <p className="mt-2">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
