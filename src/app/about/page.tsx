    import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import {  ArrowLeft, Dna, Heart, Brain, Shield, Users, Clock } from 'lucide-react'
 

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
                                    About Us – 
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
                                The only company in America offering 12-week programs fully customized to your genetic and hormonal results
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Our Philosophy Section */}
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
                                    Our Philosophy
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
                                        55% of people are underperforming.
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
                                        We believe in precision-driven approaches that go beyond generic health advice. Our philosophy centers on the understanding that every individual's body is unique, and true optimization requires a deep understanding of your genetic makeup, hormonal balance, and metabolic function.
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
                                        We don't just treat symptoms—we identify and address the root causes of health issues through comprehensive genetic testing, advanced blood analysis, and personalized treatment protocols that are specifically designed for your unique biology.
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
                                        Our approach combines cutting-edge science with personalized care, ensuring that every treatment, every supplement, and every lifestyle recommendation is perfectly tailored to help you achieve peak performance and optimal health.
                                    </TextEffect>

                                    <div className="text-center pt-8">
                                        <TextEffect 
                                            as="p" 
                                            className="text-xl text-brand-accent font-semibold italic"
                                            preset="fade"
                                            per="word"
                                            delay={0.5}
                                        >
                                            Because your genetics don't change—but your health can.
                                        </TextEffect>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Peak Performance Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Peak Performance
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                The only company in America offering 12-week programs fully customized to your genetic and hormonal results
                            </TextEffect>
                        </div>

                        <div className="max-w-4xl mx-auto text-center">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-8"
                                preset="fade"
                                per="line"
                                delay={0.2}
                            >
                                We are the only company in America offering 12-week programs fully customized to your genetic and hormonal results. Our comprehensive approach combines advanced genetic testing with personalized coaching to help you achieve peak performance in every aspect of your life.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                What We Do
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Genetic & Hormonal Analysis */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Dna className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Genetic & Hormonal Analysis</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Comprehensive genetic testing and full-spectrum blood panels to understand your unique biology and optimize your health protocols.
                                </p>
                            </div>

                            {/* Customized Nutrition */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Heart className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Customized Nutrition</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Personalized nutrition plans based on your genetic profile, metabolic function, and specific health goals for optimal performance.
                                </p>
                            </div>

                            {/* Optimized Fitness Plan */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Shield className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Optimized Fitness Plan</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Tailored workout routines and training schedules designed specifically for your genetic makeup and performance goals.
                                </p>
                            </div>

                            {/* Sleep Mastery */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Clock className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Sleep Mastery</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Personalized sleep optimization protocols to enhance recovery, cognitive function, and overall performance.
                                </p>
                            </div>

                            {/* Targeted Peptide & Hormonal Support */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group md:col-span-2">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Brain className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Targeted Peptide & Hormonal Support</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Advanced peptide therapy and hormone optimization treatments designed to address specific health concerns and enhance overall vitality.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mental Wellness Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Mental Wellness
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Diagnosing and treating mental disorders naturally in adults and children
                            </TextEffect>
                        </div>

                        <div className="max-w-4xl mx-auto text-center">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-8"
                                preset="fade"
                                per="line"
                                delay={0.2}
                            >
                                We specialize in diagnosing and treating mental disorders naturally in both adults and children. Our approach combines genetic testing with personalized treatment protocols to address the root causes of mental health issues, providing natural solutions that promote long-term wellness and optimal cognitive function.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Who We Serve Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Who We Serve
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Men, women, and parents seeking natural solutions for optimal health
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Men</h3>
                                <p className="text-slate-300">
                                    Optimize performance, confidence, and vitality with personalized genetic and hormonal protocols.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Heart className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Women</h3>
                                <p className="text-slate-300">
                                    Support for every stage of womanhood with customized health and wellness solutions.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Parents</h3>
                                <p className="text-slate-300">
                                    Science-based solutions for children's health, development, and long-term wellness.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Why Choose Us
                            </TextEffect>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 bg-brand-accent/20 rounded-full flex-shrink-0 mt-1">
                                        <span className="text-brand-accent font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Unique 12-Week Program</h3>
                                        <p className="text-slate-300">The only company in America offering 12-week programs fully customized to your genetic and hormonal results.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 bg-brand-accent/20 rounded-full flex-shrink-0 mt-1">
                                        <span className="text-brand-accent font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">24/7 Concierge Support</h3>
                                        <p className="text-slate-300">Round-the-clock personalized guidance and support throughout your entire journey.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 bg-brand-accent/20 rounded-full flex-shrink-0 mt-1">
                                        <span className="text-brand-accent font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Genetic Testing Expertise</h3>
                                        <p className="text-slate-300">Advanced genetic analysis with 1,000+ markers to understand your unique biology.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 bg-brand-accent/20 rounded-full flex-shrink-0 mt-1">
                                        <span className="text-brand-accent font-bold text-sm">4</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Comprehensive Blood Analysis</h3>
                                        <p className="text-slate-300">Full-spectrum blood panels to identify hormonal imbalances and optimize your health.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 bg-brand-accent/20 rounded-full flex-shrink-0 mt-1">
                                        <span className="text-brand-accent font-bold text-sm">5</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Personalized Treatment Protocols</h3>
                                        <p className="text-slate-300">Customized nutrition, fitness, and wellness plans based on your genetic profile.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 bg-brand-accent/20 rounded-full flex-shrink-0 mt-1">
                                        <span className="text-brand-accent font-bold text-sm">6</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Medical-Grade Solutions</h3>
                                        <p className="text-slate-300">Doctor-prescribed treatments and therapies backed by scientific research.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 bg-brand-accent/20 rounded-full flex-shrink-0 mt-1">
                                        <span className="text-brand-accent font-bold text-sm">7</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                                        <p className="text-slate-300">Over a decade of experience with countless successful transformations and satisfied clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Promise Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center max-w-4xl mx-auto">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Our Promise
                            </TextEffect>
                            
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-8"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                We promise to provide you with the most comprehensive, personalized, and effective health optimization program available. Our 12-week journey will transform not just your health, but your entire approach to wellness.
                            </TextEffect>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    asChild
                                    size="lg" 
                                    className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <a href="https://tally.so/r/mY8b4J" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                        Complete Pre-Consultation Form
                                    </a>
                                </Button>
                                
                                <Button 
                                    asChild
                                    size="lg" 
                                    variant="outline"
                                    className="rounded-full border-brand-accent/30 hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <Link href="/genetic-testing" className="cursor-pointer">
                                        Learn About Our Tests
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
