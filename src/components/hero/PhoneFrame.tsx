import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative">
      {/* Premium Glass Effect Frame */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#5865f2]/30 to-[#ffd700]/30 rounded-[48px] blur-xl animate-pulse-subtle" />
      
      {/* Metallic Frame */}
      <div className="relative w-[320px] h-[620px] bg-gradient-to-br from-[#2f3136] via-[#36393f] to-[#2f3136] rounded-[44px] p-4 shadow-premium transform hover:scale-105 transition-transform duration-700">
        {/* Premium Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-44 h-8 bg-black rounded-b-3xl flex items-center justify-center overflow-hidden">
          <div className="w-20 h-4 bg-[#1a1b1e] rounded-full" />
          <div className="absolute left-8 w-2 h-2 rounded-full bg-[#5865f2] animate-pulse" />
        </div>
        
        {/* Volume Buttons */}
        <div className="absolute -left-1 top-24 w-1 h-12 bg-[#36393f] rounded-l-md" />
        <div className="absolute -left-1 top-40 w-1 h-12 bg-[#36393f] rounded-l-md" />
        
        {/* Power Button */}
        <div className="absolute -right-1 top-32 w-1 h-12 bg-[#36393f] rounded-r-md" />
        
        {/* Main Content */}
        <div className="relative w-full h-full bg-[#1a1b1e] rounded-[36px] overflow-hidden shadow-inner">
          {children}
        </div>
      </div>
    </div>
  );
}