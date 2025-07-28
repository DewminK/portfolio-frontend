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
  category: string;
  credentialUrl?: string;
  skills: string[];
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
  skills: string[];
}

const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'certifications'>('achievements');

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Dean's List Recognition",
      organization: "University of Moratuwa",
      date: "2023",
      image: "/api/placeholder/300/200",
      description: "Recognized for outstanding academic performance with GPA above 3.5, demonstrating excellence in Information Technology coursework and maintaining consistent high standards.",
      category: "Academic Excellence",
      skills: ["Academic Excellence", "Time Management", "Problem Solving", "Research"]
    },
    {
      id: 2,
      title: "Best Innovation Award",
      organization: "IEEE Hackathon 2024",
      date: "March 2024",
      image: "/api/placeholder/300/200",
      description: "Won first place in the national IEEE hackathon for developing an innovative IoT-based smart home security system with AI-powered threat detection capabilities.",
      category: "Innovation",
      credentialUrl: "https://ieee.org/certificates/innovation-2024",
      skills: ["Innovation", "IoT", "AI/ML", "Team Leadership", "Problem Solving"]
    },
    {
      id: 3,
      title: "Community Service Excellence",
      organization: "Rotaract Club",
      date: "December 2023",
      image: "/api/placeholder/300/200",
      description: "Awarded for outstanding community service contributions, leading multiple social impact projects and volunteer initiatives that benefited local communities.",
      category: "Community Service",
      skills: ["Leadership", "Community Engagement", "Project Management", "Social Impact"]
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "January 2024",
      expiryDate: "January 2027",
      image: "/api/placeholder/300/200",
      description: "Fundamental understanding of AWS Cloud concepts, services, security, architecture, pricing, and support. Demonstrates knowledge of cloud computing principles.",
      credentialId: "AWS-CCP-2024-001",
      credentialUrl: "https://aws.amazon.com/certification/verify",
      skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"]
    },
    {
      id: 2,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "November 2023",
      expiryDate: "November 2026",
      image: "/api/placeholder/300/200",
      description: "Foundational knowledge of cloud services and how Microsoft Azure provides those services. Understanding of Azure pricing, support, and service level agreements.",
      credentialId: "MS-AZ900-2023-456",
      credentialUrl: "https://learn.microsoft.com/credentials",
      skills: ["Azure Cloud", "Cloud Services", "Pricing Models", "SLA Management"]
    },
    {
      id: 3,
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "September 2023",
      image: "/api/placeholder/300/200",
      description: "Comprehensive understanding of cybersecurity principles, threat landscape, cryptography, and network security fundamentals for protecting digital assets.",
      credentialId: "CISCO-CYBER-2023-789",
      credentialUrl: "https://cisco.netacad.com/certificates",
      skills: ["Cybersecurity", "Network Security", "Cryptography", "Threat Analysis"]
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

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'Academic Excellence': return 'from-green-500 to-emerald-500';
      case 'Innovation': return 'from-purple-500 to-pink-500';
      case 'Community Service': return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case 'Academic Excellence': return '🎓';
      case 'Innovation': return '💡';
      case 'Community Service': return '🤝';
      default: return '🏆';
    }
  };

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
          className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative"
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          {/* Background glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(achievement.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
          
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
            
            {/* Category Badge */}
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white border border-white/20 backdrop-blur-sm`}>
              <span className="flex items-center space-x-1">
                <span>{getCategoryIcon(achievement.category)}</span>
                <span>{achievement.category}</span>
              </span>
            </div>

            {/* Date Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
              {achievement.date}
            </div>

            {/* Achievement Icon */}
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
              🏆
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4 relative z-10">
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

            <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
              {achievement.description}
            </p>

            {/* Skills */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white">Skills Demonstrated:</h4>
              <div className="flex flex-wrap gap-2">
                {achievement.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(achievement.category)} bg-opacity-20 text-xs font-semibold rounded-full border border-cyan-500/30 text-cyan-400`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* View Credential Button */}
            {achievement.credentialUrl && (
              <div className="pt-2">
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

          {/* Animated corner accent */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getCategoryColor(achievement.category)} opacity-10 rounded-bl-3xl transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
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
            className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={certification.image}
                alt={certification.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              
              {/* Validity Status Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${validity.color} text-white border border-white/20 backdrop-blur-sm`}>
                <span className="flex items-center space-x-1">
                  <span>{validity.icon}</span>
                  <span>{validity.status}</span>
                </span>
              </div>

              {/* Date Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                {certification.date}
              </div>

              {/* Certification Icon */}
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                📜
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4 relative z-10">
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

              <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                {certification.description}
              </p>

              {/* Expiry Date */}
              {certification.expiryDate && (
                <div className="text-xs text-gray-400 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Expires: {certification.expiryDate}</span>
                </div>
              )}

              {/* Skills */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {certification.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-xs font-semibold rounded-full border border-cyan-500/30 text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Credential Button */}
              {certification.credentialUrl && (
                <div className="pt-2">
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
                <span className="text-lg">🏆</span>
                <span>Achievements</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {achievements.length}
                </span>
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
                <span className="text-lg">📜</span>
                <span>Certifications</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {certifications.length}
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="mb-16">
          {activeTab === 'achievements' ? renderAchievements() : renderCertifications()}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{achievements.length}</div>
            <div className="text-gray-300 text-sm">Achievements</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{certifications.length}</div>
            <div className="text-gray-300 text-sm">Certifications</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {certifications.filter(c => getValidityStatus(c.expiryDate).status === 'Valid').length}
            </div>
            <div className="text-gray-300 text-sm">Active Certs</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">2024</div>
            <div className="text-gray-300 text-sm">Latest Year</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white">
                Continuous{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always pursuing new certifications and achievements to stay current with emerging technologies and industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/25">
                  <span className="flex items-center justify-center space-x-2">
                    <span>View All Credentials</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </button>
                <button className="group border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Contact for Verification</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

export default Certifications;