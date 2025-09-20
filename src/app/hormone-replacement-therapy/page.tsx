import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, Heart, Shield, Users, Award, Clock, CheckCircle, Zap, Moon, Brain } from 'lucide-react'

export default function HormoneReplacementTherapyPage() {
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
                                    className="inline"
                                    preset="fade-in-blur"
                                    per="word"
                                    speedReveal={1.2}
                                    speedSegment={0.8}
                                >
                                    Hormone 
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
                                    Replacement Therapy
                                </TextEffect>
                            </h1>
                            
                            <TextEffect 
                                as="p" 
                                className="text-xl md:text-2xl text-white font-light leading-relaxed mb-12 drop-shadow-lg"
                                preset="fade-in-blur"
                                per="word"
                                delay={0.2}
                                speedReveal={1.1}
                                speedSegment={0.7}
                            >
                                Restore balance, reclaim energy, and transform your life with personalized hormone optimization
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-8"
                                preset="fade"
                                per="word"
                            >
                                At Bio Hacking Luxe, we know that restoring balance isn&apos;t just about hormones—it&apos;s about reclaiming energy, focus, vitality, and confidence in everyday life. With over a decade of experience, our team has guided countless clients through the transformative process of hormone optimization.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Personalized Care Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Personalized Care, Every Step of the Way
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
                                    From your very first consultation, we take time to carefully evaluate your unique biology, health history, and lifestyle. Every patient receives a fully customized strategy designed to align with their personal goals—whether that&apos;s improved energy, better sleep, sharper mental clarity, enhanced physical performance, or restored balance.
                                </TextEffect>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Heart className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Comprehensive Assessment</h3>
                                            <p className="text-slate-300">Detailed evaluation of your unique biology and health history.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Users className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Customized Strategy</h3>
                                            <p className="text-slate-300">Tailored protocols designed specifically for your goals and lifestyle.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Award className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Proven Results</h3>
                                            <p className="text-slate-300">Over a decade of successful hormone optimization experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                                <h3 className="text-2xl font-bold mb-6 text-white">What You Can Expect</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Improved energy levels</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Better sleep quality</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Sharper mental clarity</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Enhanced physical performance</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Restored hormonal balance</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Increased confidence and vitality</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lifestyle Integration Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Seamlessly Integrated Into Your Lifestyle
                            </TextEffect>
                        </div>

                        <div className="max-w-4xl mx-auto text-center">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-12"
                                preset="fade"
                                per="word"
                            >
                                HRT isn&apos;t a one-size-fits-all program. Our protocols are designed to be incorporated into your current routine so that the transition feels natural and sustainable. We walk with you through the entire process, adjusting your plan as needed to ensure you achieve both short-term improvements and long-lasting results.
                            </TextEffect>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                        <Clock className="w-8 h-8 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Natural Integration</h3>
                                    <p className="text-slate-300">
                                        Protocols designed to fit seamlessly into your existing lifestyle and routine.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                        <Shield className="w-8 h-8 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Sustainable Results</h3>
                                    <p className="text-slate-300">
                                        Long-term solutions that maintain your progress and optimize your health.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                        <Users className="w-8 h-8 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Ongoing Support</h3>
                                    <p className="text-slate-300">
                                        Continuous guidance and plan adjustments to ensure optimal results.
                                    </p>
                                </div>
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
                                    <Award className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Proven Expertise</h3>
                                <p className="text-slate-300">
                                    Over a decade of proven expertise in hormone optimization with countless successful transformations.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Concierge Guidance</h3>
                                <p className="text-slate-300">
                                    Hands-on, concierge guidance through every stage of treatment with personalized support.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Heart className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Tailored Strategies</h3>
                                <p className="text-slate-300">
                                    Tailored strategies that fit seamlessly into your lifestyle for maximum effectiveness.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Life-Changing Results</h3>
                                <p className="text-slate-300">
                                    A commitment to making this a life-changing decision with results that last forever.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Transformation Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center max-w-4xl mx-auto">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Begin Your Transformation
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-8"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                At Bio Hacking Luxe, Hormone Replacement Therapy is not just a treatment—it&apos;s the beginning of a new chapter in your health, performance, and longevity.
                            </TextEffect>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 mb-12">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                    <div>
                                        <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mx-auto mb-4">
                                            <Zap className="w-8 h-8 text-brand-accent" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-white">Energy & Vitality</h3>
                                        <p className="text-slate-300 text-sm">Restore your natural energy levels</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mx-auto mb-4">
                                            <Brain className="w-8 h-8 text-brand-accent" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-white">Mental Clarity</h3>
                                        <p className="text-slate-300 text-sm">Sharpen focus and cognitive function</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mx-auto mb-4">
                                            <Moon className="w-8 h-8 text-brand-accent" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-white">Quality Sleep</h3>
                                        <p className="text-slate-300 text-sm">Optimize your sleep patterns</p>
                                    </div>
                                </div>
                            </div>

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
                                    <Link href="/about" className="cursor-pointer">
                                        Learn More About Us
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
