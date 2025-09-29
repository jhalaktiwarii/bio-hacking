import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, Zap, Heart, Brain, Shield, CheckCircle, Users, Award, Target, Activity } from 'lucide-react'

export default function PeptideTherapyPage() {
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
                            <TextEffect 
                                as="h1" 
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
                                preset="fade-in-blur"
                                per="word"
                                speedReveal={1.2}
                                speedSegment={0.8}
                            >
                                Peptide Therapy
                            </TextEffect>
                            
                            <TextEffect 
                                as="p" 
                                className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 drop-shadow-lg"
                                preset="fade-in-blur"
                                per="word"
                                delay={0.2}
                                speedReveal={1.1}
                                speedSegment={0.7}
                            >
                                Medical-Grade Weight Loss & Natural Signaling Power
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
                                At Bio Hacking Luxe, we believe in using the body&apos;s own natural signaling power to unlock transformation. Peptide Therapy is one of the most advanced tools in modern medicine, with medical-grade weight loss as our primary specialty, helping you optimize performance, restore balance, and achieve results that last.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* What Are Peptides Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                What Are Peptides?
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
                                    Peptides are short chains of amino acids that act as powerful messengers in the body, directing how cells and systems function. By supplementing with targeted peptides, we can stimulate healing, enhance performance, and correct imbalances at the deepest biological level.
                                </TextEffect>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Target className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Targeted Action</h3>
                                            <p className="text-slate-300">Precise targeting of specific cellular functions and pathways.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Shield className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Natural Signaling</h3>
                                            <p className="text-slate-300">Works with your body&apos;s own natural communication systems.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg">
                                            <Zap className="w-6 h-6 text-brand-accent" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-white">Deep Healing</h3>
                                            <p className="text-slate-300">Addresses root causes at the cellular and molecular level.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                                <h3 className="text-2xl font-bold mb-6 text-white">Why Peptides Work</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Stimulate natural healing processes</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Enhance cellular communication</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Optimize biological functions</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Provide lasting results</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                                        <span className="text-slate-300">Minimal side effects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Specialties Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Our Specialties
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                We offer a wide range of peptide therapies, carefully customized to your goals
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* GLP-1 Weight Loss */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Activity className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Medical-Grade Weight Loss</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Harness the proven power of GLP-1 medications for medical-grade weight loss, sustainable fat loss, appetite regulation, and metabolic reset. We specialize in guiding clients through safe, effective medical-grade weight management programs supported by medical oversight.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Medical-grade weight loss</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Sustainable fat loss</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Appetite regulation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Metabolic reset</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Performance & Strength */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Zap className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Performance & Strength</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Accelerate muscle recovery, increase lean muscle mass, and boost endurance with peptides that enhance physical strength and resilience.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Faster muscle recovery</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Increased muscle mass</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Enhanced endurance</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Cognitive Function */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Brain className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Cognitive Function & Focus</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Improve memory, clarity, and concentration with peptides designed to optimize brain performance and support long-term neurological health.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Enhanced memory</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Improved focus</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Better concentration</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Sexual Wellness */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Heart className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Sexual Wellness</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Restore vitality, increase libido, and improve sexual performance naturally through targeted peptide protocols.
                                </p>
                                <ul className="space-y-2 text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Increased libido</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Enhanced performance</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-accent" />
                                        <span className="text-sm">Restored vitality</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Regenerative Support */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group md:col-span-2">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Shield className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Regenerative Support</h3>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    Heal faster, reduce inflammation, and strengthen tendons, ligaments, and skin with cutting-edge regenerative peptides.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <ul className="space-y-2 text-slate-300">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-brand-accent" />
                                            <span className="text-sm">Faster healing</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-brand-accent" />
                                            <span className="text-sm">Reduced inflammation</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-slate-300">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-brand-accent" />
                                            <span className="text-sm">Stronger tendons</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-brand-accent" />
                                            <span className="text-sm">Improved skin health</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Bio Hacking Luxe */}
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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Target className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Customized Protocols</h3>
                                <p className="text-slate-300">
                                    Every therapy is tailored to your biology and lifestyle for maximum effectiveness and safety.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Full Concierge Support</h3>
                                <p className="text-slate-300">
                                    Our team walks with you through dosing, monitoring, and adjustments every step of the way.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Award className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Proven Experience</h3>
                                <p className="text-slate-300">
                                    We combine years of expertise with the latest breakthroughs in peptide science.
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
                                Unlock Your Highest Potential
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-12"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Peptide Therapy is more than treatment—it&apos;s a key to unlocking your body&apos;s highest potential. Whether your goal is medical-grade weight loss, looking younger, thinking sharper, performing stronger, or living healthier, Bio Hacking Luxe designs the roadmap to help you get there.
                            </TextEffect>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    asChild
                                    size="lg" 
                                    className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <a href="https://tally.so/r/3E9Y1X" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                        Complete Peptide Therapy Form
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                                
                                <Button 
                                    asChild
                                    size="lg" 
                                    variant="outline"
                                    className="rounded-full border-brand-accent/30 hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <a href="https://tally.so/r/3E9Y1X" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                        Book Free Consultation
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
