'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  icon: string;
  color: string;
  description: string;
  experience: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories: SkillCategory[] = [
    { id: 'all', name: 'All Skills', icon: '🚀', color: 'from-cyan-500 to-blue-500' },
    { id: 'frontend', name: 'Frontend', icon: '🎨', color: 'from-pink-500 to-purple-500' },
    { id: 'backend', name: 'Backend', icon: '⚙️', color: 'from-green-500 to-emerald-500' },
    { id: 'database', name: 'Database', icon: '🗄️', color: 'from-orange-500 to-red-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: '☁️', color: 'from-blue-500 to-indigo-500' },
    { id: 'security', name: 'Security', icon: '🔒', color: 'from-red-500 to-pink-500' },
    { id: 'languages', name: 'Languages', icon: '💻', color: 'from-violet-500 to-purple-500' }
  ];

  const skills: Skill[] = [
    // Frontend
    { id: 1, name: 'Next.js', category: 'frontend', proficiency: 90, icon: '⚡', color: 'from-gray-800 to-black', description: 'Full-stack React framework', experience: '2+ years' },
    { id: 2, name: 'React.js', category: 'frontend', proficiency: 95, icon: '⚛️', color: 'from-cyan-400 to-blue-500', description: 'Component-based UI library', experience: '3+ years' },
    { id: 3, name: 'JavaScript', category: 'languages', proficiency: 95, icon: '🟨', color: 'from-yellow-400 to-orange-500', description: 'Modern ES6+ development', experience: '4+ years' },
    { id: 4, name: 'HTML5', category: 'frontend', proficiency: 98, icon: '🌐', color: 'from-orange-500 to-red-500', description: 'Semantic markup & accessibility', experience: '5+ years' },
    { id: 5, name: 'CSS3', category: 'frontend', proficiency: 92, icon: '🎨', color: 'from-blue-400 to-purple-500', description: 'Advanced styling & animations', experience: '4+ years' },
    { id: 6, name: 'Tailwind CSS', category: 'frontend', proficiency: 88, icon: '💨', color: 'from-teal-400 to-cyan-500', description: 'Utility-first CSS framework', experience: '2+ years' },
    { id: 7, name: 'Material-UI', category: 'frontend', proficiency: 85, icon: '🔷', color: 'from-blue-600 to-indigo-600', description: 'React component library', experience: '2+ years' },

    // Backend
    { id: 8, name: 'Node.js', category: 'backend', proficiency: 90, icon: '🟢', color: 'from-green-500 to-emerald-600', description: 'Server-side JavaScript runtime', experience: '3+ years' },
    { id: 9, name: 'Java', category: 'languages', proficiency: 85, icon: '☕', color: 'from-orange-600 to-red-600', description: 'Enterprise application development', experience: '3+ years' },
    { id: 10, name: 'C#', category: 'languages', proficiency: 80, icon: '🔷', color: 'from-purple-600 to-indigo-600', description: 'Object-oriented programming', experience: '2+ years' },
    { id: 11, name: '.NET', category: 'backend', proficiency: 78, icon: '🔵', color: 'from-blue-600 to-purple-600', description: 'Microsoft development framework', experience: '2+ years' },
    { id: 12, name: 'C', category: 'languages', proficiency: 75, icon: '⚡', color: 'from-gray-600 to-gray-800', description: 'System programming language', experience: '2+ years' },
    { id: 13, name: 'PHP', category: 'backend', proficiency: 82, icon: '🐘', color: 'from-indigo-500 to-purple-600', description: 'Server-side web development', experience: '2+ years' },

    // Database
    { id: 14, name: 'SQL Server', category: 'database', proficiency: 87, icon: '🗃️', color: 'from-red-600 to-orange-600', description: 'Microsoft relational database', experience: '2+ years' },
    { id: 15, name: 'MySQL', category: 'database', proficiency: 90, icon: '🐬', color: 'from-blue-500 to-teal-500', description: 'Open-source relational database', experience: '3+ years' },

    // Cloud & Security
    { id: 16, name: 'Azure App Services', category: 'cloud', proficiency: 75, icon: '☁️', color: 'from-blue-500 to-cyan-500', description: 'Cloud application platform', experience: '1+ years' },
    { id: 17, name: 'Kali Linux', category: 'security', proficiency: 70, icon: '🐉', color: 'from-gray-800 to-red-900', description: 'Penetration testing OS', experience: '1+ years' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const getSkillIcon = (skill: Skill): React.ReactNode => {
    return (
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl font-bold text-white shadow-2xl group-hover:scale-110 transition-all duration-300`}>
        {skill.icon}
      </div>
    );
  };

  const getProficiencyLabel = (proficiency: number): string => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getProficiencyColor = (proficiency: number): string => {
    if (proficiency >= 90) return 'from-green-500 to-emerald-500';
    if (proficiency >= 80) return 'from-blue-500 to-cyan-500';
    if (proficiency >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

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
            A comprehensive overview of my technical expertise and proficiency levels across various technologies
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-cyan-500/30`
                    : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-cyan-500/30 hover:text-cyan-400'
                }`}
                data-aos="fade-up"
                data-aos-delay={skillCategories.indexOf(category) * 100}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {category.id === 'all' ? skills.length : skills.filter(s => s.category === category.id).length}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Skill content */}
              <div className="relative z-10 space-y-4">
                {/* Icon and name */}
                <div className="flex items-center space-x-4">
                  {getSkillIcon(skill)}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400">{skill.experience}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Proficiency bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Proficiency</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} text-white`}>
                      {getProficiencyLabel(skill.proficiency)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} rounded-full transition-all duration-1000 shadow-lg`}
                      style={{ 
                        width: hoveredSkill === skill.id ? `${skill.proficiency}%` : '0%',
                        transitionDelay: hoveredSkill === skill.id ? '300ms' : '0ms'
                      }}
                    ></div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400">{skill.proficiency}%</span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="flex justify-end">
                  <span className="text-xs bg-gray-700/50 text-gray-400 px-3 py-1 rounded-full capitalize">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Animated corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${skill.color} opacity-10 rounded-bl-2xl transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">{skills.length}+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2">
              {skills.filter(s => s.proficiency >= 90).length}
            </div>
            <div className="text-gray-300">Expert Level</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2">
              {skillCategories.length - 1}
            </div>
            <div className="text-gray-300">Specializations</div>
          </div>
        </div>

        {/* Interactive Skill Constellation */}
        <div className="mt-20 relative" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              My Technology{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h3>
            <p className="text-gray-400">Hover over skills to see connections and proficiency levels</p>
          </div>

          {/* Skill constellation visualization */}
          <div className="relative h-64 bg-gray-800/20 rounded-2xl border border-gray-700/50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-6 gap-4">
                {skills.slice(0, 12).map((skill, index) => (
                  <div
                    key={skill.id}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-sm font-bold cursor-pointer transform hover:scale-125 transition-all duration-300 shadow-lg`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      opacity: hoveredSkill === null || hoveredSkill === skill.id ? 1 : 0.3
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    title={`${skill.name} - ${skill.proficiency}%`}
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;