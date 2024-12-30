import React from 'react';

export function BackgroundEffects() {
  return (
    <>
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#5865f2]/10 via-transparent to-transparent animate-pulse-slow" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Premium Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#5865f2] to-[#ffd700] rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Glowing Orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full animate-float-orb"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? '#5865f2' : '#ffd700'
              }15, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Premium Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#5865f2]/20 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#ffd700]/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
    </>
  );
}