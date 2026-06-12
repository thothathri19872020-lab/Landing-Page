/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Check, Calendar, Users, Star, Gift, PhoneCall, Copy, ShieldCheck, Mail, ArrowRight, Loader2, Sparkles 
} from 'lucide-react';
import { Registration } from '../types.ts';

interface OrientationSectionProps {
  onRegisterSuccess: (regData: Registration) => void;
  registeredUser: Registration | null;
  onOpenBonus: () => void;
}

export default function OrientationSection({ onRegisterSuccess, registeredUser, onOpenBonus }: OrientationSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'beginner' as 'beginner' | 'some-theory' | 'practicing',
    preferredTime: 'Sunday 10:00 AM IST'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onRegisterSuccess({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        preferredTime: formData.preferredTime
      });
    }, 1200);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://zoom.us/j/sriaadhisankara-orientation');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="orientation" className="py-24 bg-slate-950 text-white relative overflow-hidden scroll-mt-12">
      
      {/* Visual background lines and nebula */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Curriculum / Learn details */}
          <div className="lg:col-span-7 space-y-8" id="orientation-learn-goals">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-500/20 font-mono">
                <Gift className="h-3.5 w-3.5" /> High-Value Free Masterclass
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mt-1 mb-6">
                Free Astrology Orientation Session
              </h2>
              <p className="text-lg text-slate-300">
                Discover whether professional, shastric prediction-based astrology can become your future career or purposeful side-income path.
              </p>
            </div>

            {/* What you learn checked items */}
            <div className="space-y-4">
              <h3 className="text-base font-bold font-mono text-slate-300 uppercase tracking-widest">
                What You'll Learn:
              </h3>
              
              <div className="space-y-3.5" id="orientation-learn-points">
                <div className="flex items-start gap-3">
                  <span className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400 shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="text-sm sm:text-base font-bold text-slate-200 block">How astrology can become a valid profession</strong>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Explore global client demographics, professional standard setups, and legal LLP structures.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400 shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="text-sm sm:text-base font-bold text-slate-200 block">Common critical mistakes students make while learning</strong>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Why relying on pre-written textbook templates causes prediction lockup, and how to avoid it.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400 shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="text-sm sm:text-base font-bold text-slate-200 block">The clear 4-phase roadmap from complete beginner to pro</strong>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Our structured timeline progressing from signs and aspects to divisional charts and client consulting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400 shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="text-sm sm:text-base font-bold text-slate-200 block">How practical prediction-based training functions</strong>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Watch how we analyze live, historic, and blind horoscopes using mathematical dasha-transit formulas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400 shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="text-sm sm:text-base font-bold text-slate-200 block">Career and consultation pricing opportunities</strong>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">How to structure your consultative offerings, charge respectably, and build high-referral client circles.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonuses container banner */}
            <div className="p-5 bg-slate-900 border border-amber-500/10 rounded-xl relative overflow-hidden" id="orientation-bonuses-box">
              <span className="absolute -right-2 -bottom-2 text-6xl text-slate-950 font-bold select-none font-mono">
                FREE
              </span>
              <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider flex items-center gap-1.5 mb-2">
                🎁 INSTANT FREE BONUSES UPON BOOKING
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="text-amber-500 font-bold">✦</span>
                  <span>Premium <strong className="text-slate-300">Astrology Career Guide PDF</strong> (Consulting structures & Brand strategy)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500 font-bold">✦</span>
                  <span>Interactive <strong className="text-slate-300">Astrology Learning Roadmap Manual</strong> (Weekly curriculum milestones)</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Column 2: Interactive Booking Form Card / Admission Ticket */}
          <div className="lg:col-span-5 relative" id="orientation-booking-card">
            
            {/* Visual Gold Trim Geometry Frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-300/10 to-amber-600/20 blur-sm"></div>

            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              {!registeredUser ? (
                /* THE BOOKING FORM */
                <form onSubmit={handleFormSubmit} className="space-y-5" id="astro-registration-form">
                  <div className="text-center pb-2">
                    <span className="block text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold">
                      Admissions Desk
                    </span>
                    <h3 className="text-xl font-bold font-display text-white mt-1">
                      Reserve Your Seats Free
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Limited capacity. Lock your session before next batch fills.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. anand@outlook.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  {/* WhatsApp Phone field */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">WhatsApp Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  {/* Experience Level Selection */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Astrology Background</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="beginner">Complete Beginner (No background)</option>
                      <option value="some-theory">Theory Learner (Struggling to Predict)</option>
                      <option value="practicing">Practicing / Amature Consultant</option>
                    </select>
                  </div>

                  {/* Time session Selection */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Select Preferred Live Slot</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="Sunday 10:00 AM IST">Upcoming Sunday, 10:00 AM IST (Live orientation)</option>
                      <option value="Wednesday 07:30 PM IST">Upcoming Wednesday, 07:30 PM IST (Mid-week live)</option>
                    </select>
                  </div>

                  {/* Action button with superior mobile touch target and high contrast */}
                  <button
                    id="submit-booking-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 active:scale-[0.98] text-slate-950 font-black rounded-xl uppercase tracking-widest text-xs transition-all duration-200 shadow-lg shadow-amber-500/25 cursor-pointer flex items-center justify-center gap-2 select-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> VERIFYING SEAT...
                      </>
                    ) : (
                      'Secure My Seat & Unlock Free Guides'
                    )}
                  </button>

                  <div className="space-y-1.5 text-center">
                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0"></span>
                      <span>100% Free Orientation • No Payment Options Ever Required</span>
                    </div>
                    <p className="text-[9px] text-slate-500 font-mono leading-normal max-w-[320px] mx-auto">
                      Admission credentials and course materials will be delivered live.
                    </p>
                  </div>
                </form>
              ) : (
                /* THE ADMISSION TICKET OF CONFIRMED BOOKING */
                <div className="space-y-6 pt-2 animate-fadeIn" id="astro-registration-ticket">
                  <div className="text-center pb-4 border-b border-slate-800 relative">
                    <div className="absolute right-0 top-0 text-emerald-400">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block mb-1">
                      Registration Confirmed
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">Your Masterclass Seat is Secured!</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Welcome aboard, <strong className="text-slate-200">{registeredUser.name}</strong>. Let's start the journey.
                    </p>
                  </div>

                  {/* Ticket Details Panel */}
                  <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-800 space-y-3 font-sans text-xs">
                    <div className="flex justify-between items-center text-slate-400 border-b border-slate-900 pb-2">
                      <span className="font-mono">ADMISSION STATUS:</span>
                      <strong className="text-emerald-400 font-mono">Secured Verified</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Confirmed Holder:</span>
                      <strong className="text-white">{registeredUser.name}</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Assigned Slot:</span>
                      <strong className="text-amber-400 bg-amber-400/5 px-2 py-0.5 rounded border border-amber-500/10 font-mono text-[10px]">
                        {registeredUser.preferredTime}
                      </strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Registered Whatsapp:</span>
                      <strong className="text-white font-mono">{registeredUser.phone}</strong>
                    </div>
                  </div>

                  {/* Instant Bonus Action Button and description */}
                  <div className="bg-amber-400/[0.04] p-4.5 rounded-xl border border-amber-500/20 space-y-3.5">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4.5 w-4.5 text-amber-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider font-display">BONUSES ARE UNLOCKED IN THE WEB APP</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      You can now read, view, and print your Astrology Career Blueprint & Learning Roadmap directly on this page!
                    </p>
                    <button
                      id="orientation-ticket-view-bonus-btn"
                      onClick={onOpenBonus}
                      className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-lg uppercase tracking-wider text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Read My Unlocked Bonuses Now <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Guaranteed Premium Admission upgrade option */}
                  <div className="bg-slate-950 p-4.5 rounded-xl border-2 border-amber-500/30 space-y-3.5 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-mono font-black uppercase text-[8px] tracking-wider px-2 py-0.5 rounded-bl">
                      VIP Upgrade
                    </div>
                    
                    <div className="flex items-center gap-2">
                       <ShieldCheck className="h-4.5 w-4.5 text-amber-400" />
                      <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider font-mono">Premium Direct Enrollment</span>
                    </div>
                    <p className="text-slate-400 text-[11.5px] leading-relaxed font-sans">
                      Skip the live orientation waitlist entirely. Fast-track your path, lock lifetime live academy access, and pay course tuition directly through the Razorpay desk. 
                    </p>
                    <a
                      id="orientation-ticket-razorpay-direct-btn"
                      href="https://rzp.io/rzp/Gj3OymLe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-11 bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 active:scale-[0.98] text-slate-950 font-black rounded-lg uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow shadow-amber-500/15 text-center select-none"
                    >
                      Enrol Securely via Razorpay →
                    </a>
                  </div>

                  {/* Zoom join link details */}
                  <div className="space-y-3">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">orientation login details</span>
                    
                    <div className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 justify-between">
                      <span className="text-xs text-slate-300 font-mono truncate max-w-[200px]">zoom.us/j/sriaadhisankara-orientation</span>
                      <button
                        onClick={handleCopyLink}
                        className="p-1 px-2.5 rounded hover:bg-slate-900 border border-slate-800 text-xs transition-colors flex items-center gap-1.5 text-amber-400 cursor-pointer"
                      >
                        <Copy className="h-3 w-3" /> {copiedLink ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  {/* WhatsApp Support Direct Contact CTA */}
                  <div className="pt-2">
                    <a
                      id="orientation-ticket-whatsapp-link"
                      href={`https://wa.me/919445103000?text=Hi%20Mentor!%20My%20name%20is%20${encodeURIComponent(registeredUser.name)},%20I%20have%20just%20registered%20for%20the%20Sri%20Aadhi%20Sankara%20Astrology%20Free%20Orientation%20Masterclass!%20Excited%20to%2520join.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-slate-900 hover:bg-slate-850 text-emerald-400 font-semibold py-3.5 rounded-xl border border-slate-800 text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center"
                    >
                      <PhoneCall className="h-4 w-4" /> WhatsApp Mentor Directly
                    </a>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
