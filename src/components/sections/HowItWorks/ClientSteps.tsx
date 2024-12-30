import React from 'react';
import { LayoutDashboard, Users, LineChart } from 'lucide-react';
import { Step } from './Step';
import { Button } from '../../ui/Button';

const steps = [
  {
    title: 'Create a Campaign',
    description: 'Sign up as a client, define your campaign goals, and set task parameters (likes, follows, shares).',
    icon: LayoutDashboard,
    gradient: 'linear-gradient(to right, #a8e6cf, #dcedc1)'
  },
  {
    title: 'Reach Real Users',
    description: 'Get authentic engagements from a community of active users passionate about your brand.',
    icon: Users,
    gradient: 'linear-gradient(to right, #5865f2, #7289da)'
  },
  {
    title: 'Track and Grow',
    description: 'Monitor campaign performance in real-time and refine your strategy to maximize ROI.',
    icon: LineChart,
    gradient: 'linear-gradient(to right, #ffd3b6, #ffaaa5)'
  }
];

export function ClientSteps() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white font-heading mb-4">
        Boost Your Brand Engagement in 3 Steps!
      </h2>
      <div className="grid gap-6">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
      <div className="mt-8">
        <Button href="https://t.me/SmartwavesBot/SMAV" withArrow className="w-full">
          Advertise With Us Today
        </Button>
      </div>
    </div>
  );
}