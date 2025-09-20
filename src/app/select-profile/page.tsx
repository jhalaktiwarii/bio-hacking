'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function SelectProfilePage() {
    const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex">
            {/* Left Side - Image (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src="/banner.png"
                        alt="Bio Hacking Luxe Experience"
                        fill
                        className="object-cover object-left-center"
                        priority
                        sizes="50vw"
                    />
                </div>
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/20"></div>
            </div>

            {/* Right Side - Selection Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 relative">
                {/* Close Button */}
                <Link 
                    href="/"
                    className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-colors duration-200 group"
                >
                    <X className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-200" />
                </Link>

                <div className="max-w-md mx-auto w-full">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
                            <span className="text-sm font-medium text-slate-300">STEP 1 OF 3</span>
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Choose Your Profile
                        </h1>
                        
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Select the profile that best matches your needs for personalized biohacking recommendations.
                        </p>
                    </div>

                    {/* Selection Options */}
                    <div className="space-y-4">
                        {/* Male Option */}
                        <button 
                            onClick={() => setSelectedProfile('male')}
                            className={`w-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 border transition-all duration-300 hover:scale-[1.02] group text-left ${
                                selectedProfile === 'male' 
                                    ? 'border-brand-accent bg-gradient-to-br from-brand-accent/10 to-brand-primary/5' 
                                    : 'border-slate-700/30 hover:border-brand-accent/30'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-white group-hover:text-slate-100 transition-colors duration-300 mb-2">
                                        Male
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        Tailored protocols for male hormone optimization and performance enhancement
                                    </p>
                                </div>
                                <div className={`ml-4 w-6 h-6 rounded-full border-2 transition-colors duration-300 flex items-center justify-center flex-shrink-0 ${
                                    selectedProfile === 'male' 
                                        ? 'border-brand-accent bg-brand-accent' 
                                        : 'border-slate-600 group-hover:border-brand-accent'
                                }`}>
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                        selectedProfile === 'male' 
                                            ? 'bg-white' 
                                            : 'bg-transparent group-hover:bg-brand-accent'
                                    }`}></div>
                                </div>
                            </div>
                        </button>

                        {/* Female Option */}
                        <button 
                            onClick={() => setSelectedProfile('female')}
                            className={`w-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 border transition-all duration-300 hover:scale-[1.02] group text-left ${
                                selectedProfile === 'female' 
                                    ? 'border-brand-accent bg-gradient-to-br from-brand-accent/10 to-brand-primary/5' 
                                    : 'border-slate-700/30 hover:border-brand-accent/30'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-white group-hover:text-slate-100 transition-colors duration-300 mb-2">
                                        Female
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        Specialized approach for female hormonal balance and wellness optimization
                                    </p>
                                </div>
                                <div className={`ml-4 w-6 h-6 rounded-full border-2 transition-colors duration-300 flex items-center justify-center flex-shrink-0 ${
                                    selectedProfile === 'female' 
                                        ? 'border-brand-accent bg-brand-accent' 
                                        : 'border-slate-600 group-hover:border-brand-accent'
                                }`}>
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                        selectedProfile === 'female' 
                                            ? 'bg-white' 
                                            : 'bg-transparent group-hover:bg-brand-accent'
                                    }`}></div>
                                </div>
                            </div>
                        </button>

                        {/* Children Option */}
                        <button 
                            onClick={() => setSelectedProfile('children')}
                            className={`w-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 border transition-all duration-300 hover:scale-[1.02] group text-left ${
                                selectedProfile === 'children' 
                                    ? 'border-brand-accent bg-gradient-to-br from-brand-accent/10 to-brand-primary/5' 
                                    : 'border-slate-700/30 hover:border-brand-accent/30'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-white group-hover:text-slate-100 transition-colors duration-300 mb-2">
                                        Children
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        Safe, age-appropriate wellness protocols for growing minds and bodies
                                    </p>
                                </div>
                                <div className={`ml-4 w-6 h-6 rounded-full border-2 transition-colors duration-300 flex items-center justify-center flex-shrink-0 ${
                                    selectedProfile === 'children' 
                                        ? 'border-brand-accent bg-brand-accent' 
                                        : 'border-slate-600 group-hover:border-brand-accent'
                                }`}>
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                        selectedProfile === 'children' 
                                            ? 'bg-white' 
                                            : 'bg-transparent group-hover:bg-brand-accent'
                                    }`}></div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Continue Button */}
                    <div className="mt-12 text-center">
                        <Button 
                            size="lg" 
                            className="w-full rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-8 py-4 h-14 text-base shadow-2xl shadow-brand-accent/20 hover:shadow-brand-accent/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            disabled={!selectedProfile}
                            onClick={() => {
                                if (selectedProfile) {
                                    console.log('Selected profile:', selectedProfile);
                                    // TODO: Navigate to next step
                                }
                            }}
                        >
                            Continue
                        </Button>
                        <p className="text-xs text-slate-500 mt-3">
                            {selectedProfile ? `Selected: ${selectedProfile.charAt(0).toUpperCase() + selectedProfile.slice(1)}` : 'Select a profile to continue'}
                        </p>
                    </div>
                </div>

                {/* Bottom Brand */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="text-center">
                        <div className="text-lg font-bold bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
                            Bio Hacking Luxe
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                            Personalized Wellness Solutions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
