'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/core/text-effect'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Play, Pause, Star, Quote,  } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  image: string
  video?: string
  text: string
  rating: number
  service: string
  age?: number
  results?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Executive",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    video: "/testimonial-video-1.mp4",
    text: "Bio Hacking Luxe completely transformed my energy levels and cognitive function. The personalized hormone therapy based on my genetic testing was a game-changer. I feel 10 years younger!",
    rating: 5,
    service: "Hormone Therapy",
    age: 42,
    results: "Increased energy by 300%, better sleep quality"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Tech Entrepreneur",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    video: "/testimonial-video-2.mp4",
    text: "The peptide therapy protocol they designed for me based on my genetics was incredible. My recovery time improved dramatically, and I've never felt stronger at 45.",
    rating: 5,
    service: "Peptide Therapy",
    age: 45,
    results: "50% faster recovery, 25% strength increase"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Physician",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "As a medical professional, I was skeptical about biohacking. But their scientific approach and genetic-based protocols convinced me. The results speak for themselves.",
    rating: 5,
    service: "Genetic Testing",
    age: 38,
    results: "Optimized nutrition, improved focus"
  },
  {
    id: 4,
    name: "James Thompson",
    role: "Investment Banker",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    video: "/testimonial-video-3.mp4",
    text: "The weight loss program was unlike anything I've tried. Based on my genetic profile, they created a protocol that actually worked. Lost 40 pounds and kept it off.",
    rating: 5,
    service: "Weight Loss",
    age: 52,
    results: "Lost 40 lbs, maintained for 2 years"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Wellness Coach",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    text: "The injectable vitamins protocol was a revelation. My skin looks incredible, and my energy is through the roof. The personalized approach made all the difference.",
    rating: 5,
    service: "Injectable Vitamins",
    age: 35,
    results: "Improved skin quality, 200% energy boost"
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "CEO",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    video: "/testimonial-video-4.mp4",
    text: "The hair loss therapy was incredible. I was skeptical, but the results after 6 months were remarkable. My confidence is back, and I feel like a new man.",
    rating: 5,
    service: "Hair Loss Therapy",
    age: 48,
    results: "80% hair regrowth, restored confidence"
  }
]

const TestimonialCard: React.FC<{ testimonial: Testimonial; isActive: boolean; onPlay: (id: number) => void }> = ({ 
  testimonial, 
  isActive, 
  onPlay 
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (testimonial.video) {
      onPlay(testimonial.id)
      setIsPlaying(!isPlaying)
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause()
        } else {
          videoRef.current.play()
        }
      }
    }
  }

  return (
    <Card className={cn(
      "group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 transition-all duration-500 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/10",
      isActive ? "scale-105 shadow-2xl shadow-brand-accent/20 ring-2 ring-brand-accent/30" : "hover:scale-102"
    )}>
      {/* Video Background */}
      {testimonial.video && (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            muted
            loop
            playsInline
          >
            <source src={testimonial.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover border-2 border-brand-accent/30"
              />
              {testimonial.video && (
                <button
                  onClick={handlePlay}
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center hover:bg-brand-accent/90 transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-white" />
                  ) : (
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  )}
                </button>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-lg text-foreground">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              <p className="text-xs text-muted-foreground">{testimonial.location}</p>
            </div>
          </div>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-sm">
                <Star className="w-3 h-3 fill-white text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mb-6">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mb-3 shadow-sm">
            <Quote className="w-4 h-4 text-white" />
          </div>
          <p className="text-muted-foreground leading-relaxed italic">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </div>

        {/* Service Badge */}
        <div className="flex items-center justify-between">
          <Badge className="bg-gradient-to-r from-brand-accent to-brand-primary text-white border-0 font-semibold px-3 py-1">
            {testimonial.service}
          </Badge>
          
          {/* Results */}
          {testimonial.results && (
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Results:</p>
              <p className="text-sm font-medium text-brand-accent">{testimonial.results}</p>
            </div>
          )}
        </div>

        {/* Age */}
        {testimonial.age && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-muted-foreground">
              Age: {testimonial.age} • Transformed with Bio Hacking Luxe
            </p>
          </div>
        )}
      </div>
    </Card>
  )
}

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handlePlay = (id: number) => {
    if (playingVideo === id) {
      setPlayingVideo(null)
    } else {
      setPlayingVideo(id)
    }
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (playingVideo === null) {
        nextTestimonial()
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [playingVideo])

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <TextEffect 
            as="h2" 
            className="text-4xl md:text-5xl font-bold mb-6"
            preset="fade"
            per="word"
          >
            Real Results from Real People
          </TextEffect>
          <TextEffect 
            as="p" 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            preset="fade"
            per="word"
            delay={0.2}
          >
            Discover how our clients have transformed their lives through personalized biohacking protocols
          </TextEffect>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clients Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent mb-2">10</div>
              <div className="text-sm text-muted-foreground">Years Younger</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        {/* Testimonials - Desktop Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id}>
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={true}
                  onPlay={handlePlay}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials - Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-brand-accent/50 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-brand-accent/50 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mobile Testimonials */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "transition-all duration-500 flex-shrink-0 w-80",
                    index === currentIndex ? "opacity-100 scale-100" : "opacity-70 scale-95"
                  )}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={index === currentIndex}
                    onPlay={handlePlay}
                  />
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer",
                    index === currentIndex 
                      ? "bg-brand-accent scale-125" 
                      : "bg-white/30 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
