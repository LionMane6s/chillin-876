import React from 'react';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { BenefitsSection } from './sections/BenefitsSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { ReviewsSection } from './sections/ReviewsSection';
import { FAQSection } from './sections/FAQSection';
import { ReadyToStartSection } from './sections/ReadyToStartSection';

export function Problem() {
  return (
    <div className="py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto space-y-32">
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <HowItWorksSection />
        <ReviewsSection />
        <FAQSection />
        <ReadyToStartSection />
      </div>
    </div>
  );
}