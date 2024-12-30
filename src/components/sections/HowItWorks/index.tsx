import React from 'react';
import { UserSteps } from './UserSteps';
import { ClientSteps } from './ClientSteps';

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#1a1b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white font-heading mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg font-body">
            Whether you're a user or a brand, getting started is simple
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <UserSteps />
          <ClientSteps />
        </div>
      </div>
    </section>
  );
}