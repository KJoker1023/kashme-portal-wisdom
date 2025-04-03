
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { privacyPolicyMarkdown } from '@/data/privacyPolicy';

const Privacy = () => {
  // Ensure the page scrolls to the top when loaded
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-kashme-black py-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 text-kashme-green mx-auto mb-4" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-kashme-green">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              At KashMe, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <MarkdownRenderer content={privacyPolicyMarkdown} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
