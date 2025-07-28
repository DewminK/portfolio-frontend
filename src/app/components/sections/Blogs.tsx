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
  tags: string[];
  category: string;
  mediumUrl?: string;
  views: number;
  likes: number;
}

const Blogs: React.FC = () => {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React and Next.js",
      excerpt: "Explore the best practices for creating performant and scalable web applications using modern React patterns and Next.js features.",
      content: "In this comprehensive guide, I'll walk you through the essential concepts and patterns for building scalable web applications...",
      publishDate: "July 15, 2024",
      readTime: 8,
      image: "/api/placeholder/400/250",
      tags: ["React", "Next.js", "Web Development", "Performance"],
      category: "Frontend Development",
      mediumUrl: "https://medium.com/@dewmin/building-scalable-web-apps",
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: "The Future of AI in Software Development",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we write, test, and deploy software applications.",
      content: "Artificial Intelligence is transforming every aspect of software development, from code generation to automated testing...",
      publishDate: "July 8, 2024",
      readTime: 12,
      image: "/api/placeholder/400/250",
      tags: ["AI", "Machine Learning", "Software Development", "Future Tech"],
      category: "Artificial Intelligence",
      mediumUrl: "https://medium.com/@dewmin/future-of-ai-development",
      views: 2100,
      likes: 156
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

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case 'Frontend Development': return '🎨';
      case 'Artificial Intelligence': return '🤖';
      case 'Backend Development': return '⚙️';
      case 'DevOps': return '🚀';
      default: return '📝';
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
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
              className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(blog.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(blog.category)} text-white border border-white/20 backdrop-blur-sm`}>
                  <span className="flex items-center space-x-1">
                    <span>{getCategoryIcon(blog.category)}</span>
                    <span>{blog.category}</span>
                  </span>
                </div>

                {/* Read Time Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm flex items-center space-x-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{blog.readTime} min read</span>
                </div>

                {/* Stats */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-3">
                  <div className="flex items-center space-x-1 bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-xs text-cyan-400">{formatNumber(blog.views)}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-red-400">{blog.likes}</span>
                  </div>
                </div>

                {/* Blog Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  📝
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-400 space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{blog.publishDate}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(blog.category)} bg-opacity-20 text-xs font-semibold rounded-full border border-cyan-500/30 text-cyan-400`}
                      >
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700/50 text-xs font-semibold rounded-full border border-gray-600/30 text-gray-400">
                        +{blog.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Read More Button */}
                <div className="pt-4">
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

              {/* Animated corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getCategoryColor(blog.category)} opacity-10 rounded-bl-3xl transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
            </article>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{blogs.length}+</div>
            <div className="text-gray-300 text-sm">Published Articles</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {formatNumber(blogs.reduce((sum, blog) => sum + blog.views, 0))}
            </div>
            <div className="text-gray-300 text-sm">Total Views</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
            <div className="text-3xl font-bold text-red-400 mb-2">
              {blogs.reduce((sum, blog) => sum + blog.likes, 0)}
            </div>
            <div className="text-gray-300 text-sm">Total Likes</div>
          </div>
        </div>

        {/* Call to Action - View Medium Profile */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-bold text-white">
                More{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Stories & Insights
                </span>
              </h3>
              <p className="text-gray-300 mb-6">
                Explore my complete collection of articles, tutorials, and tech insights on Medium. Join thousands of readers following my journey in software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://medium.com/@dewmin"
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
                <button className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V12a9.5 9.5 0 0119 0v5z" />
                    </svg>
                    <span>Subscribe to Updates</span>
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

export default Blogs;