import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HeroHeader } from '@/components/header'
import Link from 'next/link'
import { TestTube, Heart, Brain, Pill, Shield, Target, Activity, Zap } from 'lucide-react'

export default function MaxRxPage() {
  const therapeuticCategories = [
    "Mental Health",
    "Cardiology", 
    "Pain Management",
    "Endocrinology",
    "Gastroenterology",
    "Neurology",
    "Rheumatology",
    "Oncology",
    "Dermatology",
    "Pulmonology",
    "Nephrology",
    "Infectious Disease"
  ]

  const features = [
    {
      icon: TestTube,
      title: "275+ Prescription Medications",
      description: "Comprehensive analysis across 31 therapeutic categories for complete medication optimization"
    },
    {
      icon: Shield,
      title: "Safety & Efficacy",
      description: "Understand how your genes affect both medication effectiveness and safety profiles"
    },
    {
      icon: Target,
      title: "Integrated Health Outlook",
      description: "Complete view of how genetics impact both physical and mental health medications"
    },
    {
      icon: Activity,
      title: "Multi-System Analysis",
      description: "From cardiovascular to neurological - get insights across all body systems"
    }
  ]

  const benefits = [
    {
      icon: Brain,
      title: "Mental Health Integration",
      description: "Seamlessly combines mental health medication insights with physical health optimization"
    },
    {
      icon: Heart,
      title: "Cardiovascular Optimization",
      description: "Personalized guidance for heart medications, blood pressure treatments, and more"
    },
    {
      icon: Pill,
      title: "Pain Management",
      description: "Genetic insights for optimal pain medication selection and dosing"
    },
    {
      icon: Zap,
      title: "Metabolic Health",
      description: "Endocrine and metabolic medication optimization based on your unique genetics"
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
                <TestTube className="w-4 h-4 mr-2" />
                Genetic Testing
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Max Rx<sup className="text-2xl">®</sup>
              </h1>
              <p className="mt-6 text-xl leading-8 max-w-3xl mx-auto text-muted-foreground">
                Whole-Body Medication Optimization
              </p>
              <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                Evaluates your response to 275+ prescription medications across 31 therapeutic categories, 
                offering a complete, integrated outlook on how your genes affect medication efficacy and safety.
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
                Why Choose Max Rx<sup>®</sup>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The most comprehensive medication genetic testing available
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

        {/* Therapeutic Categories */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl">
                31 Therapeutic Categories
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive coverage across all major medical specialties
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
              {therapeuticCategories.map((category, index) => (
                <div key={index} className="border border-brand-primary/20 rounded-lg p-4 text-center hover:border-brand-accent/50 transition-colors">
                  <span className="font-medium text-sm">{category}</span>
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
                Integrated Health Benefits
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Complete medication optimization across physical and mental health
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
                How Max Rx<sup>®</sup> Works
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Order Your Kit</h3>
                <p className="text-muted-foreground text-sm">Order your comprehensive Max Rx® kit and activate it through our portal</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Simple Sample</h3>
                <p className="text-muted-foreground text-sm">Quick cheek swab collection at home - easy and painless</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Lab Analysis</h3>
                <p className="text-muted-foreground text-sm">Advanced genetic analysis across 31 therapeutic categories</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/20 mb-6">
                  <span className="text-2xl font-bold text-brand-accent">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Report</h3>
                <p className="text-muted-foreground text-sm">Detailed insights for 275+ medications with personalized recommendations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Optimize All Your Medications
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the most comprehensive medication genetic testing available - covering both physical and mental health
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
