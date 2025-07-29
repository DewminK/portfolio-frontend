'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  location: string;
  image: string;
  description: string;
  skills: string[];
}

const Experiences: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Junior Treasurer",
      organization: "INTECS - Faculty of Information Technology",
      period: "Term 24/25",
      location: "University of Moratuwa",
      image: "/experience/intecs.jpg",
      description: "I was elected as the Junior Treasurer of INTECS, at Faculty of Information Technology, where I am responsible for managing financial transactions, budgeting in flagship events of the faculty.",
      skills: ["Financial Management", "Leadership", "Communication", "Excel"]
    },
    {
      id: 2,
      title: "Events Committee Member",
      organization: "IEEE Student Branch",
      period: "Term 24/25",
      location: "University of Moratuwa",
      image: "/experience/ieeenew.jpg",
      description: "I was elected as a member of the events committee for the term 24/25 of the IEEE Student Branch of University of Moratuwa, where I have to contribute to organizing technical workshops and seminars.",
      skills: ["Event Management", "Team Coordination", "Public Speaking", "Networking"]
    },
    {
      id: 3,
      title: "Delegates Handling Committee Lead",
      organization: "Innovate with Ballerina 2025",
      period: "2025",
      location: "WSO2",
      image: "/experience/ballerina.png",
      description: "As the delegates handling committee lead for Innovate with Ballerina 2025, I was responsible for managing the registration and communication with participants during submission while managing my team",
      skills: ["Leadership", "Project Management", "Communication", "Problem Solving"]
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

  const handleLinkedInClick = (): void => {
    // Replace with your actual LinkedIn profile URL
    window.open('https://www.linkedin.com/in/dewmin-deniyegedara-a190b5165/details/experience/', '_blank');
  };

  return (
    <section id="experiences" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-24 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Some key leadership roles, committee memberships, and volunteer experiences that shaped my professional and technical growth
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={`${experience.title} at ${experience.organization}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                {/* Period Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                  {experience.period}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4 relative z-10">
                {/* Title and Organization */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {experience.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{experience.organization}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {experience.description}
                </p>


              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA Section */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                   
              <button
                onClick={handleLinkedInClick}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/25 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>View My Experiences on LinkedIn</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </button>
        </div>
      </div>
    </section>
  );
};

export default Experiences;