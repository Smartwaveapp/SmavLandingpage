import React from 'react';
import { Sparkles } from 'lucide-react';

export function ProfileHeader() {
  return (
    <div className="px-4 py-6 bg-gradient-to-r from-[#5865f2] to-[#7289da]">
      <div className="flex items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c"
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <div className="absolute -bottom-1 -right-1 bg-[#ffd700] p-1 rounded-full">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="ml-4">
          <h3 className="text-white font-bold text-lg">Alex Morgan</h3>
          <p className="text-gray-200 text-sm">Premium Member</p>
        </div>
        
        <div className="ml-auto text-right">
          <div className="text-white font-bold text-xl">$1,250</div>
          <p className="text-gray-200 text-sm">Total Earned</p>
        </div>
      </div>
      
      <div className="mt-6 bg-white/10 rounded-lg p-3 flex justify-between">
        <div className="text-center">
          <div className="text-white font-bold">156</div>
          <p className="text-gray-200 text-xs">Tasks</p>
        </div>
        <div className="text-center">
          <div className="text-white font-bold">4.9k</div>
          <p className="text-gray-200 text-xs">Points</p>
        </div>
        <div className="text-center">
          <div className="text-white font-bold">98%</div>
          <p className="text-gray-200 text-xs">Success</p>
        </div>
      </div>
    </div>
  );
}