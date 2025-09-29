import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, Heart, Shield, Users, Award, CheckCircle, Sun, Droplets, Sparkles, Dna } from 'lucide-react'
import Image from 'next/image'

export default function SkinRepairWellnessPage() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                {/* Hero Banner Section */}
                <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/TherapyBanner.png)'
                        }}
                    />
                    
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/50"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full">
                        <div className="flex items-center mb-8">
                            <Button 
                                asChild
                                variant="ghost" 
                                size="sm"
                                className="text-white hover:text-white/80 bg-white/10 hover:bg-white/20"
                            >
                                <Link href="/" className="flex items-center gap-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Home
                                </Link>
                            </Button>
                        </div>
                        
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
                                <TextEffect 
                                    as="span" 
                                    className="text-brand-accent inline"
                                    preset="fade-in-blur"
                                    per="word"
                                    speedReveal={1.2}
                                    speedSegment={0.8}
                                >
                                    Skin Repair
                                </TextEffect>
                                <TextEffect 
                                    as="span" 
                                    className="inline"
                                    preset="fade-in-blur"
                                    per="word"
                                    delay={0.2}
                                    speedReveal={1.2}
                                    speedSegment={0.8}
                                >
                                     & Wellness
                                </TextEffect>
                            </h1>
                            
                            <TextEffect 
                                as="p" 
                                className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 drop-shadow-lg"
                                preset="fade-in-blur"
                                per="word"
                                delay={0.2}
                                speedReveal={1.1}
                                speedSegment={0.7}
                            >
                                Doctor-Prescribed Solutions for Radiant, Healthy Skin
                            </TextEffect>

                            <TextEffect 
                                as="p" 
                                className="text-lg text-white leading-relaxed mb-12 drop-shadow-lg"
                                preset="fade-in-blur"
                                per="word"
                                delay={0.3}
                                speedReveal={1.1}
                                speedSegment={0.6}
                            >
                                Florida living is beautiful, but the constant sun exposure, humidity, and environmental stressors can be incredibly damaging to your skin. At Bio Hacking Luxe, we don&apos;t believe in quick fixes—we provide science-backed treatments that repair your skin from the inside out.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-8"
                                preset="fade"
                                per="word"
                            >
                                Over time, environmental damage can lead to premature aging, fine lines, uneven texture, and a loss of youthful vibrancy. We don&apos;t believe in quick fixes or over-the-counter creams that make empty promises. Every product we offer is doctor-prescribed and backed by science—nothing you&apos;ll find in a store.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Why We're Different */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Why We&apos;re Different
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <TextEffect 
                                    as="p" 
                                    className="text-lg text-slate-300 leading-relaxed mb-8"
                                    preset="fade"
                                    per="word"
                                >
                                    While injections like Botox® or Sculptra® may temporarily mask imperfections, they&apos;re only a band-aid solution. Our skin repair creams and injectable formulas target the root causes of skin aging by stimulating natural healing, collagen production, and cellular repair.
                                </TextEffect>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Shield className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Root Cause Treatment</h3>
                                            <p className="text-slate-300">Target the underlying causes of skin aging, not just symptoms.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Sparkles className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Natural Results</h3>
                                            <p className="text-slate-300">More realistic and natural results without the &quot;frozen&quot; look.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Heart className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Long-Lasting Effects</h3>
                                            <p className="text-slate-300">Stimulate natural processes for sustained, long-lasting improvements.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                                <h3 className="text-2xl font-bold mb-6 text-white">The Results Are Different</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Natural-looking results</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Long-lasting improvements</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Stimulates natural healing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Boosts collagen production</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Doctor-prescribed formulations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Treatment Options */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Treatment Options
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Droplets className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Doctor-Prescribed Skin Creams</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Advanced medical formulations designed to repair skin at the cellular level, improve elasticity, and restore a healthy, youthful glow.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Cellular-level repair</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Improved elasticity</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Youthful glow restoration</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Sparkles className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Injectable Versions</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    For clients seeking deeper restoration, we offer medical-grade injectable treatments that provide powerful results from the inside out.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Deeper penetration</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Medical-grade formulations</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Inside-out results</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Genetic Lab Test Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                The Bio Hacking Genetic Lab Test
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Precision for Your Skin
                            </TextEffect>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-12 text-center"
                                preset="fade"
                                per="word"
                                delay={0.2}
                            >
                                To take personalization even further, we offer a genetic lab test that analyzes your DNA to determine which skincare products and treatments will work best with your specific skin type.
                            </TextEffect>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Dna className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Genetic Analysis</h3>
                                            <p className="text-slate-300">Identifies genetic markers related to skin aging, elasticity, and repair.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Shield className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Personalized Selection</h3>
                                            <p className="text-slate-300">Guides us in choosing the most effective topical or injectable therapies.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Award className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">No Trial and Error</h3>
                                            <p className="text-slate-300">Eliminates trial-and-error skincare by giving us a personalized blueprint.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Sparkles className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Maximum Effectiveness</h3>
                                            <p className="text-slate-300">Ensures faster, longer-lasting results tailored to your biology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                The Benefits
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Sun className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Repairs Sun Damage</h3>
                                <p className="text-slate-300">
                                    Specifically addresses sun damage common in Florida climates and other sunny regions.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Heart className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Improves Skin Quality</h3>
                                <p className="text-slate-300">
                                    Enhances skin tone, texture, and firmness for a more youthful appearance.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Sparkles className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Stimulates Collagen</h3>
                                <p className="text-slate-300">
                                    Boosts collagen production for lasting anti-aging effects and improved elasticity.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Natural Results</h3>
                                <p className="text-slate-300">
                                    Provides natural results without the &quot;frozen&quot; look of traditional treatments.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Droplets className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Complete Solutions</h3>
                                <p className="text-slate-300">
                                    Offers both topical and injectable solutions for comprehensive skin care.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Dna className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Genetic Precision</h3>
                                <p className="text-slate-300">
                                    Backed by genetic precision testing for maximum effectiveness and customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center max-w-4xl mx-auto">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Transform Your Skin Today
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-8"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                ✨ Healthy, radiant skin starts with treating the cause, not covering the symptoms. At Bio Hacking Luxe, we give your skin the tools it needs to repair, rejuvenate, and thrive—so you can look as young as you feel.
                            </TextEffect>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    asChild
                                    size="lg" 
                                    className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <a href="https://tally.so/r/mY8b4J" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                        Complete Pre-Consultation Form
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                                
                                <Button 
                                    asChild
                                    size="lg" 
                                    variant="outline"
                                    className="rounded-full border-brand-accent/30 hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <Link href="/genetic-testing" className="cursor-pointer">
                                        Learn About Genetic Testing
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
