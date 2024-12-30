import React from 'react';
import { PhoneInterface } from './PhoneInterface';
import { PhoneFrame } from './PhoneFrame';
import { BackgroundEffects } from './BackgroundEffects';

export function AnimatedPhone() {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {/* Premium 3D Background Effects */}
      <BackgroundEffects />
      
      {/* 3D Phone Container */}
      <div className="relative transform-style-3d animate-float-premium">
        <PhoneFrame>
          <PhoneInterface />
        </PhoneFrame>
      </div>
    </div>
  );
}