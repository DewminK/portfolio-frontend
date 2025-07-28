'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planning';
}

interface ModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-800/95 backdrop-blur-lg rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50">
        {/* Modal Header */}
        <div className="relative">
          <div className="h-64 relative overflow-hidden rounded-t-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent"></div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
              project.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
              project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
              'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            }`}>
              {project.status === 'completed' ? '✅ Completed' :
               project.status === 'in-progress' ? '🔄 In Progress' :
               '📋 Planning'}
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {project.longDescription}
          </p>

          {/* Technologies */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-600 hover:to-gray-500 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      longDescription: "A comprehensive e-commerce platform built with Next.js and Node.js. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard. The platform is fully responsive and includes advanced features like product filtering, search functionality, and real-time inventory updates.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/dewmin/ecommerce-platform",
      liveUrl: "https://dewmin-ecommerce.vercel.app",
      category: "fullstack",
      status: "completed"
    },
    {
      id: 2,
      title: "Network Security Analyzer",
      description: "Advanced network monitoring tool with real-time threat detection and security analytics.",
      longDescription: "A sophisticated network security analyzer that monitors network traffic, detects potential threats, and provides comprehensive security analytics. Built with Python and featuring machine learning algorithms for anomaly detection, real-time alerting system, and detailed reporting capabilities. The tool helps organizations maintain network security and compliance.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Scapy", "Flask", "SQLite", "Chart.js", "Docker"],
      githubUrl: "https://github.com/dewmin/network-analyzer",
      category: "security",
      status: "completed"
    },
    {
      id: 3,
      title: "AI Task Management",
      description: "Smart task management app with AI-powered prioritization and productivity insights.",
      longDescription: "An intelligent task management application that leverages AI to automatically prioritize tasks, suggest optimal scheduling, and provide productivity insights. The app learns from user behavior patterns and provides personalized recommendations. Features include collaborative workspaces, deadline predictions, and integration with popular productivity tools.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "OpenAI API", "Redis"],
      githubUrl: "https://github.com/dewmin/ai-task-manager",
      liveUrl: "https://ai-tasks.dewmin.dev",
      category: "ai",
      status: "in-progress"
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on blockchain technology.",
      longDescription: "A decentralized voting system that ensures transparency, security, and immutability of votes using blockchain technology. The platform features voter verification, encrypted ballot casting, real-time result tracking, and audit trails. Built with Ethereum smart contracts and a user-friendly web interface for seamless voting experience.",
      image: "/api/placeholder/600/400",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
      githubUrl: "https://github.com/dewmin/blockchain-voting",
      category: "blockchain",
      status: "completed"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "Modern chat app with video calls, file sharing, and end-to-end encryption.",
      longDescription: "A feature-rich real-time communication platform that supports text messaging, voice and video calls, file sharing, and group conversations. Implements end-to-end encryption for security, supports multimedia messages, and includes features like message reactions, typing indicators, and online status. Built with WebRTC for peer-to-peer communication.",
      image: "/api/placeholder/600/400",
      technologies: ["Socket.io", "WebRTC", "Node.js", "React", "MongoDB", "JWT"],
      githubUrl: "https://github.com/dewmin/realtime-chat",
      liveUrl: "https://chat.dewmin.dev",
      category: "fullstack",
      status: "completed"
    },
    {
      id: 6,
      title: "IoT Home Automation",
      description: "Smart home system with IoT sensors, mobile app control, and energy monitoring.",
      longDescription: "A comprehensive IoT-based home automation system that allows users to control various home appliances remotely. Features include temperature and humidity monitoring, automated lighting control, security system integration, energy consumption tracking, and mobile app control. The system uses various sensors and microcontrollers to create a smart, efficient home environment.",
      image: "/api/placeholder/600/400",
      technologies: ["Arduino", "Raspberry Pi", "React Native", "Firebase", "MQTT", "Python"],
      githubUrl: "https://github.com/dewmin/iot-home-automation",
      category: "iot",
      status: "planning"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'security', label: 'Security', count: projects.filter(p => p.category === 'security').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'blockchain', label: 'Blockchain', count: projects.filter(p => p.category === 'blockchain').length },
    { id: 'iot', label: 'IoT', count: projects.filter(p => p.category === 'iot').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
            A showcase of my technical expertise through innovative projects that solve real-world problems
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-cyan-500/30 hover:text-cyan-400'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span>{category.label}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {project.status === 'completed' ? 'Completed' :
                   project.status === 'in-progress' ? 'In Progress' :
                   'Planning'}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full text-xs font-semibold border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
                  >
                    More Info
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600/50 transition-all duration-300 hover:scale-110"
                    title="View Code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600/50 transition-all duration-300 hover:scale-110"
                      title="Live Demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/25 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="flex items-center justify-center space-x-2 relative z-10">
              <span>View All Projects on GitHub</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;