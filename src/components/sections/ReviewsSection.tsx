import React from 'react';
import { CustomerReview } from '../CustomerReview';
import { ReviewPlatformLogos } from '../ReviewPlatformLogos';

const reviews = [
  {
    text: "Had the most delicious meal at Chillin 876! Incredible flavours, fresh ingredients, and generous portions. The atmosphere is fantastic with stunning décor. If you want authentic, home-cooked Caribbean food, this is the place!",
    author: "Rachel Pugh",
    rating: 5
  },
  {
    text: "Best food I've tasted in a long time. Curry goat is 10/10, oxtail falls off the bone, and the red peas soup reminds me of my grandma's cooking in Jamaica.",
    author: "Florence Pearson",
    rating: 5
  },
  {
    text: "Great experience! The restaurant is clean and classy. Excellent customer service—staff are quick, efficient, and know the menu by heart. Real authentic Jamaican food full of flavour and spices. Definitely recommend for anyone who loves fresh, authentic Jamaican cuisine.",
    author: "Anonymous",
    rating: 5
  }
];

export function ReviewsSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900 dark:text-white">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {reviews.map((review, index) => (
          <CustomerReview key={index} {...review} />
        ))}
      </div>
      <ReviewPlatformLogos />
    </div>
  );
}