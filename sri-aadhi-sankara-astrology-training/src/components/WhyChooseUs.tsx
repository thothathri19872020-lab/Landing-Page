/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WHY_CHOOSE_US } from '../data.ts';
import { 
  TrendingUp, PieChart, HeartHandshake, Milestone, LineChart, Clock, Award, Star 
} from 'lucide-react';

export default function WhyChooseUs() {
  
  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="h-5 w-5 text-amber-400" />;
      case 'PieChart': return <PieChart className="h-5 w-5 text-amber-400" />;
      case 'HeartHandshake': return <HeartHandshake className="h-5 w-5 text-amber-400" />;
      case 'Milestone': return <Milestone className="h-5 w-5 text-amber-400" />;
      case 'LineChart': return <LineChart className="h-5 w-5 text-amber-400" />;
      case 'Clock': return <Clock className="h-5 w-5 text-amber-400" />;
      default: return <Award className="h-5 w-5 text-amber-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-950 text-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-500/20 font-mono">
            Professional Standards and Support
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mt-4 mb-6">
            Why Students Choose Us
          </h2>
          <p className="text-lg text-slate-300">
            Armed with <span className="text-amber-400 font-semibold">15+ Years of Experience</span> in professional astrology education, we structured our training around your actual career and confidence outcomes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="whyus-benefits-grid">
          {WHY_CHOOSE_US.map((item, index) => (
            <div 
              key={index}
              className="p-6 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-amber-500/20 rounded-2xl transition-all duration-300 group shadow flex flex-col justify-between"
            >
              <div>
                {/* Icon trim */}
                <div className="p-3 bg-slate-950 rounded-xl inline-flex mb-6 border border-slate-800/60 group-hover:bg-amber-500/10 group-hover:text-amber-400 transition-colors">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative detail */}
              <div className="mt-6 pt-4 border-t border-slate-950 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Sri Aadhi Sankara Academy</span>
                <span className="flex items-center gap-0.5 text-amber-500/50">
                  <Star className="h-2.5 w-2.5 fill-amber-500/50" /> Premium
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic LLP Trust element footer item */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-950 p-8 rounded-2xl border border-amber-500/10 flex flex-col md:flex-row items-center justify-between gap-6" id="whyus-branding-ribbon">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <h4 className="text-lg font-bold font-display text-white">Registered Research and Education Institution</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Sri Aadhi Sankara Astro Research and Education LLP is a legally incorporated education provider, guaranteeing rigorous curricula, certified certificates of completion, and professional authenticity.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="block text-[10px] font-mono text-slate-500">REGISTRATION STATUS</span>
              <span className="block font-bold text-amber-400 text-sm">LLP Government Registered</span>
            </div>
            <div className="h-10 w-px bg-slate-800 hidden sm:block"></div>
            <span className="bg-amber-500 text-slate-950 font-bold font-mono py-2.5 px-4 rounded-lg text-xs tracking-wider uppercase">
              LLPIN: B18841-1040
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
