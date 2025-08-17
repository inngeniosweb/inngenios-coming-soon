import { Cog, Settings, Cpu } from "lucide-react";

export const GearsAnimation = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
      {/* Sophisticated background with subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Connection lines between gears */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Connecting lines */}
        <line x1="40%" y1="45%" x2="60%" y2="55%" stroke="url(#connectionGradient)" strokeWidth="1" className="connection-pulse" />
        <line x1="25%" y1="35%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="1" className="connection-pulse-delay" />
        <line x1="75%" y1="65%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="1" className="connection-pulse-delay-2" />
      </svg>
      
      {/* Central gear system - Main hub */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-primary/20 w-24 h-24 animate-spin-slow"></div>
          
          {/* Main gear with enhanced glow */}
          <div className="gear-glow-enhanced">
            <Cog 
              size={72} 
              className="text-primary gear-rotate drop-shadow-lg filter"
              style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.4))' }}
            />
          </div>
        </div>
      </div>
      
      {/* Left gear cluster */}
      <div className="absolute left-1/4 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-15">
        <div className="relative gear-float-smooth">
          <div className="absolute inset-0 rounded-full border border-secondary/15 w-16 h-16 animate-spin-reverse-slow"></div>
          <Settings 
            size={48} 
            className="text-secondary gear-rotate-reverse drop-shadow-md"
            style={{ filter: 'drop-shadow(0 0 6px hsl(var(--secondary) / 0.3))' }}
          />
        </div>
      </div>
      
      {/* Right gear cluster */}
      <div className="absolute right-1/4 top-2/3 transform translate-x-1/2 -translate-y-1/2 z-15">
        <div className="relative gear-float-smooth-reverse">
          <div className="absolute inset-0 rounded-full border border-accent/15 w-14 h-14 animate-spin-slow"></div>
          <Cog 
            size={52} 
            className="text-accent gear-rotate drop-shadow-md"
            style={{ filter: 'drop-shadow(0 0 6px hsl(var(--accent) / 0.3))' }}
          />
        </div>
      </div>
      
      {/* Precision micro gears */}
      <div className="absolute left-1/6 bottom-1/4 transform -translate-x-1/2 translate-y-1/2 z-10">
        <div className="gear-pulse-subtle">
          <Cpu 
            size={32} 
            className="text-primary/60 gear-rotate-reverse drop-shadow-sm"
          />
        </div>
      </div>
      
      <div className="absolute right-1/6 top-1/4 transform translate-x-1/2 -translate-y-1/2 z-10">
        <div className="gear-pulse-subtle-delay">
          <Settings 
            size={28} 
            className="text-secondary/60 gear-rotate drop-shadow-sm"
          />
        </div>
      </div>
      
      {/* Background depth gears */}
      <div className="absolute left-2/3 bottom-1/3 transform -translate-x-1/2 translate-y-1/2 z-5">
        <Cog 
          size={24} 
          className="text-muted-foreground/30 gear-rotate-slow"
        />
      </div>
      
      <div className="absolute left-1/3 top-1/6 transform -translate-x-1/2 -translate-y-1/2 z-5">
        <Settings 
          size={20} 
          className="text-muted-foreground/25 gear-rotate-reverse-slow"
        />
      </div>
      
      {/* Energy dots - more refined */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full energy-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-secondary rounded-full energy-pulse-delay"></div>
        <div className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 bg-accent rounded-full energy-pulse-delay-2"></div>
      </div>
      
      {/* Ambient glow overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>
    </div>
  );
};