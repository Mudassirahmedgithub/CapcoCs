"use client";

import React, { useEffect, useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Users,
  Shield,
  Lightbulb,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      title: 'Empowering Global Excellence',
      subtitle: 'Transforming businesses across Qatar, India, and Canada'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      title: 'Innovation Meets Strategy',
      subtitle: 'Tailored solutions for sustainable growth'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80',
      title: 'Building Tomorrow Together',
      subtitle: 'Your trusted partner in digital transformation'
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const coreValues = [
    { icon: Sparkles, title: 'Quality', desc: 'Excellence in every deliverable', gradient: 'from-violet-600 to-purple-600' },
    { icon: Heart, title: 'Client Satisfaction', desc: 'Your success is our priority', gradient: 'from-pink-600 to-rose-600' },
    { icon: TrendingUp, title: 'Excellence', desc: 'Setting industry standards', gradient: 'from-blue-600 to-cyan-600' },
    { icon: Shield, title: 'Safety', desc: 'Secure and reliable operations', gradient: 'from-emerald-600 to-teal-600' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Out of the box solutions', gradient: 'from-amber-600 to-orange-600' },
    { icon: Users, title: 'Integrity', desc: 'Loyalty and confidentiality', gradient: 'from-indigo-600 to-violet-600' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <div className="overflow-hidden">
                <h1 
                  key={`title-${currentSlide}`}
                  className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight animate-slide-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  {slides[currentSlide].title}
                </h1>
              </div>
              <div className="overflow-hidden">
                <p 
                  key={`subtitle-${currentSlide}`}
                  className="text-2xl md:text-3xl text-gray-200 mb-12 animate-slide-up"
                  style={{ animationDelay: '0.4s' }}
                >
                  {slides[currentSlide].subtitle}
                </p>
              </div>
              <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <button className="group px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105">
                  Get Started
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm hover:scale-105 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all group"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all group"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-white'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full text-sm font-bold tracking-wider">
              WHO WE ARE
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Complete Honesty and <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Transparency
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              CAPCO is a globally recognized consulting firm committed to empowering organizations across Qatar, India, and Canada. With a focus on tailored business solutions, operational efficiency, and long-term success, CAPCO serves as a trusted partner in consulting, human resource management, and technology services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '50+', label: 'Global Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-bold tracking-wider">
              OUR PRINCIPLES
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Core Values That <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Drive Excellence
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors text-lg">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div>
              <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full text-sm font-bold tracking-wider">
                ABOUT US
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Empowering <br />
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Business Growth
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                At CAPCO, we specialize in empowering businesses across Qatar, India, and Canada with innovative solutions and strategies. We are committed to transforming organizations by fostering resilience, optimizing operational efficiency, and driving sustainable growth.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Through collaborative partnerships, we address complex challenges and deliver lasting value to our clients, employees, and communities.
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 hover:scale-105">
                Learn More About Us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to Transform <br /> Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90">
              Join the organizations that trust CAPCO for world-class consulting services
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-white text-violet-600 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105">
                Get in Touch
              </button>
              <button className="px-12 py-5 border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white hover:text-violet-600 transition-all duration-300 hover:scale-105">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}