import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { TextEffect } from '@/components/core/text-effect'
import { ChevronRight, ArrowLeft, Heart, Shield, Users, Award, CheckCircle, Lock, Clock, Package, Truck, CreditCard } from 'lucide-react'

export default function ReorderMedicationPage() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative py-24 md:pb-32 lg:pb-36 lg:pt-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="flex items-center mb-8">
                            <Button 
                                asChild
                                variant="ghost" 
                                size="sm"
                                className="text-brand-accent hover:text-brand-accent/80"
                            >
                                <Link href="/" className="flex items-center gap-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Home
                                </Link>
                            </Button>
                        </div>
                        
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                                <TextEffect 
                                    as="span" 
                                    className="text-brand-accent inline"
                                    preset="fade"
                                    per="word"
                                >
                                    Reorder
                                </TextEffect>
                                <TextEffect 
                                    as="span" 
                                    className="inline"
                                    preset="fade"
                                    per="word"
                                    delay={0.2}
                                >
                                     Your Medication
                                </TextEffect>
                            </h1>
                            
                            <TextEffect 
                                as="p" 
                                className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8"
                                preset="fade"
                                per="word"
                                delay={0.2}
                            >
                                Convenience. Precision. Peace of Mind.
                            </TextEffect>

                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-12"
                                preset="fade"
                                per="word"
                                delay={0.3}
                            >
                                At Bio Hacking Luxe, your health never takes a break — and neither should your treatments. That&apos;s why we created a simple, secure, and concierge-level process for refilling your medications.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Why Reorder Online */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                ✨ Why Reorder Online?
                            </TextEffect>
                        </div>

                        <div className="max-w-4xl mx-auto text-center">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-8"
                                preset="fade"
                                per="word"
                            >
                                Whether you&apos;re continuing Hormone Replacement Therapy, Peptide Therapy, Weight Loss prescriptions, or Sexual Wellness medications, our streamlined system ensures you never miss a dose.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* Secure & Confidential */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                🔐 Secure & Confidential Ordering
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Shield className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">HIPAA-Compliant Portal</h3>
                                <p className="text-slate-300">
                                    Secure, encrypted platform that protects your personal health information.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Package className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Discreet Packaging</h3>
                                <p className="text-slate-300">
                                    Discreet packaging and delivery to maintain your privacy and confidentiality.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Award className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Licensed U.S. Pharmacies</h3>
                                <p className="text-slate-300">
                                    Licensed U.S. compounding pharmacies ensure quality and safety standards.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <Lock className="w-10 h-10 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Medical Oversight</h3>
                                <p className="text-slate-300">
                                    Medical oversight on every order ensures your safety and treatment efficacy.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <TextEffect 
                                as="p" 
                                className="text-xl text-brand-accent font-semibold"
                                preset="fade"
                                per="word"
                                delay={0.2}
                            >
                                Your health, privacy, and safety come first.
                            </TextEffect>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                ⚡ How It Works
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <span className="text-2xl font-bold text-brand-accent">1</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Select Your Medication</h3>
                                <p className="text-slate-300">
                                    Choose from your current prescriptions in our secure patient portal.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <span className="text-2xl font-bold text-brand-accent">2</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Submit Your Request</h3>
                                <p className="text-slate-300">
                                    Complete the quick refill form with your dosage and shipping preferences.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <span className="text-2xl font-bold text-brand-accent">3</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Medical Review</h3>
                                <p className="text-slate-300">
                                    Our clinical team verifies your request and checks your eligibility.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                    <span className="text-2xl font-bold text-brand-accent">4</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Home Delivery</h3>
                                <p className="text-slate-300">
                                    Medications arrive in secure, discreet packaging at your doorstep.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Medications Available */}
                <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                📦 Medications Available for Reorder
                            </TextEffect>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Heart className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Hormone Replacement Therapy (HRT)</h3>
                                <p className="text-slate-300">
                                    Continue your personalized hormone optimization treatments with seamless refills.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Shield className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Peptide Therapy</h3>
                                <p className="text-slate-300">
                                    Maintain your peptide protocols for optimal performance and wellness.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Users className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Medical Weight Loss</h3>
                                <p className="text-slate-300">
                                    Continue your weight loss journey with GLP-1 peptides and supporting medications.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Heart className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Sexual Wellness</h3>
                                <p className="text-slate-300">
                                    Maintain your sexual wellness treatments with discreet, secure refills.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-accent/50 transition-all duration-300 group">
                                <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-xl mb-6 group-hover:bg-brand-accent/30 transition-colors">
                                    <Award className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Hair Restoration</h3>
                                <p className="text-slate-300">
                                    Continue your hair restoration journey with doctor-prescribed treatments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Concierge Membership */}
                <section className="py-24 bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <TextEffect 
                                as="h2" 
                                className="text-4xl md:text-5xl font-bold mb-6"
                                preset="fade"
                                per="word"
                            >
                                🧬 Concierge Membership Advantage
                            </TextEffect>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <TextEffect 
                                as="p" 
                                className="text-lg text-slate-300 leading-relaxed mb-8 text-center"
                                preset="fade"
                                per="word"
                            >
                                Bio Hacking Luxe members enjoy exclusive benefits that make managing your health even easier:
                            </TextEffect>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                        <Clock className="w-10 h-10 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Automatic Refills</h3>
                                    <p className="text-slate-300">
                                        Automatic refills scheduled to your treatment plan, so you never run out.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                        <Truck className="w-10 h-10 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Priority Shipping</h3>
                                    <p className="text-slate-300">
                                        Priority shipping ensures your medications arrive when you need them most.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="flex items-center justify-center w-20 h-20 bg-brand-accent/20 rounded-full mx-auto mb-6">
                                        <Award className="w-10 h-10 text-brand-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Exclusive Access</h3>
                                    <p className="text-slate-300">
                                        Exclusive access to new therapies and treatments as they become available.
                                    </p>
                                </div>
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
                                🖋️ Ready to Reorder?
                            </TextEffect>
                            <TextEffect 
                                as="p" 
                                className="text-xl text-slate-300 mb-12"
                                preset="fade"
                                per="word"
                                delay={0.1}
                            >
                                Our concierge team will process your request within 24 hours with the same level of care and attention you expect from Bio Hacking Luxe.
                            </TextEffect>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    asChild
                                    size="lg" 
                                    className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <Link href="#" className="cursor-pointer">
                                        Access Reorder Form
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                                
                                <Button 
                                    asChild
                                    size="lg" 
                                    variant="outline"
                                    className="rounded-full border-brand-accent/30 hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent px-8 py-3 h-14 min-h-[3.5rem] cursor-pointer"
                                >
                                    <Link href="/select-profile" className="cursor-pointer">
                                        Become a Member
                                    </Link>
                                </Button>
                            </div>

                            <div className="mt-12 bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
                                <h3 className="text-xl font-bold mb-4 text-white">Important Note</h3>
                                <p className="text-slate-300 text-sm">
                                    All medication refills are subject to physician approval and current lab requirements as outlined by Florida law. Patients may be required to complete updated bloodwork before certain medications can be dispensed. Make sure Max is included in the approval process before any medication is dispersed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
