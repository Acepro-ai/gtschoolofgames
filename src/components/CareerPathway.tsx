
import React from "react";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const CareerPathway = () => {
  return (
    <section id="career" className="py-16 bg-gradient-to-r from-gamedev-light-purple/20 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-gamedev-light-purple/30 px-3 py-1 rounded-full text-gamedev-purple font-medium text-sm">
              <Briefcase size={16} />
              <span>Career Development</span>
            </div>
            <h2 className="text-3xl font-bold">Not Sure If Game Development Is Right For You?</h2>
            <p className="text-gray-700">
              Game development offers various career paths from design to programming, art to project management. Book a free career development session with our mentors to discover which path aligns with your skills and interests.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gamedev-purple mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Personalized career guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gamedev-purple mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Explore different game development roles</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gamedev-purple mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Get advice from industry professionals</span>
              </li>
            </ul>
            <Button 
              size="lg" 
              className="bg-gamedev-purple hover:bg-gamedev-dark-purple mt-2"
              onClick={() => window.open("https://calendly.com/admin-effico/30min", "_blank")}
            >
              Book a Free Discovery Call
            </Button>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -z-10 w-64 h-64 rounded-full bg-gamedev-purple/10 blur-3xl"></div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gamedev-light-purple flex items-center justify-center">
                  <Briefcase className="text-gamedev-purple" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Career Discovery Session</h3>
                  <p className="text-sm text-gray-500">30 minutes • Free</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gamedev-light-purple/30 flex items-center justify-center text-xs font-medium">1</div>
                  <div className="text-sm">Discuss your background & skills</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gamedev-light-purple/30 flex items-center justify-center text-xs font-medium">2</div>
                  <div className="text-sm">Explore different game dev roles</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gamedev-light-purple/30 flex items-center justify-center text-xs font-medium">3</div>
                  <div className="text-sm">Get a personalized path recommendation</div>
                </div>
              </div>
              <Button 
                className="w-full bg-gamedev-purple hover:bg-gamedev-dark-purple"
                onClick={() => window.open("https://calendly.com/admin-effico/30min", "_blank")}
              >
                Schedule Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPathway;
