import React from 'react';

export default function Hero() {
  return (
    <section className="w-full bg-white relative overflow-hidden px-4 md:px-8 pt-6 pb-16">
      {/* 1. Simple Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center h-16 border-b border-gray-100">
        <div className="text-xl font-bold tracking-tight">Elementum</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#connect" className="hover:text-black">Connect</a>
          <a href="#faqs" className="hover:text-black">FAQs</a>
        </div>
        <button className="md:hidden p-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </nav>

      {/* 2. Main Content */}
      <div className="max-w-4xl mx-auto text-center mt-16 md:mt-24 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          The <span className="underline decoration-yellow-400 decoration-4">thinkers</span> and doers were <span className="bg-pink-100 px-2 rounded-md">changing</span> the <span className="bg-emerald-100 px-2 rounded-md text-emerald-800">status Quo</span> with
        </h1>
        
        <p className="mt-6 text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          We are a team of strategists, designers, communicators, researchers... Together, we believe that progress only happens when you refuse to play things safe.
        </p>

        {/* 3. Grid representation of the team/avatar bubbles to keep it perfectly responsive */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {/* Loop placeholders for the profile images visible in your Figma */}
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div key={num} className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-200 flex-shrink-0 transition-transform hover:scale-105">
              <img src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`} alt="Team member" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Background shape accentuation */}
      <div className="absolute right-10 top-1/2 w-12 h-12 bg-purple-500 rounded-full filter blur-xl opacity-20 hidden md:block"></div>
    </section>
  );
}
