import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/ui/text-effect'
 import PricingSection from '@/components/pricing-section'
import MedicalServices from '@/components/medical-services'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Turn Back Your Calendar Age by 10 Years</h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg">At Bio Hacking Luxe, we use state-of-the-art genetic testing and full-spectrum blood panels to uncover exactly what your body needs to perform at its best.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Book Free Trial</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base text-foreground hover:bg-zinc-950/5 dark:hover:bg-white/5 hover:text-foreground">
                                        <Link href="#link">
                                            <span className="text-nowrap">Learn More</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                                src="./bg.mp4">
                                <p>Your browser doesn&apos;t support HTML5 video.</p>
                            </video>
                        </div>
                    </div>
                </section>
                
                 <MedicalServices />
                
                 <section className="py-24 bg-background">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                How Bio Hacking Luxe Works
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
                                preset="fade"
                                per="word"
                                delay={0.2}
                            >
                                Turn back your calendar age by 10 years through precision genetic testing and personalized biohacking protocols.
                            </TextEffect>
                            <Button size="lg" className="rounded-full">
                                Start Your Journey
                            </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                           
                             <div className="group relative space-y-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-3 text-brand-accent">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20">
                                        <span className="text-lg font-bold">1</span>
                                    </div>
                                    <div className="text-sm font-medium">Step One</div>
                                </div>
                                <div className="space-y-4">
                                    <TextEffect 
                                        as="h3" 
                                        className="text-xl font-semibold text-foreground"
                                        preset="fade"
                                        per="word"
                                    >
                                        Choose Your Test
                                    </TextEffect>
                                    <TextEffect 
                                        as="p" 
                                        className="text-muted-foreground text-sm leading-relaxed"
                                        preset="fade"
                                        per="word"
                                        delay={0.1}
                                    >
                                        Select from Mindwell®, Max Rx®, or Thrive genetic tests and full spectrum blood panel testing based on your goals. Order your at-home kit and activate it via our streamlined portal.
                                    </TextEffect>
                                    <Button variant="outline" size="sm" className="w-full">
                                        Learn More
                                    </Button>
                                </div>
                            </div>

                            {/* Step 2: Genetic and Hormonal Analysis */}
                            <div className="group relative space-y-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-3 text-brand-accent">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20">
                                        <span className="text-lg font-bold">2</span>
                                    </div>
                                    <div className="text-sm font-medium">Step Two</div>
                                </div>
                                <div className="space-y-4">
                                    <TextEffect 
                                        as="h3" 
                                        className="text-xl font-semibold text-foreground"
                                        preset="fade"
                                        per="word"
                                    >
                                        Genetic and Hormonal Analysis
                                    </TextEffect>
                                    <TextEffect 
                                        as="p" 
                                        className="text-muted-foreground text-sm leading-relaxed"
                                        preset="fade"
                                        per="word"
                                        delay={0.1}
                                    >
                                        Provide a quick cheek swab, ship it back using the pre-paid envelope. Our ClarityX® partners analyze your DNA for personalized insights.
                                    </TextEffect>
                                    <Button variant="outline" size="sm" className="w-full">
                                        Learn More
                                    </Button>
                                </div>
                            </div>

                            {/* Step 3: Personalized Treatment */}
                            <div className="group relative space-y-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 hover:scale-105">
                                <div className="flex items-center gap-3 text-brand-accent">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20">
                                        <span className="text-lg font-bold">3</span>
                                    </div>
                                    <div className="text-sm font-medium">Step Three</div>
                                </div>
                                <div className="space-y-4">
                                    <TextEffect 
                                        as="h3" 
                                        className="text-xl font-semibold text-foreground"
                                        preset="fade"
                                        per="word"
                                    >
                                        Personalized Treatment
                                    </TextEffect>
                                    <TextEffect 
                                        as="p" 
                                        className="text-muted-foreground text-sm leading-relaxed"
                                        preset="fade"
                                        per="word"
                                        delay={0.1}
                                    >
                                        Receive detailed, actionable reports and begin your customized treatment plan with hormone therapy, peptides, and precision medicine protocols.
                                    </TextEffect>
                                    <Button variant="outline" size="sm" className="w-full">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                About <span className="text-brand-accent">Bio Hacking Luxe</span>
                            </h2>
                        </div>
                        
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8">
                                <div className="text-center">
                                    <TextEffect 
                                        as="h3" 
                                        className="text-2xl md:text-3xl font-bold text-brand-accent mb-6"
                                        preset="fade"
                                        per="word"
                                    >
                                        Our Mission
                                    </TextEffect>
                                    <p className="text-xl text-slate-300 font-light leading-relaxed">
                                        At Bio Hacking Luxe, our mission is simple:{' '}
                                        <span className="text-brand-accent font-semibold">
                                            Turn back your calendar age by 10 years.
                                        </span>
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <TextEffect 
                                        as="p" 
                                        className="text-lg text-slate-300 leading-relaxed"
                                        preset="fade"
                                        per="word"
                                        delay={0.2}
                                    >
                                        We use state-of-the-art genetic testing and full-spectrum blood panels to uncover exactly what your body needs to perform at its best. By analyzing your genetics, we can determine which foods, medications, peptides, and hormonal balancing protocols are most effective for you. We go beyond the basics—our approach also identifies the ideal diet, customized workout plans, optimal training times, and even your most efficient sleep regimen.
                                    </TextEffect>

                                    <TextEffect 
                                        as="p" 
                                        className="text-lg text-slate-300 leading-relaxed"
                                        preset="fade"
                                        per="word"
                                        delay={0.3}
                                    >
                                        No other service in the world delivers this level of detail and precision. At Bio Hacking Luxe, you gain a personalized blueprint for peak performance, backed by science, and supported by our 24/7 concierge-style team.
                                    </TextEffect>

                                    <div className="text-center pt-4">
                                        <TextEffect 
                                            as="p" 
                                            className="text-xl text-brand-accent font-semibold italic"
                                            preset="fade"
                                            per="word"
                                            delay={0.4}
                                        >
                                            Because living younger, stronger, and sharper isn&apos;t just a dream—it&apos;s our promise.
                                        </TextEffect>
                                    </div>
                                </div>

                                <div className="flex justify-center pt-8">
                                    <Button 
                                        size="lg" 
                                        className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-8 py-3 h-14 min-h-[3.5rem]"
                                    >
                                        Start Your Journey
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
 

                <PricingSection />
                
             </main>
        </>
    )
}
