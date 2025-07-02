import React from "react";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "./RegistrationDialog";
import { useCountry } from "@/lib/useCountry";

const NGN_LINK = "https://paystack.com/pay/goodtechgamedev";
const USD_LINK = "https://paystack.shop/pay/jmogbu8nsq";

const Hero = () => {
  const country = useCountry();
  const isNigeria = country === "Nigeria";
  const price = isNigeria ? "₦90,000" : "$99";
  const payLink = isNigeria ? NGN_LINK : USD_LINK;

  return (
    <section className="relative bg-hero-pattern bg-cover bg-center py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gamedev-light-purple text-gamedev-purple mb-3">
                Beginner Game Dev Course
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Break Into Game Development in{" "}
                <span className="gradient-text">3 Months</span> – No Experience
                Needed
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-lg">
                Learn to build your own 2D & 3D games from scratch with Unity –
                the world's #1 game engine.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gamedev-purple hover:bg-gamedev-dark-purple button-shine"
                onClick={() => window.open(payLink, "_blank")}
              >
                Join the Bootcamp for {price}
              </Button>

              <RegistrationDialog
                buttonText="Contact us for more enquiries"
                variant="outline"
              />

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() =>
                  window.open("https://wa.me/2349134969703", "_blank")
                }
              >
                Contact us for more enquiries
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-gamedev-purple"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>No coding experience required</span>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-40 bg-gamedev-purple rounded-full opacity-30 blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-float">
              <div className="aspect-video rounded-lg overflow-hidden bg-gamedev-black/70">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/GW8ESczM4JQ?si=Rn5g4bJSU_e2JxM1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-white">
                  Intro to Game Dev with Unity
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
