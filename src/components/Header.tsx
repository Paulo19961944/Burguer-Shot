import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-surface-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-red to-accent-red-hover rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍔</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">Burger Shot</h1>
              <p className="text-xs text-text-muted -mt-1">Sabor Autêntico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-text-secondary hover:text-accent-red transition-colors">
              Início
            </a>
            <a href="#cardapio" className="text-text-secondary hover:text-accent-red transition-colors">
              Cardápio
            </a>
            <a href="#sobre" className="text-text-secondary hover:text-accent-red transition-colors">
              Sobre Nós
            </a>
            <a href="#contato" className="text-text-secondary hover:text-accent-red transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-text-secondary hover:text-accent-red">
              <Phone className="w-4 h-4 mr-2" />
              (11) 99999-9999
            </Button>
            <Button className="bg-accent-red hover:bg-accent-red-hover text-white font-semibold px-6">
              Peça Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-surface-muted">
            <nav className="flex flex-col space-y-3">
              <a href="#inicio" className="text-text-secondary hover:text-accent-red transition-colors py-2">
                Início
              </a>
              <a href="#cardapio" className="text-text-secondary hover:text-accent-red transition-colors py-2">
                Cardápio
              </a>
              <a href="#sobre" className="text-text-secondary hover:text-accent-red transition-colors py-2">
                Sobre Nós
              </a>
              <a href="#contato" className="text-text-secondary hover:text-accent-red transition-colors py-2">
                Contato
              </a>
              <div className="pt-3 border-t border-surface-muted">
                <Button className="w-full bg-accent-red hover:bg-accent-red-hover text-white font-semibold">
                  Peça Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;