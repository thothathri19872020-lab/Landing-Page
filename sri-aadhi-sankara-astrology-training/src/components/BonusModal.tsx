/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CAREER_GUIDE_CONTENT, LEARNING_ROADMAP_CONTENT } from '../data.ts';
import { X, BookOpen, Download, ShieldCheck, Mail, ArrowRight, Printer } from 'lucide-react';
import { useState } from 'react';

interface BonusModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

export default function BonusModal({ isOpen, onClose, userEmail }: BonusModalProps) {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'roadmap'>('blueprint');
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadStub = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      // Create and trigger a simple virtual file download
      const content = activeTab === 'blueprint' 
        ? JSON.stringify(CAREER_GUIDE_CONTENT, null, 2) 
        : JSON.stringify(LEARNING_ROADMAP_CONTENT, null, 2);
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = activeTab === 'blueprint' ? 'Sri_Aadhi_Sankara_Astrology_Career_Blueprint.txt' : 'Sri_Aadhi_Sankara_Astrology_Learning_Roadmap.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-all" id="bonus-modal-overlay">
      <div 
        className="bg-slate-900 border border-amber-500/20 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative animate-fadeIn"
        role="dialog"
        aria-modal="true"
      >
        {/* Header decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 rounded-t-2xl"></div>

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold block">Unlocked Bonus Resource</span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">Your Premium Astro Resources</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 px-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            id="close-bonus-modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/10">
          <button
            onClick={() => {
              setActiveTab('blueprint');
              setDownloadSuccess(false);
            }}
            className={`flex-1 py-4 text-center font-display text-sm font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'blueprint' 
                ? 'border-amber-500 text-amber-400 bg-slate-900/40' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🎁 1. Career Blueprint
          </button>
          <button
            onClick={() => {
              setActiveTab('roadmap');
              setDownloadSuccess(false);
            }}
            className={`flex-1 py-4 text-center font-display text-sm font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'roadmap' 
                ? 'border-amber-500 text-amber-400 bg-slate-900/40' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🎁 2. Learning Roadmap
          </button>
        </div>

        {/* Content Panel (Scrollable) */}
        <div className="p-6 overflow-y-auto flex-1 font-sans text-slate-300 text-sm leading-relaxed" id="bonus-modal-body">
          {activeTab === 'blueprint' ? (
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-4">
                <h4 className="text-xl font-bold text-white font-display mb-1">{CAREER_GUIDE_CONTENT.title}</h4>
                <p className="text-xs text-amber-400 italic">{CAREER_GUIDE_CONTENT.subtitle}</p>
                <div className="h-[1px] w-20 bg-amber-500/20 mx-auto mt-3"></div>
              </div>

              {CAREER_GUIDE_CONTENT.sectors.map((sec, sIdx) => (
                <div key={sIdx} className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                  <h5 className="font-bold text-white font-display text-base mb-3 text-amber-400/90">{sec.title}</h5>
                  {sec.bullets && (
                    <ul className="space-y-2">
                      {sec.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                          <span className="text-amber-500 shrink-0 mt-1">✦</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {sec.sectorsList && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      {sec.sectorsList.map((item, iIdx) => (
                        <div key={iIdx} className="bg-slate-900 p-4 rounded-lg border border-slate-800/80">
                          <span className="font-bold text-white font-display text-xs sm:text-sm block">{item.name}</span>
                          <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-4">
                <h4 className="text-xl font-bold text-white font-display mb-1">{LEARNING_ROADMAP_CONTENT.title}</h4>
                <p className="text-xs text-amber-400 italic">Structural Foundation to Independent Consulting</p>
                <div className="h-[1px] w-20 bg-amber-500/20 mx-auto mt-3"></div>
              </div>

              <div className="relative border-l-2 border-amber-500/20 ml-4 pl-6 space-y-8 py-2">
                {LEARNING_ROADMAP_CONTENT.milestones.map((ms, mIdx) => (
                  <div key={mIdx} className="relative">
                    {/* Circle timeline point */}
                    <span className="absolute -left-[31px] top-0.5 h-4 w-4 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-white font-display text-base tracking-tight">{ms.phase}</span>
                        <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 py-0.5 px-2 rounded border border-amber-500/10 uppercase font-semibold">
                          {ms.timeframe}
                        </span>
                      </div>
                      <ul className="space-y-1.5 mt-3">
                        {ms.milestones.map((mil, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                            <span className="text-amber-500 shrink-0 mt-1 block h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                            <span>{mil}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Download Action */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span className="text-xs text-slate-400">
              {userEmail ? (
                <>Sent backup downloads to <strong className="text-slate-200">{userEmail}</strong></>
              ) : (
                'Access with secure cloud orientation backup'
              )}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => window.print()}
              className="flex-1 sm:flex-initial bg-slate-900 hover:bg-slate-800 text-slate-300 p-3 rounded-xl border border-slate-800 text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
            >
              <Printer className="h-4 w-4" /> Print
            </button>
            <button
              id="bonus-download-btn"
              onClick={handleDownloadStub}
              disabled={downloading}
              className="flex-1 sm:flex-initial bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              {downloading ? (
                <>Generating PDF...</>
              ) : downloadSuccess ? (
                <>Downloaded! <ShieldCheck className="h-4 w-4" /></>
              ) : (
                <>
                  Download Guide <Download className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
