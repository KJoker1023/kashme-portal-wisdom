
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-kashme-black py-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 text-kashme-green mx-auto mb-4" />
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
              <div className="bg-kashme-gray p-6 rounded-lg mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-kashme-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-kashme-black mb-2">Last Updated</h3>
                    <p className="text-kashme-darkgray">January 1, 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">1. Introduction</h2>
                  <p className="text-kashme-darkgray mb-3">
                    This Privacy Policy explains how KashMe ("we", "us", or "our") collects, uses, shares, and protects your personal information when you use our mobile application and related services (collectively, the "Service").
                  </p>
                  <p className="text-kashme-darkgray">
                    By using our Service, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">2. Information We Collect</h2>
                  <p className="text-kashme-darkgray mb-3">
                    We collect several types of information for various purposes to provide and improve our Service to you:
                  </p>
                  
                  <h3 className="text-xl font-bold text-kashme-black mb-2">2.1 Personal Information</h3>
                  <p className="text-kashme-darkgray mb-3">
                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to:
                  </p>
                  <ul className="list-disc list-inside text-kashme-darkgray mb-3 ml-4">
                    <li>Full name</li>
                    <li>National ID information</li>
                    <li>Contact information (email address, phone number)</li>
                    <li>Date of birth</li>
                    <li>Address and location data</li>
                    <li>Employment information</li>
                    <li>Financial information</li>
                    <li>Profile pictures and selfies for verification</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-kashme-black mb-2">2.2 Usage Data</h3>
                  <p className="text-kashme-darkgray mb-3">
                    We may also collect information that your browser or mobile device sends whenever you visit our Service or access it through a mobile device, including:
                  </p>
                  <ul className="list-disc list-inside text-kashme-darkgray mb-3 ml-4">
                    <li>Device information (model, operating system, unique device identifiers)</li>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages of our Service that you visit</li>
                    <li>Time and date of your visit</li>
                    <li>Time spent on those pages</li>
                    <li>Other diagnostic data</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-kashme-black mb-2">2.3 Location Information</h3>
                  <p className="text-kashme-darkgray">
                    We may use and store information about your location if you give us permission to do so. We use this data to provide features of our Service and to improve and customize our Service.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">3. How We Use Your Information</h2>
                  <p className="text-kashme-darkgray mb-3">
                    We use the collected information for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-kashme-darkgray ml-4">
                    <li>To provide and maintain our Service</li>
                    <li>To process your loan applications</li>
                    <li>To verify your identity</li>
                    <li>To assess credit risk and make lending decisions</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service</li>
                    <li>To provide customer support</li>
                    <li>To gather analysis or valuable information so that we can improve our Service</li>
                    <li>To monitor the usage of our Service</li>
                    <li>To detect, prevent and address technical issues</li>
                    <li>To fulfill any other purpose for which you provide it</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">4. Data Security</h2>
                  <p className="text-kashme-darkgray mb-3">
                    The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                  <p className="text-kashme-darkgray">
                    We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information, including:
                  </p>
                  <ul className="list-disc list-inside text-kashme-darkgray ml-4">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security audits</li>
                    <li>Secure authentication procedures</li>
                    <li>Data access restrictions</li>
                    <li>Regular backups</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">5. Data Sharing and Disclosure</h2>
                  <p className="text-kashme-darkgray mb-3">
                    We may disclose your personal information in the following situations:
                  </p>
                  
                  <h3 className="text-xl font-bold text-kashme-black mb-2">5.1 Service Providers</h3>
                  <p className="text-kashme-darkgray mb-3">
                    We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kashme-black mb-2">5.2 Legal Requirements</h3>
                  <p className="text-kashme-darkgray mb-3">
                    We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
                  </p>
                  
                  <h3 className="text-xl font-bold text-kashme-black mb-2">5.3 Business Transfers</h3>
                  <p className="text-kashme-darkgray mb-3">
                    If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred. We will provide notice before your personal information is transferred and becomes subject to a different Privacy Policy.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kashme-black mb-2">5.4 With Your Consent</h3>
                  <p className="text-kashme-darkgray">
                    We may disclose your personal information for any other purpose with your consent.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">6. Your Data Protection Rights</h2>
                  <p className="text-kashme-darkgray mb-3">
                    You have certain data protection rights. These rights include:
                  </p>
                  <ul className="list-disc list-inside text-kashme-darkgray ml-4">
                    <li>The right to access, update or delete the information we have on you</li>
                    <li>The right of rectification - the right to have your information corrected if it is inaccurate or incomplete</li>
                    <li>The right to object to our processing of your personal data</li>
                    <li>The right of restriction - the right to request that we restrict the processing of your personal information</li>
                    <li>The right to data portability - the right to be provided with a copy of your personal data in a structured, machine-readable format</li>
                    <li>The right to withdraw consent at any time where we relied on your consent to process your personal information</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">7. Children's Privacy</h2>
                  <p className="text-kashme-darkgray">
                    Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">8. Changes to This Privacy Policy</h2>
                  <p className="text-kashme-darkgray">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">9. Contact Us</h2>
                  <p className="text-kashme-darkgray mb-3">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="list-disc list-inside text-kashme-darkgray ml-4">
                    <li>By email: privacy@kashme.com</li>
                    <li>By phone: +256 700 123456</li>
                    <li>By mail: KashMe, Kampala Business Center, Floor 4, Kampala, Uganda</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
