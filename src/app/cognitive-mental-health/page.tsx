import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, Brain, Heart, Shield, Users, Award, CheckCircle, Zap, Target, Lock } from 'lucide-react'

export default function CognitiveMentalHealthPage() {
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
                                    Cognitive & 
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
                                    Mental Health
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
                                Unlock Peak Mental Performance & Emotional Balance
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
                                Your mind is your most powerful tool. When it&apos;s sharp, focused, and resilient, every area of life improves—from your career and performance to your relationships and overall happiness. At Bio Hacking Luxe, we specialize in cutting-edge cognitive therapies that go beyond temporary fixes.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-8"
                                preset="fade"
                                per="word"
                            >
                                We proudly offer doctor-prescribed treatments proven to enhance brain function, mood, and productivity. Our comprehensive approach combines advanced therapies with genetic testing to personalize your mental health optimization journey.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Treatment Options */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Our Advanced Therapies
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Ketamine Therapy */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Brain className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Ketamine Therapy – Reset & Restore</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Breaks through treatment-resistant depression and anxiety</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Provides rapid relief from mood disorders and PTSD</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Helps rewire neural pathways for long-term mental resilience</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Promotes emotional clarity and inner calm</span>
                                    </div>
                                </div>
                                <div className="bg-brand-accent/10 rounded-lg p-4">
                                    <p className="text-brand-accent font-semibold text-sm">
                                        <strong>Benefit:</strong> A renewed sense of mental freedom, lifting the fog of depression and stress to restore creativity, motivation, and joy.
                                    </p>
                                </div>
                            </div>

                            {/* NAD+ Therapy */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Zap className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">NAD+ Therapy – Cellular Energy & Brain Health</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Fuels mitochondrial function for optimal cellular energy</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Enhances focus, concentration, and memory</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Slows cognitive decline and supports anti-aging at the cellular level</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Improves mood and reduces mental fatigue</span>
                                    </div>
                                </div>
                                <div className="bg-brand-accent/10 rounded-lg p-4">
                                    <p className="text-brand-accent font-semibold text-sm">
                                        <strong>Benefit:</strong> All-day energy, sharper thinking, and improved cognitive endurance to maximize your productivity and longevity.
                                    </p>
                                </div>
                            </div>

                            {/* Oxytocin Therapy */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Heart className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Oxytocin Therapy – Connection & Emotional Balance</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Enhances feelings of trust, empathy, and bonding</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Reduces stress and supports emotional stability</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Improves social interactions and relationship satisfaction</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Can support sexual health and intimacy</span>
                                    </div>
                                </div>
                                <div className="bg-brand-accent/10 rounded-lg p-4">
                                    <p className="text-brand-accent font-semibold text-sm">
                                        <strong>Benefit:</strong> Strengthened connections and emotional well-being that make you more effective in both personal and professional life.
                                    </p>
                                </div>
                            </div>

                            {/* Methylene Blue */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Shield className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Methylene Blue – Neuroprotection & Focus</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Boosts mitochondrial function, supporting sustained brain energy</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Acts as a neuroprotective agent, reducing oxidative stress</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Improves memory retention and cognitive clarity</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">Enhances mood while lowering mental fatigue</span>
                                    </div>
                                </div>
                                <div className="bg-brand-accent/10 rounded-lg p-4">
                                    <p className="text-brand-accent font-semibold text-sm">
                                        <strong>Benefit:</strong> Increased productivity, mental stamina, and focus that elevate performance in every aspect of your life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Genetic Testing Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                The Bio Hacking Swab Kit
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Precision Medicine for Your Mind
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
                                    We take personalization one step further with our genetic swab kit, designed to unlock your body&apos;s unique code and guide your treatment plan with unmatched accuracy.
                                </TextEffect>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Target className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Medication Optimization</h3>
                                            <p className="text-slate-300">Reveals which prescription medications work best with your genetic profile.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Brain className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Genetic Mutations</h3>
                                            <p className="text-slate-300">Identifies genetic mutations linked to ADHD, ADD, and addiction tendencies.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Shield className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Precision Treatment</h3>
                                            <p className="text-slate-300">Ensures every therapy is tailored for maximum effectiveness and minimal side effects.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                                <h3 className="text-2xl font-bold mb-6 text-white">Your Genetic Blueprint</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Prevents trial-and-error prescribing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Gives us a blueprint for your brain chemistry</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Customizes treatment plans to your exact genetic needs</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Ensures faster, more sustainable results</span>
                                    </div>
                                </div>
                                
                                <div className="mt-6 bg-brand-accent/10 rounded-lg p-4">
                                    <p className="text-brand-accent font-semibold text-sm">
                                        <strong>Benefit:</strong> True cognitive optimization starts with knowing your DNA. The Bio Hacking Swab Kit allows us to customize your treatment plan to your exact genetic needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Why Choose Bio Hacking Luxe Cognitive Therapies?
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Lock className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Medical-Grade Solutions</h3>
                                <p className="text-slate-300">
                                    Doctor-prescribed, medical-grade solutions not available over the counter.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Award className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Science-Backed Results</h3>
                                <p className="text-slate-300">
                                    Proven science-backed results designed to optimize brain chemistry and function.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Target className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Genetic Precision</h3>
                                <p className="text-slate-300">
                                    Comprehensive genetic testing to personalize every treatment plan.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Concierge Support</h3>
                                <p className="text-slate-300">
                                    Concierge-level support to guide you step by step through your journey.
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
                                Transform Your Mental Performance
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-8"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                ✨ When your brain performs better, your entire life transforms. Whether you&apos;re seeking emotional healing, peak focus, or long-term brain health, Bio Hacking Luxe provides the tools to help you thrive.
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
                                    <Link href="/biohacking-therapy" className="cursor-pointer">
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
