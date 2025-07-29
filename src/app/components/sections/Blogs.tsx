'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: number;
  image: string;
  mediumUrl?: string;
}

const Blogs: React.FC = () => {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Understanding Dependency Injection and Repository Pattern",
      excerpt: "This article explains the core concepts of Dependency Injection and the Repository Pattern in simple terms, using .NET for code examples. While these patterns are common in frameworks like Spring Boot, Angular, and .NET, the article focuses on their universal application across backend technologies.",
      content: "This article explains the core concepts of Dependency Injection and the Repository Pattern in simple terms, using .NET for code examples. While these patterns are common in frameworks like Spring Boot, Angular, and .NET, the article focuses on their universal application across backend technologies.",
      publishDate: "Mar 2025",
      readTime: 11,
      image: "/blogs/dependency.webp",
      mediumUrl: "https://medium.com/@dewminkasmitha30/understanding-dependency-injection-and-repository-pattern-building-scalable-applications-across-c09391da0e03",
    },
    {
      id: 2,
      title: "A Decade of Data Breaches",
      excerpt: "I explore the topic of data breaches—what they are, why they happen, and how they impact individuals and organizations. The article explains how data breaches differ from data leaks, highlights real-world examples from the past decade, and discusses the motivations behind such attacks. It also provides practical strategies for protecting against these threats.",
      content: " I explore the topic of data breaches—what they are, why they happen, and how they impact individuals and organizations. The article explains how data breaches differ from data leaks, highlights real-world examples from the past decade, and discusses the motivations behind such attacks. It also provides practical strategies for protecting against these threats.",
      publishDate: "May 2024",
      readTime: 8,
      image: "/blogs/databreach.webp",
      mediumUrl: "https://medium.com/@dewminkasmitha30/a-decade-of-data-breaches-understanding-the-threat-and-guarding-your-data-39abe9d94d34",
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
      case 'Frontend Development': return 'from-blue-500 to-cyan-500';
      case 'Artificial Intelligence': return 'from-purple-500 to-pink-500';
      case 'Backend Development': return 'from-green-500 to-emerald-500';
      case 'DevOps': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="blogs" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Latest{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
            Insights, tutorials, and thoughts on software development, technology trends, and personal experiences
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmvFmETaYdCUtGhGPvGFxgxP8AcPl/2MrqLYrwPCOAuUgKPzJRHe2/CvfJQ7jT/wBAQH8lUvw2l/wAABcnUNPb7bPbwIJCTKOAQAx7dZ5XELJ1b4gBfbP6aZBX0kqUvXf1CEDOWHl+SX3NaOx5U5HPaVJRk4nJ5RRmBHe3RfTXU0/wAOHFOUggdGhPAUU6YdH6mALLX1z/2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Read Time Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm flex items-center space-x-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{blog.readTime} min read</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4 relative z-10 flex-grow flex flex-col">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-400 space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{blog.publishDate}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {blog.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>

                {/* Read More Button - Always at bottom */}
                <div className="pt-4 mt-auto">
                  {blog.mediumUrl ? (
                    <a
                      href={blog.mediumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                    >
                      <span>Read on Medium</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <button className="inline-flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                      <span>Read More</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://medium.com/@dewminkasmitha30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-green-500/25"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                    </svg>
                    <span>View My Medium</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;