import React from 'react';
import { User, Briefcase, GraduationCap, Code, Globe, Database, Award, Target } from 'lucide-react';

const About = () => {
  const experience = [
    {
      company: "AsquareTec",
      position: "Web Developer",
      duration: "Current",
      description: "Working on various web development projects using modern technologies including Magento 2, Laravel, and WordPress development.",
      technologies: ["Magento 2", "Laravel", "WordPress", "PHP", "JavaScript", "jQuery"]
    }
  ];

  const languages = [
    { name: "Urdu", level: "Fluent", color: "bg-green-500" },
    { name: "English", level: "Basic (Learning)", color: "bg-yellow-500" }
  ];

  const technologies = [
    { name: "HTML5", icon: Code, description: "Semantic markup and modern HTML5 standards", level: 90 },
    { name: "CSS3", icon: Code, description: "Advanced styling with modern CSS3 and responsive design", level: 85 },
    { name: "JavaScript", icon: Code, description: "ES6+ and modern JavaScript development", level: 82 },
    { name: "PHP", icon: Database, description: "Server-side development and API creation", level: 88 },
    { name: "jQuery", icon: Code, description: "DOM manipulation and AJAX interactions", level: 85 },
    { name: "Magento 2", icon: Globe, description: "E-commerce platform development and customization", level: 90 },
    { name: "Laravel", icon: Database, description: "PHP framework for web applications", level: 85 },
    { name: "WordPress", icon: Globe, description: "CMS development and theme customization", level: 80 }
  ];

  const achievements = [
    "Successfully delivered complete Laravel platform (Nestmate)",
    "Enhanced e-commerce functionality across multiple Magento 2 projects",
    "Implemented custom checkout solutions and payment features",
    "Developed responsive and user-friendly interfaces"
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-bounce">
                <User className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                About Hamza Virk
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed animate-fade-in-up delay-200">
                Passionate Web Developer with 1+ year of professional experience specializing in 
                modern web technologies and e-commerce solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Objective */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Career Objective
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-xl">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed text-center">
                To work as a professional Web Developer where I can utilize my skills in 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> Magento 2</span>, 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Laravel</span>, and 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> WordPress</span>, 
                contribute to innovative projects, and grow my expertise in advanced web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Skills */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies & Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Proficient in modern web development technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {tech.description}
                  </p>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Proficiency</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Languages
              </h2>
            </div>
            
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${language.color}`}></div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {language.name}
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 font-medium">
                      {language.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Building expertise through hands-on development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
                      {exp.company} • {exp.duration}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Achievements
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Let's collaborate to bring your web development ideas to life with 
            clean, scalable, and optimized solutions using modern technologies.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Let's Work Together</span>
            <Code className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;