'use client'

import { useEffect, useRef } from 'react';
import { 
  Syringe, 
  Check, 
  ArrowRight, 
  Shield, 
  Lightning, 
  Heart, 
  Sparkle,
  CaretRight,
  Star,
  Atom
} from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

const InjectableVitamins = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const vitamins = [
    {
      name: "NAD+",
      title: "Cellular Energy & Mitochondrial Support",
      description: "Advanced cellular energy enhancer that optimizes mitochondrial function",
      icon: Sparkle,
      color: "from-brand-accent/20 to-brand-primary/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      benefits: [
        "Enhances cellular energy by improving mitochondrial function",
        "Increases oxygen utilization for peak cellular performance",
        "Acts as a powerful antioxidant protecting cellular integrity",
        "Boosts overall energy levels and reduces cellular fatigue"
      ],
      stats: "98% Bioavailability"
    },
    {
      name: "Methylene Blue",
      title: "Cognitive Clarity & Brain Health",
      description: "Master coenzyme for enhanced cognitive function and mental clarity",
      icon: Atom,
      color: "from-brand-primary/20 to-brand-primary-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      benefits: [
        "Enhances cognitive clarity and mental focus",
        "Supports memory retention and learning capacity",
        "Boosts neurotransmitter production for optimal brain function",
        "Promotes neuroplasticity and cognitive longevity"
      ],
      stats: "100% Direct Delivery"
    },
    {
      name: "Vitamin D3",
      title: "Testosterone & Hormonal Support",
      description: "Essential vitamin for testosterone production and hormonal balance",
      icon: Heart,
      color: "from-brand-accent/20 to-brand-primary/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      benefits: [
        "Boosts testosterone production naturally",
        "Supports bone health and muscle strength",
        "Enhances immune function and overall vitality",
        "Improves mood and energy levels"
      ],
      stats: "Hormonal Optimization"
    },
    {
      name: "Immune Vita-Complex",
      title: "Travel & Immune Support",
      description: "Comprehensive immune support perfect for travelers and active lifestyles",
      icon: Shield,
      color: "from-brand-primary/20 to-brand-primary-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      benefits: [
        "Perfect for travelers and frequent flyers",
        "Comprehensive immune system support",
        "Reduces travel-related stress and fatigue",
        "Maintains peak health during busy schedules"
      ],
      stats: "Travel Ready"
    },
    {
      name: "Vitamin B12",
      title: "Energy & Vitality",
      description: "Essential vitamin for energy metabolism and nervous system health",
      icon: Lightning,
      color: "from-brand-accent/20 to-brand-primary/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      benefits: [
        "Boosts natural energy levels and reduces fatigue",
        "Supports brain health and focus",
        "Enhances metabolism and red blood cell production"
      ],
      stats: "Immediate Absorption"
    },
    {
      name: "Glutathione",
      title: "Detox & Skin Brightening",
      description: "Master antioxidant for cellular detoxification and skin health",
      icon: Star,
      color: "from-brand-primary/20 to-brand-primary-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      benefits: [
        "Master antioxidant that detoxifies the liver",
        "Improves skin tone and reduces oxidative stress",
        "Enhances immune function and cellular health"
      ],
      stats: "Premium Grade"
    }
  ];

  const advantages = [
    {
      icon: ArrowRight,
      title: "Faster Results",
      description: "Faster, stronger results compared to oral supplements",
      color: "from-brand-accent/20 to-brand-primary/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent"
    },
    {
      icon: Check,
      title: "100% Absorption",
      description: "Direct bloodstream delivery for maximum effectiveness",
      color: "from-brand-primary/20 to-brand-primary-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary"
    },
    {
      icon: Syringe,
      title: "Customizable",
      description: "Protocols based upon your genetic testing and full spectrum blood panel results",
      color: "from-brand-accent/20 to-brand-primary/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent"
    },
    {
      icon: Heart,
      title: "Professional Care",
      description: "Administered by experienced medical professionals",
      color: "from-brand-primary/20 to-brand-primary-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary"
    }
  ];

  return (
    <section ref={sectionRef} id="vitamins" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 fade-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-medium mb-6">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
              <Star size={14} weight="fill" className="text-white" />
            </div>
            Medical Grade Solutions
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-light to-brand-light-gray bg-clip-text text-transparent">
            Injectable <span className="text-brand-accent">Vitamins</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Medical-grade injectable vitamins deliver essential nutrients directly into your bloodstream for 
            <span className="text-brand-accent font-semibold"> maximum absorption</span> and 
            <span className="text-brand-accent font-semibold"> immediate results</span>—far more effective than pills or powders.
          </p>
        </div>

        {/* Vitamins Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {vitamins.map((vitamin, index) => {
            const IconComponent = vitamin.icon;
            return (
              <div
                key={vitamin.name}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${vitamin.color} backdrop-blur-sm border ${vitamin.borderColor} p-8 fade-up hover:scale-[1.02] transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-brand-accent/20`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${vitamin.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vitamin.color.replace('/20', '').replace('/10', '')} border-2 ${vitamin.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent size={32} weight="bold" className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {vitamin.name}
                        </h3>
                        <p className="text-sm font-medium text-brand-accent">
                          {vitamin.stats}
                        </p>
                      </div>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CaretRight size={20} weight="bold" className={vitamin.textColor} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-6 font-light leading-relaxed">
                    {vitamin.description}
                  </p>

                    {/* Category */}
                    <div className="mb-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-brand-accent/20 border border-brand-accent/40`}>
                        {vitamin.title}
                      </span>
                    </div>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-6">
                    {vitamin.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${benefitIndex * 0.1}s` }}>
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${vitamin.color.replace('/20', '').replace('/10', '')} border-2 ${vitamin.borderColor} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                          <Check size={12} weight="bold" className="text-white" />
                        </div>
                        <span className="text-slate-300 text-sm font-light leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${vitamin.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Vitamins Carousel - Mobile */}
        <div className="md:hidden mb-20">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {vitamins.map((vitamin, index) => {
              const IconComponent = vitamin.icon;
              return (
                <div
                  key={vitamin.name}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${vitamin.color} backdrop-blur-sm border ${vitamin.borderColor} p-6 fade-up hover:scale-[1.02] transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-brand-accent/20 flex-shrink-0 w-80`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${vitamin.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vitamin.color.replace('/20', '').replace('/10', '')} border-2 ${vitamin.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent size={24} weight="bold" className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">
                            {vitamin.name}
                          </h3>
                          <p className="text-xs font-medium text-brand-accent">
                            {vitamin.stats}
                          </p>
                        </div>
                      </div>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CaretRight size={16} weight="bold" className={vitamin.textColor} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-xs mb-4 font-light leading-relaxed">
                      {vitamin.description}
                    </p>

                    {/* Category */}
                    <div className="mb-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white bg-brand-accent/20 border border-brand-accent/40`}>
                        {vitamin.title}
                      </span>
                    </div>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-4">
                      {vitamin.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${benefitIndex * 0.1}s` }}>
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${vitamin.color.replace('/20', '').replace('/10', '')} border-2 ${vitamin.borderColor} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                            <Check size={10} weight="bold" className="text-white" />
                          </div>
                          <span className="text-slate-300 text-xs font-light leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 ${vitamin.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Injectable Vitamins */}
        <div className="relative">
          <div className="text-center mb-12 fade-up">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Injectable Vitamins?
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Experience the difference of professional-grade nutrient delivery
            </p>
          </div>
          
          {/* Advantages Grid - Desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={advantage.title}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-brand-accent/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${advantage.color.replace('/20', '').replace('/10', '')} border-2 ${advantage.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent size={28} weight="bold" className="text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    {advantage.title}
                  </h4>
                  
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>
              );
            })}
          </div>

          {/* Advantages Carousel - Mobile */}
          <div className="md:hidden fade-up">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div
                    key={advantage.title}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-brand-accent/10 flex-shrink-0 w-64"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${advantage.color.replace('/20', '').replace('/10', '')} border-2 ${advantage.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent size={20} weight="bold" className="text-white" />
                    </div>
                    
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
                      {advantage.title}
                    </h4>
                    
                    <p className="text-slate-300 text-xs font-light leading-relaxed">
                      {advantage.description}
                    </p>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-up">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 border border-brand-accent/30 text-brand-accent mb-6">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>
              <span className="text-sm font-medium">
                Available now for purchase directly through Bio Hacking Luxe
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Medical Services & Therapies

            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              Get personalized recommendations based on your genetic testing and start your journey to optimal health today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="cursor-pointer bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold rounded-full px-8 py-3 h-14 min-h-[3.5rem]"
            >
              Get Started Now
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="cursor-pointer border-brand-accent text-brand-accent hover:bg-brand-accent/10 hover:border-brand-accent/50 rounded-full px-8 py-3 h-14 min-h-[3.5rem]"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InjectableVitamins;
