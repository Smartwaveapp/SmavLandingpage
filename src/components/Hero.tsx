import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedPhone } from './hero/AnimatedPhone';
import { Newsletter } from './Newsletter';

export function Hero() {
  return (
    <div className="relative bg-[#1a1b1e] text-white overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="flex items-center gap-2 mb-6 lg:justify-start sm:justify-center">
                <Sparkles className="w-6 h-6 text-[#5865f2] animate-pulse" />
                <span className="text-sm font-medium text-[#5865f2]">Your Social Actions Matter</span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Turn Social Engagement</span>
                <span className="block text-[#5865f2]">Into Real Rewards!</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Smartwave connects users with fun social media tasks and helps brands grow effortlessly. Earn points, redeem rewards, and make every action count!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <a
                  href="https://t.me/SmartwavesBot/SMAV"
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#5865f2] hover:bg-[#4752c4] md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#features"
                  className="mt-3 sm:mt-0 w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-gray-300 bg-[#2f3136] hover:bg-[#36393f] md:py-4 md:text-lg md:px-10 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Phone Animation */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <AnimatedPhone />
      </div>

      {/* Newsletter Section - Now after the hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Join Our Community
            </h2>
            <p className="mt-3 text-lg text-gray-400">
              Get exclusive updates, early access to new features, and special rewards directly in your inbox.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-1">
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
}