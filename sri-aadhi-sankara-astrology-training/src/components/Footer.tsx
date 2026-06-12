/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Mail, PhoneCall, Award, Star, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative footer details */}
      <div className="absolute left-[50%] bottom-0 h-48 w-48 bg-amber-500/[0.02] rounded-full blur-[60px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Upper footer grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-900">
          
          {/* Section A: Institutional Info block */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2.5 rounded text-slate-950 flex items-center justify-center font-bold">
                SRI
              </div>
              <div>
                <span className="block text-sm sm:text-base font-bold font-display tracking-wider text-amber-400">
                  SRI AADHI SANKARA
                </span>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-400 font-mono">
                  Astro Research & Education LLP
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to replacing astronomical superstition with clear, mathematical, predictive dasha-transit formulas. Helping global seekers become professional consulting astrologers.
            </p>
            <div className="pt-2 text-[10px] text-slate-500 font-mono">
              LLP Registered in India • LLPIN: B18841-1040
            </div>
          </div>

          {/* Section B: Academy quick sections */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-300 font-bold">Quick Nave Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#roadblock" className="hover:text-amber-400 transition-colors">PITFALLS DIAGNOSIS</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">THE 7-PILLARS SYSTEM</a></li>
              <li><a href="#practice" className="hover:text-amber-400 transition-colors font-bold text-amber-500/80">LIVE CHARTS PRACTICE</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">WHY CHOOSE US</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">SUCCESS TIMELINES</a></li>
            </ul>
          </div>

          {/* Section C: Student Help Desk Contact info */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-300 font-bold">Admissions Help Desk</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a href="mailto:contact@sriaadhisankara.com" className="hover:text-amber-400 transition-colors font-mono">contact@sriaadhisankara.com</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-amber-400 shrink-0" />
                <a href="tel:+919445103000" className="hover:text-amber-400 transition-colors font-mono">+91 94451 03000</a>
              </li>
              <li className="text-slate-500 text-[10px] leading-relaxed pt-1 font-mono">
                Admissions Call Desk Hours:<br />
                Mon to Sat: 09:30 AM – 06:30 PM (IST)
              </li>
            </ul>
          </div>

        </div>

        {/* Middle trust indicator badges ribbon */}
        <div className="py-8 border-b border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left justify-items-center md:justify-items-start">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Lock className="h-4 w-4 text-amber-500" />
            <span>🔒 Secure Registration Setup</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500/10" />
            <span>⭐ Rated 4.9/5 by 800+ Students</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Award className="h-4 w-4 text-amber-500" />
            <span>🏆 15+ Years Expert Curriculum</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>✔ Direct Mentor Feedback Loops</span>
          </div>
        </div>

        {/* Highly professional disclaimer & registered address segment to maximize Trust & Credibility rating */}
        <div className="mt-12 pt-8 border-t border-slate-900/60 space-y-6 text-slate-500 text-[11px] leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h5 className="font-mono text-slate-400 text-xs uppercase tracking-wider font-semibold">Registered Corporate Office</h5>
              <p className="font-sans">
                <strong>Sri Aadhi Sankara Astro Research and Education LLP</strong><br />
                Registered Address: No.15, Temple Ring Road, Alwarpet, Chennai, Tamil Nadu 600018, India.<br />
                Ministry of Corporate Affairs Registered • LLPIN: B18841-1040
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="font-mono text-slate-400 text-xs uppercase tracking-wider font-semibold">Standard Professional Disclaimer</h5>
              <p className="font-sans text-justify select-none">
                Disclaimer: Astrological analysis and predictive formulation taught in the 7-pillar course system are strictly for educational and self-reflection research purposes. Results may vary and do not promise guaranteed career revenue stream achievements, professional outcomes, or specific life event closures. All admissions tuition fees processed securely are subject to our strict <strong>No Refund</strong> policy and <strong>Live-Only Attendance</strong> covenants.
              </p>
            </div>
          </div>
        </div>

        {/* Lower footer copyright note */}
        <div className="pt-8 mt-8 border-t border-slate-900/40 flex flex-col sm:flex-row items-center justify-between text-slate-600 text-[10px] sm:text-xs">
          <p>© {new Date().getFullYear()} Sri Aadhi Sankara Astro Research and Education LLP. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0 font-mono text-[9px] uppercase tracking-wider">
            <a href="#orientation" className="hover:text-amber-400 transition-colors">Privacy & GDPR</a>
            <span>•</span>
            <a href="#direct-enrollment" className="hover:text-amber-400 transition-colors">Admissions Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
