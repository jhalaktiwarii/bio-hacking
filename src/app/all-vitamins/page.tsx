'use client'

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  ArrowLeft, 
  Brain, 
  Shield, 
  Activity, 
  Sun, 
  Droplets, 
  Heart,
  Star,
  Lock,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/core/text-effect';

export default function AllVitaminsPage() {
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

    return (
        <>
            <main className="min-h-screen bg-slate-950">
                {/* Hero Section */}
                <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
                    
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center max-w-4xl mx-auto">
                            <Link 
                                href="/injectable-vitamins"
                                className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-primary transition-colors duration-300 mb-8"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Featured Vitamins
                            </Link>
                            
                            <TextEffect 
                                as="h1" 
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                                preset="fade"
                                per="word"
                            >
                                All Injectable Vitamins & Therapies
                            </TextEffect>
                            
                            <TextEffect 
                                as="p" 
                                className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.2}
                            >
                                Our complete portfolio of medical-grade injectable vitamins and nutrient therapies for optimal health and performance.
                            </TextEffect>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-lg">
                                        <Star size={24} className="text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">8+</div>
                                    <div className="text-sm text-slate-400">Vitamin Options</div>
                                </div>
                                
                                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-lg">
                                        <Shield size={24} className="text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                                    <div className="text-sm text-slate-400">Absorption Rate</div>
                                </div>
                                
                                <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                                    <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-lg">
                                        <Users size={24} className="text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-sm text-slate-400">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Vitamins Grid */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* NAD+ */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Brain className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">NAD+ – Cellular Energy & Anti-Aging</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Fuels mitochondria for peak cellular performance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Slows down cognitive decline and supports brain health</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Increases focus, energy, and memory retention</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Promotes DNA repair and overall anti-aging benefits</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Methylene Blue */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Shield className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Methylene Blue – Cognitive Clarity & Neuroprotection</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Boosts mitochondrial function for sustained brain energy</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Improves memory, focus, and mental clarity</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Acts as a neuroprotective antioxidant, reducing oxidative stress</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Enhances mood and helps reduce brain fog</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Vitamin B12 */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Activity className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Vitamin B12 – Energy & Vitality</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Boosts natural energy levels and reduces fatigue</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Supports brain health and focus</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Enhances metabolism and red blood cell production</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Vitamin D3 */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Sun className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Vitamin D3 – Bone Health & Testosterone</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Natural testosterone booster</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Supports bone health and calcium absorption</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Enhances immune function and muscle strength</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Improves mood and cognitive function</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Vitamin C */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Droplets className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Vitamin C – Immune Support & Jet Lag Relief</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Eliminates jet lag</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Boosts immune system function</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Supports collagen production for healthy skin</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Acts as a powerful antioxidant</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Glutathione */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Heart className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Glutathione – Detox & Skin Brightening</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Master antioxidant that detoxifies the liver</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Improves skin tone and reduces oxidative stress</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Enhances immune function and cellular health</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Biotin */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Sun className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Biotin (B7) – Hair, Skin & Pregnancy Support</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Important for pregnant and breastfeeding mothers</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Promotes healthy hair, skin, and nails</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Supports nervous system function</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Aids in metabolism of fats and carbohydrates</span>
                                    </li>
                                </ul>
                            </div>

                            {/* MIC/B12 Fat Burner */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group md:col-span-2">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Activity className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">MIC/B12 Fat Burner – Weight Loss & Energy</h3>
                                <p className="text-slate-300 mb-4">Powerful fat-burning combination with muscle strength and recovery benefits.</p>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Muscle strength and recovery</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Enhanced fat burning and metabolism</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Improved energy levels and endurance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">Supports liver function and detoxification</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Injectable Vitamins */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Why Choose Injectable Vitamins?
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Activity className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Faster Results</h3>
                                <p className="text-slate-300">
                                    Faster, stronger results compared to oral supplements with immediate bloodstream absorption.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Lock className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">100% Absorption</h3>
                                <p className="text-slate-300">
                                    100% absorption into the bloodstream, bypassing digestive system limitations.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Professional Care</h3>
                                <p className="text-slate-300">
                                    Administered by experienced professionals in a luxury wellness setting.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center max-w-4xl mx-auto">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Ready to Optimize Your Health?
                            </TextEffect>
                            
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-12"
                                preset="fade"
                                per="word"
                                delay={0.2}
                            >
                                Book your consultation today and discover which injectable vitamin therapy is perfect for your health goals.
                            </TextEffect>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    asChild
                                    size="lg" 
                                    className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <a href="https://tally.so/r/mY8b4J" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                        Book Free Consultation
                                        <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                                    </a>
                                </Button>
                                
                                <Button 
                                    asChild
                                    size="lg" 
                                    variant="outline"
                                    className="rounded-full border-brand-accent/30 hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <Link href="/reorder-medication" className="cursor-pointer">
                                        Order Vitamins Now
                                    </Link>
                                </Button>
                            </div>

                            <div className="mt-8">
                                <TextEffect 
                                    as="p" 
                                    className="text-lg text-brand-accent font-semibold"
                                    preset="fade"
                                    per="word"
                                    delay={0.2}
                                >
                                    💉 Medical-grade injectable vitamins delivered directly to your door
                                </TextEffect>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
