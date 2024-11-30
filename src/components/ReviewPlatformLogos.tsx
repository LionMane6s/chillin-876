import React from 'react';
import { GoogleLogo } from './logos/GoogleLogo';
import { TrustpilotLogo } from './logos/TrustpilotLogo';
import { YelpLogo } from './logos/YelpLogo';

export function ReviewPlatformLogos() {
  return (
    <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
      <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-8">Featured On</p>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {/* Google Reviews */}
        <GoogleLogo />

        {/* Trustpilot */}
        <div className="h-8">
          <TrustpilotLogo />
        </div>

        {/* Yelp */}
        <div className="h-8">
          <YelpLogo />
        </div>
      </div>
    </div>
  );
}