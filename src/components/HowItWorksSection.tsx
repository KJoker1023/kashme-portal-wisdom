
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, CreditCard, Clock3, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Download className="h-12 w-12 text-white" />,
    title: "Download the App",
    description: "Get the KashMe app from Google Play Store and create your account in minutes.",
    bgColor: "bg-kashme-black"
  },
  {
    icon: <CreditCard className="h-12 w-12 text-white" />,
    title: "Apply for a Loan",
    description: "Select your desired loan amount and repayment term. Upload required documents.",
    bgColor: "bg-kashme-black"
  },
  {
    icon: <Clock3 className="h-12 w-12 text-white" />,
    title: "Quick Approval",
    description: "Our advanced system processes your application rapidly, often within minutes.",
    bgColor: "bg-kashme-black"
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-white" />,
    title: "Receive Funds",
    description: "Once approved, funds are sent directly to your mobile money account instantly.",
    bgColor: "bg-kashme-black"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-kashme-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kashme-black mb-4">How KashMe Works</h2>
          <p className="text-kashme-darkgray max-w-3xl mx-auto">Getting a loan with KashMe is quick and easy. Follow these simple steps to access funds whenever you need them.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                {step.icon}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-kashme-black mb-2">{step.title}</h3>
                <p className="text-kashme-darkgray">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute translate-x-[180px] translate-y-[40px]">
                  <svg width="64" height="16" viewBox="0 0 64 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z" fill="#C5FC00"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-kashme-green hover:bg-kashme-green/90 text-kashme-black font-semibold px-8 py-6 rounded-lg text-lg">
            Download App Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
