/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, ArrowRight, Award, Flame, Sparkles, CheckCircle2, Star, CreditCard } from 'lucide-react';

export default function PremiumDirectEnrollment() {
  return (
    <section id="direct-enrollment" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-b border-amber-500/10">
      {/* Astrological grid and nebula background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-amber-500/15 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-500/20 font-mono">
            <Flame className="h-3.5 w-3.5 text-amber-400 animate-pulse" /> Direct Admission Desk
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mt-4 mb-6">
            Guaranteed Academy Enrollment
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Skip the live orientation queue. Pay your course tuition securely through our certified Razorpay desk and instantly secure lifetime admission into the upcoming live academy training batch.
          </p>
        </div>

        {/* Master Enrollment container box */}
        <div className="max-w-4xl mx-auto bg-slate-900 border-2 border-amber-500/20 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Subtle VIP Ribbon */}
          <div className="absolute top-5 right-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-mono tracking-widest uppercase font-black px-3.5 py-1 rounded-full shadow">
            Direct Admission 2026
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Column A: Invaluable Features included */}
            <div className="p-8 sm:p-10 md:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">The Comprehensive Astrologer Certification</h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">AUTHORIZED BY SRI AADHI SANKARA ASTRO RESEARCH LLP</p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-semibold text-slate-200">Full 7-Pillar Shastric Syllabus Path</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Learn signs, Nakshatras, Panchanga, divisional charts, dasha metrics & transit analysis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-semibold text-slate-200">Strictly Live Interactive Seminars</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Live Classes Only - No recordings. Ask your doubts and analyze real horoscopes dynamically in real time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-semibold text-slate-200">Personalized Spreadsheet Toolsets</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Get customized dashboards & mathematical charts to streamline your speed during consults.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-semibold text-slate-200">Direct Mentor Feedback Loop</strong>
                    <p className="text-slate-400 text-xs mt-0.5">Get 24/7 student chat access and practical consultation blueprint verification on client cases.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                <ShieldCheck className="h-4 w-4 animate-pulse" />
                <span>Government Recognized LLPIN: B18841-1040 Certified Institute</span>
              </div>
            </div>

            {/* Column B: Interactive Payment pricing callout */}
            <div className="p-8 sm:p-10 md:col-span-5 bg-slate-900/40 border-t md:border-t-0 md:border-l border-slate-800/80 flex flex-col justify-between space-y-8">
              
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold">BATCH ADMISSION GATEWAY</span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-3xl sm:text-4xl font-black font-display text-white">Full Program</span>
                    <span className="text-xs text-slate-400 line-through">Batch Reserved</span>
                  </div>
                  <span className="block text-xs text-emerald-400 font-semibold font-mono mt-1">
                    ✓ Lifetime Enrolled Student License
                  </span>
                </div>

                {/* Highly structured policy callout container to maximize trust score */}
                <div className="bg-slate-955/80 border border-slate-800 p-4 rounded-xl space-y-3.5">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold">⚠️ Mandatory Enrollment Terms</span>
                  
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-2 text-rose-300 font-sans leading-relaxed">
                      <span className="inline-flex items-center justify-center h-4.5 w-4.5 rounded-full bg-rose-500/10 text-rose-400 font-mono text-[9px] shrink-0 mt-0.5">1</span>
                      <p>
                        <strong className="text-rose-400 font-semibold font-mono uppercase text-[10px] tracking-wider block">Live-Only Training:</strong> 
                        Absolutely no lecture archives or recordings are provided. Group attendance is strictly mandatory.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-2 text-rose-300 font-sans leading-relaxed pt-2.5 border-t border-slate-800/60">
                      <span className="inline-flex items-center justify-center h-4.5 w-4.5 rounded-full bg-rose-500/10 text-rose-400 font-mono text-[9px] shrink-0 mt-0.5">2</span>
                      <p>
                        <strong className="text-rose-400 font-semibold font-mono uppercase text-[10px] tracking-wider block">Strict No Refund Policy:</strong> 
                        Tuition fees are locked and completely non-refundable once your registration seats are assigned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <a
                  id="razorpay-direct-payment-btn"
                  href="https://rzp.io/rzp/Gj3OymLe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 active:scale-[0.98] text-slate-950 font-black rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer text-center select-none"
                >
                  <CreditCard className="h-4 w-4 shrink-0" /> Pay Course Fee (Razorpay)
                </a>
                
                {/* Visual SSL Security Indicator tags */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-400 font-mono">
                    <ShieldCheck className="h-3 w-3 text-emerald-400" />
                    <span>SSL Encrypted Razorpay Gateway</span>
                  </div>
                  <p className="text-[9px] text-slate-500 font-mono text-center leading-normal max-w-[240px] mx-auto">
                    Tuition grants instant live-only academy key card access.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
