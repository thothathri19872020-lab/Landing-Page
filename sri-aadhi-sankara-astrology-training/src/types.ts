/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarSeed: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CurriculumStep {
  level: 'Foundation' | 'Higher' | 'Advanced';
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  icon: string;
  chartData: {
    ascendant: string;
    moonSign: string;
    sunSign: string;
    keyYoga: string;
    description: string;
  };
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface Registration {
  name: string;
  email: string;
  phone: string;
  experience: 'beginner' | 'some-theory' | 'practicing';
  preferredTime: string;
}
