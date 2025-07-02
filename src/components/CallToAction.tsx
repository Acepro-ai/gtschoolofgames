import React from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "./RegistrationDialog";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gamedev-purple to-gamedev-dark-purple text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Game development isn't a dream – it's a skill.</h2>
          <p className="text-lg mb-8">
            Let's build your first game together. Join GoodTech School's Beginner Game Development Program today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gamedev-purple hover:bg-gamedev-light-purple button-shine"
              onClick={() => window.open("https://paystack.com/pay/goodtechgamedev", "_blank")}
            >
              Join the Bootcamp for ₦90,000
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open("https://wa.me/2349134969703", "_blank")}
            >
              Contact us for more enquiries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
