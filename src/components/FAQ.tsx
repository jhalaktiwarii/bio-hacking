'use client'

import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What is Bio Hacking Luxe's mission?",
      answer: "Our mission is simple: Turn back your calendar age by 10 years. We use state-of-the-art genetic testing and full-spectrum blood panels to uncover exactly what your body needs to perform at its best, providing a personalized blueprint for peak performance backed by science and supported by our 24/7 concierge-style team."
    },
    {
      question: "What genetic tests do you offer through ClarityX®?",
      answer: "We offer three precise genetic test options: Mindwell® for mental health medications (130+ FDA-approved drugs covering depression, anxiety, bipolar, ADHD, OCD, PTSD), Max Rx® for whole-body medication optimization (275+ medications across 31 therapeutic categories), and Thrive for nutritional longevity insights and personalized diet recommendations."
    },
    {
      question: "How does the genetic testing process work?",
      answer: "Choose your test based on your goals, order your at-home kit, and activate it via our streamlined portal. Provide a quick cheek swab, ship it back using the pre-paid envelope, and receive detailed, actionable reports with help from our team and your healthcare provider."
    },
    {
      question: "What cognitive and mental health treatments do you offer?",
      answer: "We offer Ketamine therapy for treatment-resistant depression and anxiety, NAD+ therapy for cellular energy and brain health, Oxytocin therapy for emotional balance and connection, and Methylene Blue for neuroprotection and focus. All treatments are doctor-prescribed and backed by our genetic swab kit analysis."
    },
    {
      question: "What makes your skin repair treatments different?",
      answer: "Unlike over-the-counter creams or temporary solutions like Botox®, our doctor-prescribed skin creams and injectable formulas target root causes of skin aging by stimulating natural healing, collagen production, and cellular repair. We also offer genetic skin analysis to determine which treatments work best with your specific skin type."
    },
    {
      question: "How do your hair loss treatments work?",
      answer: "Our doctor-prescribed hair loss therapies use proprietary formulations and patented technology that penetrate deep into the scalp for maximum effectiveness. Unlike store-bought products, our treatments are designed for both men and women and avoid the side effects commonly associated with over-the-counter products."
    },
    {
      question: "What injectable vitamins do you offer?",
      answer: "We offer medical-grade injectable vitamins including NAD+ for cellular energy, Methylene Blue for cognitive clarity, Vitamin B12 for energy, Vitamin D3 for immunity, Vitamin C for antioxidant support, Glutathione for detox and skin brightening, Biotin for hair/skin/nails, and MIC/B12 fat burner injections. All provide 100% absorption compared to oral supplements."
    },
    {
      question: "Can I reorder my medications online?",
      answer: "Yes, we offer a secure, HIPAA-compliant reorder system for all your medications including HRT, Peptide Therapy, Weight Loss prescriptions, Sexual Wellness medications, and Hair Restoration treatments. Our concierge team processes requests within 24 hours with discreet packaging and delivery."
    },
    {
      question: "Do I need a doctor's prescription for treatments?",
      answer: "Yes, all our medical treatments require physician oversight. Our licensed medical team evaluates your genetic test results and health history to create personalized treatment plans. We work with your existing healthcare provider or can connect you with our network of specialists."
    },
    {
      question: "Can I test my child for genetic disorders?",
      answer: "Yes, we offer genetic testing for children with appropriate parental consent and medical supervision. Our pediatric genetic testing can help identify potential health risks early, allowing for proactive interventions and personalized healthcare strategies. We work closely with pediatric specialists to ensure safe and appropriate testing protocols for children of all ages."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 relative fade-up">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Frequently Asked <span className="text-brand-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Everything you need to know about our genetic testing and medical services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-brand-accent/5 transition-colors"
              >
                <h3 className="text-lg font-light text-foreground pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus size={24} weight="light" className="text-primary" />
                  ) : (
                    <Plus size={24} weight="light" className="text-primary" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions info */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block px-8 py-6">
            <h3 className="text-xl font-light mb-3 text-foreground">
              Still have questions?
            </h3>
            <p className="text-muted-foreground">
              Our team is here to help you optimize your biohacking journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;