import React from 'react';
import { Users, TrendingUp, Award } from 'lucide-react';
import { Card } from '../ui/Card';

const stats = [
  {
    label: 'Active Users',
    value: '50K+',
    icon: Users,
    gradient: 'linear-gradient(to right, #ff6b6b, #feca57)'
  },
  {
    label: 'Engagement Rate',
    value: '300%',
    icon: TrendingUp,
    gradient: 'linear-gradient(to right, #5865f2, #7289da)'
  },
  {
    label: 'Creator Success',
    value: '95%',
    icon: Award,
    gradient: 'linear-gradient(to right, #4834d4, #686de0)'
  }
];

export function Stats() {
  return (
    <section className="py-16 bg-[#2f3136]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              gradient={stat.gradient}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-white" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}