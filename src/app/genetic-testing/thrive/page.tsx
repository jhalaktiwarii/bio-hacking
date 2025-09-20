import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HeroHeader } from '@/components/header'
import Link from 'next/link'
import { Sparkles, Leaf, Heart, Shield, Target, Zap, Apple, Activity } from 'lucide-react'

export default function ThrivePage() {
  const nutritionalInsights = [
    "Optimal Diet Type",
    "Nutrient Absorption",
    "Vitamin Deficiency Risk",
    "Metabolic Rate",
    "Food Sensitivities",
    "Antioxidant Needs",
    "Omega-3 Requirements",
    "Caffeine Sensitivity",
    "Alcohol Metabolism",
    "Weight Management",
    "Inflammation Response",
    "Aging Markers"
  ]

  const features = [
    {
      icon: Leaf,
      title: "Personalized Nutrition",
      description: "Discover the optimal diet and nutrition plan based on your unique genetic makeup"
    },
    {
      icon: Shield,
      title: "Longevity Insights",
      description: "Understand your genetic predispositions for aging and longevity optimization"
    },
    {
      icon: Target,
      title: "Supplement Guidance",
      description: "Get precise recommendations for vitamins and supplements your body actually needs"
    },
    {
      icon: Activity,
      title: "Metabolic Optimization",
      description: "Learn how your genetics affect metabolism, weight management, and energy levels"
    }
  ]

  const benefits = [
    {
      icon: Apple,
      title: "Optimal Food Choices",
      description: "Know exactly which foods fuel your body best and which to avoid based on your genetics"
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Understand your body's energy production and how to maximize vitality through nutrition"
    },
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Genetic insights for heart-healthy nutrition and lifestyle choices"
    },
    {
      icon: Sparkles,
      title: "Anti-Aging Nutrition",
      description: "Personalized nutrition strategies to slow aging and promote longevity"
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
                Thrive
              </h1>
              <p className="mt-6 text-xl leading-8 max-w-3xl mx-auto text-muted-foreground">
                Nutritional Longevity Insights Through Wellness Nutrition
              </p>
              <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                Unlock your genetic blueprint for optimal nutrition, longevity, and wellness. 
                Discover the foods, supplements, and lifestyle choices that work best with your unique biology.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark">
                  <Link href="/select-profile">
                    Start Your Test
                  </Link>
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
                Why Choose Thrive?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Personalized nutrition and longevity insights based on your genetics
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

        {/* Nutritional Insights */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Nutritional Insights Covered
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive genetic analysis for optimal nutrition and wellness
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
              {nutritionalInsights.map((insight, index) => (
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
                Transform Your Health
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Unlock your genetic potential for optimal nutrition and longevity
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
                How Thrive Works
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Order Your Kit</h3>
                <p className="text-muted-foreground text-sm">Order your Thrive nutrition genetics kit and activate it online</p>
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
                <p className="text-muted-foreground text-sm">Advanced analysis of nutrition and longevity-related genetic markers</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Personal Blueprint</h3>
                <p className="text-muted-foreground text-sm">Receive your personalized nutrition and longevity optimization plan</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Ready to Thrive?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover your genetic blueprint for optimal nutrition, longevity, and wellness
              </p>
              <div className="flex items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark">
                  <Link href="/select-profile">
                    Book Free Consultation
                  </Link>
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
