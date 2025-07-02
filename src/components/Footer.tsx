import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gamedev-black text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gamedev-purple to-gamedev-dark-purple flex items-center justify-center">
                <span className="text-white font-bold">GT</span>
              </div>
              <span className="text-xl font-bold">GoodTech School</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Breaking down barriers to game development through hands-on learning and real-world projects.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gamedev-purple transition-colors">Home</a></li>
                <li><a href="#pathway" className="hover:text-gamedev-purple transition-colors">Course Pathway</a></li>
                <li><a href="#pricing" className="hover:text-gamedev-purple transition-colors">Pricing</a></li>
                <li><a href="https://wa.me/2349134969703" className="hover:text-gamedev-purple transition-colors">Contact us for more enquiries</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gamedev-purple transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gamedev-purple transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-gamedev-purple transition-colors">Student Showcase</a></li>
                <li><a href="#" className="hover:text-gamedev-purple transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:info@goodtechhq.com" className="hover:text-gamedev-purple transition-colors">info@goodtechhq.com</a>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="https://wa.me/2349134969703" className="hover:text-gamedev-purple transition-colors">wa.me/2349134969703</a>
                </li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gamedev-purple transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gamedev-purple transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gamedev-purple transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.443 5.3496h9.114a2 2 0 0 1 2 2v9.1008a2 2 0 0 1-2 2H7.443a2 2 0 0 1-2-2V7.3496a2 2 0 0 1 2-2zm1.15 2.2998a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm7.39 3.1748c-.68-2.11-3.23-2.3-4.42-1.07-1.4 1.45-1.14 3.97.56 4.99 1.36.81 3.38.34 4.1-1.06v.7c0 .08.05.14.13.14h1.2c.07 0 .13-.06.13-.14v-5.96c0-.07-.06-.14-.13-.14h-1.2c-.08 0-.13.07-.13.14v.8c0 .04-.01.04-.03.02-.54-.7-1.49-.99-2.4-.85-2.56.38-3.04 3.68-1.39 5.06 1.47 1.24 4.34.56 4.44-1.5.01-.15.01-.3-.02-.44 0-.06-.05-.1-.11-.1h-1.18c-.06 0-.12.04-.13.1-.07.47-.3.73-.63.89-.85.42-1.87-.18-1.9-1.07-.04-1.05.9-1.61 1.77-1.24.47.19.73.6.75 1.09.0.08.06.13.14.13h1.2c.06 0 .12-.06.12-.13 0-.15-.01-.3-.03-.46z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800" />
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 GoodTech School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gamedev-purple text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gamedev-purple text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gamedev-purple text-sm transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
