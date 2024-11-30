import React from 'react';
import { FAQ } from '../FAQ';

const questions = [
  {
    question: "What are your most popular dishes?",
    answer: "Our most popular dishes include our signature Curry Goat, Oxtail, and Ackee & Saltfish. The Jerk Chicken and Brown Stew Fish are also customer favorites. All dishes are made with authentic Jamaican spices and recipes passed down through generations."
  },
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes, we have a variety of vegetarian options! Our menu includes Callaloo, Vegetable Curry, Plantain dishes, and various vegetable sides. We can also modify many of our dishes to accommodate vegetarian preferences."
  },
  {
    question: "Is parking available?",
    answer: "Yes, we have ample free parking available right outside the restaurant. There's also additional street parking nearby for busy periods."
  },
  {
    question: "Do you take reservations?",
    answer: "Yes, we highly recommend making a reservation, especially for weekend dining and special occasions. You can book a table online through our website or call us directly at 020 7524 3555."
  },
  {
    question: "Do you offer catering services?",
    answer: "Yes, we provide full catering services for events of all sizes! From intimate gatherings to large corporate events, we can create a custom menu to suit your needs. Contact us for catering packages and pricing."
  }
];

export function FAQSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <FAQ questions={questions} />
      </div>
    </div>
  );
}