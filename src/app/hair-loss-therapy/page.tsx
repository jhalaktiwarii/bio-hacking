import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, Heart, Shield, Users, Award, CheckCircle, Zap, Lock, Crown } from 'lucide-react'

export default function HairLossTherapyPage() {
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
                                    Hair Loss
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
                                Restore Your Confidence with Medical-Grade Solutions
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
                                Hair loss and thinning hair can be one of the most frustrating and embarrassing experiences—affecting confidence, self-image, and even relationships. For many, it feels like there are endless over-the-counter products promising results but never delivering real change.
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
                                The truth is, most store-bought medications simply aren&apos;t strong enough to penetrate the scalp and reach the root of the problem. Even worse, many of them come with unwanted side effects—leaving people discouraged and still searching for a solution.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Our Proprietary Solution */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Our Proprietary Solution
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                At Bio Hacking Luxe, we take a different approach with doctor-prescribed hair loss therapies built on proprietary formulations
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Zap className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Deep Penetration</h3>
                                <p className="text-slate-300">
                                    Penetrate deep into the skin and scalp for maximum effectiveness, reaching the root of the problem.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Crown className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Proven Results</h3>
                                <p className="text-slate-300">
                                    Deliver the results you want—thicker, stronger, fuller hair that looks and feels natural.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Shield className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">No Side Effects</h3>
                                <p className="text-slate-300">
                                    Avoid the side effects commonly associated with over-the-counter products and treatments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Designed for Both Men & Women */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Designed for Both Men & Women
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <TextEffect 
                                    as="p" 
                                    className="text-lg text-slate-300 leading-relaxed mb-8"
                                    preset="fade"
                                    per="word"
                                >
                                    Hair loss doesn&apos;t discriminate—and neither do our solutions. Our therapies are customized for both men and women, addressing the unique biological differences that affect hair growth and scalp health.
                                </TextEffect>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Users className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Gender-Specific Approach</h3>
                                            <p className="text-slate-300">Tailored treatments that address the unique needs of men and women.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Heart className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Biological Understanding</h3>
                                            <p className="text-slate-300">Addresses the unique biological differences that affect hair growth patterns.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Shield className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Scalp Health Focus</h3>
                                            <p className="text-slate-300">Comprehensive approach that optimizes overall scalp health and follicle strength.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                                <h3 className="text-2xl font-bold mb-6 text-white">Why Our Approach Works</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Proprietary Formulations</h4>
                                            <p className="text-slate-300 text-sm">Advanced medical-grade compounds not available in stores.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Doctor-Prescribed</h4>
                                            <p className="text-slate-300 text-sm">All treatments are medically supervised and prescribed by licensed professionals.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Patented Technology</h4>
                                            <p className="text-slate-300 text-sm">Utilizes cutting-edge patented technologies for maximum effectiveness.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Customized Protocols</h4>
                                            <p className="text-slate-300 text-sm">Personalized treatment plans based on individual needs and goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Results You Can Expect */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                The Results You Can Expect
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Crown className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Naturally Thicker Hair</h3>
                                <p className="text-slate-300">
                                    Achieve naturally thicker and stronger hair that grows healthier and more resilient.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Improved Scalp Health</h3>
                                <p className="text-slate-300">
                                    Enhanced scalp health and follicle strength for optimal hair growth conditions.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Heart className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Fuller Appearance</h3>
                                <p className="text-slate-300">
                                    Fuller hair that looks and feels natural, boosting your confidence and self-image.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Restored Confidence</h3>
                                <p className="text-slate-300">
                                    Restored confidence and comfort in your own skin with renewed self-assurance.
                                </p>
                            </div>
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
                                    <Lock className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Medical-Grade Solutions</h3>
                                <p className="text-slate-300">
                                    Proprietary formulations and patented technologies not available in stores.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Award className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Proven Effectiveness</h3>
                                <p className="text-slate-300">
                                    Doctor-prescribed treatments with proven track records of success.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Personalized Care</h3>
                                <p className="text-slate-300">
                                    Customized treatment plans designed specifically for your unique needs.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Safe & Natural</h3>
                                <p className="text-slate-300">
                                    Avoid unwanted side effects with our carefully formulated treatments.
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
                                Stop Settling for Empty Promises
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-8"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                ✨ Don&apos;t settle for products that promise and never deliver. With Bio Hacking Luxe, you&apos;ll finally have access to medical-grade, proprietary hair loss solutions that truly work.
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
                                    <Link href="/skin-repair-wellness" className="cursor-pointer">
                                        Learn About Skin Repair
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
