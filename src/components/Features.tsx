import React from 'react';
import { Coins, TrendingUp, Shield, Zap, Users, Gift } from 'lucide-react';

const features = [
  {
    name: 'Earn Real Cash',
    description: 'Complete social media tasks and earn real money rewards instantly.',
    icon: Coins,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Boost Your Engagement',
    description: 'Get authentic engagement from real users who love your content.',
    icon: TrendingUp,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Secure Platform',
    description: 'Your data and earnings are protected with bank-grade security.',
    icon: Shield,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'Quick Tasks',
    description: 'Simple, fast tasks that take minutes to complete.',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Growing Community',
    description: 'Join thousands of users earning rewards daily.',
    icon: Users,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Instant Rewards',
    description: 'Cash out your earnings quickly and easily.',
    icon: Gift,
    gradient: 'from-violet-500 to-purple-500',
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-[#1a1b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#5865f2] font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Earn While You Scroll
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Turn your social media activity into a rewarding experience with our innovative platform.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 group-hover:opacity-100 transition-opacity rounded-lg blur"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    '--tw-gradient-from': feature.gradient.split(' ')[1],
                    '--tw-gradient-to': feature.gradient.split(' ')[3],
                  }}
                ></div>
                <div className="relative p-6 bg-[#2f3136] rounded-lg transform transition-all duration-200 hover:scale-[1.02]">
                  <div className="flex items-center">
                    <feature.icon className="h-6 w-6 text-[#5865f2]" />
                    <h3 className="ml-3 text-xl font-bold text-white">{feature.name}</h3>
                  </div>
                  <p className="mt-4 text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}