import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import bbqHero from "@/assets/bbq-hero.jpg";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-primary/30 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bbqHero})` }}
      />
      
      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-12 text-center max-w-4xl mx-auto">
        {/* Restaurant Name */}
        <h1 className="mb-3 text-6xl md:text-8xl font-bold text-accent drop-shadow-2xl animate-in fade-in duration-700 tracking-tight">
          Warren's
        </h1>
        <h2 className="mb-12 text-4xl md:text-6xl font-bold text-accent drop-shadow-2xl animate-in fade-in duration-700 delay-100">
          Barbecue Company
        </h2>
        
        {/* Tagline */}
        <p className="mb-16 text-xl md:text-2xl text-foreground/90 font-medium animate-in fade-in duration-700 delay-200">
          Authentic Slow-Smoked BBQ & <br/> Fresh Juices
        </p>

        {/* Menu Buttons */}
        <div className="flex flex-col md:flex-row gap-6 mb-20 w-full max-w-2xl animate-in fade-in duration-700 delay-300">
          <a href="https://www.cravings.live/hotels/FRUIT-FUELLED-ENERGY/b568173b-dd55-4f1c-9ccb-f3005c7e1d21">
            <Button
              variant="menu"
              size="lg"
              className="w-full md:w-1/2 h-20"
            >
              🥤 Juice Menu
            </Button>
          </a>
          <a href="https://www.cravings.live/hotels/WARREN'S-BARBECUE-COMPANY/d68d1ecd-adc6-48cf-b927-9ba831d70a57">
            <Button
              variant="menu"
              size="lg"
              className="w-full md:w-1/2 h-20"
            >
              🍖 Food Menu
            </Button>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-8 animate-in fade-in duration-700 delay-500">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-all duration-300 hover:scale-110"
          >
            <Facebook size={40} strokeWidth={1.5} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-all duration-300 hover:scale-110"
          >
            <Instagram size={40} strokeWidth={1.5} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-all duration-300 hover:scale-110"
          >
            <Twitter size={40} strokeWidth={1.5} />
          </a>
        </div>

        {/* Footer text */}
        <p className="mt-12 text-sm text-muted-foreground animate-in fade-in duration-700 delay-700">
          Open Daily • Family Owned Since 1995
        </p>
      </main>
    </div>
  );
};

export default Index;
