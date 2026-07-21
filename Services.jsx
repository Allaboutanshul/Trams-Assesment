import React from 'react';

export default function Services() {
  const offerings = [
    { label: "Collaborative & partnership", desc: "Office of multiple dynamic content channels." },
    { label: "We talk about our weight", desc: "The hunger vs Air force digital experiential setups." },
    { label: "Piloting digital confidence", desc: "Delta faucet content, social, digital infrastructure." }
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 space-y-24">
      {/* 1. What we offer */}
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
          What we <span className="bg-emerald-100 px-1 rounded">can</span> offer you!
        </h2>
        <div className="divide-y divide-gray-200">
          {offerings.map((item, index) => (
            <div key={index} className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-slate-50 px-2 transition-colors rounded-lg">
              <div className="space-y-1">
                <h4 className="font-semibold text-lg text-slate-900">{item.label}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
              <span className="text-xl text-gray-400 group-hover:text-black transition-colors mt-2 md:mt-0">➔</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Testimonial */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center max-w-3xl mx-auto relative">
        <h3 className="text-xl font-bold mb-6">What our customer says <span className="underline decoration-orange-400">About Us</span></h3>
        <blockquote className="text-gray-600 italic text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          "Elementum delivered the site with inline timelines as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hadn't used before."
        </blockquote>
        <div className="mt-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" />
          <p className="mt-2 text-sm font-semibold text-slate-900">Client Partner, Tech Group</p>
        </div>
      </div>
    </section>
  );
}