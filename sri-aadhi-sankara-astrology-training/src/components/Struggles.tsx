/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PAIN_POINTS } from '../data.ts';
import { ShieldAlert, Check, HelpCircle, AlertOctagon } from 'lucide-react';

export default function Struggles() {
  const [highlightedRoadblock, setHighlightedRoadblock] = useState<string | null>('pain-1');

  return (
    <section id="roadblock" className="py-24 bg-slate-900 border-b border-slate-800 scroll-mt-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-400/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-red-500/20 font-mono">
            <AlertOctagon className="h-3.5 w-3.5" /> Common Learning Pitfalls
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mt-4 mb-6">
            Do Any of These Sound Familiar?
          </h2>
          <p className="text-lg text-slate-300">
            Many sincere students spend years memorizing complex astrological tables only to freeze when a client places a real chart before them.
          </p>
        </div>

        {/* Roadblocks layout: 5 grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" id="struggles-roadblock-grid">
          {PAIN_POINTS.map((item) => {
            const isSelected = highlightedRoadblock === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setHighlightedRoadblock(item.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-red-500/[0.04] border-red-500/40 shadow-lg ring-1 ring-red-500/20'
                    : 'bg-slate-950 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Danger icon index */}
                  <div className={`p-2.5 rounded-xl inline-flex mb-5 transition-colors ${
                    isSelected ? 'bg-red-500/15 text-red-400' : 'bg-slate-900 text-slate-500 group-hover:text-red-400'
                  }`}>
                    <ShieldAlert className="h-5 w-5" />
                  </div>

                  <h3 className={`text-sm sm:text-base font-bold font-display tracking-tight leading-snug mb-3 ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}>
                    {item.text}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-900">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empathy summary footer note */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-slate-950/40 p-6 rounded-2xl border border-slate-800" id="struggles-summary-box">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            💡 <strong className="text-slate-200">If yes, you are absolutely not alone.</strong> Hundreds of our successful students came to us after spending thousands of hours reading theory without ever learning the fundamental rules page-synthesis for prediction.
          </p>
        </div>

      </div>
    </section>
  );
}
