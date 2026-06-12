/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { INT_CASE_STUDIES } from '../data.ts';
import { Award, CheckCircle2, AlertCircle, ChevronRight, HelpCircle, Loader2 } from 'lucide-react';

export default function InteractivePractice() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const currentCase = INT_CASE_STUDIES[activeCaseIndex];

  // Map zodiac sign index (0-11 representing Pisces to Aquarius in South Indian layout)
  // Pisces (Top-Left, index 0)
  // Aries (index 1), Taurus (index 2), Gemini (index 3)
  // Cancer (index 4), Leo (index 5), Virgo (index 6)
  // Libra (index 7), Scorpio (index 8), Sagittarius (index 9)
  // Capricorn (index 10), Aquarius (index 11)
  // Let's create a visual mapping for South Indian chart:
  // Row 1: Pisces, Aries, Taurus, Gemini
  // Row 2: Aquarius, center, center, Cancer
  // Row 3: Capricorn, center, center, Leo
  // Row 4: Sagittarius, Scorpio, Libra, Virgo
  const gridPositions = [
    { name: 'Pisces (Meena)', key: 'pisces', short: 'Pisces', row: 1, col: 1 },
    { name: 'Aries (Mesha)', key: 'aries', short: 'Aries', row: 1, col: 2 },
    { name: 'Taurus (Vrishabha)', key: 'taurus', short: 'Taurus', row: 1, col: 3 },
    { name: 'Gemini (Mithuna)', key: 'gemini', short: 'Gemini', row: 1, col: 4 },
    { name: 'Cancer (Karka)', key: 'cancer', short: 'Cancer', row: 2, col: 4 },
    { name: 'Leo (Simha)', key: 'leo', short: 'Leo', row: 3, col: 4 },
    { name: 'Virgo (Kanya)', key: 'virgo', short: 'Virgo', row: 4, col: 4 },
    { name: 'Libra (Thula)', key: 'libra', short: 'Libra', row: 4, col: 3 },
    { name: 'Scorpio (Vrischika)', key: 'scorpio', short: 'Scorpio', row: 4, col: 2 },
    { name: 'Sagittarius (Dhanus)', key: 'sagittarius', short: 'Sagittarius', row: 4, col: 1 },
    { name: 'Capricorn (Makara)', key: 'capricorn', short: 'Capricorn', row: 3, col: 1 },
    { name: 'Aquarius (Kumbha)', key: 'aquarius', short: 'Aquarius', row: 2, col: 1 },
  ];

  // Put planets in specific squares based on active case study
  const getPlanetsForGrid = (signKey: string) => {
    if (activeCaseIndex === 0) { // Career Rise (Leo ascendant)
      // Leo is Ascendant
      // Ares (Mesha, grid index 1) contains Mars & Venus (creating 9th & 10th union)
      // Taurus (Vrishabha, grid index 2) contains Sun
      if (signKey === 'leo') return ['ASC (Lagna)'];
      if (signKey === 'aries') return ['Mars (9L)', 'Venus (10L)'];
      if (signKey === 'taurus') return ['Sun (1L)'];
      if (signKey === 'aquarius') return ['Jupiter (5L)']; // Aspecting Leo
    } else if (activeCaseIndex === 1) { // Spiritual Awakening (Scorpio ascendant)
      // Scorpio (Vrischika, grid index 8) is Ascendant
      // Pisces (Meena, grid index 0) is Moon
      // Libra (Thula, grid index 7) contains Jupiter & Ketu (5th Lord of intuition in 12th Moksha conjunct Ketu)
      if (signKey === 'scorpio') return ['ASC (Lagna)'];
      if (signKey === 'libra') return ['Jupiter (5L)', 'Ketu (Moksha)'];
      if (signKey === 'pisces') return ['Moon Sign'];
    } else if (activeCaseIndex === 2) { // Financial Abundance (Taurus ascendant)
      // Taurus (Vrishabha, grid index 2) is Ascendant
      // Pisces (Meena, grid index 0) contains Exalted Mercury (11th house)
      // Cancer (Karka, grid index 4) contains Moon
      if (signKey === 'taurus') return ['ASC (Lagna)'];
      if (signKey === 'pisces') return ['Mercury (Exalted/2L&5L)'];
      if (signKey === 'cancer') return ['Moon Sign'];
    }
    return [];
  };

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleVerify = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleNextCase = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setActiveCaseIndex((prev) => (prev + 1) % INT_CASE_STUDIES.length);
  };

  return (
    <section id="practice" className="py-20 bg-slate-900 border-y border-slate-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-500/20 font-mono">
            <Award className="h-3.5 w-3.5" /> Interactive Classroom Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mt-4 mb-6">
            Test Your Predictive Instincts
          </h2>
          <p className="text-lg text-slate-300">
            Ditch abstract theory. Look at actual chart events. Deduce the answer below to see how our <span className="text-amber-400 font-semibold">Practical, Formula-Based system</span> clears confusion in seconds.
          </p>
        </div>

        {/* Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="practice-interactive-grid">
          
          {/* Column A: South Indian Chart Render (SVG/Grid styling) */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-amber-500/15 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest">
                  Active Diagram: Rasi Chart bhava
                </span>
                <span className="text-[10px] bg-slate-800 text-amber-400 font-mono py-1 px-2.5 rounded border border-amber-500/10">
                  {currentCase.chartData.ascendant} Ascendant
                </span>
              </div>
              
              {/* SOUTH INDIAN CHART MATRIX */}
              <div className="grid grid-cols-4 grid-rows-4 gap-1.5 bg-slate-900 p-2.5 rounded-xl aspect-square w-full max-w-[420px] mx-auto border border-slate-800 relative">
                {gridPositions.map((sign, index) => {
                  const planetsInCell = getPlanetsForGrid(sign.key);
                  const isAscCell = planetsInCell.includes('ASC (Lagna)');
                  const isMajorCell = planetsInCell.length > 0 && !isAscCell;

                  return (
                    <div
                      key={sign.key}
                      style={{ gridRow: sign.row, gridColumn: sign.col }}
                      className={`flex flex-col justify-between p-2 rounded border text-center transition-all ${
                        isAscCell
                          ? 'bg-amber-500/10 border-amber-500/40'
                          : isMajorCell
                          ? 'bg-emerald-500/10 border-emerald-500/30 ring-1 ring-emerald-500/20'
                          : 'bg-slate-950/80 border-slate-800/60 hover:bg-slate-800/40'
                      }`}
                    >
                      {/* Sign Title */}
                      <span className="text-[10px] font-mono text-slate-400 text-left truncate">
                        {sign.short}
                      </span>
                      
                      {/* Active Particles/Planets */}
                      <div className="flex flex-col gap-1 items-center justify-center my-auto">
                        {planetsInCell.map((planet, pIdx) => (
                          <span
                            key={pIdx}
                            className={`text-[9px] font-bold font-sans py-0.5 px-1.5 rounded tracking-wide leading-tight ${
                              planet.includes('ASC')
                                ? 'bg-amber-400 text-slate-950 shadow-sm'
                                : planet.includes('Mercury')
                                ? 'bg-indigo-400 text-slate-950'
                                : 'bg-emerald-400 text-slate-950'
                            }`}
                          >
                            {planet}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* CENTRAL EMPTY PANEL FOR LEGEND AND SUMMARY */}
                <div className="col-start-2 col-end-4 row-start-2 row-end-4 bg-slate-950 rounded-lg p-3 sm:p-4 border border-slate-800/80 flex flex-col justify-center items-center text-center">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest font-display mb-1">
                    {currentCase.title}
                  </span>
                  <div className="h-[2px] w-8 bg-amber-500/30 my-1"></div>
                  <span className="text-[10px] font-mono text-slate-400 leading-tight block select-none">
                    Lagna: {currentCase.chartData.ascendant.split(' ')[0]}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 block select-none mt-1">
                    Yoga: {currentCase.chartData.keyYoga}
                  </span>
                </div>
              </div>
            </div>

            {/* Chart info foot */}
            <div className="mt-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800/60 text-slate-300 text-xs leading-relaxed">
              <strong className="text-amber-400">Astrological Blueprint:</strong> {currentCase.chartData.description}
            </div>
          </div>

          {/* Column B: Question Interface */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              {/* Tabs for Cases */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-thin">
                {INT_CASE_STUDIES.map((cs, idx) => (
                  <button
                    key={cs.id}
                    onClick={() => {
                      setActiveCaseIndex(idx);
                      setSelectedOption(null);
                      setIsSubmitted(false);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-display uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      activeCaseIndex === idx
                        ? 'bg-amber-500 text-slate-950 font-semibold shadow'
                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-855'
                    }`}
                  >
                    Case Study #{idx + 1}
                  </button>
                ))}
              </div>

              {/* Question Statement */}
              <div className="mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-amber-400/10 p-2 rounded-lg text-amber-400">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">Interactive Diagnosis</span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-1">
                      {currentCase.question}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Multi Choice Options */}
              <div className="space-y-3" id="mcq-options-container">
                {currentCase.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const showSuccess = isSubmitted && idx === currentCase.correctOptionIndex;
                  const showDanger = isSubmitted && isSelected && idx !== currentCase.correctOptionIndex;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 ${
                        showSuccess
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                          : showDanger
                          ? 'bg-red-950/40 border-red-500/50 text-red-200'
                          : isSelected
                          ? 'bg-amber-500/10 border-amber-400 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span className={`h-5 w-5 rounded-full border flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5 ${
                        isSelected || showSuccess || showDanger
                          ? 'border-transparent bg-amber-400 text-slate-950 font-bold'
                          : 'border-slate-700 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Validation Panel */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              {!isSubmitted ? (
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs text-slate-400 leading-relaxed max-w-[280px]">
                    Select an option above to test your stellar judgment. Our curriculum covers these precise principles.
                  </p>
                  <button
                    onClick={handleVerify}
                    disabled={selectedOption === null || isVerifying}
                    className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 select-none duration-200 cursor-pointer"
                  >
                    {isVerifying ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Analyzing Sign...
                      </>
                    ) : (
                      'Verify Answer'
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  {selectedOption === currentCase.correctOptionIndex ? (
                    <div className="bg-emerald-950/30 border border-emerald-500/20 p-4 rounded-xl flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-400 text-sm block">Correct Deduction!</span>
                        <p className="text-slate-300 text-xs mt-1">Excellent analysis! You identified the exact formula for standard prediction.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-amber-950/20 border border-amber-500/20 p-4 rounded-xl flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-400 text-sm block">Theoretical Confusion?</span>
                        <p className="text-slate-300 text-xs mt-1">Not quite correct. This is the common roadblock where memorized charts clash with custom placements.</p>
                      </div>
                    </div>
                  )}

                  {/* Explanation Block */}
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                      Mentor's Formulation:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentCase.explanation}
                    </p>
                  </div>

                  {/* Move to next case */}
                  <button
                    onClick={handleNextCase}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium py-3 rounded-xl text-xs uppercase tracking-widest transition-all ring-1 ring-slate-800 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Analyze Next Lesson Chart <ChevronRight className="h-4 w-4 text-amber-400" />
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
