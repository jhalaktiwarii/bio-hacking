"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Zap, 
  Brain, 
  Dna, 
  ArrowRight, 
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TextEffect } from '@/components/core/text-effect'

interface Service {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  price: string
  duration: string
  category: string
  benefits: string[]
}


interface MedicalServicesProps {
  services?: Service[]
  onBookAppointment?: (serviceId: string, formData: Record<string, unknown>) => void
  showBooking?: boolean
}

const defaultServices: Service[] = [
  {
    id: 'hormone-therapy',
    icon: <Heart className="w-8 h-8" />,
    title: 'Hormone Replacement Therapy',
    description: 'Restore energy, focus, vitality, and confidence with personalized hormone optimization protocols tailored to your unique biology.',
    features: ['Comprehensive hormone testing', 'Bioidentical hormone replacement', 'Personalized treatment plans', 'Regular monitoring & adjustments'],
    price: 'From $299',
    duration: '60 min consultation',
    category: 'Hormonal Health',
    benefits: ['Increased energy levels', 'Improved sleep quality', 'Enhanced cognitive function', 'Better mood stability']
  },
  {
    id: 'peptide-therapy',
    icon: <Zap className="w-8 h-8" />,
    title: 'Peptide Therapy',
    description: 'Unlock your body\'s potential with targeted peptides for weight loss, performance, cognitive function, and sexual wellness.',
    features: ['Growth hormone peptides', 'Recovery enhancement', 'Anti-aging protocols', 'Performance optimization'],
    price: 'From $199',
    duration: '45 min session',
    category: 'Performance',
    benefits: ['Faster recovery times', 'Enhanced muscle growth', 'Improved fat loss', 'Better sleep quality']
  },
  {
    id: 'cognitive-health',
    icon: <Brain className="w-8 h-8" />,
    title: 'Cognitive & Mental Health',
    description: 'Advanced treatments including Ketamine, NAD+, and Methylene Blue therapy for peak mental performance and emotional balance.',
    features: ['Neurofeedback training', 'Cognitive assessment', 'Nootropic protocols', 'Stress optimization'],
    price: 'From $249',
    duration: '90 min session',
    category: 'Mental Health',
    benefits: ['Enhanced focus & clarity', 'Reduced anxiety & depression', 'Improved memory', 'Better stress management']
  },
  {
    id: 'genetic-testing',
    icon: <Dna className="w-8 h-8" />,
    title: 'Genetic Testing',
    description: 'ClarityX® partnerships deliver Mindwell®, Max Rx®, and Thrive genetic tests to personalize your treatment plan.',
    features: ['Comprehensive DNA analysis', 'Personalized recommendations', 'Health risk assessment', 'Nutrition optimization'],
    price: 'From $399',
    duration: '30 min consultation',
    category: 'Diagnostics',
    benefits: ['Personalized treatment plans', 'Optimized nutrition', 'Preventive health insights', 'Better medication response']
  }
]


const ServiceCard: React.FC<{
  service: Service
  onBookAppointment?: (serviceId: string, formData: Record<string, unknown>) => void
  showBooking?: boolean
}> = ({ service, onBookAppointment, showBooking = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full bg-card border-border hover:border-brand-accent/50 transition-all duration-300 group relative overflow-hidden">
        {/* Gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <CardHeader className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <motion.div
              className="p-3 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary text-white group-hover:from-brand-accent/90 group-hover:to-brand-primary/90 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {service.icon}
            </motion.div>
            <Badge variant="outline" className="text-xs border-brand-accent/30 text-brand-accent">
              {service.category}
            </Badge>
          </div>
          <div>
            <CardTitle className="text-xl text-foreground group-hover:text-brand-accent transition-colors">
              {service.title}
            </CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              {service.description}
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6 relative z-10">
          <div className="space-y-2">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-3 flex-shrink-0" />
                {feature}
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">Key Benefits:</h4>
            <div className="flex flex-wrap gap-1">
              {service.benefits.map((benefit, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
            <span>{service.duration}</span>
            <span className="font-semibold text-brand-accent">{service.price}</span>
          </div>
          
          {showBooking && (
            onBookAppointment ? (
              <button
                onClick={() => onBookAppointment(service.id, { service: service.title })}
                className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white group-hover:shadow-lg group-hover:shadow-brand-accent/25 transition-all cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <a
                href={service.id === 'hormone-therapy' ? 'https://tally.so/r/m6oY2k' : 
                      service.id === 'peptide-therapy' ? 'https://tally.so/r/3E9Y1X' :
                      service.id === 'cognitive-health' ? 'https://tally.so/r/w45Y7Y' :
                      service.id === 'genetic-testing' ? 'https://tally.so/r/mY8b4J' :
                      'https://tally.so/r/mY8b4J'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white group-hover:shadow-lg group-hover:shadow-brand-accent/25 transition-all cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            )
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}



const MedicalServices: React.FC<MedicalServicesProps> = ({
  services = defaultServices,
  onBookAppointment,
  showBooking = true
}) => {

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-brand-accent/30 text-brand-accent">
            Advanced Biohacking Services
          </Badge>
          <TextEffect 
            as="h2" 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            preset="fade"
            per="word"
          >
            Our Medical Services
          </TextEffect>
          <TextEffect 
            as="p" 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            preset="fade"
            per="word"
            delay={0.2}
          >
            From genetic testing to hormone therapy, we offer comprehensive medical services to turn back your calendar age by 10 years and improve your daily quality of life.
          </TextEffect>
        </motion.div>

        {/* Services Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard
                service={service}
                onBookAppointment={onBookAppointment}
                showBooking={showBooking}
              />
            </motion.div>
          ))}
        </div>

        {/* Services Carousel - Mobile */}
        <div className="md:hidden mb-20">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <ServiceCard
                  service={service}
                  onBookAppointment={onBookAppointment}
                  showBooking={showBooking}
                />
              </motion.div>
            ))}
          </div>
        </div>

         

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 border-brand-accent/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent" />
            <CardContent className="p-8 relative z-10">
              <TextEffect 
                as="h3" 
                className="text-2xl font-bold text-foreground mb-4"
                preset="fade"
                per="word"
              >
                Ready to Turn Back Your Calendar Age by 10 Years?
              </TextEffect>
              <TextEffect 
                as="p" 
                className="text-muted-foreground mb-6 max-w-2xl mx-auto"
                preset="fade"
                per="word"
                delay={0.1}
              >
                Schedule a free consultation with our expert team to create a personalized 
                optimization plan tailored to your unique goals and needs.
              </TextEffect>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+15551234567"
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition-all"
                >
                  <div className="w-4 h-4 rounded-sm bg-white/20 flex items-center justify-center mr-2">
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                  Call Now: (555) 123-4567
                </a>
                <a
                  href="mailto:info@biohackingluxe.com"
                  className="border-brand-accent/30 hover:bg-brand-accent/10 text-foreground hover:text-foreground cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium border transition-all"
                >
                  <div className="w-4 h-4 rounded-sm bg-brand-accent/20 flex items-center justify-center mr-2">
                    <Mail className="w-3 h-3 text-brand-accent" />
                  </div>
                  Email Us
                </a>
                <a
                  href="https://tally.so/r/mY8b4J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-brand-accent/30 hover:bg-brand-accent/10 text-foreground hover:text-foreground cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium border transition-all"
                >
                  <div className="w-4 h-4 rounded-sm bg-brand-accent/20 flex items-center justify-center mr-2">
                    <MapPin className="w-3 h-3 text-brand-accent" />
                  </div>
                  Book Consultation
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}

export default MedicalServices
