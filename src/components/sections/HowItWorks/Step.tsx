import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '../../ui/Card';

interface StepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export function Step({ title, description, icon: Icon, gradient }: StepProps) {
  return (
    <Card gradient={gradient} className="transform hover:scale-105 transition-transform duration-300">
      <Icon className="w-8 h-8 text-white mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </Card>
  );
}