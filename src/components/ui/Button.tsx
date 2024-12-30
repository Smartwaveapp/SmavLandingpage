import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  href,
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200';
  
  const variants = {
    primary: 'bg-[#5865f2] hover:bg-[#4752c4] text-white',
    secondary: 'bg-[#2f3136] hover:bg-[#36393f] text-gray-300',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(href ? { href } : { onClick })}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Component>
  );
}