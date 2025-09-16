"use client"

import React from 'react'
import MedicalServices from './medical-services'
import { Heart, Zap, Brain, Dna } from 'lucide-react'

// Example of how to use the MedicalServices component with custom data
export default function MedicalServicesExample() {
  const handleBookAppointment = (serviceId: string, formData: any) => {
    console.log('Booking appointment for:', serviceId, formData)
    // Here you would typically send the data to your backend API
    // Example: await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(formData) })
  }

  const handleSubmitFeedback = (feedback: any) => {
    console.log('Feedback submitted:', feedback)
    // Here you would typically send the feedback to your backend API
    // Example: await fetch('/api/feedback', { method: 'POST', body: JSON.stringify(feedback) })
  }

  // Custom services data (optional - will use defaults if not provided)
  const customServices = [
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
    // Add more custom services as needed
  ]

  // Custom testimonials data (optional - will use defaults if not provided)
  const customTestimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      comment: 'The hormone therapy has completely transformed my energy levels and overall well-being. I feel 10 years younger!',
      service: 'Hormone Replacement Therapy',
      date: '2024-01-15',
      age: '42',
      results: 'Increased energy by 80%, better sleep, improved mood'
    },
    // Add more custom testimonials as needed
  ]

  return (
    <MedicalServices
      // Use custom data (optional)
      services={customServices}
      
      // Event handlers
      onBookAppointment={handleBookAppointment}
      
      // Configuration options
      showBooking={true}
    />
  )
}

// Alternative: Use with default data (simplest approach)
export function SimpleMedicalServices() {
  return <MedicalServices />
}
