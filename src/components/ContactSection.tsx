
import React from 'react';
import { Button } from '@/components/ui/button';
import { Headphones, Mail, MessageSquare, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-kashme-black">
      <div className="container mx-auto px-4">
        <div className="bg-kashme-green rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-kashme-black mb-4">Need Help with Your Loan?</h2>
              <p className="text-kashme-black mb-6">Our dedicated customer support team is available 24/7 to assist you with any questions or concerns about your loan application or account.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <Phone className="h-5 w-5 text-kashme-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-kashme-black">Phone Support</h3>
                    <p className="text-kashme-black">+256 700 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <Mail className="h-5 w-5 text-kashme-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-kashme-black">Email</h3>
                    <p className="text-kashme-black">support@kashme.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5 text-kashme-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-kashme-black">Live Chat</h3>
                    <p className="text-kashme-black">Available in app</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3">
                    <Headphones className="h-5 w-5 text-kashme-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-kashme-black">24/7 Support</h3>
                    <p className="text-kashme-black">Always available</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-kashme-black hover:bg-kashme-black/90 text-white font-semibold px-6 py-3 rounded-lg">
                Contact Us Now
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-kashme-black mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-kashme-black mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kashme-green"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-kashme-black mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kashme-green"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-kashme-black mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kashme-green"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-kashme-green hover:bg-kashme-green/90 text-kashme-black font-semibold px-6 py-3 rounded-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
