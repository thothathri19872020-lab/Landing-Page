/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SYSTEM_PILLARS } from '../data.ts';
import { 
  Compass, Eye, Award, UserCheck, Sparkles, Briefcase, Flame, CheckCircle2, ChevronRight 
} from 'lucide-react';

export default function AstroSystem() {
  const [selectedPillar, setSelectedPillar] = useState<number>(1); // Default to live analysis

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="h-6 w-6" />;
      case 'Eye': return <Eye className="h-6 w-6" />;
      case 'Award': return <Award className="h-6 w-6" />;
      case 'UserCheck': return <UserCheck className="h-6 w-6" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6" />;
      case 'Briefcase': return <Briefcase className="h-6 w-6" />;
      case 'Flame': return <Flame className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-950 text-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-500/20 font-mono">
            Structured Academy Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mt-4 mb-6">
            The Sri Aadhi Sankara Astro Learning System
          </h2>
          <p className="text-lg text-slate-300">
            We focus exclusively on helping students become <span className="text-amber-400 font-semibold">confident and accurate astrologers</span> through a step-by-step, objective formulaic system.
          </p>
        </div>

        {/* Interactive Layout: Left Pillars selection, Right Deep-Dive explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="astrosystem-pillers-container">
          
          {/* Column 1: Vertical List (Pillar Selection) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2 px-1">
              Course pillars (Select to explore details)
            </span>
            {SYSTEM_PILLARS.map((pillar, index) => {
              const isSelected = selectedPillar === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedPillar(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500/10 to-transparent border-amber-500/40 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg transition-transform ${
                      isSelected ? 'bg-amber-500 text-slate-950 scale-105' : 'bg-slate-800 text-slate-400 group-hover:text-amber-400'
                    }`}>
                      {getIcon(pillar.icon)}
                    </div>
                    <span className={`text-sm tracking-wide font-display ${
                      isSelected ? 'font-bold' : 'font-medium'
                    }`}>
                      {pillar.title}
                    </span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${
                    isSelected ? 'translate-x-1 text-amber-500' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Column 2: Broad Explanation Visual */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-xl flex flex-col justify-between h-full min-h-[440px] relative overflow-hidden">
            
            {/* Subtle zodiac wheel watermark in the background */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 translate-x-20 translate-y-20">
              <svg className="w-96 h-96 animate-spin" style={{ animationDuration: '100s' }} fill="none" viewBox="0 0 200 200" stroke="currentColor" strokeWidth="1">
                <circle cx="100" cy="100" r="80" />
                <path d="M100 20v160M20 100h160M43.4 43.4l113.2 113.2M43.4 156.6L156.6 43.4" />
                <circle cx="100" cy="100" r="40" />
              </svg>
            </div>

            <div className="relative">
              {/* Highlight badge */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 py-1 px-2.5 rounded font-bold">
                  Core Pillar #{selectedPillar + 1} Inside Study Curriculum
                </span>
                <span className="text-xs font-serif italic text-slate-400 select-none">
                  Sri Aadhi Sankara System
                </span>
              </div>

              {/* Title and Icon large rendering */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-400/10 text-amber-400 p-3.5 rounded-xl border border-amber-500/20">
                  {getIcon(SYSTEM_PILLARS[selectedPillar].icon)}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
                  {SYSTEM_PILLARS[selectedPillar].title}
                </h3>
              </div>

              {/* Description explanation paragraph */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {SYSTEM_PILLARS[selectedPillar].description}
              </p>

              {/* In-Depth Curriculum Bullet points for each selection */}
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                  Practical Application Focus:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  {selectedPillar === 0 && (
                    <>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Astronomical degrees definition</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Rasi and Bhava synthesis</span>
                      </div>
                    </>
                  )}
                  {selectedPillar === 1 && (
                    <>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Vimshottari Dasha mechanics</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Analyzing the 10th & D10 lords</span>
                      </div>
                    </>
                  )}
                  {selectedPillar === 2 && (
                    <>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Real student blind readings</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>95% accuracy event pinpointing</span>
                      </div>
                    </>
                  )}
                  {selectedPillar === 3 && (
                    <>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Daily Slack/Community checkins</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Weekly live doubt clarifications</span>
                      </div>
                    </>
                  )}
                  {selectedPillar === 4 && (
                    <>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Compassionate client counsel</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Selecting remedies scientifically</span>
                      </div>
                    </>
                  )}
                  {selectedPillar === 5 && (
                    <>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Setting legal LLPs & consultations</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Global social client acquisition</span>
                      </div>
                    </>
                  )}
                  {selectedPillar === 6 && (
                    <>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Karmic cycles (Prarabdha Karma)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Vedic philosophical guidance</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 leading-none">
              <span>Sri Aadhi Sankara Education System</span>
              <span className="text-amber-500">Pillar {selectedPillar + 1} of 7</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
