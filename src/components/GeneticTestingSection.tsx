import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/core/text-effect'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { geneticTestingData } from '@/data/genetic-testing'

export default function GeneticTestingSection() {
    const { landing } = geneticTestingData

    return (
        <section id="genetic-testing-section" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
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
                        as="h2" 
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

                {/* Audience Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    
                    {/* Men Card */}
                    <div className="group relative">
                        <div className="relative overflow-hidden rounded-3xl h-[500px] lg:h-[600px] hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/20">
                            
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image 
                                    src={landing.audienceCards.men.backgroundImage}
                                    alt="Men's genetic testing" 
                                    fill
                                    className="object-cover group-hover:scale-102 transition-transform duration-700"
                                />
                                {/* Dark overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/50"></div>
                                {/* Additional subtle overlay to reduce background prominence */}
                                <div className="absolute inset-0 bg-slate-900/30"></div>
                                {/* Accent overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-10">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-slate-50 transition-colors duration-300 drop-shadow-lg">
                                            {landing.audienceCards.men.title}
                                        </h3>
                                        <div className="w-20 h-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full"></div>
                                        <p className="text-slate-200 leading-relaxed text-lg font-medium drop-shadow-md">
                                            {landing.audienceCards.men.teaser}
                                        </p>
                                    </div>
                                    
                                    {/* Key highlights */}
                                    <div className="space-y-3">
                                        {landing.audienceCards.men.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center gap-3 text-slate-300">
                                                <div className="w-2 h-2 bg-brand-accent rounded-full flex-shrink-0"></div>
                                                <span className="font-medium drop-shadow-sm">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Learn More Button */}
                                    <div className="pt-4">
                                        <Button 
                                            asChild
                                            size="lg"
                                            className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-semibold px-8 py-3 transition-all duration-300 group/btn hover:scale-105"
                                        >
                                            <Link href="/genetic-testing/men" className="flex items-center gap-2">
                                                Learn More
                                                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Women Card */}
                    <div className="group relative">
                        <div className="relative overflow-hidden rounded-3xl h-[500px] lg:h-[600px] hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20">
                            
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image 
                                    src={landing.audienceCards.women.backgroundImage}
                                    alt="Women's genetic testing" 
                                    fill
                                    className="object-cover group-hover:scale-102 transition-transform duration-700"
                                />
                                {/* Dark overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/50"></div>
                                {/* Accent overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-10">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-slate-50 transition-colors duration-300 drop-shadow-lg">
                                            {landing.audienceCards.women.title}
                                        </h3>
                                        <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"></div>
                                        <p className="text-slate-200 leading-relaxed text-lg font-medium drop-shadow-md">
                                            {landing.audienceCards.women.teaser}
                                        </p>
                                    </div>
                                    
                                    {/* Key highlights */}
                                    <div className="space-y-3">
                                        {landing.audienceCards.women.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center gap-3 text-slate-300">
                                                <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                                                <span className="font-medium drop-shadow-sm">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Learn More Button */}
                                    <div className="pt-4">
                                        <Button 
                                            asChild
                                            size="lg"
                                            className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-semibold px-8 py-3 transition-all duration-300 group/btn hover:scale-105"
                                        >
                                            <Link href="/genetic-testing/women" className="flex items-center gap-2">
                                                Learn More
                                                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Children Card */}
                    <div className="group relative">
                        <div className="relative overflow-hidden rounded-3xl h-[500px] lg:h-[600px] hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/20">
                            
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image 
                                    src={landing.audienceCards.children.backgroundImage}
                                    alt="Children's genetic testing" 
                                    fill
                                    className="object-cover group-hover:scale-102 transition-transform duration-700"
                                />
                                {/* Dark overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/50"></div>
                                {/* Additional overlay for children card due to bright background */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>
                                {/* Accent overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-10">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-slate-50 transition-colors duration-300 drop-shadow-lg">
                                            {landing.audienceCards.children.title}
                                        </h3>
                                        <div className="w-20 h-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full"></div>
                                        <p className="text-slate-200 leading-relaxed text-lg font-medium drop-shadow-md">
                                            {landing.audienceCards.children.teaser}
                                        </p>
                                    </div>
                                    
                                    {/* Key highlights */}
                                    <div className="space-y-3">
                                        {landing.audienceCards.children.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center gap-3 text-slate-300">
                                                <div className="w-2 h-2 bg-brand-accent rounded-full flex-shrink-0"></div>
                                                <span className="font-medium drop-shadow-sm">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Learn More Button */}
                                    <div className="pt-4">
                                        <Button 
                                            asChild
                                            size="lg"
                                            className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-semibold px-8 py-3 transition-all duration-300 group/btn hover:scale-105"
                                        >
                                            <Link href="/genetic-testing/children" className="flex items-center gap-2">
                                                Learn More
                                                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </div>
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
                        className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-12 py-4 h-16 text-lg shadow-2xl shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    >
                        <a href="https://tally.so/r/mY8b4J" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 cursor-pointer">
                            Start Your Journey
                            <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
