/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQS } from '../data.ts';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-24 bg-slate-900 border-t border-slate-800 scroll-mt-12 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-500/20 font-mono">
            Direct Expert Answers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Everything you need to know about our practical prediction curriculum and mentorship support.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4" id="faq-accordion-container">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen 
                    ? 'bg-slate-950 border-amber-500/25 ring-1 ring-amber-500/10' 
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-950'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${
                      isOpen ? 'text-amber-400 font-bold' : 'text-slate-500'
                    }`} />
                    <span className={`text-sm sm:text-base font-bold font-display tracking-tight leading-tight ${
                      isOpen ? 'text-white' : 'text-slate-300'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-all ${
                    isOpen ? 'rotate-180 text-amber-400' : ''
                  }`} />
                </button>

                {/* Answer body wrapper */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 border-t border-slate-900/60 pt-4 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action note below FAQs */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-400" id="faq-footer-help">
          Still have an astrological background worry or scheduling query? <a href="#orientation" className="text-amber-400 font-bold hover:underline">Direct WhatsApp Support</a> is open for all prospective students.
        </div>

      </div>
    </section>
  );
}
