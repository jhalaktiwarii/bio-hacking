import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/core/text-effect'
import { Badge } from '@/components/ui/badge'
import { geneticTestingData } from '@/data/genetic-testing'

export default function MenGeneticTestingPage() {
    const { men } = geneticTestingData.audiences

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.08),transparent_70%)]"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
                
                <div className="mx-auto max-w-6xl px-6 lg:px-12 relative z-10">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/genetic-testing" className="hover:text-brand-accent transition-colors">Genetic Testing</Link>
                            <span>/</span>
                            <span className="text-brand-accent">Men</span>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-6 border-brand-accent/30 text-brand-accent">
                            For Men
                        </Badge>
                        
                        <TextEffect 
                            as="h1" 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight"
                            preset="fade"
                            per="word"
                        >
                            {men.hero.title}
                        </TextEffect>
                        
                        <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                            {men.hero.intro}
                        </p>
                    </div>
                </div>
            </section>

            {/* Three Tests Section */}
            <section className="py-16 relative">
                <div className="mx-auto max-w-6xl px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            The Three Swab Tests for Men
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Choose from our specialized genetic tests designed specifically for men&apos;s health optimization
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Clear Test */}
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 lg:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-1">
                                    <div className="text-4xl font-bold text-brand-accent mb-2">01</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{men.tests.clear.name}</h3>
                                    <p className="text-brand-accent font-medium mb-4">{men.tests.clear.focusArea}</p>
                                    <p className="text-slate-300 text-sm leading-relaxed">{men.tests.clear.bestFor}</p>
                                </div>
                                <div className="lg:col-span-2">
                                    <h4 className="text-lg font-semibold text-white mb-4">How it benefits men:</h4>
                                    <div className="space-y-4">
                                        {men.tests.clear.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-slate-300 text-sm leading-relaxed">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Max Rx Test */}
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 lg:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-1">
                                    <div className="text-4xl font-bold text-brand-primary mb-2">02</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{men.tests.maxrx.name}</h3>
                                    <p className="text-brand-primary font-medium mb-4">{men.tests.maxrx.focusArea}</p>
                                    <p className="text-slate-300 text-sm leading-relaxed">{men.tests.maxrx.bestFor}</p>
                                </div>
                                <div className="lg:col-span-2">
                                    <h4 className="text-lg font-semibold text-white mb-4">How it benefits men:</h4>
                                    <div className="space-y-4">
                                        {men.tests.maxrx.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-slate-300 text-sm leading-relaxed">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thrive Test */}
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 lg:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-1">
                                    <div className="text-4xl font-bold text-brand-accent mb-2">03</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{men.tests.thrive.name}</h3>
                                    <p className="text-brand-accent font-medium mb-4">{men.tests.thrive.focusArea}</p>
                                    <p className="text-slate-300 text-sm leading-relaxed">{men.tests.thrive.bestFor}</p>
                                </div>
                                <div className="lg:col-span-2">
                                    <h4 className="text-lg font-semibold text-white mb-4">How it benefits men:</h4>
                                    <div className="space-y-4">
                                        {men.tests.thrive.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-slate-300 text-sm leading-relaxed">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Men Choose Section */}
            <section className="py-16 relative">
                <div className="mx-auto max-w-6xl px-6 lg:px-12">
                    <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/60 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 lg:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                            Why Men Choose Clarity Swab Kits at Bio Hacking Luxe
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {men.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-3 h-3 bg-brand-accent rounded-full mt-1 flex-shrink-0"></div>
                                    <p className="text-slate-300 leading-relaxed">{benefit}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-2xl border border-brand-accent/20">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">✅</div>
                                <div>
                                    <p className="text-brand-accent font-semibold mb-2">Pro Tip:</p>
                                    <p className="text-slate-300 leading-relaxed">{men.proTip}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table Section */}
            <section className="py-16 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Comparison of Clarity Genetic Swab Kits for Men
                        </h2>
                        <p className="text-slate-400">
                            Choose the right test for your specific health goals
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8">
                            <div className="min-w-full">
                                {/* Table Header */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 pb-6 border-b border-slate-700/50">
                                    {men.comparison.headers.map((header, index) => (
                                        <div key={index} className="font-semibold text-brand-accent text-center">
                                            {header}
                                        </div>
                                    ))}
                                </div>

                                {/* Table Rows */}
                                <div className="space-y-8">
                                    {men.comparison.rows.map((row, index) => (
                                        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-slate-800/30 rounded-2xl">
                                            <div className="text-center">
                                                <div className="font-bold text-white text-lg">{row.testName}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-slate-300 text-sm">{row.focusArea}</div>
                                            </div>
                                            <div className="space-y-2">
                                                {row.keyBenefits.map((benefit, benefitIndex) => (
                                                    <div key={benefitIndex} className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-1.5 flex-shrink-0"></div>
                                                        <span className="text-slate-300 text-sm">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="text-center">
                                                <div className="text-slate-300 text-sm leading-relaxed">{row.bestFor}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 relative">
                <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Unlock Your Genetic Potential?
                    </h2>
                    <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                        Join thousands of men who have transformed their health, performance, and confidence through personalized genetic insights.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            asChild
                            size="lg" 
                            className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-12 py-4 h-16 text-lg shadow-2xl shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all duration-300 hover:scale-105 group"
                        >
                            <a href="https://tally.so/r/mY8b4J" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                Order Your Kit Now
                                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            </a>
                        </Button>

                        <Button 
                            asChild
                            size="lg" 
                            variant="outline"
                            className="rounded-full border-slate-600 hover:border-brand-accent hover:bg-brand-accent/10 text-slate-300 hover:text-brand-accent px-12 py-4 h-16 text-lg transition-all duration-300"
                        >
                            <Link href="/genetic-testing">
                                Explore Other Options
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
