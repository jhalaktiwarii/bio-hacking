import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, ArrowRight, Heart, Shield, Users, CheckCircle, Zap, Brain, Activity, Lock } from 'lucide-react'

export default function InjectableVitaminsPage() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative py-24 md:pb-32 lg:pb-36 lg:pt-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="flex items-center mb-8">
                            <Button 
                                asChild
                                variant="ghost" 
                                size="sm"
                                className="text-brand-accent hover:text-brand-accent/80"
                            >
                                <Link href="/" className="flex items-center gap-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Home
                                </Link>
                            </Button>
                        </div>
                        
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                                <TextEffect 
                                    as="span" 
                                    className="text-brand-accent inline"
                                    preset="fade"
                                    per="word"
                                >
                                    Injectable Vitamins
                                </TextEffect>
                            </h1>
                            
                            <TextEffect 
                                as="p" 
                                className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8"
                                preset="fade"
                                per="word"
                                delay={0.2}
                            >
                                Medical-Grade Nutrients for Maximum Absorption
                            </TextEffect>

                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-12"
                                preset="fade"
                                per="word"
                                delay={0.3}
                            >
                                At Bio Hacking Luxe, we go beyond traditional supplements with medical-grade injectable vitamins. This method delivers essential nutrients directly into your bloodstream for maximum absorption and immediate results—far more effective than pills or powders.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Why Injectable Vitamins */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Why Injectable Vitamins?
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Zap className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Faster Results</h3>
                                <p className="text-slate-300">
                                    Faster, stronger results compared to oral supplements with immediate bioavailability.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">100% Absorption</h3>
                                <p className="text-slate-300">
                                    100% absorption into the bloodstream, bypassing digestive system limitations.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Lock className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Customizable Protocols</h3>
                                <p className="text-slate-300">
                                    Customizable protocols based on your health goals and individual needs.
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

                {/* Our Top Injectable Vitamins */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Featured Injectable Vitamins
                            </TextEffect>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                                Our most popular medical-grade injectable vitamins for optimal health and performance
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                        </div>
                        
                        {/* View All Vitamins Link */}
                        <div className="text-center mt-12">
                            <Link 
                                href="/all-vitamins" 
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-accent to-brand-primary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-accent/25"
                            >
                                View All Injectable Vitamins
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            
                            <p className="text-slate-400 text-sm mt-4">
                                Explore our complete portfolio of medical-grade injectable vitamins
                            </p>
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
                                Elevate Your Health From the Inside Out
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-8"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                ✨ Explore our premium injectable vitamin and nutrient therapies and choose the formula that best fits your lifestyle and goals.
                            </TextEffect>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    asChild
                                    size="lg" 
                                    className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <Link href="/select-profile" className="cursor-pointer">
                                        Book Free Consultation
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </Link>
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
