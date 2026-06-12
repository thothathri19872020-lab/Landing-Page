/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.tsx';
import Struggles from './components/Struggles.tsx';
import AstroSystem from './components/AstroSystem.tsx';
import InteractivePractice from './components/InteractivePractice.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import StudentSuccess from './components/StudentSuccess.tsx';
import PremiumDirectEnrollment from './components/PremiumDirectEnrollment.tsx';
import OrientationSection from './components/OrientationSection.tsx';
import FAQSection from './components/FAQSection.tsx';
import Footer from './components/Footer.tsx';
import BonusModal from './components/BonusModal.tsx';
import { Registration } from './types.ts';
import { ShieldCheck, BookOpen, Sparkles, GraduationCap } from 'lucide-react';

export default function App() {
  const [registeredUser, setRegisteredUser] = useState<Registration | null>(null);
  const [isBonusOpen, setIsBonusOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Sync with localStorage on load
  useEffect(() => {
    const saved = localStorage.getItem('sri_aadhi_registered_student');
    if (saved) {
      try {
        setRegisteredUser(JSON.parse(saved));
      } catch (e) {
        // Safe bypass
      }
    }
  }, []);

  const handleRegisterSuccess = (registration: Registration) => {
    setRegisteredUser(registration);
    localStorage.setItem('sri_aadhi_registered_student', JSON.stringify(registration));
    
    // Highlight notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 8000);

    // Auto-open bonus reading flipbook on registration!
    setTimeout(() => {
      setIsBonusOpen(true);
    }, 1500);
  };

  // Smooth scroll handler for landing page CTA buttons
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans flex flex-col">
      
      {/* Dynamic Success Toast Notification */}
      {showNotification && (
        <div 
          className="fixed bottom-6 right-6 z-50 bg-slate-900 border-2 border-emerald-500/30 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-start gap-3 max-w-sm animate-fadeIn" 
          id="success-toast"
        >
          <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 shrink-0">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <strong className="font-bold text-sm text-slate-100 block">Seat Secured successfully!</strong>
            <p className="text-slate-400 text-xs mt-1">Your free guides have been unlocked. Re-read them anytime!</p>
          </div>
        </div>
      )}

      {/* Embedded Elegant Header logo banner inside the page flow - NO MENU ITEMS or LINKS */}
      <div className="w-full bg-slate-950 border-b border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-amber-500 to-amber-300 p-2.5 rounded-xl text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-base font-bold font-display tracking-wider bg-gradient-to-r from-amber-400 via-amber-200 to-white bg-clip-text text-transparent leading-none">
                SRI AADHI SANKARA
              </span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-slate-400 font-mono mt-1">
                Astro Academy LLP
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/20 border border-emerald-500/15">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-wider font-mono text-emerald-400 font-semibold">
              Live Admissions Open
            </span>
          </div>
        </div>
      </div>

      {/* Single Continuous Landing Page Content */}
      <main className="flex-grow">
        
        {/* 1. Hero Section with dynamic scroll indicators */}
        <Hero 
          onJoinSession={() => scrollToId('orientation')} 
          onNavigateToPractice={() => scrollToId('practice')}
        />

        {/* 2. Standard Struggles & Common Astrological Pitfalls */}
        <Struggles />

        {/* 3. The 7-Pillar Vedic Structured System Syllabus Outline */}
        <AstroSystem />

        {/* 4. Interactive Prediction Lab Practice Tool */}
        <InteractivePractice />

        {/* 5. Custom USP Comparison Section */}
        <WhyChooseUs />

        {/* 6. Alumni Student Reviews & Case Study Showcase */}
        <StudentSuccess />

        {/* 7. Direct Secure Enrollment & Admissions Desk via Razorpay */}
        <PremiumDirectEnrollment />

        {/* 8. Registration orientation desk calendar form */}
        <OrientationSection 
          onRegisterSuccess={handleRegisterSuccess} 
          registeredUser={registeredUser}
          onOpenBonus={() => setIsBonusOpen(true)}
        />

        {/* 8. Course & Institute FAQs */}
        <FAQSection />

      </main>

      {/* Footer detailing LLP registration certificates */}
      <Footer />

      {/* Persistent floating action desk ribbon on mobile to assist continuous scroll navigation (strictly contains no navigation menus, only direct CTAs) */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-40 bg-slate-950/95 [backdrop-filter:blur(10px)] border border-amber-500/20 p-2.5 rounded-2xl flex items-center justify-between gap-3 shadow-2xl shadow-slate-950/80 animate-fadeIn" id="mobile-sticky-dock">
        <button
          onClick={() => scrollToId('direct-enrollment')}
          className="flex-1 h-11 bg-gradient-to-r from-amber-500 to-amber-600 active:scale-[0.98] text-slate-950 font-black rounded-xl text-[10.5px] uppercase tracking-widest transition-transform cursor-pointer text-center flex items-center justify-center gap-1 shadow-md shadow-amber-500/10"
        >
          ★ Enroll Now
        </button>
        <button
          onClick={() => scrollToId('orientation')}
          className="flex-1 h-11 bg-slate-900 active:scale-[0.98] border border-slate-800 text-slate-300 font-bold rounded-xl text-[10.5px] uppercase tracking-widest transition-transform cursor-pointer text-center flex items-center justify-center"
        >
          Free Live Seat
        </button>
      </div>

      {/* Registered User Guide-reader Overlay Modal */}
      <BonusModal 
        isOpen={isBonusOpen} 
        onClose={() => setIsBonusOpen(false)} 
        userEmail={registeredUser?.email}
      />

    </div>
  );
}
