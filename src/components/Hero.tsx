import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-surface">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent-red-light text-accent-red px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Melhor Hamburgueria da Região</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Sabor que
                <span className="text-gradient block">Conquista</span>
              </h1>
              
              <p className="text-xl text-text-muted max-w-lg leading-relaxed">
                Hambúrgueres artesanais feitos com ingredientes frescos e selecionados. 
                Uma explosão de sabor em cada mordida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent-red hover:bg-accent-red-hover text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Ver Cardápio
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-text-secondary text-text-secondary hover:bg-text-secondary hover:text-white px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Como Fazemos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-surface-muted">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-red">500+</div>
                <div className="text-sm text-text-muted">Clientes Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-red">15+</div>
                <div className="text-sm text-text-muted">Hambúrgueres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-red">4.9</div>
                <div className="text-sm text-text-muted">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Hambúrguer Premium Sizzle Burger" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-red/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-red/5 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;