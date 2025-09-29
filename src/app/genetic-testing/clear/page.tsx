import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HeroHeader } from '@/components/header'
import Link from 'next/link'
import { Sparkles, Leaf, Heart, Shield, Target, Zap, Apple, Activity, Eye, Droplets, Sun, Clock } from 'lucide-react'

export default function ClearPage() {
  const skinInsights = [
    "Skin Sensitivity",
    "Aging Markers",
    "Collagen Production",
    "UV Response",
    "Antioxidant Needs",
    "Hydration Levels",
    "Acne Predisposition",
    "Elastin Production",
    "Inflammation Response",
    "Skin Barrier Function",
    "Pigmentation Patterns",
    "Wound Healing"
  ]

  const features = [
    {
      icon: Eye,
      title: "Personalized Skincare Routine",
      description: "Discover which ingredients work best for your unique skin genetics, avoiding harmful products"
    },
    {
      icon: Shield,
      title: "Aging Prevention",
      description: "Identify genetic factors that accelerate aging and learn how to slow down the process"
    },
    {
      icon: Target,
      title: "Root Cause Analysis",
      description: "Understand the underlying genetic causes of skin issues rather than just treating symptoms"
    },
    {
      icon: Activity,
      title: "Medical-Grade Products",
      description: "Access to professional skincare products specifically chosen based on your genetic profile"
    }
  ]

  const benefits = [
    {
      icon: Droplets,
      title: "Optimal Skincare Ingredients",
      description: "Know exactly which ingredients your skin needs and which to avoid based on your genetics"
    },
    {
      icon: Sun,
      title: "Sun Protection Strategy",
      description: "Understand your genetic response to UV exposure and develop appropriate protection measures"
    },
    {
      icon: Heart,
      title: "Healthy Skin Foundation",
      description: "Build a skincare routine that addresses your genetic predispositions for long-term skin health"
    },
    {
      icon: Clock,
      title: "Anti-Aging Optimization",
      description: "Personalized strategies to slow aging and maintain youthful, healthy skin"
    }
  ]

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
            src="/bg.mp4">
            <p>Your browser doesn&apos;t support HTML5 video.</p>
          </video>
        </div>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 bg-brand-accent/20 text-brand-accent border-brand-accent/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Genetic Testing
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Clear
              </h1>
              <p className="mt-6 text-xl leading-8 max-w-3xl mx-auto text-muted-foreground">
                Skin Genetics & Aging Insights
              </p>
              <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                Discover your skin's genetic traits and unlock a personalized skincare routine. 
                Learn which ingredients work best for your unique skin genetics and avoid harmful products.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark">
                  <a href="https://tally.so/r/mY8b4J" target="_blank" rel="noopener noreferrer">
                    Start Your Test
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/genetic-testing">
                    View All Tests
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why Choose Clear?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Personalized skincare and aging insights based on your genetics
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-brand-primary/20 hover:border-brand-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-brand-accent mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skin Insights */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Skin Genetics Covered
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive genetic analysis for optimal skincare and aging prevention
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
              {skinInsights.map((insight, index) => (
                <div key={index} className="border border-brand-primary/20 rounded-lg p-4 text-center hover:border-brand-accent/50 transition-colors">
                  <span className="font-medium text-sm">{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Transform Your Skin
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Unlock your genetic potential for optimal skincare and aging prevention
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-brand-primary/20 hover:border-brand-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-brand-accent mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl">
                How Clear Works
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Order Your Kit</h3>
                <p className="text-muted-foreground text-sm">Order your Clear skin genetics kit and activate it online</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Collect Sample</h3>
                <p className="text-muted-foreground text-sm">Simple cheek swab collection at home - quick and easy</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Genetic Analysis</h3>
                <p className="text-muted-foreground text-sm">Advanced analysis of skin and aging-related genetic markers</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Personal Blueprint</h3>
                <p className="text-muted-foreground text-sm">Receive your personalized skincare and aging prevention plan</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Ready for Clear Skin?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover your genetic blueprint for optimal skincare and aging prevention
              </p>
              <div className="flex items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark">
                  <a href="https://tally.so/r/mY8b4J" target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#contact">
                    Learn More
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
