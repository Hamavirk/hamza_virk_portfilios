import React from 'react';
import { User, Briefcase, GraduationCap, Code, Globe, Database } from 'lucide-react';

const About = () => {
  const experience = [
    {
      company: "AsquareTec",
      position: "Web Developer",
      duration: "Current",
      description: "Working on various web development projects using modern technologies",
      technologies: ["Magento 2", "Laravel", "WordPress", "PHP", "JavaScript"]
    }
  ];

  const languages = [
    { name: "Urdu", level: "Fluent", color: "bg-green-500" },
    { name: "English", level: "Basic (Learning)", color: "bg-yellow-500" }
  ];

  const technologies = [
    { name: "HTML", icon: Code, description: "Semantic markup and modern HTML5" },
    { name: "CSS", icon: Code, description: "Advanced styling with modern CSS3" },
    { name: "JavaScript", icon: Code, description: "ES6+ and modern JavaScript frameworks" },
    { name: "PHP", icon: Database, description: "Server-side development and APIs" },
    { name: "jQuery", icon: Code, description: "DOM manipulation and AJAX" },
    { name: "Magento 2", icon: Globe, description: "E-commerce platform development" },
    { name: "Laravel", icon: Database, description: "PHP framework for web applications" },
    { name: "WordPress", icon: Globe, description: "CMS development and customization" }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 animate-bounce">
                <User className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Hamza Virk
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                A passionate Web Developer with 1 year of professional experience, dedicated to 
                delivering clean, scalable, and optimized solutions for e-commerce and web platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Objective */}
      <section className="py-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Career Objective
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl shadow-lg">
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
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
                className="group p-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Languages
              </h2>
            </div>
            
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  className="p-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${language.color}`}></div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {language.name}
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {language.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Building expertise through hands-on development
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-8 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {exp.company} • {exp.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's collaborate to bring your web development ideas to life with 
            clean, scalable, and optimized solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;