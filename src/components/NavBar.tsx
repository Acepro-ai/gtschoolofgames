
import React from "react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gamedev-purple to-gamedev-dark-purple flex items-center justify-center">
            <span className="text-white font-bold">GT</span>
          </div>
          <span className="text-xl font-bold">GoodTech School</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#benefits" className="text-sm font-medium hover:text-gamedev-purple transition-colors">
            Benefits
          </a>
          <a href="#career" className="text-sm font-medium hover:text-gamedev-purple transition-colors">
            Career
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-gamedev-purple transition-colors">
            Pricing
          </a>
          <a href="#pathway" className="text-sm font-medium hover:text-gamedev-purple transition-colors">
            Course Pathway
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="hidden sm:flex border-gamedev-purple text-gamedev-purple hover:bg-gamedev-light-purple"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfxOI6QGolTouvHplIQEGbhCAF0jl_erk9LyP1ZZHVi1QSlhA/viewform?usp=preview", "_blank")}
          >
            Free Masterclass
          </Button>
          <Button 
            className="bg-gamedev-purple hover:bg-gamedev-dark-purple button-shine"
            onClick={() => window.open("https://paystack.com/pay/goodtechgamedev", "_blank")}
          >
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
