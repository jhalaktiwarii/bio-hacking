'use client'

import { Heart, Envelope, MapPin, Globe, TestTube, Syringe, Brain, Crown } from '@phosphor-icons/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-light tracking-tight bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
                Bio Hacking Luxe
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-4 sm:mb-6">
              Turn back your calendar age by 10 years through precision genetic testing and personalized biohacking protocols.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-400">
              <Heart size={14} weight="fill" className="text-brand-accent sm:w-4 sm:h-4" />
              <span>Crafted for peak performance & longevity</span>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-light mb-4 sm:mb-6 text-white flex items-center gap-2">
              <TestTube size={18} weight="light" className="text-brand-accent" />
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Genetic Testing', href: '#pricing', icon: TestTube },
                { name: 'Medical Services', href: '#pricing', icon: Syringe },
                { name: 'Hormone Therapy', href: '#pricing', icon: Heart },
                { name: 'Peptide Therapy', href: '#pricing', icon: Syringe },
                { name: 'Injectable Vitamins', href: '#pricing', icon: Crown }
              ].map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm sm:text-base text-slate-300 hover:text-brand-accent transition-colors font-light flex items-center gap-2 group"
                    >
                      <IconComponent size={14} weight="light" className="text-brand-accent/60 group-hover:text-brand-accent transition-colors" />
                      {link.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-light mb-4 sm:mb-6 text-white flex items-center gap-2">
              <Brain size={18} weight="light" className="text-brand-primary" />
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Membership Plans', href: '#pricing' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Genetic Test Guide', href: '#' },
                { name: 'Wellness Blog', href: '#' },
                { name: 'Client Portal', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => item.href.startsWith('#') ? scrollToSection(item.href) : null}
                    className="text-sm sm:text-base text-slate-300 hover:text-brand-primary transition-colors font-light"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-light mb-4 sm:mb-6 text-white flex items-center gap-2">
              <Heart size={18} weight="light" className="text-brand-accent" />
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3 justify-center sm:justify-start">
                <Envelope size={16} weight="light" className="text-brand-accent mt-0.5 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">Consultation</p>
                  <a
                    href="mailto:hello@biohackingluxe.com"
                    className="text-sm sm:text-base text-slate-300 hover:text-brand-accent transition-colors"
                  >
                    hello@biohackingluxe.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-3 justify-center sm:justify-start">
                <Globe size={16} weight="light" className="text-brand-accent mt-0.5 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">Portal</p>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-slate-300 hover:text-brand-accent transition-colors"
                  >
                    Client Portal
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-3 justify-center sm:justify-start">
                <MapPin size={16} weight="light" className="text-brand-accent mt-0.5 sm:w-5 sm:h-5" />
                <div>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">Location</p>
                  <p className="text-sm sm:text-base text-slate-300">San Francisco, CA</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('#pricing')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
                >
                  <Crown size={16} weight="light" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-xs sm:text-sm text-slate-400 font-light text-center sm:text-left">
            © {currentYear} Bio Hacking Luxe. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8">
            {[
              'Privacy Policy',
              'Terms of Service',
              'HIPAA Compliance',
              'Medical Disclaimer'
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs sm:text-sm text-slate-400 hover:text-brand-accent transition-colors font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-brand-accent rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-brand-primary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 right-1/4 w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 left-1/3 w-1 h-1 bg-brand-primary rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-20 right-1/4 w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;