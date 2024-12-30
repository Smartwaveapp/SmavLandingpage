import React from 'react';
import { Bell, Settings, ChevronLeft, Heart, MessageCircle, Share2, DollarSign } from 'lucide-react';
import { TaskCard } from './TaskCard';
import { ProfileHeader } from './ProfileHeader';
import { RewardPopup } from './RewardPopup';

export function PhoneInterface() {
  return (
    <div className="relative w-[300px] h-[600px] bg-[#2f3136] rounded-[40px] p-4 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
      {/* Status Bar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl" />
      
      {/* Screen */}
      <div className="relative w-full h-full bg-[#1a1b1e] rounded-[32px] overflow-hidden">
        {/* App Header */}
        <div className="px-4 py-3 bg-[#2f3136] flex items-center justify-between">
          <ChevronLeft className="w-6 h-6 text-gray-400" />
          <h2 className="text-white font-semibold">Available Tasks</h2>
          <Bell className="w-6 h-6 text-gray-400" />
        </div>

        {/* Profile Section */}
        <ProfileHeader />

        {/* Task Feed */}
        <div className="px-4 py-2 space-y-4 overflow-y-auto">
          <TaskCard
            brand="Nike"
            reward={25}
            task="Like & Comment on Latest Post"
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            engagement="2.5k"
          />
          <TaskCard
            brand="Apple"
            reward={50}
            task="Share Product Launch Video"
            image="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9"
            engagement="5k"
          />
        </div>

        {/* Reward Popup */}
        <RewardPopup />

        {/* Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#2f3136] px-6 py-4 flex justify-around items-center">
          <DollarSign className="w-6 h-6 text-[#5865f2]" />
          <Heart className="w-6 h-6 text-gray-400" />
          <MessageCircle className="w-6 h-6 text-gray-400" />
          <Settings className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
}