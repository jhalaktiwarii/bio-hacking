'use client'

import { useEffect, useRef, useState } from 'react';
import { Check, Crown, TestTube, Heart, Brain, Syringe, Shield, Sparkle, Scales, Pill, ArrowRight, Star, Users, ShieldCheck, Play, TrendUp } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
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

  const geneticTests = [
    {
      id: 'mindwell',
      name: "Mindwell®",
      description: "Mental Health Focus",
      subtitle: "Precision Mental Health",
      price: "Contact",
      period: "for pricing",
      icon: Brain,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      features: [
        "130+ FDA-approved mental health medications",
        "Depression, anxiety, bipolar analysis",
        "ADHD, OCD, PTSD treatment guidance",
        "Personalized medication recommendations",
        "MTHFR variant considerations",
        "Current medication analysis"
      ],
      cta: "Get Started",
      popular: false,
      category: "Mental Health"
    },
    {
      id: 'maxrx',
      name: "Max Rx®",
      description: "Complete Medication Optimization",
      subtitle: "Comprehensive Health Analysis",
      price: "Contact",
      period: "for pricing",
      icon: Crown,
      color: "from-brand-primary via-brand-primary-dark to-brand-dark",
      bgColor: "from-brand-primary/10 via-brand-primary-dark/5 to-brand-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      features: [
        "275+ prescription medications tested",
        "31 therapeutic categories covered",
        "Mental health to cardiology analysis",
        "Pain management optimization",
        "Endocrinology & gastroenterology",
        "Complete integrated health outlook",
        "24/7 concierge support"
      ],
      cta: "Get Started",
      popular: true,
      category: "Complete Health"
    },
    {
      id: 'thrive',
      name: "Thrive",
      description: "Nutritional Longevity",
      subtitle: "Optimal Nutrition",
      price: "Contact",
      period: "for pricing",
      icon: TestTube,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      features: [
        "Nutritional genetic and hormonal analysis",
        "Personalized diet recommendations",
        "Metabolic optimization",
        "Longevity insights",
        "Customized supplement protocols",
        "Lifestyle optimization",
        "Concierge nutrition support"
      ],
      cta: "Get Started",
      popular: false,
      category: "Nutrition"
    }
  ];

  const medicalServices = [
    {
      id: 'hormone',
      name: "Hormone Replacement Therapy",
      description: "Restore balance and vitality",
      subtitle: "Hormonal Optimization",
      price: "Contact",
      period: "for pricing",
      icon: Heart,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      features: [
        "Personalized hormone optimization",
        "Comprehensive blood panel analysis",
        "Customized treatment protocols",
        "Concierge guidance & monitoring",
        "Lifestyle integration support",
        "Over 10 years of expertise"
      ],
      cta: "Get Started",
      popular: false,
      category: "Hormonal Health"
    },
    {
      id: 'peptide',
      name: "Peptide Therapy",
      description: "Advanced cellular optimization",
      subtitle: "Cellular Enhancement",
      price: "Contact",
      period: "for pricing",
      icon: Syringe,
      color: "from-brand-primary via-brand-primary-dark to-brand-dark",
      bgColor: "from-brand-primary/10 via-brand-primary-dark/5 to-brand-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      features: [
        "GLP 1&2 weight loss medications",
        "Performance & strength enhancement",
        "Cognitive function optimization",
        "Sexual wellness support",
        "Regenerative healing protocols",
        "Customized dosing plans"
      ],
      cta: "Get Started",
      popular: true,
      category: "Performance"
    },
    {
      id: 'sexual',
      name: "Sexual Wellness",
      description: "Restore confidence & intimacy for both men and women",
      subtitle: "Intimate Health",
      price: "Contact",
      period: "for pricing",
      icon: Shield,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      features: [
        "Doctor-prescribed peptide therapies",
        "Hormone-balancing protocols",
        "Natural function restoration",
        "Enhanced sensitivity & performance",
        "Long-term solutions, not quick fixes",
        "Discreet, professional care"
      ],
      cta: "Get Started",
      popular: false,
      category: "Wellness"
    },
    {
      id: 'skin',
      name: "Skin Repair & Wellness",
      description: "Doctor-prescribed skin solutions with anti-aging",
      subtitle: "Skin Regeneration",
      price: "Contact",
      period: "for pricing",
      icon: Sparkle,
      color: "from-brand-primary via-brand-primary-dark to-brand-dark",
      bgColor: "from-brand-primary/10 via-brand-primary-dark/5 to-brand-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      features: [
        "Medical-grade skin creams",
        "Injectable restoration treatments",
        "Genetic skin analysis",
        "Sun damage repair",
        "Collagen stimulation",
        "Anti-aging treatments",
        "Natural, long-lasting results"
      ],
      cta: "Get Started",
      popular: false,
      category: "Aesthetics"
    },
    {
      id: 'hair',
      name: "Hair Loss Therapy",
      description: "Proprietary hair restoration",
      subtitle: "Hair Regeneration",
      price: "Contact",
      period: "for pricing",
      icon: Crown,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      features: [
        "Doctor-prescribed formulations",
        "Proprietary patented technology",
        "Deep scalp penetration",
        "For both men & women",
        "No side effects",
        "Thicker, stronger, fuller hair"
      ],
      cta: "Get Started",
      popular: false,
      category: "Restoration"
    },
    {
      id: 'cognitive',
      name: "Cognitive & Mental Health",
      description: "Peak mental performance",
      subtitle: "Brain Optimization",
      price: "Contact",
      period: "for pricing",
      icon: Brain,
      color: "from-brand-primary via-brand-primary-dark to-brand-dark",
      bgColor: "from-brand-primary/10 via-brand-primary-dark/5 to-brand-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      features: [
        "Ketamine therapy for depression",
        "NAD+ cellular energy boost",
        "Oxytocin emotional balance",
        "Methylene Blue neuroprotection",
        "Genetic swab kit analysis",
        "Personalized treatment plans"
      ],
      cta: "Get Started",
      popular: false,
      category: "Mental Health"
    },
    {
      id: 'weight',
      name: "Weight Loss Therapy",
      description: "Scientific weight management",
      subtitle: "Metabolic Optimization",
      price: "Contact",
      period: "for pricing",
      icon: Scales,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      features: [
        "Full spectrum blood panel",
        "GLP 1&2 peptide protocols",
        "Genetic nutrition testing",
        "Licensed dietician support",
        "Customized diet & workout plans",
        "Personalized sleep optimization"
      ],
      cta: "Get Started",
      popular: false,
      category: "Metabolic Health"
    },
    {
      id: 'injectable',
      name: "Injectable Vitamins",
      description: "Medical-grade nutrient therapy",
      subtitle: "Nutrient Optimization",
      price: "Contact",
      period: "for pricing",
      icon: Pill,
      color: "from-brand-primary via-brand-primary-dark to-brand-dark",
      bgColor: "from-brand-primary/10 via-brand-primary-dark/5 to-brand-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      features: [
        "NAD+ cellular energy enhancement",
        "Methylene Blue cognitive clarity",
        "Vitamin B12 energy boost",
        "Vitamin D3 testosterone support",
        "Glutathione detox & skin brightening",
        "100% absorption rate"
      ],
      cta: "Get Started",
      popular: false,
      category: "Nutrition"
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
              <ShieldCheck size={16} weight="fill" className="text-white" />
            </div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-brand-light to-brand-light-gray bg-clip-text text-transparent leading-tight">
            Services <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">We Provide</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Comprehensive biohacking solutions designed to 
            <span className="text-brand-accent font-semibold mx-1">turn back your calendar age by 10 years</span>. 
            Choose from our genetic testing options or medical therapies.
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

        {/* Genetic Testing Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-24 fade-up"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 border border-brand-accent/20 text-brand-accent text-sm font-medium mb-6">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
                <TestTube size={14} weight="fill" className="text-white" />
              </div>
              <span>ClarityX® Partnerships</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Genetic Testing <span className="text-brand-accent">Options</span>
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Through our ClarityX® partnerships, we deliver three precise genetic test options that reveal exactly how your body processes medications, nutrients, and wellness strategies.
            </p>
          </div>

          {/* Genetic Tests Grid - Desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {geneticTests.map((test, index) => {
              const IconComponent = test.icon;
              const isActive = activeService === test.id;
              
              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${test.bgColor} backdrop-blur-sm border ${test.borderColor} p-8 fade-up transition-all duration-500 cursor-pointer ${
                    isActive ? 'ring-2 ring-blue-400/50 shadow-2xl shadow-blue-500/20' : ''
                  } hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10`}
                  onClick={() => setActiveService(isActive ? null : test.id)}
                >
                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${test.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Popular Badge */}
                  {test.popular && (
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
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${test.color} border-2 ${test.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent size={36} weight="bold" className="text-white" />
                      </motion.div>
                      
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {test.name}
                      </h4>
                      
                      <p className={`text-sm font-medium text-white mb-2`}>
                        {test.subtitle}
                      </p>
                      
                      <p className="text-slate-200 text-sm mb-4 font-medium">
                        {test.description}
                      </p>
                      
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-white">
                          {test.price}
                        </span>
                        <span className="text-sm text-slate-400 ml-2">
                          /{test.period}
                        </span>
                      </div>

                      <div className="mb-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${test.color} border ${test.borderColor} shadow-lg`}>
                          {test.category}
                        </span>
                      </div>
                    </div>

                    {/* Features - Expandable */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-8"
                        >
                          <h5 className={`text-sm font-semibold ${test.textColor} mb-4`}>Key Features:</h5>
                          <ul className="space-y-3">
                            {test.features.map((feature, featureIndex) => (
                              <motion.li 
                                key={featureIndex} 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <Check 
                                  size={16} 
                                  weight="bold" 
                                  className={`${test.textColor} mt-0.5 flex-shrink-0`} 
                                />
                                <span className="text-slate-300 text-sm font-light leading-relaxed">
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${test.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 ${
                          isActive ? 'shadow-lg shadow-blue-500/25' : ''
                        }`}
                      >
                        {test.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 ${test.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </motion.div>
              );
            })}
          </div>

          {/* Genetic Tests Carousel - Mobile */}
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {geneticTests.map((test, index) => {
                const IconComponent = test.icon;
                const isActive = activeService === test.id;
                
                return (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${test.bgColor} backdrop-blur-sm border ${test.borderColor} p-6 fade-up transition-all duration-500 cursor-pointer ${
                      isActive ? 'ring-2 ring-blue-400/50 shadow-2xl shadow-blue-500/20' : ''
                    } hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 flex-shrink-0 w-80`}
                    onClick={() => setActiveService(isActive ? null : test.id)}
                  >
                    {/* Animated Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${test.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Popular Badge */}
                    {test.popular && (
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
                          className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${test.color} border-2 ${test.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          whileHover={{ rotate: 5 }}
                        >
                          <IconComponent size={28} weight="bold" className="text-white" />
                        </motion.div>
                        
                        <h4 className="text-xl font-bold text-white mb-2">
                          {test.name}
                        </h4>
                        
                        <p className={`text-xs font-medium text-white mb-2`}>
                          {test.subtitle}
                        </p>
                        
                        <p className="text-slate-200 text-xs mb-3 font-medium">
                          {test.description}
                        </p>
                        
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-white">
                            {test.price}
                          </span>
                          <span className="text-xs text-slate-400 ml-1">
                            /{test.period}
                          </span>
                        </div>

                        <div className="mb-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${test.color} border ${test.borderColor} shadow-lg`}>
                            {test.category}
                          </span>
                        </div>
                      </div>

                      {/* Features - Expandable */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6"
                          >
                            <h5 className={`text-xs font-semibold ${test.textColor} mb-3`}>Key Features:</h5>
                            <ul className="space-y-2">
                              {test.features.map((feature, featureIndex) => (
                                <motion.li 
                                  key={featureIndex} 
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.05 }}
                                  className="flex items-start gap-2"
                                >
                                  <Check 
                                    size={12} 
                                    weight="bold" 
                                    className={`${test.textColor} mt-0.5 flex-shrink-0`} 
                                  />
                                  <span className="text-slate-300 text-xs font-light leading-relaxed">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Action Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          size="sm"
                          className={`w-full bg-gradient-to-r ${test.color} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300 ${
                            isActive ? 'shadow-lg shadow-blue-500/25' : ''
                          }`}
                        >
                          {test.cta}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </motion.div>
                    </div>

                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-3xl border-2 ${test.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Medical Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="fade-up"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-primary/20 text-brand-primary text-sm font-medium mb-6">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
                <Syringe size={14} weight="fill" className="text-white" />
              </div>
              <span>Medical Services & Therapies</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Medical Services & <span className="text-brand-accent">Therapies</span>
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Doctor-prescribed treatments and therapies designed to optimize your health, performance, and longevity—improve your daily quality of life.
            </p>
          </div>

          {/* Medical Services Grid - Desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {medicalServices.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeService === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.bgColor} backdrop-blur-sm border ${service.borderColor} p-6 fade-up transition-all duration-500 cursor-pointer ${
                    isActive ? 'ring-2 ring-purple-400/50 shadow-2xl shadow-purple-500/20' : ''
                  } hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10`}
                  onClick={() => setActiveService(isActive ? null : service.id)}
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
                        className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.color} border-2 ${service.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent size={28} weight="bold" className="text-white" />
                      </motion.div>
                      
                      <h4 className="text-lg font-bold text-white mb-2">
                        {service.name}
                      </h4>
                      
                      <p className={`text-xs font-medium text-white mb-2`}>
                        {service.subtitle}
                      </p>
                      
                      <p className="text-slate-200 text-xs mb-4 leading-relaxed font-medium">
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

                    {/* Features - Expandable */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6"
                        >
                          <h5 className={`text-xs font-semibold ${service.textColor} mb-3`}>Key Features:</h5>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <motion.li 
                                key={featureIndex} 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.05 }}
                                className="flex items-start gap-2"
                              >
                                <Check 
                                  size={12} 
                                  weight="bold" 
                                  className={`${service.textColor} mt-0.5 flex-shrink-0`} 
                                />
                                <span className="text-slate-300 text-xs font-light leading-relaxed">
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        size="sm"
                        className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300 ${
                          isActive ? 'shadow-lg shadow-purple-500/25' : ''
                        }`}
                      >
                        {service.cta}
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </motion.div>
              );
            })}
          </div>

          {/* Medical Services Carousel - Mobile */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {medicalServices.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = activeService === service.id;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.6 }}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.bgColor} backdrop-blur-sm border ${service.borderColor} p-4 fade-up transition-all duration-500 cursor-pointer ${
                      isActive ? 'ring-2 ring-purple-400/50 shadow-2xl shadow-purple-500/20' : ''
                    } hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 flex-shrink-0 w-72`}
                    onClick={() => setActiveService(isActive ? null : service.id)}
                  >
                    {/* Animated Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-2 right-2 z-20">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold px-2 py-1 text-xs">
                          <Star size={10} weight="fill" className="mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="text-center mb-4">
                        <motion.div 
                          className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${service.color} border-2 ${service.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          whileHover={{ rotate: 5 }}
                        >
                          <IconComponent size={20} weight="bold" className="text-white" />
                        </motion.div>
                        
                        <h4 className="text-base font-bold text-white mb-1">
                          {service.name}
                        </h4>
                        
                        <p className={`text-xs font-medium text-white mb-1`}>
                          {service.subtitle}
                        </p>
                        
                        <p className="text-slate-200 text-xs mb-3 leading-relaxed font-medium">
                          {service.description}
                        </p>
                        
                        <div className="mb-3">
                          <span className="text-lg font-bold text-white">
                            {service.price}
                          </span>
                          <span className="text-xs text-slate-400 ml-1">
                            /{service.period}
                          </span>
                        </div>

                        <div className="mb-3">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${service.color} border ${service.borderColor} shadow-lg`}>
                            {service.category}
                          </span>
                        </div>
                      </div>

                      {/* Features - Expandable */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4"
                          >
                            <h5 className={`text-xs font-semibold ${service.textColor} mb-2`}>Key Features:</h5>
                            <ul className="space-y-1">
                              {service.features.map((feature, featureIndex) => (
                                <motion.li 
                                  key={featureIndex} 
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.03 }}
                                  className="flex items-start gap-2"
                                >
                                  <Check 
                                    size={10} 
                                    weight="bold" 
                                    className={`${service.textColor} mt-0.5 flex-shrink-0`} 
                                  />
                                  <span className="text-slate-300 text-xs font-light leading-relaxed">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Action Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          size="sm"
                          className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300 ${
                            isActive ? 'shadow-lg shadow-purple-500/25' : ''
                          } text-xs`}
                        >
                          {service.cta}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </motion.div>
                    </div>

                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-2xl border-2 ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-accent/10 via-brand-primary/10 to-brand-primary-dark/10 border border-brand-accent/20 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,200,237,0.1),transparent_70%)]" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 border border-brand-accent/30 text-brand-accent mb-8">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-sm font-medium">
                    30-Day Money-Back Guarantee • Cancel Anytime • No Hidden Fees
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Turn Back Your Calendar Age by 10 Years?
                </h3>
                
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Schedule your consultation with our medical professionals to create a personalized treatment plan tailored to your unique needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-8 py-4 rounded-full cursor-pointer h-14 min-h-[3.5rem]">
                      <Play size={20} className="mr-2" />
                      Schedule Consultation
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-brand-accent/30 hover:bg-brand-accent/10 text-white font-semibold px-8 py-4 rounded-full cursor-pointer h-14 min-h-[3.5rem]">
                      <Users size={20} className="mr-2" />
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesWeProvide;   