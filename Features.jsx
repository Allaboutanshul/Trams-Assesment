import React from 'react';

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-24 md:space-y-36">
      
      {/* Feature Block 1: Tomorrow should be better... */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Tomorrow should be better than <span className="bg-gray-100 px-1 dark:text-black">today</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We are a team of fearless minds and hands that always change market trajectories through design, strategy, data and social research.
          </p>
          <a href="#read" className="inline-block text-sm font-semibold underline text-slate-800 hover:text-black">Read more</a>
        </div>
        
        <div className="flex-1 relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Meeting" className="w-full h-full object-cover" />
          </div>
          {/* Geometric Triangle Accents */}
          <div className="absolute bottom-4 left-4 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-rose-400 border-r-[20px] border-r-transparent transform -rotate-12"></div>
        </div>
      </div>

      {/* Feature Block 2: See how we can help... */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            See how we can help you <span className="underline decoration-yellow-400">progress</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We look forward to partnering with your project or business to build exceptional digital identities and web tools that scale across audiences.
          </p>
          <a href="#read" className="inline-block text-sm font-semibold underline text-slate-800 hover:text-black">Read more</a>
        </div>
        
        <div className="flex-1 relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Workspace" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-4 right-4 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-rose-400 border-r-[20px] border-r-transparent transform rotate-45"></div>
        </div>
      </div>

    </section>
  );
}