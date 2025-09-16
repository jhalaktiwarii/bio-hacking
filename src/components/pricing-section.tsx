import React from 'react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
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
import { Check, Star, Crown } from 'lucide-react';

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
          <Card className="max-w-2xl">
            <Header>
              <Plan>
                <PlanName className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
                    <Crown className="w-4 h-4 text-white" />
                  </div>
                  Luxe Concierge Membership
                </PlanName>
                <Badge className="bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 text-brand-accent dark:text-brand-accent border-brand-accent/30 flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
                    <Star className="w-2 h-2 text-white" />
                  </div>
                  Premium
                </Badge>
              </Plan>
              <Description>
                The ultimate biohacking experience for peak performance, longevity, and luxury lifestyle integration.
              </Description>
              <Price>
                <MainPrice className="text-4xl font-extrabold">$199</MainPrice>
                <Period>/month</Period>
              </Price>
            </Header>

            <Body>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
                      <Crown className="w-3 h-3 text-white" />
                    </div>
                    Includes all Elite Membership benefits, plus:
                  </h4>
                  <List>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>Unlimited peptide and sexual wellness adjustments with direct pharmacy coordination</span>
                    </ListItem>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>VIP hormone therapy management with priority NP/MD access</span>
                    </ListItem>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>Quarterly in-depth performance reviews with proprietary &quot;10 Years Younger Protocol&quot;</span>
                    </ListItem>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>Complimentary access to all hotel-based wellness events & retreats (Amrit Hotel priority seating)</span>
                    </ListItem>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>Annual &quot;Longevity Blueprint&quot; genetic + lifestyle report with actionable protocols</span>
                    </ListItem>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>Dedicated Luxe Coordinator – personal liaison for scheduling, results interpretation, and lifestyle concierge</span>
                    </ListItem>
                  </List>
                </div>

                <Separator>Personalized Coaching Suite</Separator>

                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Customized from your genetic testing & bloodwork:
                  </p>
                  <List>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>Tailored workout routine based on genetic markers & performance goals</span>
                    </ListItem>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>Precision diet plan aligned with genetic metabolism & nutrient needs</span>
                    </ListItem>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>Optimized sleep protocol to maximize recovery, circadian rhythm, and cellular repair</span>
                    </ListItem>
                    <ListItem>
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>Holistic lifestyle coaching covering stress management, productivity, and longevity habits</span>
                    </ListItem>
                  </List>
                </div>

                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="w-full h-12 rounded-full bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-accent/90 hover:to-brand-primary/90 text-white font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-brand-accent/25"
                    style={{ minHeight: '48px' }}
                  >
                    Start Your Luxe Journey
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    Cancel anytime • 30-day money-back guarantee
                  </p>
                </div>
              </div>
            </Body>
          </Card>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <TextEffect 
            as="h3" 
            className="text-2xl font-semibold mb-4"
            preset="fade"
            per="word"
          >
            Ready to Turn Back Your Calendar Age by 10 Years?
          </TextEffect>
          <TextEffect 
            as="p" 
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            preset="fade"
            per="word"
            delay={0.1}
          >
            Schedule your free consultation to discover which membership package is perfect for your biohacking journey.
          </TextEffect>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="rounded-full bg-brand-accent hover:bg-brand-accent/90 text-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
              style={{ minHeight: '48px' }}
            >
              Schedule Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-brand-accent/30 hover:bg-brand-accent/10 hover:border-brand-accent/50 text-brand-accent hover:text-brand-accent cursor-pointer transition-all duration-300"
              style={{ minHeight: '48px' }}
            >
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
