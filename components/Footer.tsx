import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  const handleAdminClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Admin Login is currently under maintenance during the system upgrade.");
  };

  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-primary skew-x-[-10deg] flex items-center justify-center font-display text-white text-xl">B</div>
                <h2 className="text-3xl font-display tracking-wider italic uppercase">BigBoyZ <span className="text-primary">Rc</span></h2>
            </div>
            <p className="text-gray-500 leading-relaxed font-medium max-w-sm">
              We live for speed. The ultimate hobby shop for professional grade RC equipment, parts, and community.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-6 border-b border-gray-800 pb-2 inline-block">Navigate</h3>
            <ul className="space-y-3 text-gray-400 font-semibold text-sm uppercase tracking-wide">
              <li><a href="#" className="hover:text-primary transition-colors hover:pl-2 transition-all">Home</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors hover:pl-2 transition-all">Catalog</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors hover:pl-2 transition-all">Location</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div id="location">
            <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-6 border-b border-gray-800 pb-2 inline-block">The Garage</h3>
            <p className="text-gray-400 mb-6 font-medium">
              123 Speedway Lane<br/>
              Nitro City, RC 90210<br/>
              <span className="text-white block mt-2 text-lg font-bold">(555) 123-4567</span>
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-surface p-3 rounded hover:bg-[#1877F2] hover:text-white text-gray-400 transition-all transform hover:-translate-y-1">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-surface p-3 rounded hover:bg-[#E4405F] hover:text-white text-gray-400 transition-all transform hover:-translate-y-1">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h-.173zM12.314 4.832c-2.759 0-3.072.01-4.07.056-.905.042-1.4.195-1.728.322-.435.168-.748.369-1.08.701-.332.333-.533.645-.701 1.08-.127.329-.28.823-.322 1.728-.046.999-.056 1.312-.056 4.07 0 2.759.01 3.072.056 4.07.042.905.195 1.4.322 1.728.168.435.369.748.701 1.08.333.332.645.533 1.08.701.329.127.823.28 1.728.322.999.046 1.312.056 4.07.056 2.759 0 3.072-.01 4.07-.056.905-.042 1.4-.195 1.728-.322.435-.168.748-.369 1.08-.701.333-.332.533-.645.701-1.08.127-.329.28-.823.322-1.728.046-.999.056-1.312.056-4.07-.056zM12.488 7.218a4.772 4.772 0 110 9.544 4.772 4.772 0 010-9.544zm0 1.714a3.058 3.058 0 100 6.116 3.058 3.058 0 000-6.116zM18.89 6.27a1.143 1.143 0 110 2.286 1.143 1.143 0 010-2.286z" clipRule="evenodd" /></svg>
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="bg-surface p-3 rounded hover:bg-[#1DA1F2] hover:text-white text-gray-400 transition-all transform hover:-translate-y-1">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-semibold tracking-wider uppercase">
          <p>&copy; {new Date().getFullYear()} BigBoyZ Rc. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
             <a href="#" onClick={handleAdminClick} className="text-gray-700 hover:text-primary transition-colors cursor-pointer">Admin Access</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
