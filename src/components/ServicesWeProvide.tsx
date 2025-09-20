'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Crown, Heart, Syringe, Shield, Sparkle, ArrowRight, Star, TrendUp } from '@phosphor-icons/react';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesWeProvide = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState<string | null>(null);

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

  const featuredServices = [
    {
      id: 'genetic',
      name: "Genetic Testing",
      description: "Personalized medicine based on your DNA",
      subtitle: "ClarityX® Partnership",
      price: "From $399",
      period: "",
      icon: Crown,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      benefits: [
        "Personalized medication recommendations",
        "Optimized nutrition based on genetics",
        "Preventive health insights"
      ],
      cta: "Learn More",
      popular: true,
      category: "Genetic Analysis",
      type: "genetic"
    },
    {
      id: 'peptide',
      name: "Peptide Therapy",
      description: "Advanced cellular optimization",
      subtitle: "Cellular Enhancement",
      price: "Contact",
      period: "for pricing",
      icon: Syringe,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      benefits: [
        "GLP 1&2 weight loss medications",
        "Performance & strength enhancement",
        "Cognitive function optimization"
      ],
      cta: "Learn More",
      popular: true,
      category: "Performance",
      type: "medical"
    },
    {
      id: 'hormone',
      name: "Hormone Therapy",
      description: "Restore energy, focus, and vitality",
      subtitle: "Bioidentical Hormones",
      price: "From $299",
      period: "",
      icon: Heart,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      benefits: [
        "Increased energy levels",
        "Better sleep quality",
        "Enhanced mood stability"
      ],
      cta: "Learn More",
      popular: true,
      category: "Hormonal Health",
      type: "medical"
    }
  ];


  const stats = [
    { label: "Success Rate", value: "98%", icon: TrendUp },
    { label: "Client Satisfaction", value: "4.9/5", icon: Star },
    { label: "Years Experience", value: "10+", icon: Star },
    { label: "Services Delivered", value: "50K+", icon: Syringe }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-24 lg:py-32 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 fade-up"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 border border-brand-accent/20 text-brand-accent text-sm font-medium mb-8 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
              <Star size={16} weight="fill" className="text-white animate-pulse" />
            </div>
            <span>Comprehensive Biohacking Solutions</span>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
              <Shield size={16} weight="fill" className="text-white" />
            </div>
          </div>
          
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-brand-light to-brand-light-gray bg-clip-text text-transparent leading-tight">
              Featured <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">Services</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Our most popular biohacking solutions designed to 
              <span className="text-brand-accent font-semibold mx-1">turn back your calendar age by 10 years</span>. 
              Explore our complete range of services through our dedicated pages.
            </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-lg">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-24 fade-up"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 border border-brand-accent/20 text-brand-accent text-sm font-medium mb-6">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
                <Star size={14} weight="fill" className="text-white" />
              </div>
              <span>Most Popular Services</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Featured <span className="text-brand-accent">Solutions</span>
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our most requested biohacking solutions combining genetic testing, advanced therapies, and personalized treatment protocols for optimal health optimization.
            </p>
          </div>

          {/* Featured Services Grid - Desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeService === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgColor} backdrop-blur-sm border ${service.borderColor} p-8 fade-up transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10`}
                >
                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold px-3 py-1">
                        <Star size={14} weight="fill" className="mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <motion.div 
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} border-2 ${service.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden`}
                        whileHover={{ rotate: 5 }}
                      >
                        {service.id === 'peptide' ? (
                          <Image
                            src="/Peptide.svg"
                            alt="Peptide Therapy"
                            width={36}
                            height={36}
                            className="object-contain"
                          />
                        ) : (
                          <IconComponent size={36} weight="bold" className="text-white" />
                        )}
                      </motion.div>
                      
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {service.name}
                      </h4>
                      
                      <p className={`text-sm font-medium text-white mb-2`}>
                        {service.subtitle}
                      </p>
                      
                      <p className="text-slate-200 text-sm mb-4 font-medium">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-white">
                          {service.price}
                        </span>
                        <span className="text-sm text-slate-400 ml-2">
                          /{service.period}
                        </span>
                      </div>

                      <div className="mb-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${service.color} border ${service.borderColor} shadow-lg`}>
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Key Benefits - Always Visible */}
                    <div className="mb-8">
                      <h5 className={`text-sm font-semibold ${service.textColor} mb-4`}>Key Benefits:</h5>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li 
                            key={benefitIndex} 
                            className="flex items-start gap-3"
                          >
                            <Check 
                              size={14} 
                              weight="bold" 
                              className={`${service.textColor} mt-0.5 flex-shrink-0`} 
                            />
                            <span className="text-slate-300 text-sm font-light leading-relaxed">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                        <Link 
                          href={
                            service.id === 'genetic' ? '/genetic-testing' :
                            service.id === 'hormone' ? '/hormone-replacement-therapy' :
                            '/biohacking-therapy'
                          }
                          className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 ${service.borderColor} ${service.textColor} hover:bg-white/5 transition-all duration-300 cursor-pointer font-medium`}
                        >
                          {service.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </motion.div>
              );
            })}
          </div>

          {/* Featured Services Carousel - Mobile */}
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {featuredServices.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = activeService === service.id;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgColor} backdrop-blur-sm border ${service.borderColor} p-6 fade-up transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 flex-shrink-0 w-80`}
                  >
                    {/* Animated Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-3 right-3 z-20">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold px-2 py-1 text-xs">
                          <Star size={12} weight="fill" className="mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <motion.div 
                          className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.color} border-2 ${service.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden`}
                          whileHover={{ rotate: 5 }}
                        >
                          <IconComponent size={28} weight="bold" className="text-white" />
                        </motion.div>
                        
                        <h4 className="text-xl font-bold text-white mb-2">
                          {service.name}
                        </h4>
                        
                        <p className={`text-xs font-medium text-white mb-2`}>
                          {service.subtitle}
                        </p>
                        
                        <p className="text-slate-200 text-xs mb-3 font-medium">
                          {service.description}
                        </p>
                        
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-white">
                            {service.price}
                          </span>
                          <span className="text-xs text-slate-400 ml-1">
                            /{service.period}
                          </span>
                        </div>

                        <div className="mb-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${service.color} border ${service.borderColor} shadow-lg`}>
                            {service.category}
                          </span>
                        </div>
                      </div>

                            {/* Key Benefits - Always Visible */}
                            <div className="mb-6">
                              <h5 className={`text-xs font-semibold ${service.textColor} mb-3`}>Key Benefits:</h5>
                              <ul className="space-y-1">
                                {service.benefits.map((benefit, benefitIndex) => (
                                  <li 
                                    key={benefitIndex} 
                                    className="flex items-start gap-2"
                                  >
                                    <Check 
                                      size={10} 
                                      weight="bold" 
                                      className={`${service.textColor} mt-0.5 flex-shrink-0`} 
                                    />
                                    <span className="text-slate-300 text-xs font-light leading-relaxed">
                                      {benefit}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                      {/* Learn More Link */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link 
                          href={
                            service.id === 'genetic' ? '/genetic-testing' :
                            service.id === 'hormone' ? '/hormone-replacement-therapy' :
                            '/biohacking-therapy'
                          }
                          className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-lg border-2 ${service.borderColor} ${service.textColor} hover:bg-white/5 transition-all duration-300 cursor-pointer font-medium text-sm`}
                        >
                          {service.cta}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </motion.div>
                    </div>

                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-3xl border-2 ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center fade-up"
        >
          <Link 
            href="/services" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-accent to-brand-primary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-accent/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <p className="text-slate-400 text-sm mt-4">
            Explore our complete portfolio of biohacking solutions
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesWeProvide;