
import React from 'react';
import { Clock, CreditCard, HeartHandshake, Shield, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    icon: <Clock className="h-10 w-10 text-kashme-green" />,
    title: "Quick Approval",
    description: "Get your loan approved in minutes, not days. Our efficient process means you'll have cash when you need it most."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-kashme-green" />,
    title: "Mobile Money Integration",
    description: "Receive your loan directly to your mobile money account. No bank account required."
  },
  {
    icon: <Shield className="h-10 w-10 text-kashme-green" />,
    title: "Secure & Private",
    description: "Your data is protected with bank-level security. We prioritize your privacy and confidentiality."
  },
  {
    icon: <Zap className="h-10 w-10 text-kashme-green" />,
    title: "Flexible Amounts",
    description: "Borrow what you need, from small amounts to larger loans up to 2,000,000 UGX based on your qualification."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-kashme-green" />,
    title: "Transparent Fees",
    description: "No hidden charges. We clearly display all fees and interest rates before you commit."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-kashme-green" />,
    title: "Customer Support",
    description: "Our dedicated support team is available to help you 24/7 with any questions or concerns."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kashme-black mb-4">Why Choose KashMe?</h2>
          <p className="text-kashme-darkgray max-w-3xl mx-auto">Our innovative lending app offers a range of features designed to make borrowing money simple, fast, and convenient for everyone in Uganda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-kashme-black mb-2">{feature.title}</h3>
              <p className="text-kashme-darkgray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
