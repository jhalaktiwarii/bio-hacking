'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  Crown, 
  Heart, 
  Syringe, 
  Shield, 
  Sparkle, 
  ArrowRight, 
  Star, 
  TrendUp,
  Brain,
  TestTube,
  Scales,
  Pill,
  Dna
} from '@phosphor-icons/react';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesPage = () => {
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

  const allServices = [
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
      href: "/genetic-testing",
      popular: true,
      category: "Complete Health",
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
      features: [
        "GLP 1&2 weight loss medications",
        "Performance & strength enhancement",
        "Cognitive function optimization",
        "Sexual wellness support",
        "Regenerative healing protocols",
        "Customized dosing plans"
      ],
      href: "/peptide-therapy",
      popular: true,
      category: "Performance",
      type: "medical"
    },
    {
      id: 'hormone',
      name: "Hormone Replacement Therapy",
      description: "Restore balance and vitality",
      subtitle: "Hormonal Optimization",
      price: "Contact",
      period: "for pricing",
      icon: Heart,
      color: "from-brand-primary via-brand-primary-dark to-brand-dark",
      bgColor: "from-brand-primary/10 via-brand-primary-dark/5 to-brand-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      features: [
        "Personalized hormone optimization",
        "Comprehensive blood panel analysis",
        "Customized treatment protocols",
        "Concierge guidance & monitoring",
        "Lifestyle integration support",
        "Over 10 years of expertise"
      ],
      href: "/hormone-replacement-therapy",
      popular: false,
      category: "Hormonal Health",
      type: "medical"
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
      href: "/weight-loss-therapy",
      popular: false,
      category: "Metabolic Health",
      type: "medical"
    },
    {
      id: 'injectable',
      name: "Injectable Vitamins",
      description: "Medical-grade nutrient therapy",
      subtitle: "IV & Injection Therapy",
      price: "Contact",
      period: "for pricing",
      icon: Pill,
      color: "from-brand-primary via-brand-primary-dark to-brand-dark",
      bgColor: "from-brand-primary/10 via-brand-primary-dark/5 to-brand-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      features: [
        "High-dose vitamin injections",
        "IV nutrient therapy",
        "B12, B-complex, & vitamin D",
        "Glutathione & NAD+ therapy",
        "Customized nutrient protocols",
        "Immediate bioavailability"
      ],
      href: "/injectable-vitamins",
      popular: false,
      category: "Nutrient Therapy",
      type: "medical"
    },
    {
      id: 'sexual',
      name: "Sexual Wellness",
      description: "Restore confidence & intimacy",
      subtitle: "Intimate Health Optimization",
      price: "Contact",
      period: "for pricing",
      icon: Heart,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      features: [
        "Hormonal balance optimization",
        "Performance enhancement protocols",
        "Libido & energy restoration",
        "Relationship counseling support",
        "Discrete & confidential care",
        "Comprehensive testing panels"
      ],
      href: "/sexual-wellness",
      popular: false,
      category: "Intimate Health",
      type: "medical"
    },
    {
      id: 'skin',
      name: "Skin Repair & Wellness",
      description: "Doctor-prescribed skin solutions",
      subtitle: "Advanced Dermatology",
      price: "Contact",
      period: "for pricing",
      icon: Sparkle,
      color: "from-brand-primary via-brand-primary-dark to-brand-dark",
      bgColor: "from-brand-primary/10 via-brand-primary-dark/5 to-brand-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      features: [
        "Anti-aging treatment protocols",
        "Acne & skin condition management",
        "Collagen stimulation therapy",
        "Medical-grade skincare products",
        "Laser & light therapies",
        "Personalized treatment plans"
      ],
      href: "/skin-repair-wellness",
      popular: false,
      category: "Dermatology",
      type: "medical"
    },
    {
      id: 'hair',
      name: "Hair Loss Therapy",
      description: "Proprietary hair restoration",
      subtitle: "Advanced Hair Restoration",
      price: "Contact",
      period: "for pricing",
      icon: Crown,
      color: "from-brand-accent via-brand-primary to-brand-primary-dark",
      bgColor: "from-brand-accent/10 via-brand-primary/5 to-brand-primary-dark/10",
      borderColor: "border-brand-accent/30",
      textColor: "text-brand-accent",
      features: [
        "PRP hair restoration therapy",
        "Advanced growth protocols",
        "Hormonal hair loss treatment",
        "Scalp health optimization",
        "Nutritional support protocols",
        "Proven restoration methods"
      ],
      href: "/hair-loss-therapy",
      popular: false,
      category: "Hair Restoration",
      type: "medical"
    },
    {
      id: 'cognitive',
      name: "Cognitive Mental Health",
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
        "Cognitive enhancement protocols",
        "Memory & focus optimization",
        "Stress & anxiety management",
        "Sleep quality improvement",
        "Neuroprotective therapies",
        "Mental clarity enhancement"
      ],
      href: "/cognitive-mental-health",
      popular: false,
      category: "Brain Health",
      type: "medical"
    },
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
      href: "/genetic-testing",
      popular: false,
      category: "Mental Health",
      type: "genetic"
    },
    {
      id: 'reorder',
      name: "Reorder Medication",
      description: "Convenient prescription refills",
      subtitle: "Prescription Management",
      price: "Contact",
      period: "for pricing",
      icon: Pill,
      color: "from-brand-primary via-brand-primary-dark to-brand-dark",
      bgColor: "from-brand-primary/10 via-brand-primary-dark/5 to-brand-dark/10",
      borderColor: "border-brand-primary/30",
      textColor: "text-brand-primary",
      features: [
        "Easy prescription refills",
        "Automatic delivery scheduling",
        "Insurance coordination",
        "Medication management support",
        "24/7 pharmacy access",
        "Convenient home delivery"
      ],
      href: "/reorder-medication",
      popular: false,
      category: "Pharmacy Services",
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
    <section ref={sectionRef} className="py-24 lg:py-32 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
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
            <span>Complete Biohacking Portfolio</span>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
              <Shield size={16} weight="fill" className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-brand-light to-brand-light-gray bg-clip-text text-transparent leading-tight">
            Our <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Comprehensive biohacking solutions designed to 
            <span className="text-brand-accent font-semibold mx-1">turn back your calendar age by 10 years</span>. 
            Choose from our complete range of genetic testing and medical therapies.
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

        {/* Services Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeService === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgColor} backdrop-blur-sm border ${service.borderColor} p-8 fade-up transition-all duration-500 cursor-pointer ${
                    isActive ? 'ring-2 ring-blue-400/50 shadow-2xl shadow-blue-500/20' : ''
                  } hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10`}
                  onClick={() => setActiveService(isActive ? null : service.id)}
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
                    <div className="text-center mb-6">
                      <motion.div 
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} border-2 ${service.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent size={28} weight="bold" className="text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.name}
                      </h3>
                      
                      <p className={`text-sm font-medium ${service.textColor} mb-2`}>
                        {service.subtitle}
                      </p>
                      
                      <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-white">
                          {service.price}
                        </span>
                        <span className="text-sm text-slate-400 ml-2">
                          /{service.period}
                        </span>
                      </div>

                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${service.color} border ${service.borderColor} shadow-lg`}>
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
                          <h4 className={`text-sm font-semibold ${service.textColor} mb-3`}>Key Features:</h4>
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

                    {/* Learn More Link */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href={service.href}
                        className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl border-2 ${service.borderColor} ${service.textColor} hover:bg-white/5 transition-all duration-300 cursor-pointer font-medium text-sm`}
                      >
                        Learn More
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
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 fade-up"
        >
          <a 
            href="https://tally.so/r/mY8b4J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-accent to-brand-primary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-accent/25"
          >
            Complete Pre-Consultation Form
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <p className="text-slate-400 text-sm mt-4">
            Schedule your consultation and begin your biohacking journey
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesPage;
