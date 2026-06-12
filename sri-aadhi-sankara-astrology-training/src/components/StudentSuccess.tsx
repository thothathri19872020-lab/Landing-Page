/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TESTIMONIALS } from '../data.ts';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Verified } from 'lucide-react';

export default function StudentSuccess() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 border-b border-slate-800 scroll-mt-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-500/20 font-mono">
            ★ Verified Student Outcomes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mt-4 mb-6">
            Trusted by Hundreds of Students
          </h2>
          <p className="text-lg text-slate-300">
            Read how our practical, prediction-focused approach has turned theoretical enthusiasts into confident, independent consulting astrologers.
          </p>
        </div>

        {/* Interface: Left Side Testimonials Slider, Right Side Trust Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="studentsuccess-container">
          
          {/* Slider box (Column 1) */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-10 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Massive quote graphic absolute */}
            <div className="absolute right-6 top-6 text-slate-900 pointer-events-none select-none">
              <Quote className="h-28 w-28 opacity-10" />
            </div>

            <div className="relative">
              {/* Star review stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-mono text-slate-400 ml-2 font-bold uppercase">
                  Rated 5.0 / 5.0
                </span>
              </div>

              {/* Text text */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8 italic">
                "{activeTestimonial.text}"
              </p>
            </div>

            {/* Testimonial author section and Slider triggers */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-900">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold font-display uppercase tracking-wide">
                  {activeTestimonial.name.split(' ').pop()?.[0]}
                  {activeTestimonial.name.split(' ')[1]?.[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white font-display text-sm sm:text-base">{activeTestimonial.name}</h4>
                  <span className="text-xs text-amber-400">{activeTestimonial.role}</span>
                </div>
              </div>

              {/* Navigation switches */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  {activeIdx + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Trust stats & pointers (Column 2) */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-6 tracking-tight flex items-center gap-2">
                <Verified className="h-5 w-5 text-amber-400" /> Why Students Trust Us
              </h3>
              
              <div className="space-y-4" id="trust-metrics-checklist">
                <div className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
                  <CheckCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold font-display text-slate-200 block">15+ Years Experience</strong>
                    <p className="text-xs text-slate-400 mt-1">Decades of cumulative research translated into clean predictive rules.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
                  <CheckCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold font-display text-slate-200 block">Hundreds of Students Trained</strong>
                    <p className="text-xs text-slate-400 mt-1">Our alumni practice professionally in over 12 countries globally.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
                  <CheckCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold font-display text-slate-200 block">LLP Registered Institution</strong>
                    <p className="text-xs text-slate-400 mt-1">A legally accountable research group delivering genuine Shastric education.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
                  <CheckCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold font-display text-slate-200 block">Real Student Success Stories</strong>
                    <p className="text-xs text-slate-400 mt-1">No paid reviews. Genuine student feedback showing real prediction outcomes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
                  <CheckCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold font-display text-slate-200 block">Live Interactive Classes & Practical Training</strong>
                    <p className="text-xs text-slate-400 mt-1">Direct classroom discussions of real blank horoscopes with expert checks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-900 text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">GLOBAL COMPLIANCE STATUS:</span>
              <strong className="text-amber-400 ml-1.5 font-mono text-[10px]">99.4% Student Satisfaction</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
