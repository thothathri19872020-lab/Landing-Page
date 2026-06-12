/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { CheckCircle2, ChevronRight, Clock, Star, Users, Award, ShieldAlert, ShieldCheck, ExternalLink } from 'lucide-react';

interface HeroProps {
  onJoinSession: () => void;
  onNavigateToPractice?: () => void;
}

export default function Hero({ onJoinSession, onNavigateToPractice }: HeroProps) {
  // Real-time countdown timer structure
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 53 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset just for preview persistence
          return { hours: 4, minutes: 45, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-950 overflow-hidden text-white border-b border-amber-500/10">
      
      {/* Background celestial particles and nebula effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-amber-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '18s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Description Copy Panel */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left" id="hero-marketing-copy">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 px-3.5 py-1.5 rounded-full shadow-lg" id="hero-trust-badge">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-amber-300 font-mono tracking-wider uppercase">
                LLP Registered Trustworthy Institute
              </span>
            </div>

            {/* Main title */}
            <div className="space-y-4">
              <span className="block text-amber-400 font-mono uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
                Become a Confident Astrologer
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] tracking-tight bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Practical Prediction-Based <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent italic">Training</span>
              </h1>
            </div>

            {/* Paragraph Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Learn Astrology from a <span className="text-amber-400 font-semibold">15+ Year Expert</span> and transform your dusty theoretical knowledge into highly accurate predictions through real horoscope synthesis, live case studies, and structured step-by-step guidance.
            </p>

            {/* Check benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0" id="hero-checked-benefits">
              <div className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-900 shadow">
                <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 font-display">Beginner Friendly Roadmap</span>
              </div>
              <div className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-900 shadow">
                <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 font-display">Practical Prediction Exercises</span>
              </div>
              <div className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-900 shadow">
                <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 font-display">Personal Expert Support</span>
              </div>
              <div className="flex items-center gap-3.5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-900 shadow">
                <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 font-display">Career & Income Opportunities</span>
              </div>
            </div>

            {/* Action buttons and Countdown */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  id="hero-btn-master-cta"
                  onClick={onJoinSession}
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-8 py-4 rounded-xl shadow-lg shadow-amber-500/10 tracking-widest uppercase text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Join Free Live Masterclass
                </button>
                <a
                  id="hero-btn-razorpay"
                  href="https://rzp.io/rzp/Gj3OymLe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-850 text-amber-400 border border-amber-500/30 font-bold px-7 py-4 rounded-xl text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-amber-500/10 hover:border-amber-400"
                >
                  Direct Admission (Razorpay) <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Inline Secondary Navigation to Interactive Practice */}
              <div className="text-center lg:text-left">
                <button
                  id="hero-btn-test-skills-link"
                  onClick={onNavigateToPractice}
                  className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span>Or, Test Your Astro Analysis Skills First  →</span>
                </button>
              </div>

              {/* Admission seated timer countdown indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400 pt-1" id="hero-countdown-ticker">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Next Batch Closing in:</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 py-1.5 px-3 rounded-lg border border-slate-800 font-bold text-amber-400">
                  <span>{formatNumber(timeLeft.hours)}h</span>
                  <span>:</span>
                  <span>{formatNumber(timeLeft.minutes)}m</span>
                  <span>:</span>
                  <span>{formatNumber(timeLeft.seconds)}s</span>
                </div>
              </div>
            </div>

          </div>

          {/* Graphical Display visual frame */}
          <div className="lg:col-span-5 relative" id="hero-visual-art-panel">
            
            {/* Visual Gold Trim Geometry Frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 opacity-30 select-none blur-sm"></div>
            
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Outer decorative celestial overlay layer */}
              <div className="absolute top-4 right-4 z-20 flex gap-1 bg-slate-950/80 backdrop-blur-md py-1 px-2.5 rounded border border-amber-500/10 items-center font-mono text-[9px] text-amber-400">
                <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                <span>15+ Years Mastery</span>
              </div>

              {/* Founder Graphic Image mapping */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80"
                  alt="Vedic Astrology Constellations"
                  className="w-full h-full object-cover opacity-72 object-center scale-105 select-none transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded dynamic math overlay lines for Astrological classroom vibe */}
                <svg className="absolute inset-x-0 bottom-0 top-0 h-full w-full pointer-events-none stroke-amber-500/30 opacity-60" fill="none">
                  <circle cx="50%" cy="50%" r="90" strokeDasharray="3 3"/>
                  <circle cx="50%" cy="50%" r="60"/>
                  <line x1="10%" y1="10%" x2="90%" y2="90%"/>
                  <line x1="90%" y1="10%" x2="10%" y2="90%"/>
                  {/* Subtle technical astrological marks */}
                  <text x="12%" y="24%" fill="#F59E0B" className="text-[10px] uppercase font-mono tracking-wide opacity-80">Rasi: Pushya</text>
                  <text x="76%" y="84%" fill="#F59E0B" className="text-[10px] uppercase font-mono tracking-wide opacity-80">Dasha: Guru</text>
                </svg>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
              </div>

              {/* Educational Trust highlights directly inside the photo structure */}
              <div className="p-6 bg-slate-900 relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-400 text-slate-950 rounded-full h-8 w-8 flex items-center justify-center font-bold font-mono text-xs shadow-md">
                    SS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display tracking-tight text-white">Sri Sivanandhan Swamigal Systems</h4>
                    <span className="text-[10px] font-mono text-slate-400">Head Research Expert Educator</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  "Our mission is to replace superstition with mathematical analysis. True Shastric astrology is a scientific map of karmic lessons and timing opportunities."
                </p>

                {/* Live student count badge */}
                <div className="grid grid-cols-3 gap-2 text-center border-t border-slate-800/80 pt-4">
                  <div>
                    <span className="text-amber-400 font-bold text-sm block">100%</span>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Practical Focus</span>
                  </div>
                  <div className="border-x border-slate-800/80">
                    <span className="text-amber-400 font-bold text-sm block">850+</span>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Students Trained</span>
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold text-sm block">4.9/5</span>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Class Rating</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
