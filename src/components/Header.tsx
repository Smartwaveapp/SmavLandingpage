import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-[#1a1b1e]/95 backdrop-blur-md z-50 border-b border-[#2f3136]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#5865f2]" />
            <span className="text-2xl font-bold text-white">
              SmartWaves
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-[#5865f2] transition-colors">Features</a>
            <a href="#community" className="text-gray-300 hover:text-[#5865f2] transition-colors">Community</a>
            <a href="#contact" className="text-gray-300 hover:text-[#5865f2] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://t.me/SmartwavesBot/SMAV"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-[#5865f2] hover:bg-[#4752c4] transition-colors"
            >
              Launch App
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1b1e]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-[#5865f2]">Features</a>
            <a href="#community" className="block px-3 py-2 text-gray-300 hover:text-[#5865f2]">Community</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-[#5865f2]">Contact</a>
            <a
              href="https://t.me/SmartwavesBot/SMAV"
              className="block px-3 py-2 text-white bg-[#5865f2] rounded-md"
            >
              Launch App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}