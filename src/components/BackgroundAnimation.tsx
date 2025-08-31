import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-500"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      
      {/* Moving particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 dark:bg-blue-300/20 rounded-full animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;