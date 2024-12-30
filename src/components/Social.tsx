import React from 'react';
import { Instagram, Twitter, Youtube, MessageCircle, Music } from 'lucide-react';

const socials = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/the_smartwave',
    color: 'text-pink-500',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://x.com/The_smartwave',
    color: 'text-blue-400',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://youtube.com/@thesmartwavehq',
    color: 'text-red-500',
    gradient: 'from-red-500 to-red-700',
  },
  {
    name: 'TikTok',
    icon: Music,
    href: 'https://www.tiktok.com/@the_smartwave',
    color: 'text-white',
    gradient: 'from-gray-900 to-black',
  },
  {
    name: 'Telegram',
    icon: MessageCircle,
    href: 'https://t.me/SmartwavesBot/SMAV',
    color: 'text-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export function Social() {
  return (
    <div id="community" className="py-24 bg-[#2f3136]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Join the Wave
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Follow us across platforms. Be part of something bigger.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 group-hover:opacity-100 transition-all rounded-lg blur"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': social.gradient.split(' ')[1],
                  '--tw-gradient-to': social.gradient.split(' ')[3],
                }}
              ></div>
              <div className="relative flex flex-col items-center p-6 bg-[#1a1b1e] rounded-lg transition-transform transform group-hover:scale-105">
                <social.icon className={`h-8 w-8 ${social.color}`} />
                <span className="mt-4 text-sm font-medium text-white">{social.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}