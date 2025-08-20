import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Star } from "lucide-react";
import classicBurger from "@/assets/classic-burger.jpg";
import spicyChickenBurger from "@/assets/spicy-chicken-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";

const featuredBurgers = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Nosso clássico com carne bovina, queijo cheddar, alface, tomate e molho especial",
    price: "R$ 24,90",
    image: classicBurger,
    rating: 4.8,
    isPopular: false
  },
  {
    id: 2,
    name: "Spicy Chicken",
    description: "Frango temperado com pimenta, queijo pepper jack, jalapeños e maionese picante",
    price: "R$ 26,90",
    image: spicyChickenBurger,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 3,
    name: "BBQ Supreme",
    description: "Carne bovina, bacon crocante, anéis de cebola, queijo e molho barbecue",
    price: "R$ 29,90",
    image: bbqBurger,
    rating: 4.9,
    isPopular: false
  }
];

const FeaturedBurgers = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-gradient">Destaques</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Os hambúrgueres mais pedidos pelos nossos clientes. 
            Sabores únicos que fazem a diferença.
          </p>
        </div>

        {/* Burgers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBurgers.map((burger) => (
            <Card key={burger.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden">
                {burger.isPopular && (
                  <div className="absolute top-4 left-4 z-10 bg-accent-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Mais Pedido
                  </div>
                )}
                <img 
                  src={burger.image} 
                  alt={burger.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-text-secondary">{burger.rating}</span>
                  <span className="text-sm text-text-muted">(150+ avaliações)</span>
                </div>

                {/* Name & Price */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">{burger.name}</h3>
                  <span className="text-lg font-bold text-accent-red">{burger.price}</span>
                </div>

                {/* Description */}
                <p className="text-text-muted mb-6 leading-relaxed">
                  {burger.description}
                </p>

                {/* Add Button */}
                <Button 
                  className="w-full bg-accent-red hover:bg-accent-red-hover text-white font-semibold group-hover:shadow-lg transition-all"
                  size="lg"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar ao Pedido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-accent-red text-accent-red hover:bg-accent-red hover:text-white px-8 py-4 text-lg font-semibold"
          >
            Ver Cardápio Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBurgers;