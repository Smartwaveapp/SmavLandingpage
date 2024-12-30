import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch('https://submit-form.com/dYHh578TT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Submission failed');

      toast.success('Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative group max-w-md w-full mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5865f2] to-[#7289da] opacity-75 group-hover:opacity-100 transition-opacity rounded-lg blur"></div>
      <div className="relative p-6 bg-[#2f3136] rounded-lg">
        <h3 className="text-lg font-medium text-white mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-400 mb-4">
          Get the latest updates on new features and rewards.
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-[#1a1b1e] border-gray-700 rounded-md shadow-sm py-2 px-3 text-white placeholder-gray-500 focus:ring-[#5865f2] focus:border-[#5865f2]"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5865f2] hover:bg-[#4752c4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5865f2] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}