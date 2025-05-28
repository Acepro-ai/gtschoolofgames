
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CoursePath = () => {
  const courses = [
    {
      title: "Beginner Game Development",
      description: "Learn fundamentals of 2D & 3D game development with Unity. No prior experience needed.",
      duration: "12 weeks",
      level: "Beginner",
      status: "current",
      highlights: [
        "2D game mechanics",
        "3D game creation",
        "C# programming basics",
        "Two portfolio projects"
      ]
    },
    {
      title: "Intermediate Game Development",
      description: "Deepen your skills with advanced game mechanics, AI, and multiplayer functionality.",
      duration: "Coming Soon",
      level: "Intermediate",
      status: "upcoming",
      highlights: [
        "Advanced game mechanics",
        "Basic AI implementation",
        "Networked multiplayer",
        "Mobile game development"
      ]
    },
    {
      title: "Advanced Game Development",
      description: "Master professional game development with advanced graphics, optimization & publishing.",
      duration: "Coming Soon",
      level: "Advanced",
      status: "upcoming",
      highlights: [
        "Advanced graphics & shaders",
        "Performance optimization",
        "Game monetization",
        "Publishing to marketplaces"
      ]
    }
  ];

  return (
    <section id="pathway" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Game Development Journey</h2>
          <p className="text-gray-500">
            GoodTech School offers a complete pathway from beginner to professional game developer.
          </p>
        </div>

        <div className="relative">
          {/* Path connector line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-12 bottom-8 w-1 bg-gradient-to-b from-gamedev-purple to-gamedev-dark-purple hidden md:block"></div>
          
          <div className="grid gap-12 relative">
            {courses.map((course, index) => (
              <div key={index} className="relative">
                <div className={`absolute left-1/2 top-12 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 hidden md:block ${course.status === 'current' ? 'bg-gamedev-purple' : 'bg-gray-300'}`}></div>
                <Card className={`relative z-0 border-2 ${course.status === 'current' ? 'border-gamedev-purple shadow-lg' : 'border-gray-200'}`}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between mb-6">
                      <div>
                        <Badge variant={course.status === 'current' ? 'default' : 'secondary'} className="mb-3">
                          {course.level}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                        <p className="text-gray-500">{course.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-8 flex-shrink-0">
                        <div className={`text-lg font-semibold ${course.status === 'current' ? 'text-gamedev-purple' : 'text-gray-400'}`}>
                          {course.duration}
                        </div>
                        {course.status === 'current' ? (
                          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gamedev-light-purple text-gamedev-purple mt-2">
                            Currently Available
                          </span>
                        ) : (
                          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-600 mt-2">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="font-medium mb-3">What you'll learn:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center">
                            <svg className={`w-4 h-4 mr-2 ${course.status === 'current' ? 'text-gamedev-purple' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="9 11 12 14 22 4"></polyline>
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                            </svg>
                            <span className={course.status === 'upcoming' ? 'text-gray-400' : ''}>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePath;
