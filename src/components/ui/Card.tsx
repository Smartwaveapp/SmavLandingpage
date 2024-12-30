import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export function Card({ children, className = '', gradient }: CardProps) {
  return (
    <div className="relative group">
      {gradient && (
        <div
          className="absolute -inset-0.5 opacity-75 group-hover:opacity-100 transition-all rounded-lg blur"
          style={{
            background: gradient
          }}
        />
      )}
      <div className={`relative bg-[#2f3136] rounded-lg p-6 ${className}`}>
        {children}
      </div>
    </div>
  );
}