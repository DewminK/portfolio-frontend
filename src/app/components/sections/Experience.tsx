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
  responsibilities: string[];
  skills: string[];
  type: 'leadership' | 'committee' | 'volunteer';
}

const Experiences: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Junior Treasurer",
      organization: "Intecs",
      period: "2023 - Present",
      location: "University of Moratuwa",
      image: "/api/placeholder/300/200",
      description: "Managing financial operations and budget planning for the Information Technology Society, ensuring transparent financial practices and supporting various technical events and workshops.",
      responsibilities: [
        "Financial planning and budget management",
        "Maintaining accurate financial records",
        "Coordinating with sponsors and vendors",
        "Reporting to executive committee"
      ],
      skills: ["Financial Management", "Leadership", "Communication", "Excel"],
      type: "leadership"
    },
    {
      id: 2,
      title: "Events Committee Member",
      organization: "IEEE Student Branch",
      period: "2022 - Present",
      location: "University of Moratuwa",
      image: "/api/placeholder/300/200",
      description: "Active contributor to organizing technical workshops, seminars, and competitions. Collaborating with industry professionals to bring cutting-edge technology insights to students.",
      responsibilities: [
        "Event planning and coordination",
        "Speaker liaison and management",
        "Logistics and venue coordination",
        "Participant engagement activities"
      ],
      skills: ["Event Management", "Team Coordination", "Public Speaking", "Networking"],
      type: "committee"
    },
    {
      id: 3,
      title: "Delegates Handling Committee Leader",
      organization: "Innovate with Ballerina 2025",
      period: "2024 - 2025",
      location: "National Conference",
      image: "/api/placeholder/300/200",
      description: "Leading the delegates handling committee for a major national technology conference, managing participant registration, accommodation, and ensuring smooth conference experience for all attendees.",
      responsibilities: [
        "Team leadership and coordination",
        "Delegate registration management",
        "Accommodation and logistics planning",
        "Communication with international speakers"
      ],
      skills: ["Leadership", "Project Management", "Communication", "Problem Solving"],
      type: "volunteer"
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

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'leadership': return 'from-cyan-500 to-blue-500';
      case 'committee': return 'from-purple-500 to-pink-500';
      case 'volunteer': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string): string => {
    switch (type) {
      case 'leadership': return '👑';
      case 'committee': return '🤝';
      case 'volunteer': return '🌟';
      default: return '💼';
    }
  };

  const getTypeLabel = (type: string): string => {
    switch (type) {
      case 'leadership': return 'Leadership Role';
      case 'committee': return 'Committee Member';
      case 'volunteer': return 'Volunteer Leader';
      default: return 'Experience';
    }
  };

  const handleLinkedInClick = (): void => {
    // Replace with your actual LinkedIn profile URL
    window.open('https://linkedin.com/in/your-profile', '_blank');
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
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            My journey through leadership roles, committee memberships, and volunteer experiences that shaped my professional growth
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
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(experience.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={`${experience.title} at ${experience.organization}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Type Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTypeColor(experience.type)} text-white border border-white/20 backdrop-blur-sm`}>
                  <span className="flex items-center space-x-1">
                    <span>{getTypeIcon(experience.type)}</span>
                    <span>{getTypeLabel(experience.type)}</span>
                  </span>
                </div>

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

                {/* Key Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {experience.responsibilities.slice(0, 3).map((responsibility, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(experience.type)} bg-opacity-20 text-xs font-semibold rounded-full border border-cyan-500/30 text-cyan-400`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getTypeColor(experience.type)} opacity-10 rounded-bl-3xl transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA Section */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-white">
                Want to learn more about my{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  professional journey?
                </span>
              </h3>
              <p className="text-gray-300 mb-6">
                Connect with me on LinkedIn to see detailed information about my experiences, achievements, and professional network.
              </p>
              <button
                onClick={handleLinkedInClick}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/25 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>View Full Experience on LinkedIn</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Experience Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="800">
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-gray-300 text-sm">Leadership Roles</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-gray-300 text-sm">Events Organized</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;