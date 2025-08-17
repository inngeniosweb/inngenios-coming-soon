import { GearsAnimation } from "@/components/GearsAnimation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        
        {/* Logo */}
        <div className="fade-in-up">
          <img 
            src="/lovable-uploads/ec858bde-3248-4d87-a98f-914094ba30cc.png" 
            alt="Inngenios Logo" 
            className="h-20 md:h-24 lg:h-28 mx-auto pulse-glow"
          />
        </div>
        
        {/* Main heading */}
        <div className="space-y-6 fade-in-delay-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-semibold text-foreground leading-tight">
            Estamos construyendo algo{" "}
            <span className="bg-gradient-to-r from-primary via-brand-orange-dark to-secondary bg-clip-text text-transparent">
              increíble
            </span>
            .
          </h1>
          <p className="text-xl md:text-2xl font-poppins font-light text-foreground/80">
            Muy pronto estará disponible.
          </p>
        </div>
        
        {/* Secondary text with script font */}
        <div className="fade-in-delay-2">
          <p className="text-2xl md:text-3xl text-muted-foreground/70 font-light italic transform hover:scale-105 transition-transform duration-300">
            Gracias por tu paciencia
          </p>
        </div>
        
        {/* Decorative element */}
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full fade-in-delay-2"></div>
        
      </div>
      
      {/* Gears Animation at bottom */}
      <div className="absolute bottom-8 left-0 right-0 fade-in-delay-2">
        <GearsAnimation />
      </div>
    </div>
  );
};

export default Index;
