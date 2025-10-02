import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-500"></div>
      
      {/* Enhanced floating elements with better animations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 dark:from-blue-500/10 dark:to-cyan-500/5 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-200/30 to-blue-200/20 dark:from-indigo-500/10 dark:to-blue-500/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Additional floating orbs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-yellow-200/20 to-orange-200/15 dark:from-yellow-500/5 dark:to-orange-500/3 rounded-full filter blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-green-200/20 to-emerald-200/15 dark:from-green-500/5 dark:to-emerald-500/3 rounded-full filter blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Enhanced moving particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'w-1 h-1 bg-blue-400/40 dark:bg-blue-300/15' :
              i % 3 === 1 ? 'w-2 h-2 bg-purple-400/30 dark:bg-purple-300/10' :
              'w-1.5 h-1.5 bg-indigo-400/35 dark:bg-indigo-300/12'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`geo-${i}`}
            className={`absolute opacity-10 dark:opacity-5 animate-float ${
              i % 4 === 0 ? 'w-4 h-4 bg-blue-500 rotate-45' :
              i % 4 === 1 ? 'w-3 h-3 bg-purple-500 rounded-full' :
              i % 4 === 2 ? 'w-5 h-1 bg-indigo-500' :
              'w-1 h-5 bg-cyan-500'
            }`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 8)}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;