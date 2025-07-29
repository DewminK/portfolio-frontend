'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Skill {
  id: number;
  name: string;
  devicon: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { id: 1, name: 'Next.js', devicon: 'devicon-nextjs-original ' },
    { id: 2, name: 'React.js', devicon: 'devicon-react-original colored' },
    { id: 3, name: 'JavaScript', devicon: 'devicon-javascript-plain colored ' },
    { id: 4, name: 'HTML5', devicon: 'devicon-html5-plain colored' },
    { id: 5, name: 'CSS3', devicon: 'devicon-css3-plain colored' },
    { id: 6, name: 'Tailwind CSS', devicon: 'devicon-tailwindcss-plain colored' },
    { id: 7, name: 'Material-UI', devicon: 'devicon-materialui-plain colored' },

    // Backend
    { id: 8, name: 'Node.js', devicon: 'devicon-nodejs-plain-wordmark colored' },
    { id: 9, name: 'Java', devicon: 'devicon-java-plain colored' },
    { id: 10, name: 'C#', devicon: 'devicon-csharp-plain colored' },
    { id: 11, name: '.NET Core', devicon: 'devicon-dotnetcore-plain' },
    { id: 12, name: 'C', devicon: 'devicon-c-line' },
    { id: 13, name: 'PHP', devicon: 'devicon-php-plain' },

    // Database
    { id: 14, name: 'SQL Server', devicon: 'devicon-microsoftsqlserver-plain colored' },
    { id: 15, name: 'MySQL', devicon: 'devicon-mysql-plain-wordmark' },

    // Cloud & Security
    { id: 16, name: 'Azure Sql Database', devicon: 'devicon-azure-plain' },
    { id: 17, name: 'Linux', devicon: 'devicon-linux-plain' },
    { id: 18, name: 'Git', devicon: 'devicon-git-plain colored' },
    { id: 19, name: 'Github', devicon: 'devicon-github-original' },

  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Check if Devicon CSS is already loaded
    const existingLink = document.querySelector('link[href*="devicon"]');
    if (!existingLink) {
      // Load Devicon CSS
      const deviconLink = document.createElement('link');
      deviconLink.rel = 'stylesheet';
      deviconLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css';
      deviconLink.crossOrigin = 'anonymous';
      
      // Add error handling
      deviconLink.onerror = () => {
        console.warn('Failed to load Devicon CSS');
      };
      
      deviconLink.onload = () => {
        console.log('Devicon CSS loaded successfully');
      };
      
      document.head.appendChild(deviconLink);
    }
  }, []);

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Technical{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
            Technologies and frameworks I am currently working and studying with
          </p>
        </div>

        {/* Skills Grid - Logo Only */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="group flex flex-col items-center justify-center p-6 bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl hover:bg-gray-800/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Logo */}
              <div className="relative z-10 flex flex-col items-center space-y-3">
                <i className={`${skill.devicon} text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
                
                {/* Skill name - appears on hover */}
                <span className="text-sm font-medium text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 text-center opacity-0 group-hover:opacity-100">
                  {skill.name}
                </span>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-bl-2xl transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;