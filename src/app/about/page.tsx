    import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import {  ArrowLeft, Dna, Heart, Brain, Shield, Users, Award, Clock } from 'lucide-react'
 

export default function AboutPage() {
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
                            backgroundImage: 'url(/about.png)'
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
                                    className="inline"
                                    preset="fade-in-blur"
                                    per="word"
                                    speedReveal={1.2}
                                    speedSegment={0.8}
                                >
                                    About 
                                </TextEffect>
                                <TextEffect 
                                    as="span" 
                                    className="text-brand-accent inline"
                                    preset="fade-in-blur"
                                    per="word"
                                    delay={0.2}
                                    speedReveal={1.2}
                                    speedSegment={0.8}
                                >
                                    Bio Hacking Luxe
                                </TextEffect>
                            </h1>
                            
                            <TextEffect 
                                as="p" 
                                className="text-xl md:text-2xl text-white font-light leading-relaxed mb-12 drop-shadow-lg"
                                preset="fade-in-blur"
                                per="line"
                                delay={0.3}
                                speedReveal={1.1}
                                speedSegment={0.7}
                            >
                                Where cutting-edge science meets personalized wellness to transform your life
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <TextEffect 
                                    as="h2" 
                                    className="text-4xl md:text-5xl font-bold mb-6"
                                    preset="fade"
                                    per="word"
                                >
                                    Our Mission
                                </TextEffect>
                                <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-primary mx-auto rounded-full"></div>
                            </div>
                            
                            <div className="space-y-8">
                                <div className="text-center">
                                    <TextEffect 
                                        as="p" 
                                        className="text-2xl md:text-3xl text-brand-accent font-semibold mb-8"
                                        preset="fade"
                                        per="word"
                                        delay={0.1}
                                    >
                                        Turn back your calendar age by 10 years.
                                    </TextEffect>
                                </div>

                                <div className="space-y-6">
                                    <TextEffect 
                                        as="p" 
                                        className="text-lg text-slate-300 leading-relaxed"
                                        preset="fade-in-blur"
                                        per="line"
                                        delay={0.2}
                                        speedReveal={1.1}
                                        speedSegment={0.6}
                                    >
                                        We use state-of-the-art genetic testing and full-spectrum blood panels to uncover exactly what your body needs to perform at its best. By analyzing your genetics, we can determine which foods, medications, peptides, and hormonal balancing protocols are most effective for you.
                                    </TextEffect>

                                    <TextEffect 
                                        as="p" 
                                        className="text-lg text-slate-300 leading-relaxed"
                                        preset="fade-in-blur"
                                        per="line"
                                        delay={0.3}
                                        speedReveal={1.1}
                                        speedSegment={0.6}
                                    >
                                        We go beyond the basics—our approach also identifies the ideal diet, customized workout plans, optimal training times, and even your most efficient sleep regimen.
                                    </TextEffect>

                                    <TextEffect 
                                        as="p" 
                                        className="text-lg text-slate-300 leading-relaxed"
                                        preset="fade-in-blur"
                                        per="line"
                                        delay={0.4}
                                        speedReveal={1.1}
                                        speedSegment={0.6}
                                    >
                                        No other service in the world delivers this level of detail and precision. At Bio Hacking Luxe, you gain a personalized blueprint for peak performance, backed by science, and supported by our 24/7 concierge-style team.
                                    </TextEffect>

                                    <div className="text-center pt-8">
                                        <TextEffect 
                                            as="p" 
                                            className="text-xl text-brand-accent font-semibold italic"
                                            preset="fade"
                                            per="word"
                                            delay={0.5}
                                        >
                                            Because living younger, stronger, and sharper isn&apos;t just a dream—it&apos;s our promise.
                                        </TextEffect>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Offer Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                What We Offer
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Comprehensive biohacking solutions tailored to your unique genetic profile
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Genetic Testing */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Dna className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Genetic Testing</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Advanced DNA analysis to understand your unique genetic makeup and optimize your health protocols.
                                </p>
                            </div>

                            {/* Skin & Hair */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Heart className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Skin & Hair Wellness</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Doctor-prescribed treatments for skin repair and hair restoration using cutting-edge medical formulations.
                                </p>
                            </div>

                            {/* Cognitive Health */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Brain className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Cognitive & Mental Health</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Advanced therapies including Ketamine, NAD+, and neuroprotective treatments for peak mental performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Why Choose Bio Hacking Luxe?
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Medical-Grade Solutions</h3>
                                <p className="text-slate-300">
                                    All treatments are doctor-prescribed and backed by scientific research.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">24/7 Concierge Support</h3>
                                <p className="text-slate-300">
                                    Dedicated team providing personalized guidance throughout your journey.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Award className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Proven Results</h3>
                                <p className="text-slate-300">
                                    Over a decade of experience with countless successful transformations.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Clock className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Long-Term Solutions</h3>
                                <p className="text-slate-300">
                                    Sustainable protocols designed for lasting health and vitality.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
