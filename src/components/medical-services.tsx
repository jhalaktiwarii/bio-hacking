"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  Zap, 
  Brain, 
  Dna, 
  Star, 
  Calendar, 
  ArrowRight, 
  Quote,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
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

interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  comment: string
  service: string
  date: string
  age: string
  results: string
}

interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  preferredDate: string
  age: string
  goals: string
  message: string
}

interface MedicalServicesProps {
  services?: Service[]
  testimonials?: Testimonial[]
  onBookAppointment?: (serviceId: string, formData: BookingFormData) => void
  showTestimonials?: boolean
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

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: '/api/placeholder/40/40',
    rating: 5,
    comment: 'The hormone therapy has completely transformed my energy levels and overall well-being. I feel 10 years younger! The team is incredibly knowledgeable and supportive.',
    service: 'Hormone Replacement Therapy',
    date: '2024-01-15',
    age: '42',
    results: 'Increased energy by 80%, better sleep, improved mood'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: '/api/placeholder/40/40',
    rating: 5,
    comment: 'Peptide therapy has enhanced my recovery time significantly. I feel stronger and more energetic than I have in years. The results speak for themselves.',
    service: 'Peptide Therapy',
    date: '2024-01-10',
    age: '38',
    results: '50% faster recovery, 15% muscle mass increase'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: '/api/placeholder/40/40',
    rating: 5,
    comment: 'The cognitive enhancement program helped me achieve mental clarity I never thought possible. My focus and memory have improved dramatically.',
    service: 'Cognitive & Mental Health',
    date: '2024-01-08',
    age: '35',
    results: '90% improvement in focus, reduced anxiety by 70%'
  },
  {
    id: '4',
    name: 'David Thompson',
    avatar: '/api/placeholder/40/40',
    rating: 5,
    comment: 'The genetic testing revealed exactly what my body needed. The personalized approach has been life-changing. I finally understand my body.',
    service: 'Genetic Testing',
    date: '2024-01-05',
    age: '45',
    results: 'Personalized nutrition plan, optimized supplement stack'
  }
]

const ServiceCard: React.FC<{
  service: Service
  onBookAppointment: (serviceId: string) => void
}> = ({ service, onBookAppointment }) => {
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
          
          <Button
            onClick={() => onBookAppointment(service.id)}
            className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white group-hover:shadow-lg group-hover:shadow-brand-accent/25 transition-all cursor-pointer"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card border border-border rounded-lg p-6 space-y-4 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-brand-accent/5 rounded-full -translate-y-10 translate-x-10" />
      
      <div className="flex items-center space-x-4 relative z-10">
        <Avatar className="w-12 h-12">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-brand-accent/10 text-brand-accent">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.service} • Age {testimonial.age}</p>
        </div>
        <div className="flex items-center space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center shadow-md">
                <Star className="w-3 h-3 fill-white text-white" />
              </div>
            ))}
        </div>
      </div>
      
      <div className="relative z-10">
        <Quote className="w-6 h-6 text-brand-accent/30 absolute -top-2 -left-1" />
        <p className="text-muted-foreground pl-6 mb-3">{testimonial.comment}</p>
        <div className="bg-brand-accent/10 rounded-lg p-3 ml-6">
          <p className="text-sm font-medium text-brand-accent flex items-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mr-2 shadow-sm">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            Results: {testimonial.results}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const BookingDialog: React.FC<{
  serviceId: string
  services: Service[]
  onSubmit: (formData: BookingFormData) => void
}> = ({ serviceId, services, onSubmit }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: serviceId,
    preferredDate: '',
    age: '',
    goals: '',
    message: ''
  })

  const selectedService = services.find(s => s.id === serviceId)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <DialogContent className="sm:max-w-md bg-background border-border">
      <DialogHeader>
        <DialogTitle className="text-foreground flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          Book Free Consultation
        </DialogTitle>
        <DialogDescription>
          Schedule your consultation for {selectedService?.title}
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="service">Service Interest</Label>
          <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="goals">Primary Goals</Label>
          <Textarea
            id="goals"
            value={formData.goals}
            onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
            placeholder="What are you hoping to achieve? (e.g., increase energy, improve sleep, enhance performance...)"
            rows={3}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Additional Notes</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Any specific concerns, questions, or health conditions we should know about..."
            rows={3}
          />
        </div>
        
        <Button type="submit" className="w-full bg-brand-accent hover:bg-brand-accent/90 cursor-pointer">
          <div className="w-4 h-4 rounded-sm bg-white/20 flex items-center justify-center mr-2">
            <Calendar className="w-3 h-3 text-white" />
          </div>
          Schedule Free Consultation
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          We&apos;ll contact you within 24 hours to confirm your appointment
        </p>
      </form>
    </DialogContent>
  )
}

const MedicalServices: React.FC<MedicalServicesProps> = ({
  services = defaultServices,
  testimonials = defaultTestimonials,
  onBookAppointment,
  showTestimonials = true,
  showBooking = true
}) => {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const handleBookAppointment = (serviceId: string) => {
    setSelectedService(serviceId)
  }

  const handleSubmitBooking = (formData: BookingFormData) => {
    onBookAppointment?.(selectedService!, formData)
    setSelectedService(null)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
                onBookAppointment={handleBookAppointment}
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
                  onBookAppointment={handleBookAppointment}
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
                <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white cursor-pointer">
                  <div className="w-4 h-4 rounded-sm bg-white/20 flex items-center justify-center mr-2">
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                  Call Now: (555) 123-4567
                </Button>
                <Button variant="outline" className="border-brand-accent/30 hover:bg-brand-accent/10 text-foreground hover:text-foreground cursor-pointer">
                  <div className="w-4 h-4 rounded-sm bg-brand-accent/20 flex items-center justify-center mr-2">
                    <Mail className="w-3 h-3 text-brand-accent" />
                  </div>
                  Email Us
                </Button>
                <Button variant="outline" className="border-brand-accent/30 hover:bg-brand-accent/10 text-foreground hover:text-foreground cursor-pointer">
                  <div className="w-4 h-4 rounded-sm bg-brand-accent/20 flex items-center justify-center mr-2">
                    <MapPin className="w-3 h-3 text-brand-accent" />
                  </div>
                  Visit Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Booking Dialog */}
        {showBooking && (
          <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
            {selectedService && (
              <BookingDialog
                serviceId={selectedService}
                services={services}
                onSubmit={handleSubmitBooking}
              />
            )}
          </Dialog>
        )}
      </div>
    </section>
  )
}

export default MedicalServices
