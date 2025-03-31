
import React from 'react';
import { ArrowRight, CheckCircle, Clock, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-kashme-gray">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kashme-black mb-4">
              Quick Loans at Your <span className="text-kashme-green">Fingertips</span>
            </h1>
            <p className="text-lg md:text-xl text-kashme-darkgray mb-8">
              Get instant cash loans up to 2,000,000 UGX directly to your mobile money account. Fast approval, no paperwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-kashme-green hover:bg-kashme-green/90 text-kashme-black font-semibold px-6 py-6 rounded-lg text-lg flex items-center">
                Download App <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-kashme-black text-kashme-black hover:text-kashme-green hover:border-kashme-green px-6 py-6 rounded-lg text-lg">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <CheckCircle className="text-kashme-green mr-2" size={20} />
                <span className="text-kashme-black">Quick Approval</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-kashme-green mr-2" size={20} />
                <span className="text-kashme-black">Secure Process</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-kashme-green mr-2" size={20} />
                <span className="text-kashme-black">24/7 Service</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="w-[280px] h-[560px] bg-kashme-black rounded-[40px] p-3 shadow-xl relative z-10 animate-float">
              <div className="bg-white h-full w-full rounded-[32px] overflow-hidden flex flex-col">
                <div className="bg-kashme-green px-4 py-6">
                  <div className="text-kashme-black text-xl font-bold mb-2">KashMe</div>
                  <div className="bg-white bg-opacity-30 rounded-lg p-3">
                    <div className="text-kashme-black font-medium">Available Credit</div>
                    <div className="text-kashme-black text-2xl font-bold">1,500,000 UGX</div>
                  </div>
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Loan Amount</div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-3 bg-kashme-green rounded-full w-2/3"></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>0 UGX</span>
                      <span>2,000,000 UGX</span>
                    </div>
                  </div>
                  <div className="bg-kashme-gray rounded-lg p-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Loan Amount:</span>
                      <span className="font-medium">500,000 UGX</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Duration:</span>
                      <span className="font-medium">30 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Total Repayment:</span>
                      <span className="font-medium">575,000 UGX</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full bg-kashme-green text-kashme-black font-bold py-3 rounded-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-5 -left-5 w-48 h-48 bg-kashme-green rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-10 -right-10 w-60 h-60 bg-kashme-green rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
