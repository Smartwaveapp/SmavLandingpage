import React from 'react';
import { UserPlus, ThumbsUp, Gift } from 'lucide-react';
import { Step } from './Step';
import { Button } from '../../ui/Button';

const steps = [
  {
    title: 'Sign Up and Explore',
    description: 'Create your account, browse daily social media tasks, and start engaging with your favorite brands.',
    icon: UserPlus,
    gradient: 'linear-gradient(to right, #ff6b6b, #feca57)'
  },
  {
    title: 'Complete Tasks',
    description: 'Like, comment, follow, or share based on the task requirements to earn points.',
    icon: ThumbsUp,
    gradient: 'linear-gradient(to right, #5865f2, #7289da)'
  },
  {
    title: 'Redeem Rewards',
    description: 'Exchange your earned points for amazing rewards or unlock exclusive offers from top brands.',
    icon: Gift,
    gradient: 'linear-gradient(to right, #4834d4, #686de0)'
  }
];

export function UserSteps() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white font-heading mb-4">
        Earn Rewards in 3 Simple Steps!
      </h2>
      <div className="grid gap-6">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
      <div className="mt-8">
        <Button href="https://t.me/SmartwavesBot/SMAV" withArrow className="w-full">
          Join Now and Start Earning
        </Button>
      </div>
    </div>
  );
}