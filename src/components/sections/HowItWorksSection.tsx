import React from 'react';
import { ShinyCard } from '../ShinyCard';

const steps = [
  {
    step: "Step 1",
    title: "Order Effortlessly",
    description: "Kickstart your Caribbean culinary journey by browsing our delectable menu and placing your order online or over the phone. It's quick, easy, and hassle-free."
  },
  {
    step: "Step 2",
    title: "We Bring the Flavors to Life",
    description: "Our expert chefs get busy crafting your meal with fresh ingredients and authentic recipes. Experience the vibrant tastes and aromas of the Caribbean, prepared just for you."
  },
  {
    step: "Step 3",
    title: "Indulge and Enjoy",
    description: "Sit back as we deliver your feast or have it ready for pickup. Dive into a delicious experience that transports you straight to the islands—no passport required!"
  }
];

export function HowItWorksSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900 dark:text-white">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <ShinyCard key={index}>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {step.step}
              </h3>
              <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
                {step.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          </ShinyCard>
        ))}
      </div>
    </div>
  );
}