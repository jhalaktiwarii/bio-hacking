import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/core/text-effect'
import Image from 'next/image'

export default function HowItWorks() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.08),transparent_70%)]"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
            
            {/* Floating particles */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-brand-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-brand-primary/30 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-slate-500/20 rounded-full animate-pulse delay-700"></div>
            
            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/60 to-slate-700/40 border border-slate-600/30 backdrop-blur-sm mb-8 shadow-lg">
                        <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-slate-200">Get started with 3 easy steps</span>
                    </div>
                    
                    <TextEffect 
                        as="h2" 
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight"
                        preset="fade"
                        per="word"
                    >
                        How it works
                    </TextEffect>
                    
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        From genetic testing to personalized treatment - your journey to optimized health
                    </p>
                </div>
                
                {/* Steps Grid - Actual How It Works Process */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    
                    {/* Step 1: Choose Your Test */}
                    <div className="group relative">
                        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700/30 backdrop-blur-sm">
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                                <Image 
                                    src="/lab.png" 
                                    alt="Laboratory testing" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <div className="text-6xl font-bold text-slate-300 group-hover:text-brand-accent transition-colors duration-300">
                                        01
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                                        Choose Your Test
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Select from Mindwell®, Max Rx®, or Thrive genetic tests and full spectrum blood panel testing based on your goals. Order your at-home kit and activate it via our streamlined portal.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>

                    {/* Step 2: Genetic and Hormonal Analysis */}
                    <div className="group relative">
                        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700/30 backdrop-blur-sm">
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                                <Image 
                                    src="/Full-Spectrum.png" 
                                    alt="Full spectrum testing" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <div className="text-6xl font-bold text-slate-300 group-hover:text-brand-primary transition-colors duration-300">
                                        02
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                                        Genetic and Hormonal Analysis
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Provide a quick cheek swab, ship it back using the pre-paid envelope. Our ClarityX® partners analyze your DNA for personalized insights.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>

                    {/* Step 3: Personalized Treatment */}
                    <div className="group relative">
                        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-slate-700/30 backdrop-blur-sm">
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                                <Image 
                                    src="/personalised.png" 
                                    alt="Personalized treatment" 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <div className="text-6xl font-bold text-slate-300 group-hover:text-brand-accent transition-colors duration-300">
                                        03
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                                        Personalized Treatment
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Receive detailed, actionable reports and begin your customized treatment plan with hormone therapy, peptides, and precision medicine protocols.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

