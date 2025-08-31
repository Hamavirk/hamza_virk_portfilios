import React, { useState } from 'react';
import { ExternalLink, Github, Code, ShoppingCart, Globe, Database, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Nestmate Platform",
      description: "Complete e-commerce platform developed using Laravel framework with modern features and scalable architecture.",
      longDescription: "Developed and delivered the entire Nestmate platform using Laravel. This project showcases my ability to build complete web applications from scratch, implementing user authentication, product management, order processing, and payment integration.",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS3", "HTML5"],
      url: "https://nestmate.ssquare.pk",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Laravel",
      status: "Live",
      features: ["User Authentication", "Product Management", "Order Processing", "Payment Integration"],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "RTT Shop",
      description: "Enhanced e-commerce functionality with custom login forms, mini cart, and discount features in Magento 2.",
      longDescription: "Created Login Form and Mini Cart functionality for RTT Shop. Added discount labels on products and customized the Checkout Page in Magento 2, improving user experience and conversion rates.",
      technologies: ["Magento 2", "PHP", "JavaScript", "jQuery", "CSS3"],
      url: "https://rttshop.com.br",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Magento 2",
      status: "Live",
      features: ["Custom Login Form", "Mini Cart", "Discount Labels", "Custom Checkout"],
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "RTT Quote",
      description: "Customized checkout experience for quote-based e-commerce platform using Magento 2.",
      longDescription: "Customized and updated the Checkout Page in Magento 2 for RTT Quote platform, implementing quote-specific functionality and improving the overall user experience.",
      technologies: ["Magento 2", "PHP", "JavaScript", "CSS3"],
      url: "https://rttquote.mage2.com.br",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Magento 2",
      status: "Live",
      features: ["Custom Checkout", "Quote Management", "User Interface"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Tecla Center",
      description: "Implemented advanced installment pricing features for product pages in Magento 2 e-commerce platform.",
      longDescription: "Implemented Installment Price feature for products in Magento 2, allowing customers to see flexible payment options directly on product pages, enhancing the shopping experience.",
      technologies: ["Magento 2", "PHP", "JavaScript", "jQuery"],
      url: "https://teclacenter.com.br",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Magento 2",
      status: "Live",
      features: ["Installment Pricing", "Payment Options", "Product Enhancement"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const categories = ["All", "Laravel", "Magento 2", "WordPress"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of web development projects showcasing expertise in 
            Magento 2, Laravel, and WordPress development.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 dark:bg-slate-700/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 text-gray-800 dark:text-white rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Actions */}
                  <div className="flex space-x-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span>Visit Project</span>
                    </a>
                    <button
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      className="px-4 py-3 border-2 border-gray-300 dark:border-gray-500 hover:border-blue-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      {selectedProject === project.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {selectedProject === project.id && (
                    <div className="mt-6 p-4 bg-gray-50 dark:bg-slate-600/50 rounded-lg animate-fade-in">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            What I Bring to Your Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <ShoppingCart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">E-commerce Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">Specialized in Magento 2 development with deep understanding of e-commerce workflows</p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Strong Laravel and PHP skills for building robust server-side applications</p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Full-Stack Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">End-to-end development from frontend interfaces to backend architecture</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;