import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/core/text-effect';
import { 
  Card, 
  Header, 
  Description, 
  Plan, 
  PlanName, 
  Badge, 
  Price, 
  MainPrice, 
  Period, 
  Body, 
  List, 
  ListItem, 
  Separator 
} from '@/components/ui/pricing-card';
import { Check, Star, Crown, Sparkles, Zap, Diamond } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-16">
          <TextEffect 
            as="h2" 
            className="text-4xl md:text-5xl font-bold mb-6"
            preset="fade"
            per="word"
          >
            Membership Packages
          </TextEffect>
          <TextEffect 
            as="p" 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            preset="fade"
            per="word"
            delay={0.2}
          >
            Choose the perfect biohacking experience for your journey to peak performance and longevity.
          </TextEffect>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-3xl relative overflow-hidden shadow-2xl shadow-brand-accent/10 hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-500">
            {/* Enhanced Card Background with Brand Colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-brand-primary/3 to-brand-accent/5"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-accent/3 to-brand-primary/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
            
            {/* Brand-Colored Border Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-accent/20 p-[1px]">
              <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-sm"></div>
            </div>
            
            <div className="relative z-10">
              <Header>
                <Plan>
                  <PlanName className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xl sm:text-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-lg shadow-brand-accent/30">
                        <Crown className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-brand-accent font-bold">
                        Luxe Concierge Membership
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:ml-auto">
                      <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
                      <Zap className="w-5 h-5 text-brand-primary" />
                    </div>
                  </PlanName>
                  <Badge className="bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 text-brand-accent border-brand-accent/30 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg shadow-brand-accent/20">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
                      <Star className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="font-semibold">Most Popular</span>
                    <Diamond className="w-3 h-3 text-brand-accent" />
                  </Badge>
                </Plan>
                <Description className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  The ultimate biohacking experience for peak performance, longevity, and luxury lifestyle integration. 
                  <span className="text-brand-accent font-medium"> Transform your life with personalized precision medicine.</span>
                </Description>
                <Price>
                  <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-2">
                    <div className="flex items-baseline gap-2">
                      <MainPrice className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent bg-clip-text text-transparent">
                        $199
                      </MainPrice>
                      <Period className="text-muted-foreground text-base sm:text-lg">/month</Period>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0 sm:ml-4">
                      <span className="text-xs sm:text-sm text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">Limited Time</span>
                      <span className="text-xs sm:text-sm text-muted-foreground line-through">$299/month</span>
                    </div>
                  </div>
                </Price>
              </Header>

              <Body>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl text-brand-accent mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-lg shadow-brand-accent/30">
                          <Crown className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-brand-accent">
                          Exclusive Premium Benefits
                        </span>
                      </div>
                      <div className="sm:ml-auto">
                        <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
                      </div>
                    </h4>
                    <List>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">Unlimited peptide and sexual wellness adjustments</span> with direct pharmacy coordination
                        </span>
                      </ListItem>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">VIP hormone therapy management</span> with priority NP/MD access
                        </span>
                      </ListItem>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">Quarterly in-depth performance reviews</span> with proprietary "10 Years Younger Protocol"
                        </span>
                      </ListItem>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">Complimentary access to all hotel-based wellness events</span> & retreats (Amrit Hotel priority seating)
                        </span>
                      </ListItem>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">Annual "Longevity Blueprint" genetic + lifestyle report</span> with actionable protocols
                        </span>
                      </ListItem>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">Dedicated Luxe Coordinator</span> – personal liaison for scheduling, results interpretation, and lifestyle concierge
                        </span>
                      </ListItem>
                    </List>
                  </div>

                  <Separator className="text-brand-accent border-brand-accent/30">
                    <div className="flex items-center gap-2">
                      <Diamond className="w-4 h-4" />
                      Personalized Coaching Suite
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                  </Separator>

                  <div>
                    <p className="text-muted-foreground mb-6 font-medium text-sm sm:text-base">
                      <span className="text-brand-accent font-semibold">Customized from your genetic testing & bloodwork:</span>
                    </p>
                    <List>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">Tailored workout routine</span> based on genetic markers & performance goals
                        </span>
                      </ListItem>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">Precision diet plan</span> aligned with genetic metabolism & nutrient needs
                        </span>
                      </ListItem>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">Optimized sleep protocol</span> to maximize recovery, circadian rhythm, and cellular repair
                        </span>
                      </ListItem>
                      <ListItem className="group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform duration-200">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <span className="text-foreground group-hover:text-brand-accent transition-colors duration-200 text-sm sm:text-base">
                          <span className="font-semibold text-brand-accent">Holistic lifestyle coaching</span> covering stress management, productivity, and longevity habits
                        </span>
                      </ListItem>
                    </List>
                  </div>

                <div className="pt-4">
                  <Button 
                    asChild
                    size="lg" 
                    className="w-full rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-4 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 text-sm sm:text-base shadow-2xl shadow-brand-accent/20 hover:shadow-brand-accent/30 transition-all duration-300 hover:scale-105"
                  >
                    <a href="https://tally.so/r/mY8b4J" target="_blank" rel="noopener noreferrer" className="cursor-pointer">Book Free Consultation</a>
                  </Button>
                  <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3">
                    Cancel anytime • 30-day money-back guarantee
                  </p>
                </div>
                </div>
              </Body>
            </div>
          </Card>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <TextEffect 
            as="h3" 
            className="text-xl sm:text-2xl font-semibold mb-4"
            preset="fade"
            per="word"
          >
            Ready to Turn Back Your Calendar Age by 10 Years?
          </TextEffect>
          <TextEffect 
            as="p" 
            className="text-muted-foreground mb-8 max-w-2xl mx-auto text-sm sm:text-base"
            preset="fade"
            per="word"
            delay={0.1}
          >
            Schedule your free consultation to discover which membership package is perfect for your biohacking journey.
          </TextEffect>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold px-4 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 text-sm sm:text-base shadow-2xl shadow-brand-accent/20 hover:shadow-brand-accent/30 transition-all duration-300 hover:scale-105"
            >
              <a href="https://tally.so/r/mY8b4J" target="_blank" rel="noopener noreferrer" className="cursor-pointer">Book Free Consultation</a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="rounded-full border-brand-accent/30 hover:bg-brand-accent/10 hover:border-brand-accent/50 text-brand-accent hover:text-brand-accent cursor-pointer transition-all duration-300 px-4 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 text-sm sm:text-base"
            >
              <Link href="/biohacking-therapy" className="cursor-pointer">Learn About Genetic Testing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
