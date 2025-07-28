'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
  date: string;
  relationship: string;
  linkedin?: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Kasun Perera",
      position: "Senior Software Engineer",
      company: "Creative Software",
      image: "/api/placeholder/100/100",
      testimonial: "Dewmin is a leader that changes the way we approach software development. His innovative thinking and technical expertise have been instrumental in driving our team's success. He consistently delivers high-quality solutions and mentors junior developers with patience and clarity.",
      rating: 5,
      date: "March 2024",
      relationship: "Direct Colleague",
      linkedin: "https://linkedin.com/in/kasunperera"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-24 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What People{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
            Testimonials from colleagues, mentors, and industry professionals who have worked with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 relative p-8"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-6xl text-cyan-400/20 font-serif leading-none">
                  "
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Testimonial Text */}
                  <div className="pt-8">
                    <p className="text-gray-300 text-lg leading-relaxed italic font-medium">
                      {testimonial.testimonial}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-700/50">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/30">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                            {testimonial.name}
                          </h4>
                          <p className="text-cyan-400 font-semibold">
                            {testimonial.position}
                          </p>
                          <p className="text-gray-400 text-sm flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                            </svg>
                            <span>{testimonial.company}</span>
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-xs text-gray-400 mb-1">{testimonial.relationship}</div>
                          <div className="text-xs text-gray-500">{testimonial.date}</div>
                        </div>
                      </div>
                    </div>

                    {/* LinkedIn Link */}
                    {testimonial.linkedin && (
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors group/linkedin"
                      >
                        <svg className="w-5 h-5 text-blue-400 group-hover/linkedin:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-10 rounded-bl-3xl transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-white">
                Let's{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Work Together
                </span>
              </h3>
              <p className="text-gray-300 mb-6">
                Interested in collaborating? I'd love to hear about your project and discuss how we can create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/25">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get In Touch</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
                <button className="group border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center space-x-2">
                    <span>View LinkedIn</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;