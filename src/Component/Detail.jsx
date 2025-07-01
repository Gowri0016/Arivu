import React from 'react';

export default function Detail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 flex flex-col items-center justify-center text-center px-4 py-20">
      <p className="text-sm uppercase tracking-wider text-orange-900">Step into Innovation</p>
      <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mt-2">
        Let’s <span className="text-white">#MakeBreakCreate</span>™
      </h2>
      <p className="mt-4 text-orange-900 text-lg max-w-xl">
        Where creativity meets craftsmanship — an open space to build, experiment, and inspire.
      </p>
      <div className="mt-8">
        <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-all duration-300">
          Join Our Mission
        </button>
      </div>
    </div>
    

    
  );
}
