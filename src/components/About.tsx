import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Ingredientes Frescos",
      description: "Selecionamos apenas os melhores ingredientes locais para garantir qualidade e sabor únicos."
    },
    {
      icon: Award,
      title: "Receitas Artesanais",
      description: "Cada hambúrguer é preparado com carinho seguindo nossas receitas exclusivas desenvolvidas ao longo dos anos."
    },
    {
      icon: Users,
      title: "Atendimento Especial",
      description: "Nossa equipe é treinada para oferecer uma experiência gastronômica inesquecível a cada visita."
    },
    {
      icon: Clock,
      title: "Preparo Rápido",
      description: "Combinamos qualidade artesanal com agilidade no preparo, para você não perder tempo."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Nossa <span className="text-gradient">História</span>
              </h2>
              
              <p className="text-xl text-text-muted leading-relaxed">
                Fundada em 2015 por uma paixão genuína por hambúrgueres artesanais, 
                a Sizzle Burger nasceu do sonho de criar sabores únicos que marcam memórias.
              </p>
              
              <p className="text-lg text-text-muted leading-relaxed">
                Começamos como uma pequena operação familiar e hoje somos reconhecidos 
                como a melhor hamburgueria da região. Nosso segredo? <strong>Ingredientes 
                frescos, receitas exclusivas e muito amor em cada preparo.</strong>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-surface rounded-xl">
                <div className="text-3xl font-bold text-accent-red mb-1">8+</div>
                <div className="text-sm text-text-muted">Anos de Tradição</div>
              </div>
              <div className="text-center p-4 bg-surface rounded-xl">
                <div className="text-3xl font-bold text-accent-red mb-1">50k+</div>
                <div className="text-sm text-text-muted">Hambúrgueres Servidos</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-surface hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent-red-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-red group-hover:shadow-lg transition-all">
                    <feature.icon className="w-8 h-8 text-accent-red group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;