import React from 'react';
import { Trophy, Star } from 'lucide-react';

export function RewardPopup() {
  return (
    <div className="absolute bottom-20 right-4 w-48">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#5865f2] to-[#ffd700] opacity-75 blur rounded-lg animate-pulse" />
        <div className="relative bg-[#2f3136] p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="w-6 h-6 text-[#ffd700]" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#ffd700] fill-[#ffd700]" />
              ))}
            </div>
          </div>
          <p className="text-white text-sm font-medium">Perfect Streak!</p>
          <p className="text-gray-400 text-xs mt-1">+50% Bonus Rewards</p>
        </div>
      </div>
    </div>
  );
}