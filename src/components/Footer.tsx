import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-text-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-red to-accent-red-hover rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍔</span>
              </div>
              <div>
                <h1 className="font-bold text-xl">Burger Shot</h1>
                <p className="text-xs text-gray-300 -mt-1">Sabor Autêntico</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              O melhor hambúrguer da região com ingredientes frescos e sabor incomparável.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-accent-red hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-accent-red hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Horários */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Horário de Funcionamento</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent-red" />
                <div>
                  <div className="font-medium">Segunda a Quinta</div>
                  <div className="text-sm">18:00 - 23:30</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent-red" />
                <div>
                  <div className="font-medium">Sexta a Domingo</div>
                  <div className="text-sm">18:00 - 00:30</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent-red" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent-red" />
                <span>contato@sizzleburger.com</span>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Localização</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent-red mt-1" />
                <div>
                  <p>Rua das Delícias, 123</p>
                  <p>Vila Gourmet - São Paulo/SP</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-accent-red hover:bg-accent-red-hover text-white font-semibold w-full"
              size="sm"
            >
              Ver no Mapa
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Burger Shot. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;