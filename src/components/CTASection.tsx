
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Download } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-kashme-black rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-kashme-green rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-kashme-green rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Download the KashMe app today and experience the fastest way to get a loan in Uganda. No long queues, no paperwork, just instant cash when you need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
              <div className="bg-kashme-gray bg-opacity-10 backdrop-blur-sm p-4 rounded-lg flex items-start">
                <Check className="h-5 w-5 text-kashme-green mt-1 mr-3 flex-shrink-0" />
                <p className="text-white text-left">Loans up to 2,000,000 UGX</p>
              </div>
              
              <div className="bg-kashme-gray bg-opacity-10 backdrop-blur-sm p-4 rounded-lg flex items-start">
                <Check className="h-5 w-5 text-kashme-green mt-1 mr-3 flex-shrink-0" />
                <p className="text-white text-left">Fast approval in minutes</p>
              </div>
              
              <div className="bg-kashme-gray bg-opacity-10 backdrop-blur-sm p-4 rounded-lg flex items-start">
                <Check className="h-5 w-5 text-kashme-green mt-1 mr-3 flex-shrink-0" />
                <p className="text-white text-left">24/7 customer support</p>
              </div>
            </div>
            
            <Button className="bg-kashme-green hover:bg-kashme-green/90 text-kashme-black font-semibold px-8 py-6 rounded-lg text-lg flex items-center mx-auto">
              <Download className="mr-2" size={20} />
              Download KashMe App
            </Button>
            
            <p className="text-gray-400 mt-6">
              Available on Android devices. Requires mobile money account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
