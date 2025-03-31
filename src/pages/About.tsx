
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Clock, BarChart, ShieldCheck, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-kashme-black py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  About <span className="text-kashme-green">KashMe</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  We're on a mission to revolutionize lending in Uganda by making financial services accessible to everyone through technology.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-72 h-72 bg-kashme-green rounded-full opacity-20 absolute -top-10 -left-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" 
                    alt="KashMe Team" 
                    className="rounded-lg shadow-lg relative z-10 max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kashme-black mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-kashme-green mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-kashme-darkgray mb-6">
                KashMe was founded in 2020 with a simple yet powerful vision: to bridge the financial gap for millions of Ugandans who lack access to traditional banking services.
              </p>
              <p className="text-kashme-darkgray mb-6">
                We recognized that while mobile money has revolutionized how people transfer funds, there was still a significant gap when it came to accessing credit. Many Ugandans faced emergencies or business opportunities but lacked the financial resources to address them.
              </p>
              <p className="text-kashme-darkgray">
                Our team of financial and technology experts came together to create a solution that leverages mobile technology, artificial intelligence, and data analytics to provide quick, accessible, and fair loans to all Ugandans, regardless of their banking history.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-16 bg-kashme-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-kashme-green p-3 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-kashme-black" />
                </div>
                <h3 className="text-2xl font-bold text-kashme-black mb-4">Our Mission</h3>
                <p className="text-kashme-darkgray mb-4">
                  To provide accessible, affordable, and convenient financial services to all Ugandans through innovative technology solutions, empowering individuals and small businesses to achieve their goals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kashme-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-kashme-darkgray">Financial inclusion for all Ugandans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kashme-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-kashme-darkgray">Transparent and fair lending practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kashme-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-kashme-darkgray">Improving financial literacy across communities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-kashme-green p-3 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="h-8 w-8 text-kashme-black" />
                </div>
                <h3 className="text-2xl font-bold text-kashme-black mb-4">Our Vision</h3>
                <p className="text-kashme-darkgray mb-4">
                  To become the most trusted digital financial services provider in East Africa, transforming how people access and use financial services in their daily lives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kashme-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-kashme-darkgray">Creating a cashless ecosystem for Uganda</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kashme-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-kashme-darkgray">Building financial resilience in communities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kashme-green mt-1 mr-2 flex-shrink-0" />
                    <span className="text-kashme-darkgray">Supporting economic growth through accessible credit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kashme-black mb-4">Our Core Values</h2>
              <p className="text-kashme-darkgray max-w-3xl mx-auto">
                These principles guide everything we do at KashMe, from product development to customer service.
              </p>
              <div className="w-20 h-1 bg-kashme-green mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-kashme-green p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-kashme-black" />
                </div>
                <h3 className="text-xl font-bold text-kashme-black mb-3">Customer First</h3>
                <p className="text-kashme-darkgray">
                  We put our customers at the center of everything we do, ensuring that our products and services are designed to meet their real needs.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-kashme-green p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-kashme-black" />
                </div>
                <h3 className="text-xl font-bold text-kashme-black mb-3">Integrity</h3>
                <p className="text-kashme-darkgray">
                  We uphold the highest ethical standards in all our dealings, being transparent with our customers and stakeholders at all times.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-kashme-green p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-kashme-black" />
                </div>
                <h3 className="text-xl font-bold text-kashme-black mb-3">Innovation</h3>
                <p className="text-kashme-darkgray">
                  We continuously seek new and better ways to serve our customers, leveraging technology to create simple yet powerful solutions.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-kashme-green p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-kashme-black" />
                </div>
                <h3 className="text-xl font-bold text-kashme-black mb-3">Accessibility</h3>
                <p className="text-kashme-darkgray">
                  We believe financial services should be available to everyone, regardless of their income level or location within Uganda.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-kashme-green p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-kashme-black" />
                </div>
                <h3 className="text-xl font-bold text-kashme-black mb-3">Security</h3>
                <p className="text-kashme-darkgray">
                  We prioritize the security and privacy of our customers' data, employing the highest standards of protection at all times.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-kashme-green p-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-kashme-black" />
                </div>
                <h3 className="text-xl font-bold text-kashme-black mb-3">Impact</h3>
                <p className="text-kashme-darkgray">
                  We measure our success not only by our financial performance but by the positive difference we make in our customers' lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-kashme-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the KashMe Community</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Experience the future of lending in Uganda with our innovative mobile app. Download now and join thousands of satisfied customers.
            </p>
            <Button className="bg-kashme-green hover:bg-kashme-green/90 text-kashme-black font-semibold px-8 py-6 rounded-lg text-lg">
              Download App Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
