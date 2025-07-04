import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const NGN_PAYSTACK_LINK = "https://paystack.com/pay/goodtechgamedev";
const USD_PAYSTACK_LINK = "https://paystack.shop/pay/jmogbu8nsq";

const Pricing = () => {
  const [isNigeria, setIsNigeria] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        setIsNigeria(data.country_code === "NG");
        setLoading(false);
      })
      .catch(() => {
        setIsNigeria(true); // fallback to Nigeria
        setLoading(false);
      });
  }, []);

  return (
    <section id="pricing" className="py-16 bg-gamedev-soft-gray">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gamedev-light-purple text-gamedev-purple mb-3">
            Limited Time Offer
          </span>
          <h2 className="text-3xl font-bold mb-4">50% Off for Early Birds</h2>
          <p className="text-gray-500">
            Only a few discounted slots available! Secure yours before it's gone.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="relative border-2 border-gamedev-purple shadow-lg">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-gamedev-purple text-white text-xs font-bold px-3 py-1 rounded-md">
              MOST POPULAR
            </div>
            <CardHeader className="pb-0 pt-6 px-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">Game Dev Bootcamp</h3>
                  <p className="text-sm text-gray-500 mt-1">3-month comprehensive program</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <span className="text-lg line-through text-gray-400 mr-2">{isNigeria ? "₦180,000" : "$199"}</span>
                    <span className="text-3xl font-bold">{isNigeria ? "₦90,000" : "$99"}</span>
                  </div>
                  <p className="text-xs text-gamedev-purple font-medium">50% discount</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 px-6">
              <div className="space-y-4">
                <div className="flex">
                  <svg className="w-5 h-5 mr-2 text-gamedev-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>6 fully playable games (including your own)</p>
                </div>
                <div className="flex">
                  <svg className="w-5 h-5 mr-2 text-gamedev-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>24 live sessions (12 teaching, 12 labs)</p>
                </div>
                <div className="flex">
                  <svg className="w-5 h-5 mr-2 text-gamedev-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>Lifetime access to all materials</p>
                </div>
                <div className="flex">
                  <svg className="w-5 h-5 mr-2 text-gamedev-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>Certificate of completion</p>
                </div>
                <div className="flex">
                  <svg className="w-5 h-5 mr-2 text-gamedev-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>Community access & networking</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2 pb-6 px-6">
              <div className="w-full space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gamedev-purple hover:bg-gamedev-dark-purple button-shine"
                  onClick={() => {
                    const link = isNigeria ? NGN_PAYSTACK_LINK : USD_PAYSTACK_LINK;
                    window.open(link, "_blank");
                  }}
                  disabled={loading}
                >
                  {loading ? "Loading..." : isNigeria ? "Join the Bootcamp for ₦90,000" : "Join the Bootcamp for $99"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
