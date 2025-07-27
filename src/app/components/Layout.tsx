'use client';

import { useState, useEffect } from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  id: string;
  label: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>('introduction');

  const navItems: NavItem[] = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact Us' }
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = (): void => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background overlay with animated particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black/40 to-black/80"></div>
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
      />

      {/* Main content */}
      <main className="relative z-10 pt-16">
        {children}
      </main>

      {/* Scroll indicator - Desktop only */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {navItems.map((item: NavItem) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                activeSection === item.id
                  ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              title={item.label}
              aria-label={`Navigate to ${item.label} section`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-gray-800/50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ease-out"
          style={{
            width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default Layout;