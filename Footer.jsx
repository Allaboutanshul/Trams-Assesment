import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#E2EFE9] pt-16 pb-12 px-4 md:px-8 rounded-t-[2.5rem]">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Newsletter Signup */}
        <div className="space-y-6 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 text-xs md:text-sm">
            To shake your stay special and ever more memorable
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-full text-sm bg-white text-gray-900 focus:outline-none w-full sm:w-64 border border-transparent focus:border-emerald-400"
            />
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-850 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>

        <hr className="border-gray-300/60 my-8" />

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-xs md:text-sm text-gray-700">
          <div>
            <h5 className="font-bold text-black mb-3">Company</h5>
            <ul className="space-y-2"><li>Home</li><li>Studio</li><li>Service</li><li>Blog</li></ul>
          </div>
          <div>
            <h5 className="font-bold text-black mb-3">Terms & Policies</h5>
            <ul className="space-y-2"><li>Privacy Policy</li><li>Terms & Conditions</li><li>Return Policy</li></ul>
          </div>
          <div>
            <h5 className="font-bold text-black mb-3">Follow Us</h5>
            <ul className="space-y-2"><li>Instagram</li><li>Facebook</li><li>LinkedIn</li><li>YouTube</li></ul>
          </div>
          <div>
            <h5 className="font-bold text-black mb-3">Terms & Policies</h5>
            <ul className="space-y-2"><li>1459N Floorway, STE</li><li>info@elementum.com</li></ul>
          </div>
        </div>
      </div>
    </footer>
  );
}