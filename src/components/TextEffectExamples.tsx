'use client';
import React from 'react';
import { TextEffect } from '@/components/core/text-effect';

/**
 * TextEffect Examples - Motion Primitives Integration
 * 
 * This file demonstrates all the different ways to use the Motion Primitives TextEffect component
 * for line-by-line animations that trigger on scroll.
 */

export function TextEffectExamples() {
  return (
    <div className="space-y-16 p-8 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">Basic TextEffect Examples</h2>
          
          {/* Word by Word Animation */}
          <div className="p-6 bg-slate-800 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-accent mb-3">Word by Word (per="word")</h3>
            <TextEffect 
              preset="fade-in-blur"
              per="word"
              speedReveal={1.2}
              speedSegment={0.8}
              className="text-white text-lg"
            >
              This text animates word by word with a beautiful fade-in-blur effect.
            </TextEffect>
          </div>

          {/* Character by Character Animation */}
          <div className="p-6 bg-slate-800 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-accent mb-3">Character by Character (per="char")</h3>
            <TextEffect 
              preset="blur"
              per="char"
              speedReveal={0.8}
              speedSegment={0.5}
              className="text-white text-lg"
            >
              Each character animates individually with a blur effect.
            </TextEffect>
          </div>

          {/* Line by Line Animation */}
          <div className="p-6 bg-slate-800 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-accent mb-3">Line by Line (per="line")</h3>
            <TextEffect 
              preset="slide"
              per="line"
              speedReveal={1.1}
              speedSegment={0.7}
              className="text-white text-lg leading-relaxed"
            >
              This is the first line of text that will animate in.
              This is the second line that follows after the first.
              This is the third line completing the paragraph animation.
            </TextEffect>
          </div>
        </section>

        {/* Preset Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">Animation Presets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-accent mb-3">Fade-in-blur</h3>
              <TextEffect 
                preset="fade-in-blur"
                per="word"
                speedReveal={1.1}
                speedSegment={0.3}
                className="text-white"
              >
                Elegant fade with blur effect
              </TextEffect>
            </div>

            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-accent mb-3">Scale</h3>
              <TextEffect 
                preset="scale"
                per="word"
                speedReveal={1.0}
                speedSegment={0.4}
                className="text-white"
              >
                Words scale up from nothing
              </TextEffect>
            </div>

            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-accent mb-3">Slide</h3>
              <TextEffect 
                preset="slide"
                per="word"
                speedReveal={1.2}
                speedSegment={0.5}
                className="text-white"
              >
                Text slides up into view
              </TextEffect>
            </div>

            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-accent mb-3">Blur</h3>
              <TextEffect 
                preset="blur"
                per="word"
                speedReveal={1.3}
                speedSegment={0.6}
                className="text-white"
              >
                Text unblurs as it appears
              </TextEffect>
            </div>
          </div>
        </section>

        {/* Paragraph Examples - Line by Line */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Paragraph Animations (Line by Line)</h2>
          
          <div className="space-y-8">
            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-accent mb-4">Mission Statement</h3>
              <TextEffect 
                preset="fade-in-blur"
                per="line"
                speedReveal={1.1}
                speedSegment={0.6}
                delay={0.1}
                className="text-white leading-relaxed"
              >
                We use state-of-the-art genetic testing and full-spectrum blood panels to uncover exactly what your body needs to perform at its best.
                By analyzing your genetics, we can determine which foods, medications, peptides, and hormonal balancing protocols are most effective for you.
                We go beyond the basics—our approach also identifies the ideal diet, customized workout plans, optimal training times, and even your most efficient sleep regimen.
              </TextEffect>
            </div>

            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-accent mb-4">Service Description</h3>
              <TextEffect 
                preset="slide"
                per="line"
                speedReveal={1.2}
                speedSegment={0.7}
                delay={0.2}
                className="text-white leading-relaxed"
              >
                At Bio Hacking Luxe, we believe in using the body's own natural signaling power to unlock transformation.
                Peptide Therapy is one of the most advanced tools in modern medicine, helping you optimize performance, restore balance, and achieve results that last.
                Our protocols are designed to be incorporated into your current routine so that the transition feels natural and sustainable.
              </TextEffect>
            </div>
          </div>
        </section>

        {/* Speed Control Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">Speed Control Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-accent mb-3">Slow Animation</h3>
              <TextEffect 
                preset="fade-in-blur"
                per="word"
                speedReveal={0.5}
                speedSegment={0.3}
                className="text-white"
              >
                Slow and smooth animation
              </TextEffect>
            </div>

            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-accent mb-3">Normal Speed</h3>
              <TextEffect 
                preset="fade-in-blur"
                per="word"
                speedReveal={1.0}
                speedSegment={0.5}
                className="text-white"
              >
                Normal speed animation
              </TextEffect>
            </div>

            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-brand-accent mb-3">Fast Animation</h3>
              <TextEffect 
                preset="fade-in-blur"
                per="word"
                speedReveal={2.0}
                speedSegment={1.0}
                className="text-white"
              >
                Fast and snappy animation
              </TextEffect>
            </div>
          </div>
        </section>

        {/* Real-world Usage Example */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Real-world Usage Example</h2>
          
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700">
            <TextEffect 
              as="h1"
              preset="fade-in-blur"
              per="word"
              speedReveal={1.2}
              speedSegment={0.8}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
            >
              Transform Your Life with Science-Driven Wellness
            </TextEffect>
            
            <TextEffect 
              as="p"
              preset="fade-in-blur"
              per="line"
              speedReveal={1.1}
              speedSegment={0.6}
              delay={0.3}
              className="text-xl text-slate-300 leading-relaxed mb-8"
            >
              At Bio Hacking Luxe, we combine cutting-edge genetic testing with personalized wellness protocols to help you achieve peak performance.
              Our comprehensive approach addresses everything from nutrition and fitness to sleep optimization and hormonal balance.
              Join thousands who have transformed their health through our science-backed methodology.
            </TextEffect>

            <TextEffect 
              as="div"
              preset="slide"
              per="word"
              speedReveal={1.3}
              speedSegment={0.7}
              delay={0.6}
              className="flex gap-4"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-brand-accent to-brand-primary text-white rounded-full font-semibold hover:from-brand-accent/90 hover:to-brand-primary/90 transition-all duration-300">
                Get Started Today
              </button>
              <button className="px-8 py-3 border border-slate-600 text-slate-300 rounded-full font-semibold hover:border-brand-accent hover:text-brand-accent transition-all duration-300">
                Learn More
              </button>
            </TextEffect>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">Usage Guidelines</h2>
          
          <div className="p-6 bg-slate-800 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-accent mb-4">Key Props for Line-by-Line Animations:</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <code className="text-brand-accent">per="line"</code> - Animates each line separately (perfect for paragraphs)
              </div>
              <div>
                <code className="text-brand-accent">preset="fade-in-blur"</code> - Beautiful fade with blur effect
              </div>
              <div>
                <code className="text-brand-accent">speedReveal={1.1}</code> - Controls stagger timing between lines
              </div>
              <div>
                <code className="text-brand-accent">speedSegment={0.6}</code> - Controls individual line animation speed
              </div>
              <div>
                <code className="text-brand-accent">delay={0.2}</code> - Initial delay before animation starts
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-800 rounded-lg">
            <h3 className="text-lg font-semibold text-brand-accent mb-4">Best Practices:</h3>
            <div className="space-y-2 text-slate-300">
              <div>• Use <code className="text-brand-accent">per="line"</code> for paragraphs and longer text blocks</div>
              <div>• Use <code className="text-brand-accent">per="word"</code> for headings and short phrases</div>
              <div>• Use <code className="text-brand-accent">per="char"</code> for dramatic single words or logos</div>
              <div>• Adjust <code className="text-brand-accent">speedReveal</code> and <code className="text-brand-accent">speedSegment</code> to match your brand's feel</div>
              <div>• Use different <code className="text-brand-accent">delay</code> values to create cascading effects</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
