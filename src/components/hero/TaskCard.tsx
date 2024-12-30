import React from 'react';
import { DollarSign, Users } from 'lucide-react';

interface TaskCardProps {
  brand: string;
  reward: number;
  task: string;
  image: string;
  engagement: string;
}

export function TaskCard({ brand, reward, task, image, engagement }: TaskCardProps) {
  return (
    <div className="bg-[#2f3136] rounded-lg overflow-hidden">
      <div className="relative h-32">
        <img src={image} alt={brand} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded-full flex items-center">
          <Users className="w-4 h-4 text-white mr-1" />
          <span className="text-white text-xs">{engagement}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-white font-semibold">{brand}</h3>
          <div className="flex items-center text-[#5865f2]">
            <DollarSign className="w-4 h-4 mr-1" />
            <span className="font-bold">{reward}</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-3">{task}</p>
        
        <button className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-lg py-2 text-sm font-medium transition-colors">
          Start Task
        </button>
      </div>
    </div>
  );
}