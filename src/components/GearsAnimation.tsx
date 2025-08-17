import { Cog } from "lucide-react";

export const GearsAnimation = () => {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden opacity-60">
      {/* Gear 1 - Large */}
      <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
        <Cog 
          size={64} 
          className="text-muted-foreground gear-rotate"
        />
      </div>
      
      {/* Gear 2 - Medium, with brand accent */}
      <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <Cog 
          size={48} 
          className="text-primary/40 gear-rotate-reverse"
        />
      </div>
      
      {/* Gear 3 - Small */}
      <div className="absolute right-1/4 top-2/3 transform -translate-y-1/2">
        <Cog 
          size={40} 
          className="text-muted-foreground gear-rotate"
        />
      </div>
      
      {/* Gear 4 - Extra small with accent color */}
      <div className="absolute left-2/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <Cog 
          size={32} 
          className="text-accent/50 gear-rotate-reverse"
        />
      </div>
      
      {/* Gear 5 - Tiny with secondary color */}
      <div className="absolute right-1/3 bottom-1/4 transform translate-x-1/2 translate-y-1/2">
        <Cog 
          size={28} 
          className="text-secondary/60 gear-rotate"
        />
      </div>
    </div>
  );
};