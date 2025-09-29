import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, Heart, Shield, Users, Award, CheckCircle, XCircle, Zap, Brain, Lock } from 'lucide-react'

export default function SexualWellnessPage() {
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
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-brand-accent"
                                preset="fade-in-blur"
                                per="word"
                                speedReveal={1.2}
                                speedSegment={0.8}
                            >
                                Sexual Wellness
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
                                Restore Confidence, Intimacy, and Connection
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
                                Sexual health is one of the most important parts of overall well-being. When problems arise, it can feel frustrating, isolating, and damaging to even the strongest relationships. At Bio Hacking Luxe, we understand how deeply these challenges affect confidence, intimacy, and connection.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Problem Statement Section */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-12"
                                preset="fade"
                                per="word"
                            >
                                Issues such as erectile dysfunction in men or sexual discomfort in women are more common than most people realize, yet they&apos;re rarely talked about openly. That&apos;s why we go beyond temporary &quot;band-aid&quot; fixes and provide science-backed treatments that target the root cause of the issue.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Why Typical ED Medications Fall Short */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                Why Typical ED Medications Fall Short
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 max-w-3xl mx-auto"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Most standard ED medications work only as a quick fix and don&apos;t restore natural function
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-red-700/30">
                                <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-xl mb-6">
                                    <XCircle className="w-8 h-8 text-red-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Wrong Timing</h3>
                                <p className="text-slate-300">
                                    Can cause erections at inappropriate times, leading to embarrassment and discomfort.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-red-700/30">
                                <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-xl mb-6">
                                    <XCircle className="w-8 h-8 text-red-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Side Effects</h3>
                                <p className="text-slate-300">
                                    Often trigger headaches, dizziness, or other unwanted side effects that impact daily life.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-red-700/30">
                                <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-xl mb-6">
                                    <XCircle className="w-8 h-8 text-red-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Reduced Sensitivity</h3>
                                <p className="text-slate-300">
                                    Can reduce sensitivity and make climax more difficult, diminishing the overall experience.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <TextEffect 
                                as="p" 
                                className="text-xl text-red-300 font-semibold"
                                preset="fade"
                                per="word"
                                delay={0.2}
                            >
                                These solutions don&apos;t restore natural function—they only mask the problem.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Our Advanced Approach */}
                <section className="py-24 bg-slate-950">
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
                                We use doctor-prescribed peptide therapies and hormone-balancing protocols that work with your body instead of against it
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* For Men */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6">
                                    <Heart className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-white">For Men</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Restore Natural Function</h4>
                                            <p className="text-slate-300 text-sm">Our peptides help restore natural erectile function without dependency on pills.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Increase Sensitivity</h4>
                                            <p className="text-slate-300 text-sm">Enhance natural sensitivity and improve overall sexual experience.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Improve Climax</h4>
                                            <p className="text-slate-300 text-sm">Better climax quality without the side effects of traditional medications.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* For Women */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6">
                                    <Shield className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-white">For Women</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Address Age-Related Changes</h4>
                                            <p className="text-slate-300 text-sm">We address age-related changes that impact vaginal health and comfort.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Restore Comfort</h4>
                                            <p className="text-slate-300 text-sm">Restore comfort, sensation, and natural arousal for better intimacy.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Feel Like Yourself</h4>
                                            <p className="text-slate-300 text-sm">Helping you feel like yourself again with renewed confidence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Results Section */}
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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Heart className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Natural Response</h3>
                                <p className="text-slate-300">
                                    A healthier, more natural sexual response that works with your body&apos;s natural rhythms.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Stronger Intimacy</h3>
                                <p className="text-slate-300">
                                    Stronger intimacy and confidence in your relationship with improved connection.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Long-Term Solutions</h3>
                                <p className="text-slate-300">
                                    Long-term solutions, not just short-term fixes that address root causes.
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
                                    Doctor-prescribed treatments backed by scientific research and medical oversight.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Users className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Discreet & Confidential</h3>
                                <p className="text-slate-300">
                                    Complete privacy and confidentiality with discreet packaging and delivery.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Award className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Proven Results</h3>
                                <p className="text-slate-300">
                                    Years of experience helping clients restore confidence and intimacy naturally.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Lock className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Safe & Natural</h3>
                                <p className="text-slate-300">
                                    Natural approaches that work with your body&apos;s own healing mechanisms.
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
                                Reclaim Your Sexual Wellness
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-8"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                ✨ Sexual wellness is not something to be embarrassed about—it&apos;s something to reclaim. At Bio Hacking Luxe, we help you restore balance, confidence, and connection in the most natural way possible.
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
                                    <Link href="/peptide-therapy" className="cursor-pointer">
                                        Learn About Peptide Therapy
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
