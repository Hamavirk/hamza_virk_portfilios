import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Web Development Excellence",
      subtitle: "Creating modern, scalable solutions"
    },
    {
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "E-commerce Expertise",
      subtitle: "Magento 2 & Laravel specialist"
    },
    {
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Innovation & Quality",
      subtitle: "Building the future of web"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const skills = [
    { name: 'Magento 2', icon: Code, level: 90 },
    { name: 'Laravel', icon: Database, level: 85 },
    { name: 'WordPress', icon: Globe, level: 80 },
    { name: 'PHP', icon: Code, level: 88 },
    { name: 'JavaScript', icon: Code, level: 82 },
    { name: 'jQuery', icon: Code, level: 85 },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-slate-900/80"></div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hamza Virk
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-up delay-200">
            Professional Web Developer
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Specializing in Magento 2, Laravel, and WordPress with 1+ year of professional experience 
            creating scalable, optimized solutions for e-commerce and web platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
            <Link
              to="/projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-400 scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on performance and scalability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors duration-300">
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;