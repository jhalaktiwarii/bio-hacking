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
      question: "What exactly is genetic testing, and why is it important?",
      answer: "Genetic testing looks at your DNA to uncover how your body responds to nutrition, exercise, hormones, medications, and even stress. At Bio Hacking Luxe, we offer three advanced cheek-swab tests: Max Rx® – A comprehensive test that evaluates both mental health and medication metabolism. It identifies genetic markers tied to focus, mood regulation, learning patterns, and risks for conditions such as anxiety, depression, ADHD, autism spectrum disorder, PTSD, schizophrenia, addiction tendencies, and sleep disorders. It also analyzes how your body metabolizes 275+ prescription medications and supplements, helping us avoid trial-and-error prescribing and create safe, effective protocols tailored to you. Thrive® – Delivers personalized nutrition recommendations based on your genetics. Discover your body's unique genetic traits related to nutrient processing (like Folate or Vitamin D), food sensitivities (like lactose or caffeine), and metabolic health factors (like genetic weight or inflammation risk). Get actionable diet and supplement guidance tailored to optimize your wellness based on your DNA. Clear™ – Designed to give you key insights into your skin's aging and provide personalized recommendations. This test goes beyond skin type to reveal your skin's unique genetic traits, offering action steps for healthier, more youthful skin while eliminating products that may be harmful to your skin type. From your results, we provide a detailed custom 12-week program that includes a diet plan, workout regimen (with exact training times), sleep protocols, and lifestyle recommendations. You'll also have 24/7 concierge support, so you're never left guessing—we guide you every step of the way."
    },
    {
      question: "How does genetic testing help with mental health?",
      answer: "Our Max Rx® genetic test is designed to uncover markers tied to focus, mood regulation, learning patterns, and risks for conditions such as anxiety, depression, ADHD, autism spectrum disorder, PTSD, schizophrenia, addiction tendencies, and sleep disorders. By understanding how your brain processes neurotransmitters—and how your body metabolizes 275+ prescription medications—we can reduce trial-and-error treatments. Instead, we create nutrition and lifestyle protocols that address the root cause naturally, and when medications are necessary, ensure they are chosen safely and effectively for your DNA."
    },
    {
      question: "What is hormone replacement therapy (HRT)?",
      answer: "HRT is a medically guided therapy that restores your hormone levels (like testosterone, estrogen, or thyroid) to optimal ranges. This helps with energy, mood, weight control, sexual wellness, and healthy aging. At Bio Hacking Luxe, HRT is customized for each client based on lab work + genetics. Every client receives a 12-week blueprint designed from a full-spectrum blood panel and genetic testing. This blueprint includes a diet plan, personalized workout program, sleep optimization, and lifestyle protocols—all supported by our 24/7 concierge service."
    },
    {
      question: "What are peptides, and how do they work?",
      answer: "Peptides are short chains of amino acids that act as \"signals\" in the body. They help with recovery, fat loss, anti-aging, muscle growth, cognitive performance, and even healing from injury. Think of peptides as targeted tools to help your body repair and perform at its best."
    },
    {
      question: "How can men benefit from Bio Hacking Luxe?",
      answer: "Men often seek us out for testosterone optimization, fat loss, muscle building, sexual wellness, and sharper focus at work. Our programs combine peptides, HRT, genetic testing, and lifestyle coaching to help men regain confidence, energy, and peak performance at any age."
    },
    {
      question: "How can women benefit from Bio Hacking Luxe?",
      answer: "Women benefit from protocols tailored to hormonal balance, fertility, pregnancy support, menopause relief, skin and hair health, emotional resilience, and sexual wellness. Many clients see improved sleep, mood, libido, and body composition—without the trial and error of generic programs. The Clear™ test is especially powerful for women seeking personalized insights into skin aging and the safest, most effective skincare routines."
    },
    {
      question: "Can children benefit from genetic testing?",
      answer: "Yes. Our Max Rx® genetic test uses a simple cheek swab to uncover markers tied to focus, learning, mood, and mental health. This is especially powerful for kids struggling with ADHD, anxiety, depression, bipolar disorder, autism spectrum disorder, OCD, PTSD, sleep disorders, schizophrenia, or addiction tendencies. Max Rx® also analyzes how a child's body may respond to 275+ prescription medications, giving doctors and parents crucial insight to make safer, more effective choices. In many cases, results help guide nutrition, supplementation, and lifestyle protocols that target the root cause—reducing or eliminating the need for heavy medications."
    },
    {
      question: "Is this safe for children?",
      answer: "Absolutely. We do not give children hormone or peptide therapy. For kids, we focus strictly on genetic insights, diet, supplementation, and natural strategies to improve mood, focus, and behavior—without guesswork. Parents often find this empowers them to better support their child's long-term health."
    },
    {
      question: "How quickly can I expect results?",
      answer: "Many clients notice improvements in energy, mood, and focus within weeks of starting a program, but results vary depending on the therapy: ⚡ Immediate (30 minutes – 1 day): Certain peptides (for focus, mood, or sexual wellness) can deliver fast-acting effects. Some clients report mental clarity, calmness, or energy boosts after their very first dose. 🔑 Short-Term (1 – 4 weeks): Peptides for fat loss, recovery, and sleep begin to show measurable benefits. Early hormone adjustments may improve energy, libido, and mood regulation. Nutritional corrections from the Thrive® test also begin helping. 🔥 Mid-Term (4 – 8 weeks): HRT stabilizes, bringing significant improvements in energy, focus, muscle tone, and weight control. Skin protocols from the Clear™ test show visible benefits. Peptides for healing and regeneration (tendons, muscles, tissues) demonstrate strong results. 🌟 Long-Term (3 – 6 months+): The full effect of your 12-week blueprint emerges—optimized sleep cycles, stronger workouts, leaner body composition, and improved mental health from Max Rx® insights. Anti-aging and longevity benefits compound with ongoing support. ✨ Key Takeaway: Some peptides act immediately, while others take weeks. HRT and genetic protocols build lasting changes over time. With Bio Hacking Luxe, you'll never be left guessing—we guide you from day one with 24/7 concierge support."
    },
    {
      question: "Why choose Bio Hacking Luxe over traditional medicine?",
      answer: "Traditional medicine often treats symptoms, not causes. Bio Hacking Luxe goes deeper—using genetic testing, advanced labs, peptide therapy, and concierge-style care to build a custom protocol for you. Our goal is to help men, women, and children live younger, stronger, and sharper—without depending on trial-and-error approaches."
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