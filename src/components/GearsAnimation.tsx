import { Cog, Settings, Cpu, Zap } from "lucide-react";

export const GearsAnimation = () => {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
      
      {/* Main central gear - Large, primary color with glow */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="gear-glow">
          <Cog 
            size={80} 
            className="text-primary gear-rotate"
          />
        </div>
      </div>
      
      {/* Secondary gear - Medium, floating animation */}
      <div className="absolute left-1/4 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20 gear-float">
        <Settings 
          size={56} 
          className="text-secondary/80 gear-rotate-reverse"
        />
      </div>
      
      {/* Tertiary gear - Right side with pulse */}
      <div className="absolute right-1/4 top-2/3 transform translate-x-1/2 -translate-y-1/2 z-15 gear-pulse">
        <Cog 
          size={64} 
          className="text-accent/70 gear-rotate"
        />
      </div>
      
      {/* Small accent gears */}
      <div className="absolute left-1/6 bottom-1/4 transform -translate-x-1/2 translate-y-1/2">
        <Cpu 
          size={40} 
          className="text-brand-green/60 gear-rotate-reverse"
        />
      </div>
      
      <div className="absolute right-1/6 top-1/4 transform translate-x-1/2 -translate-y-1/2 gear-float-reverse">
        <Zap 
          size={36} 
          className="text-brand-purple/50 gear-rotate"
        />
      </div>
      
      {/* Micro gears for depth */}
      <div className="absolute left-2/3 bottom-1/3 transform -translate-x-1/2 translate-y-1/2">
        <Cog 
          size={28} 
          className="text-muted-foreground/40 gear-rotate"
        />
      </div>
      
      <div className="absolute left-1/3 top-1/6 transform -translate-x-1/2 -translate-y-1/2">
        <Settings 
          size={32} 
          className="text-brand-orange-dark/50 gear-rotate-reverse"
        />
      </div>
      
      {/* Background subtle gears */}
      <div className="absolute right-1/3 bottom-1/6 transform translate-x-1/2 translate-y-1/2 opacity-30 gear-pulse">
        <Cog 
          size={24} 
          className="text-brand-red/30 gear-rotate"
        />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full gear-float"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full gear-float-reverse"></div>
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-accent/25 rounded-full gear-pulse"></div>
      </div>
    </div>
  );
};