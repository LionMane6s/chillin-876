import React from 'react';
import { UtensilsCrossed, Heart, DollarSign, Users2 } from 'lucide-react';
import { AnimatedCard } from '../AnimatedCard';

const benefits = [
  {
    title: "Authentic Jamaican Flavors You'll Love",
    description: "Taste \"absolutely delicious\" cuisine that \"reminds me of my grandma's cooking in Jamaica.\" Enjoy signature dishes like our \"amazing\" curry goat, \"the bomb\" ackee and saltfish, and oxtail that's \"falling off the bones.\"",
    icon: <UtensilsCrossed className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "Warm Hospitality in a Cozy Atmosphere",
    description: "Experience \"amazing\" service where \"nothing is too much trouble.\" Our cozy setting with modern decor \"feels just like being in Jamaica,\" offering good vibes for a memorable meal.",
    icon: <Heart className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "Generous Portions at Great Value",
    description: "Savor \"massive portions\" made from \"fresh ingredients\" that are \"worth the money.\" With prices between £10–20, enjoy great value without compromising on taste.",
    icon: <DollarSign className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "Family-Friendly Dining with Vegetarian Options and Easy Parking",
    description: "Bring the whole family to our spacious, kid-friendly restaurant offering a \"large vegetarian selection.\" Plus, benefit from ample free parking close by.",
    icon: <Users2 className="w-8 h-8 text-yellow-400" />
  }
];

export function BenefitsSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900 dark:text-white">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <AnimatedCard key={index}>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl h-full">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}