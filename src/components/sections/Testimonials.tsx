import React from 'react';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Chen",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "SmartWaves transformed how I connect with my audience. The engagement metrics are insane!",
    gradient: "linear-gradient(to right, #ff6b6b, #feca57)"
  },
  {
    name: "Sarah Johnson",
    role: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "The analytics and insights have helped me grow my following by 300% in just 3 months.",
    gradient: "linear-gradient(to right, #5865f2, #7289da)"
  },
  {
    name: "Mike Williams",
    role: "Brand Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "Best investment for our brand's social media strategy. The ROI is incredible.",
    gradient: "linear-gradient(to right, #4834d4, #686de0)"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#1a1b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white font-heading mb-4">
            Loved by Creators
          </h2>
          <p className="text-gray-400 text-lg font-body">
            Join thousands of satisfied users who've transformed their social media presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              gradient={testimonial.gradient}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-white font-medium">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">{testimonial.quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}