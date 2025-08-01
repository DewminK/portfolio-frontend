'use client';

import React, { useState, useEffect, JSX } from 'react';
import Image from 'next/image';

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

const Introduction: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const roles: string[] = [
    "Full-Stack Developer",
    "3rd Year Undergraduate", 
    "Network Enthusiast"
  ];

  const socialLinks: SocialLink[] = [
    { icon: 'github', href: 'https://github.com/DewminK', label: 'GitHub' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/dewmin-deniyegedara-a190b5165/', label: 'LinkedIn' },
    { icon: 'medium', href: 'https://medium.com/@dewminkasmitha30', label: 'Medium' },
    { icon: 'email', href: 'mailto:dewminkasmitha30@gmail.com', label: 'Email' }
  ];

  // Typewriter effect for roles
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait before erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Finished erasing, move to next role
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentRole, roles]);

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleResumeClick = (): void => {
     window.open('https://drive.google.com/file/d/1OS8Hd1yWp0HoabGqHhr6yqDNeFrLWV7X/view?usp=drive_link', '_blank');
  };

  const handleProjectsClick = (): void => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSocialIcon = (iconType: string): JSX.Element => {
    const iconClass = "w-6 h-6";
    
    switch (iconType) {
      case 'github':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'medium':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 6.52a.5.5 0 00-.18-.46L.09 4.03V3.75h5.68l4.38 9.61 3.85-9.6h5.48v.28l-1.64 1.56a.33.33 0 00-.13.32v12.3a.33.33 0 00.13.32l1.6 1.56v.28h-8.18v-.28l1.66-1.61c.16-.16.16-.21.16-.32V8.61l-4.63 11.66h-.63L3.41 8.61v7.8c-.05.25.05.51.25.68l2.16 2.61v.28H.04v-.28l2.16-2.61a.74.74 0 00.23-.68V6.52z" />
          </svg>
        );
      case 'email':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return <div className={iconClass} />;
    }
  };

  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            {/* Greeting */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I am{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Dewmin
                </span>
              </h1>
              
              {/* Dynamic role with typewriter effect */}
              <div className="h-16 flex items-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {displayText}
                    <span className="animate-pulse text-cyan-400">|</span>
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              A third-year undergraduate at the Faculty of Information Technology, University of Moratuwa, with a strong passion for full-stack development, networking, and cybersecurity. Enthusiastic about working in collaborative team environments and always motivated to take on new challenges.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleResumeClick}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  <span>View My Resume</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
              
              <button 
                onClick={handleProjectsClick}
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300"></div>
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  <span>My Projects</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex space-x-6 pt-4">
              {socialLinks.map((social: SocialLink, index: number) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20"
                  aria-label={social.label}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              {/* Animated border rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-cyan-500/40 to-blue-500/40 animate-spin [animation-duration:4s]"></div>
                <div className="absolute inset-2 rounded-full border-4 border-gradient-to-r from-blue-500/30 to-purple-500/30 animate-spin [animation-duration:6s] [animation-direction:reverse]"></div>
                <div className="absolute inset-4 rounded-full border-2 border-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
              </div>
              
              {/* Multiple glowing layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse [animation-delay:1s]"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-xl animate-pulse [animation-delay:2s]"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800/50 shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-cyan-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 z-10"></div>
                <Image 
                  src="/profile.jpeg" 
                  alt="Dewmin Profile" 
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cyan-500/5 z-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-gray-400 group cursor-pointer">
            <span className="text-sm group-hover:text-cyan-400 transition-colors">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 group-hover:border-cyan-400 rounded-full flex justify-center transition-colors">
              <div className="w-1 h-3 bg-gray-400 group-hover:bg-cyan-400 rounded-full mt-2 animate-bounce transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;