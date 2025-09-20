import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, Heart, Shield, Users, Award, CheckCircle, Zap, Target, Activity, Moon, Brain, Lock } from 'lucide-react'

export default function WeightLossTherapyPage() {
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
                            backgroundImage: 'url(/anotherbanner.png)'
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
                                    Weight Loss
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
                                     Therapy
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
                                Transform Your Life with Science-Driven Weight Management
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
                                For many, being overweight isn&apos;t just about the number on the scale—it&apos;s the feeling of frustration every time you look in the mirror and don&apos;t recognize the person staring back. It&apos;s the fatigue, the loss of confidence, and the endless cycle of diets and fads that never deliver lasting results.
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
                                At Bio Hacking Luxe, we understand how deeply this struggle affects your health, happiness, and quality of life. That&apos;s why we go beyond surface-level solutions with a comprehensive, science-driven approach to weight loss that addresses the root causes, not just the symptoms.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Our Advanced Approach */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Our Advanced Approach
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                A comprehensive 4-step process that combines cutting-edge science with personalized care
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Step 1: Blood Panel */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Target className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">1. Full Spectrum Blood Panel</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    We begin by performing a detailed blood analysis to uncover any hormonal imbalances or metabolic issues that may be contributing to weight gain. Understanding these factors allows us to target the root cause, not just the symptoms.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Comprehensive hormonal analysis</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Metabolic function assessment</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Root cause identification</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Step 2: GLP Peptides */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Activity className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">2. GLP Peptides for Weight Loss</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    We offer a range of doctor-prescribed GLP peptides clinically proven to regulate appetite, improve insulin sensitivity, and promote sustainable fat loss without crash diets.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Regulate appetite and cravings</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Improve insulin sensitivity</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Promote sustainable fat loss</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Step 3: Genetic Testing */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Brain className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">3. Genetic Testing for Nutrition & Ketosis</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Our genetic testing identifies how your body responds to different foods and pinpoints the diet that will put you in a perfect state of ketosis. This allows us to build a nutrition plan customized to your unique biology.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Personalized nutrition plan</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Optimal ketosis protocol</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Genetic-based diet optimization</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Step 4: Licensed Dietician */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Users className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">4. Licensed Dietician Support</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Our expert dietician will design a fully customized plan that includes prescription medications, a genetic-based diet plan, a workout regimen optimized for your body, and a personalized sleep schedule.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Prescription medications tailored to your needs</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Genetic-based diet plan</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Optimized workout regimen</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Personalized sleep schedule</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <TextEffect 
                                as="p" 
                                className="text-xl text-brand-accent font-semibold"
                                preset="fade"
                                per="word"
                                delay={0.2}
                            >
                                This integrated program ensures you maximize your ROI on your weight loss journey, achieving real and lasting transformation.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 bg-slate-950">
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
                                    <Target className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Root-Cause Approach</h3>
                                <p className="text-slate-300">
                                    A scientific, root-cause approach to weight loss that addresses underlying issues.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Personalized Therapies</h3>
                                <p className="text-slate-300">
                                    Personalized therapies that combine genetics, blood panels, and peptides.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Expert Support</h3>
                                <p className="text-slate-300">
                                    Concierge-level support from a licensed dietician throughout your journey.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Award className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Lasting Results</h3>
                                <p className="text-slate-300">
                                    Long-term results designed to last, not quick fixes that fade away.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What You Get */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                What You Get
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6">
                                    <Moon className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Sleep Optimization</h3>
                                <p className="text-slate-300">
                                    Personalized sleep schedule designed to accelerate your weight loss results and improve recovery.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6">
                                    <Activity className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Exercise Protocol</h3>
                                <p className="text-slate-300">
                                    Workout regimen optimized for your body type and genetic profile for maximum effectiveness.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6">
                                    <Lock className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Medical Oversight</h3>
                                <p className="text-slate-300">
                                    Doctor-prescribed medications and treatments with full medical supervision and support.
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
                                Stop Battling Your Weight
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-8"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                ✨ It&apos;s time to stop battling your weight and start transforming your life. At Bio Hacking Luxe, we&apos;ll create a customized blueprint that helps you lose fat, regain confidence, and feel better than ever.
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
                                    <Link href="/peptide-therapy" className="cursor-pointer">
                                        Learn About GLP-1 Peptides
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
                                    📞 Call us today to book your consultation and take the first step toward the body—and the life—you deserve.
                                </TextEffect>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
