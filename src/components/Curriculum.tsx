
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Curriculum = () => {
  const phase1 = [
    {
      week: "Week 1-2",
      title: "2D Fundamentals",
      topics: ["Unity interface navigation", "2D game objects & components", "Basic scripting in C#", "Sprite manipulation"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      week: "Week 3-5",
      title: "2D Game Creation",
      topics: ["2D physics & collision", "Animation systems", "UI implementation", "Sound effects & music"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      week: "Week 6",
      title: "First Personal Project",
      topics: ["Create a complete 2D game", "Apply all 2D concepts learned", "Personalized feedback", "Portfolio documentation"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      highlight: true
    },
  ];

  const phase2 = [
    {
      week: "Week 7-8",
      title: "3D Fundamentals",
      topics: ["3D modeling basics", "3D physics", "Camera systems", "Lighting & materials"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      week: "Week 9-11",
      title: "3D Game Creation",
      topics: ["First-person & third-person mechanics", "Terrain creation", "Navigation & pathfinding", "Performance optimization"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      week: "Week 12",
      title: "Capstone Project",
      topics: ["Create a complete 3D game", "Apply all concepts learned", "Portfolio-ready project", "Personalized guidance"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      highlight: true
    },
  ];

  const renderModules = (modules, title) => (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          module.highlight ? (
            <Card key={index} className="col-span-1 md:col-span-2 lg:col-span-3 border-none bg-gradient-to-r from-gamedev-purple to-gamedev-dark-purple text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-full">{module.icon}</div>
                  <div>
                    <div className="text-sm font-medium opacity-80">{module.week}</div>
                    <h3 className="text-2xl font-bold">{module.title}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                  {module.topics.map((topic, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card key={index} className="border border-gray-200 hover:border-gamedev-light-purple transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gamedev-light-purple rounded-full">
                    <div className="text-gamedev-purple">
                      {module.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{module.week}</div>
                    <h3 className="font-semibold text-xl mb-2">{module.title}</h3>
                    <ul className="space-y-1">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-2 text-gamedev-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 11 12 14 22 4"></polyline>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                          </svg>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        ))}
      </div>
    </div>
  );

  return (
    <section id="curriculum" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
          <p className="text-gray-500">
            Our comprehensive 12-week curriculum takes you from beginner to game creator.
          </p>
        </div>

        <div className="flex justify-center items-center mb-10">
          <div className="w-full max-w-3xl bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="flex">
              <div className="w-1/2 h-2 bg-gamedev-purple rounded-l-full">
                <span className="block text-center text-xs font-medium mt-4">Phase 1: 2D Game Development</span>
              </div>
              <div className="w-1/2 h-2 bg-gamedev-dark-purple rounded-r-full">
                <span className="block text-center text-xs font-medium mt-4">Phase 2: 3D Game Development</span>
              </div>
            </div>
          </div>
        </div>

        {renderModules(phase1, "Phase 1: 2D Game Development (Weeks 1-6)")}
        {renderModules(phase2, "Phase 2: 3D Game Development (Weeks 7-12)")}
      </div>
    </section>
  );
};

export default Curriculum;
