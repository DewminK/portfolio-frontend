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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      style={{
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      <div 
        className="bg-gray-800/95 backdrop-blur-lg rounded-2xl max-w-2xl w-full max-h-[70vh] overflow-y-auto border border-gray-700/50 transform transition-all duration-300 animate-modal-appear"
        style={{
          animation: 'modalAppear 0.4s ease-out'
        }}
      >
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes modalAppear {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(-20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
        {/* Modal Header */}
        <div className="relative">
          <div className="h-40 relative overflow-hidden rounded-t-2xl">
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
            className="absolute top-4 right-4 w-8 h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
              project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
              'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            }`}>
              {project.status === 'completed' ? 'Completed' :
               project.status === 'in-progress' ? 'In Progress' :
               '📋 Planning'}
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {project.longDescription}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full text-xs font-semibold border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Embula Project",
      description: "A full-stack e-commerce web application for a restuarant with features like user authentication, product catalog, shopping cart, and payment processing.",
      longDescription: "A comprehensive e-commerce platform for a restaurant built with Next.js for the front-end and springboot for the back-end. Features include user authentication, product catalog, shopping cart, payment processing, order management, and an admin dashboard. The platform is fully responsive and includes advanced features like product filtering, search functionality, and real-time inventory updates.",
      image: "/projects/embula.png",
      technologies: ["Next.js", "SpringBoot", "SQL Server", "Tailwind CSS"],
      githubUrl: "https://github.com/DewminK/EmbulaProject",
      category: "Web Project",
      status: "in-progress"
    },
    {
      id: 2,
      title: "My Portfolio Site",
      description: "My first portfolio website showcasing my skills, projects, and experiences.",
      longDescription: "My personal portfolio website built with Next.js and Tailwind CSS. It features a modern design, responsive layout, and showcases my skills, projects, and experiences. The site includes sections for introduction, education, projects, skills, experience, certifications, testimonials, blogs, and contact information. It also utilizes Aos.jsx for smooth scrolling animations.",
      image: "/projects/portfolio.png",
      technologies: ["Next.js", "Asp.Net", "Tailwind CSS", "Aos.jsx"],
      githubUrl: "https://github.com/DewminK/portfolio-frontend",
      category: "Web Project",
      status: "completed"
    },
    {
      id: 3,
      title: "PresCrypt",
      description: "Our second year software project, that aims to provide a modern healthcare solution amoung doctors and patients while providing a secure and efficient way to manage prescriptions.",
      longDescription: "PresCrypt is a modern healthcare solution designed to streamline the prescription management process between doctors and patients. The platform allows doctors to create, manage, and share prescriptions securely with their patients. It features user authentication, prescription history tracking, and real-time notifications for both doctors and patients. Built with Next.js for the front-end, Asp.Net for back-end and Python flask for the back-end for chatbot, it utilizes SQL Server for the database and OpenMRS for storign critical health data.",
      image: "/projects/prescrypt.png",
      technologies: ["Next.js", "Asp.Net", "OpenMRS", "SQL Server", "Flask", "Gemini" , "Tailwind CSS" , "Material UI"],
      githubUrl: "https://github.com/orgs/TechGenPioneers/repositories",
      category: "Group Web Project",
      status: "completed"
    },
    {
      id: 4,
      title: "Sell-X",
      description: "A system for finding and searching for flagship smartphones with a user-friendly interface and advanced search features.",
      longDescription: "Sell-X is a comprehensive platform designed to help users find and purchase flagship smartphones with ease.",
      image: "/projects/flagx.jpeg",
      technologies: ["React.js", "Ballerina"],
      githubUrl: "https://github.com/DewminK/iwb092-byte-coders",
      category: "Group Web Project",
      status: "completed"
    },
    {
      id: 5,
      title: "Water Tank Cleaning System",
      description: "Our first year hardware project, that aims to provide a solution to clean the inside of a water tanks using linear actuators and a microcontroller based system.",
      longDescription: "A hardware project that automates the cleaning of water tanks using linear actuators and a microcontroller-based system. The system includes sensors to detect water levels, a control unit to manage the cleaning process, and a sms notifications for users about the process. It aims to provide an efficient and effective solution for maintaining clean water tanks.",
      image: "/projects/hw.jpg",
      technologies: ["Arduino", "ESP32" ,"C"],
      githubUrl: "https://github.com/dewmin/realtime-chat",
      category: "Group Hardware Project",
      status: "completed"
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
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            A showcase of my technical expertise through innovative projects that solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col h-full"
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
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex-1 pr-4">
                    {project.title}
                  </h3>
                  <div className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full whitespace-nowrap">
                    {project.category}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
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

                {/* Action Buttons - Fixed to bottom */}
                <div className="flex space-x-3 mt-auto">
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
                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600/50 transition-all duration-300 hover:scale-110 flex-shrink-0"
                    title="View Code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://github.com/DewminK?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/25 relative overflow-hidden inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="flex items-center justify-center space-x-2 relative z-10">
              <span>View Other Projects on GitHub</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
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