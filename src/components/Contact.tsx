import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="bg-[#1a1b1e]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Get in Touch
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-400">
                Questions? Ideas? We're here for you 24/7.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#5865f2]" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-400">
                  <p>smartwaveapp2@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5865f2] to-[#7289da] opacity-75 group-hover:opacity-100 transition-all rounded-lg blur"></div>
              <div className="relative bg-[#2f3136] rounded-lg px-6 py-6 sm:p-8">
                <h3 className="text-lg font-medium text-white">Join the Inner Circle</h3>
                <form className="mt-6">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full bg-[#1a1b1e] border-gray-700 rounded-md shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#5865f2] focus:border-[#5865f2] text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-[#5865f2] hover:bg-[#4752c4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5865f2] transition-colors"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}