'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
  credentialUrl?: string;
}

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  image: string;
  description: string;
  credentialId?: string;
  credentialUrl?: string;
}

const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'certifications'>('achievements');

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "J'pura Xtreme 2024 - 2nd Runners Up",
      organization: "IEEE Student Branch of USJP",
      date: "2024",
      image: "/achievements/jpura.jpeg",
      description: "Our team Creative Coders secured the 2nd runners up position in J'pura Xtreme 2024 amoung 100+ participants, a hackathon organized by the IEEE Student Branch of University of Sri Jayewardenepura, for solving algorithmic and data structure related challenges.",
    },
    {
      id: 2,
      title: "CodeRush 2025 - 6th Place",
      organization: "INTECS - Faculty of Information Technology ,UoM",
      date: "2025",
      image: "/achievements/coderush1.jpeg",
      description: "Secured 6th place in CodeRush 2025, a hackathon organized by INTECS, for solving algorithmic challenges and developing innovative solutions at the ideathon phase.",
    },
    {
      id: 3,
      title: "Codex - Finalist",
      organization: "Department of Computer Science and Engineering, UoM",
      date: "2025",
      image: "/achievements/codejam.jpeg",
      description: "Secure the top 20 finalist position in Codex, a hackathon organized by the Department of Computer Science and Engineering, University of Moratuwa, for solving algorithmic problems and contributing open source projects while submitting the correct solutions.",
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Connect and Protect: Networks and Network Security",
      issuer: "Google",
      date: "2024",
      image: "/achievements/googleconnect.jpeg",
      description: "Learned how data travels over a network using protocols like TCP/IP. It also covered how to protect networks from threats using firewalls, encryption, and intrusion detection. Lastly, I learned system hardening techniques like applying updates and disabling unnecessary services to improve security.",
      credentialId: "No Direct Credential ID",
      credentialUrl: "https://coursera.org/share/1e9c7e7ee873b22422f07b3bcf62b56e",
    },
    {
      id: 2,
      title: "Network Basics",
      issuer: "Cisco Networking Academy",
      date: "2024",
      image: "/achievements/cisconew.png",
      description: "This badge confirms that I successfully completed the Cisco Networking Basics course and gained foundational knowledge in networking. I learned about network types, data transmission, network cabling, IP addressing, and how transport and application layers work. I also practiced building a home wireless network and completed up to 13 Cisco Packet Tracer activities.",
      credentialId: "No Direct Credential ID",
      credentialUrl: "https://www.credly.com/badges/99bf6573-2fff-4592-91e2-e65e7e9d147d/public_url",
    },
    {
      id: 3,
      title: "SQL Intermediate",
      issuer: "HackerRank",
      date: "2024",
      image: "/achievements/hr.png",
      description: "Intermediate to advanced level understanding of SQL concepts and its usage in a real data environment.",
      credentialId: "509CC9ABD777",
      credentialUrl: "https://www.hackerrank.com/certificates/509cc9abd777",
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

  // Refresh AOS animations when tab changes
  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [activeTab]);

  const getValidityStatus = (expiryDate?: string): { status: string; color: string; icon: string } => {
    if (!expiryDate) return { status: 'Permanent', color: 'from-green-500 to-emerald-500', icon: '✓' };
    
    const expiry = new Date(expiryDate);
    const now = new Date();
    const monthsUntilExpiry = (expiry.getTime() - now.getTime()) / (1000 * 3600 * 24 * 30);
    
    if (monthsUntilExpiry > 12) {
      return { status: 'Valid', color: 'from-green-500 to-emerald-500', icon: '✓' };
    } else if (monthsUntilExpiry > 3) {
      return { status: 'Expiring Soon', color: 'from-yellow-500 to-orange-500', icon: '⚠️' };
    } else {
      return { status: 'Expired', color: 'from-red-500 to-pink-500', icon: '⏰' };
    }
  };

  const renderAchievements = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {achievements.map((achievement, index) => (
        <div
          key={achievement.id}
          className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative flex flex-col"
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmvFmETaYdCUtGhGPvGFxgxP8AcPl/2MrqLYrwPCOAuUgKPzJRHe2/CvfJQ7jT/wBAQH8lUvw2l/wAABcnUNPb7bPbwIJCTKOAQAx7dZ5XELJ1b4gBfbP6aZBX0kqUvXf1CEDOWHl+SX3NaOx5U5HPaVJRk4nJ5RRmBHe3RfTXU0/wAOHFOUggdGhPAUU6YdH6mALLX1z/2Q=="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
            
            {/* Date Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
              {achievement.date}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4 relative z-10 flex-grow flex flex-col">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {achievement.title}
              </h3>
              <div className="flex items-center space-x-2 text-cyan-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{achievement.organization}</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              {achievement.description}
            </p>

            {/* View Credential Button - Always at bottom */}
            {achievement.credentialUrl && (
              <div className="pt-2 mt-auto">
                <a
                  href={achievement.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Credential</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {certifications.map((certification, index) => {
        const validity = getValidityStatus(certification.expiryDate);
        
        return (
          <div
            key={certification.id}
            className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={certification.image}
                alt={certification.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmvFmETaYdCUtGhGPvGFxgxP8AcPl/2MrqLYrwPCOAuUgKPzJRHe2/CvfJQ7jT/wBAQH8lUvw2l/wAABcnUNPb7bPbwIJCTKOAQAx7dZ5XELJ1b4gBfbP6aZBX0kqUvXf1CEDOWHl+SX3NaOx5U5HPaVJRk4nJ5RRmBHe3RfTXU0/wAOHFOUggdGhPAUU6YdH6mALLX1z/2Q=="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              
              {/* Date Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                {certification.date}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4 relative z-10 flex-grow flex flex-col">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {certification.title}
                </h3>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">{certification.issuer}</span>
                </div>
                {certification.credentialId && (
                  <div className="text-xs text-gray-400">
                    Credential ID: {certification.credentialId}
                  </div>
                )}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                {certification.description}
              </p>

              {/* Expiry Date */}
              {certification.expiryDate && (
                <div className="text-xs text-gray-400 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                  </svg>
                  <span>Expires: {certification.expiryDate}</span>
                </div>
              )}

              {/* View Credential Button - Always at bottom */}
              {certification.credentialUrl && (
                <div className="pt-2 mt-auto">
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-10 rounded-bl-3xl transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="certifications" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Achievements &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
            Recognition of excellence, professional certifications, and continuous learning milestones in my career journey
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                activeTab === 'achievements'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/30'
                  : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-yellow-500/30 hover:text-yellow-400'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>Achievements</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-cyan-500/30 hover:text-cyan-400'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>Certifications</span>
              </span>
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="mb-16">
          {activeTab === 'achievements' ? renderAchievements() : renderCertifications()}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <a
            href="https://www.linkedin.com/in/yourprofile" // Replace with your actual LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/25 inline-flex items-center justify-center space-x-2"
          >
            <span>View All Certifications and Achievements</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;