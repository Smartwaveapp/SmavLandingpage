import React from 'react';
import { Check } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const plans = [
  {
    name: 'Starter',
    price: '29',
    features: [
      'Basic analytics',
      'Up to 5 social accounts',
      'Community access',
      'Email support'
    ],
    gradient: 'linear-gradient(to right, #a8e6cf, #dcedc1)'
  },
  {
    name: 'Pro',
    price: '99',
    features: [
      'Advanced analytics',
      'Unlimited social accounts',
      'Priority support',
      'Custom branding',
      'API access',
      'Team collaboration'
    ],
    gradient: 'linear-gradient(to right, #5865f2, #7289da)',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security'
    ],
    gradient: 'linear-gradient(to right, #ffd3b6, #ffaaa5)'
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-[#1a1b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white font-heading mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-lg font-body">
            Scale your social presence with our flexible pricing options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              gradient={plan.gradient}
              className={`${plan.popular ? 'transform scale-105' : ''}`}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-4">
                  ${plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
                withArrow
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}