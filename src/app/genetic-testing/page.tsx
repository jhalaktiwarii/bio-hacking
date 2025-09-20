import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/core/text-effect'
import { HeroHeader } from '@/components/header'
import Image from 'next/image'
import { geneticTestingData } from '@/data/genetic-testing'

export default function GeneticTestingPage() {
    const { landing } = geneticTestingData

    return (
        <>
            <HeroHeader />
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden">
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
                            <span className="text-sm font-medium text-slate-200">Choose Your Path</span>
                        </div>
                        
                        <TextEffect 
                            as="h1" 
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight"
                            preset="fade"
                            per="word"
                        >
                            {landing.hero.title}
                        </TextEffect>
                        
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-4">
                            {landing.hero.subtitle}
                        </p>
                        
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            {landing.hero.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Audience Selection Cards */}
            <section className="py-16 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        
                        {/* Men Card */}
                        <div className="group relative">
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 lg:p-10 h-full hover:border-brand-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/10 hover:-translate-y-2">
                                
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-brand-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Icon Container */}
                                <div className="relative mb-8 flex justify-center">
                                    <div className="relative">
                                        <div className="w-24 h-24 lg:w-32 lg:h-32 relative group-hover:scale-110 transition-transform duration-500">
                                            <Image 
                                                src={landing.audienceCards.men.icon}
                                                alt="Men's genetic testing" 
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        {/* Subtle glow behind icon */}
                                        <div className="absolute inset-0 bg-brand-accent/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10 text-center space-y-4">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-slate-50 transition-colors duration-300">
                                        {landing.audienceCards.men.title}
                                    </h3>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-brand-accent to-brand-primary mx-auto rounded-full"></div>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        {landing.audienceCards.men.teaser}
                                    </p>
                                    
                                    {/* Key highlights */}
                                    <div className="pt-4 space-y-2">
                                        {landing.audienceCards.men.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center justify-center gap-2 text-sm text-slate-400">
                                                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Learn More Button */}
                                    <div className="pt-6">
                                        <Button 
                                            asChild
                                            variant="outline"
                                            className="rounded-full border-brand-accent/30 hover:border-brand-accent hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent transition-all duration-300 group/btn"
                                        >
                                            <Link href="/genetic-testing/men" className="flex items-center gap-2">
                                                Learn More
                                                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full group-hover/btn:scale-125 transition-transform duration-300"></div>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Women Card */}
                        <div className="group relative">
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 lg:p-10 h-full hover:border-brand-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2">
                                
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Icon Container */}
                                <div className="relative mb-8 flex justify-center">
                                    <div className="relative">
                                        <div className="w-24 h-24 lg:w-32 lg:h-32 relative group-hover:scale-110 transition-transform duration-500">
                                            <Image 
                                                src={landing.audienceCards.women.icon}
                                                alt="Women's genetic testing" 
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        {/* Subtle glow behind icon */}
                                        <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10 text-center space-y-4">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-slate-50 transition-colors duration-300">
                                        {landing.audienceCards.women.title}
                                    </h3>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto rounded-full"></div>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        {landing.audienceCards.women.teaser}
                                    </p>
                                    
                                    {/* Key highlights */}
                                    <div className="pt-4 space-y-2">
                                        {landing.audienceCards.women.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center justify-center gap-2 text-sm text-slate-400">
                                                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Learn More Button */}
                                    <div className="pt-6">
                                        <Button 
                                            asChild
                                            variant="outline"
                                            className="rounded-full border-brand-primary/30 hover:border-brand-primary hover:bg-brand-primary/10 text-brand-primary hover:text-brand-primary transition-all duration-300 group/btn"
                                        >
                                            <Link href="/genetic-testing/women" className="flex items-center gap-2">
                                                Learn More
                                                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full group-hover/btn:scale-125 transition-transform duration-300"></div>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Children Card */}
                        <div className="group relative">
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 lg:p-10 h-full hover:border-brand-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/10 hover:-translate-y-2">
                                
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-brand-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Icon Container */}
                                <div className="relative mb-8 flex justify-center">
                                    <div className="relative">
                                        <div className="w-24 h-24 lg:w-32 lg:h-32 relative group-hover:scale-110 transition-transform duration-500">
                                            <Image 
                                                src={landing.audienceCards.children.icon}
                                                alt="Children's genetic testing" 
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        {/* Subtle glow behind icon */}
                                        <div className="absolute inset-0 bg-brand-accent/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10 text-center space-y-4">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-slate-50 transition-colors duration-300">
                                        {landing.audienceCards.children.title}
                                    </h3>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-brand-accent to-brand-primary mx-auto rounded-full"></div>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        {landing.audienceCards.children.teaser}
                                    </p>
                                    
                                    {/* Key highlights */}
                                    <div className="pt-4 space-y-2">
                                        {landing.audienceCards.children.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center justify-center gap-2 text-sm text-slate-400">
                                                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Learn More Button */}
                                    <div className="pt-6">
                                        <Button 
                                            asChild
                                            variant="outline"
                                            className="rounded-full border-brand-accent/30 hover:border-brand-accent hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent transition-all duration-300 group/btn"
                                        >
                                            <Link href="/genetic-testing/children" className="flex items-center gap-2">
                                                Learn More
                                                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full group-hover/btn:scale-125 transition-transform duration-300"></div>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA Section */}
                    <div className="text-center mt-20">
                        <div className="max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Why Choose Bio Hacking Luxe?
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                Our ClarityX® genetic testing incorporates the most up-to-date clinical research data, providing evidence-based recommendations tailored to your unique DNA.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold text-brand-accent">99.9%</div>
                                    <div className="text-sm text-slate-400">Accuracy Rate</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold text-brand-primary">72hrs</div>
                                    <div className="text-sm text-slate-400">Results Timeline</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-3xl font-bold text-brand-accent">100+</div>
                                    <div className="text-sm text-slate-400">Genetic Markers</div>
                                </div>
                            </div>
                        </div>

                        <Button 
                            asChild
                            size="lg" 
                            className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-12 py-4 h-16 text-lg shadow-2xl shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all duration-300 hover:scale-105 group"
                        >
                            <Link href="/select-profile" className="flex items-center gap-3">
                                Start Your Journey
                                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}
