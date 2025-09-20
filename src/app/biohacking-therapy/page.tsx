import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, Dna, Brain, Heart, Shield, CheckCircle, Users, Award } from 'lucide-react'

export default function BiohackingTherapyPage() {
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
                                    className="inline"
                                    preset="fade-in-blur"
                                    per="word"
                                    speedReveal={1.2}
                                    speedSegment={0.8}
                                >
                                    Biohacking Through 
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
                                    Genetic Testing
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
                                Turn Back Your Calendar Age by 10 Years
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
                                At Bio Hacking Luxe, we&apos;re not guessing—we&apos;re customizing. Through our state-of-the-art partnerships with ClarityX®, we deliver three precise genetic test options that reveal exactly how your body processes medications, nutrients, and wellness strategies.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Genetic Testing Options */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Our Genetic Testing Options
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Choose the test that aligns with your health goals and optimization needs
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Mindwell */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                        <Brain className="w-8 h-8 text-brand-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">1. Mindwell®</h3>
                                    <p className="text-brand-accent font-semibold mb-4">Focused Mental Health Clarity</p>
                                    <ul className="space-y-3 text-slate-300">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                            <span>Analyzes how you genetically respond to 130+ FDA‑approved medications for mental health</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                            <span>Covers depression, anxiety, bipolar disorder, ADHD, OCD, PTSD, schizophrenia, and more</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                            <span>Creates personalized medication guidance with dosing recommendations</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Max Rx */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                        <Heart className="w-8 h-8 text-brand-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">2. Max Rx®</h3>
                                    <p className="text-brand-accent font-semibold mb-4">Whole-Body Medication Optimization</p>
                                    <ul className="space-y-3 text-slate-300">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                            <span>Evaluates your response to 275+ prescription medications</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                            <span>Covers 31 therapeutic categories from mental health to cardiology</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                            <span>Complete integrated outlook on medication efficacy and safety</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Thrive */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                        <Dna className="w-8 h-8 text-brand-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">3. Thrive</h3>
                                    <p className="text-brand-accent font-semibold mb-4">Nutritional Longevity Insights</p>
                                    <ul className="space-y-3 text-slate-300">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                            <span>Optimizes nutrition based on your genetic profile</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                            <span>Identifies optimal diet and supplement protocols</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                            <span>Supports longevity and peak performance goals</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                How It Works: Your Luxe Biohack Journey
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <span className="text-2xl font-bold text-brand-accent">1</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Choose Your Test</h3>
                                <p className="text-slate-300">
                                    Select Mindwell®, Max Rx®, or Thrive based on your specific health goals and optimization needs.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <span className="text-2xl font-bold text-brand-accent">2</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Order & Activate</h3>
                                <p className="text-slate-300">
                                    Order your at-home kit and activate it via our streamlined portal for easy tracking.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <span className="text-2xl font-bold text-brand-accent">3</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Sample Collection</h3>
                                <p className="text-slate-300">
                                    Provide a quick cheek swab and ship it back using our pre-paid envelope.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <span className="text-2xl font-bold text-brand-accent">4</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Get Your Results</h3>
                                <p className="text-slate-300">
                                    Receive detailed, actionable reports with support from our team and your healthcare provider.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <TextEffect 
                                    as="h2" 
                                    className="text-4xl md:text-5xl font-bold mb-6"
                                    preset="fade"
                                    per="word"
                                >
                                    Why Genetic Testing Matters
                                </TextEffect>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Shield className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Personalized Precision</h3>
                                            <p className="text-slate-300">No more trial and error—get treatments tailored to your unique genetic makeup.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Users className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Expert Support</h3>
                                            <p className="text-slate-300">Our team works with your healthcare provider to implement your personalized protocol.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Award className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Proven Results</h3>
                                            <p className="text-slate-300">Join thousands who have transformed their health through genetic optimization.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                                <h3 className="text-2xl font-bold mb-6 text-white">Your Path to Transformation</h3>
                                <div className="space-y-4">
                                    <TextEffect 
                                        as="p" 
                                        className="text-slate-300 leading-relaxed"
                                        preset="fade"
                                        per="word"
                                        delay={0.1}
                                    >
                                        Your path to feeling youthful, energized, and resilient starts here—with precision testing, luxury support, and your personal blueprint to outsmart aging and elevate performance.
                                    </TextEffect>
                                    <TextEffect 
                                        as="p" 
                                        className="text-brand-accent font-semibold text-lg"
                                        preset="fade"
                                        per="word"
                                        delay={0.2}
                                    >
                                        Let&apos;s turn that age marker back by ten years.
                                    </TextEffect>
                                </div>
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
                                Ready to Unlock Your Genetic Potential?
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-12"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Start your personalized biohacking journey with our state-of-the-art genetic testing.
                            </TextEffect>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    asChild
                                    size="lg" 
                                    className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <Link href="/genetic-testing" className="cursor-pointer">
                                        Choose Your Test
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                                
                                <Button 
                                    asChild
                                    size="lg" 
                                    variant="outline"
                                    className="rounded-full border-brand-accent/30 hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <Link href="/select-profile" className="cursor-pointer">
                                        Book Free Consultation
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
