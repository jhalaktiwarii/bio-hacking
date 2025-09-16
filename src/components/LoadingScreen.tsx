import { useState, useEffect } from 'react';
import { Play, Sparkle } from '@phosphor-icons/react';
import Image from 'next/image';

interface LoadingScreenProps {
  onStart: () => void;
  isVisible: boolean;
}

const LoadingScreen = ({ onStart, isVisible }: LoadingScreenProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showStartButton, setShowStartButton] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Simulate loading progress
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setShowStartButton(true);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(loadingInterval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black backdrop-blur-xl">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76,200,237,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(18,75,117,0.1),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center space-y-12 max-w-2xl mx-auto px-8 relative z-10">
        {/* Premium Logo Section */}
        <div className="relative">
          <div className="relative w-56 h-56 mx-auto">
            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 flex items-center justify-center p-10 animate-float-gentle">
                <Image
                fill
                  src={'/logo-symbol.png'} 
                  alt="Bio Hacking Luxe" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating Sparkles */}
            <div className="absolute -top-4 -right-4">
              <Sparkle size={24} weight="fill" className="text-accent animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Sparkle size={16} weight="fill" className="text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute top-1/2 -left-6">
              <Sparkle size={12} weight="fill" className="text-secondary animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Premium Typography */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent leading-tight">
              Bio Hacking Luxe
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          <p className="text-lg text-slate-300 font-light leading-relaxed max-w-lg mx-auto">
            Initializing your personalized biohacking experience...
          </p>
        </div>

        {/* Premium Loading Bar */}
        <div className="space-y-4">
          <div className="relative">
            <div className="w-full h-3 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
              <div 
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${loadingProgress}%` }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            {/* Progress Percentage */}
            <div className="absolute -top-8 right-0">
              <span className="text-sm font-mono text-primary bg-slate-800/80 px-2 py-1 rounded border border-primary/20">
                {Math.round(loadingProgress)}%
              </span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Premium Start Button */}
        {showStartButton && (
          <div className="space-y-6 animate-fade-in">
            <p className="text-slate-400 text-sm font-light">
              Ready to begin your transformation
            </p>
            <button
              onClick={onStart}
              className="group relative px-12 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 border border-primary/20 overflow-hidden cursor-pointer"
            >
              <div className="relative z-10 flex items-center gap-4">
                <Play size={24} weight="fill" className="group-hover:scale-110 transition-transform duration-300" />
                <span>Begin Experience</span>
              </div>
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
              </div>
            </button>
          </div>
        )}

        {/* Premium Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
          
          {/* DNA Helix Animation */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 opacity-20">
            <div className="w-full h-full border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}>
              <div className="w-2 h-2 bg-primary rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 opacity-20">
            <div className="w-full h-full border border-secondary/30 rounded-full animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
              <div className="w-1.5 h-1.5 bg-secondary rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
