'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface EducationItem {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  grade?: string;
  location: string;
  logoUrl: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      title: "GCE Ordinary Level",
      institution: "St Mary's College",
      period: "2018",
      description: "GCE Ordinary Level examination completed with Information and Communication technology, tamil and english literature as basket subjects. Developed the basement for advanced studies in technology.",
      grade: "A7 B2",
      location: "Kegalle, Sri Lanka",
      logoUrl: "/icons/smclogo.png"
    },
    {
      id: 2,
      title: "Advanced Level (A/L)",
      institution: "St Mary's College",
      period: "2019 - 2022",
      description: "Completed Advanced Level examination in Mathematics stream with ICT. Developed strong analytical and problem-solving skills through advanced mathematics and science subjects.",
      grade: "ABC passes",
      location: "Kegalle, Sri Lanka",
      logoUrl: "/icons/smclogo.png"
    },
    {
      id: 3,
      title: "Preparatory Course for Ethical Hacking and Linux",
      institution: "ATN Campus",
      period: "2022-2023",
      description: "Gained basic knowledge in ethical hacking and Linux operating system. Developed foundational skills in cybersecurity and system administration.",
      grade: "Passed",
      location: "Wellawatta, Sri Lanka",
      logoUrl: "/icons/atnlogo.jpg" 
    },
    {
      id: 4,
      title: "Bsc (Hons) in Information Technology",
      institution: "University of Moratuwa",
      period: "2023 - 2027",
      description: "Currently 3rd year undergraduate in Faculty of Information Technology at University of Moratuwa. Engaged in various projects and acadmeic activities in software development.",
      grade: "CGPA: 3.80 / 4.00 (Sep 2025) - Dean's List in 3 Semesters",
      location: "Moratuwa, Sri Lanka",
      logoUrl: "/icons/uomlogo.jpg" 
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

  return (
    <section id="education" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-24 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            My Educational{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            A roadmap of my academic achievements and learning milestones that shaped my career in technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Desktop Timeline (lg and above) */}
          <div className="hidden lg:block">
            {/* Straight Road Path */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div 
                className="w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 via-purple-500 to-pink-500 relative shadow-sm"
                style={{ height: `${educationData.length * 320 + 620}px` }}
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-1 -left-0.25 bg-gradient-to-b from-cyan-400/30 via-blue-500/30 via-purple-500/30 to-pink-500/30 animate-pulse"></div>
                
                {/* Road markers at each education level */}
                {educationData.map((_, index) => (
                  <div
                    key={index}
                    className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full -left-0.75 animate-pulse shadow-lg shadow-cyan-500/30"
                    style={{ top: `${index * 320 + 100}px` }}
                    data-aos="zoom-in"
                    data-aos-delay={index * 300}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-50"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Education Cards with Connection Lines */}
            <div className="relative z-10 space-y-20">
              {educationData.map((education, index) => (
                <div key={education.id} className="relative">
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                    data-aos-delay={index * 200}
                  >
                    <div className={`relative max-w-md ${index % 2 === 0 ? 'mr-12 ml-8' : 'ml-12 mr-8'}`}>
                      {/* Connection Line to Straight Road */}
                      <div className={`absolute top-1/2 ${
                        index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                      } w-12 h-0.5 transform -translate-y-1/2`}>
                        {/* Thin connection line */}
                        <div className="w-full h-full bg-gradient-to-r from-cyan-400/60 to-blue-500/60 relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 animate-pulse"></div>
                        </div>
                        
                        {/* Small connection point */}
                        <div className={`absolute top-1/2 ${
                          index % 2 === 0 ? 'right-0 translate-x-0.5' : 'left-0 -translate-x-0.5'
                        } transform -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-sm shadow-cyan-500/30`}>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-50"></div>
                          <div className="relative w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                        </div>
                      </div>

                      {/* Desktop Card */}
                      <EducationCard education={education} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Timeline (below lg) */}
          <div className="lg:hidden">
            {/* Left-side vertical line for mobile */}
            <div className="absolute left-6 sm:left-8 top-0">
              <div 
                className="w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 via-purple-500 to-pink-500 relative shadow-sm"
                style={{ height: `${educationData.length * 280 + 400}px` }}
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-1 -left-0.25 bg-gradient-to-b from-cyan-400/30 via-blue-500/30 via-purple-500/30 to-pink-500/30 animate-pulse"></div>
                
                {/* Road markers for mobile */}
                {educationData.map((_, index) => (
                  <div
                    key={index}
                    className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full -left-1.25 animate-pulse shadow-lg shadow-cyan-500/30"
                    style={{ top: `${index * 280 + 60}px` }}
                    data-aos="zoom-in"
                    data-aos-delay={index * 300}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-50"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Education Cards */}
            <div className="relative z-10 space-y-12 pl-16 sm:pl-20">
              {educationData.map((education, index) => (
                <div key={education.id} className="relative">
                  {/* Connection line for mobile */}
                  <div className="absolute left-0 top-16 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-cyan-400/60 to-blue-500/60 transform -translate-x-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 animate-pulse"></div>
                  </div>

                  <div
                    data-aos="fade-left"
                    data-aos-delay={index * 200}
                    className="w-full"
                  >
                    <EducationCard education={education} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const EducationCard: React.FC<{ education: EducationItem }> = ({ education }) => (
  <div className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden">
    {/* Logo and Period */}
    <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform border border-white/20 flex-shrink-0">
        <img 
          src={education.logoUrl} 
          alt={`${education.institution} logo`}
          className="w-8 h-8 sm:w-12 sm:h-12 object-contain rounded-full"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextElementSibling) {
              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        <div 
          className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full items-center justify-center text-white font-bold text-sm sm:text-lg hidden"
          style={{ display: 'none' }}
        >
          {education.institution.charAt(0)}
        </div>
      </div>
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-cyan-500/30">
        <span className="text-cyan-400 font-semibold text-xs sm:text-sm">{education.period}</span>
      </div>
    </div>

    {/* Content */}
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
        {education.title}
      </h3>
      
      <div className="space-y-2">
        <p className="text-cyan-400 font-semibold flex items-center text-sm sm:text-base">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span className="break-words">{education.institution}</span>
        </p>
        <p className="text-gray-400 text-xs sm:text-sm flex items-center">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="break-words">{education.location}</span>
        </p>
      </div>

      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        {education.description}
      </p>

      {education.grade && (
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-green-500/30">
          <p className="text-green-400 font-semibold text-xs sm:text-sm flex items-start">
            <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="break-words">{education.grade}</span>
          </p>
        </div>
      )}
    </div>

    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
  </div>
);

export default Education;