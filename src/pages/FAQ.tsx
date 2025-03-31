
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, Search } from 'lucide-react';

const categories = [
  "General Questions",
  "Loan Applications",
  "Repayments",
  "Account Management",
  "Technical Support"
];

const faqItems = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is KashMe?",
        answer: "KashMe is a mobile lending app that provides quick and convenient loans to Ugandans. Our platform allows you to apply for loans directly from your smartphone and receive funds in your mobile money account within minutes."
      },
      {
        question: "Who can apply for a KashMe loan?",
        answer: "Any Ugandan citizen who is at least 18 years old, has a valid National ID, an active mobile money account, and a smartphone can apply for a KashMe loan."
      },
      {
        question: "How much can I borrow?",
        answer: "As a new user, you can borrow up to 500,000 UGX. As you build your credit history with us by taking and repaying loans on time, your borrowing limit can increase up to 2,000,000 UGX."
      }
    ]
  },
  {
    category: "Loan Applications",
    questions: [
      {
        question: "How do I apply for a loan?",
        answer: "To apply for a loan, download the KashMe app from Google Play Store, create an account, complete your profile, verify your identity, and submit a loan application by selecting your desired amount and repayment period."
      },
      {
        question: "How long does the approval process take?",
        answer: "Our automated system typically processes loan applications within minutes. Once approved, funds are transferred directly to your mobile money account."
      },
      {
        question: "What documents do I need to apply?",
        answer: "You'll need a valid National ID, a selfie for identity verification, and proof of income (which could be recent bank statements, payslips, or mobile money transaction history)."
      }
    ]
  },
  {
    category: "Repayments",
    questions: [
      {
        question: "How do I repay my loan?",
        answer: "You can repay your loan through the KashMe app using your mobile money account. The app will guide you through the repayment process, which is quick and easy."
      },
      {
        question: "What happens if I can't repay my loan on time?",
        answer: "If you anticipate difficulties in repaying your loan, please contact our customer support team as soon as possible. Late repayments may incur additional fees and could affect your credit score and future borrowing capacity."
      },
      {
        question: "Can I repay my loan early?",
        answer: "Yes, you can repay your loan early. We encourage early repayment and do not charge any penalties for doing so. In fact, early repayment can improve your credit score and may increase your borrowing limit for future loans."
      }
    ]
  },
  {
    category: "Account Management",
    questions: [
      {
        question: "How do I update my personal information?",
        answer: "You can update your personal information in the Profile section of the KashMe app. Some changes may require verification before they are processed."
      },
      {
        question: "How secure is my data with KashMe?",
        answer: "We take data security very seriously. All sensitive information is encrypted using industry-standard protocols, and we have strict policies in place to protect your personal and financial information."
      },
      {
        question: "How do I reset my password?",
        answer: "If you've forgotten your password, you can reset it by clicking on the 'Forgot Password' link on the login screen. Follow the instructions sent to your registered email or phone number to create a new password."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "The app is not working properly. What should I do?",
        answer: "First, ensure you have the latest version of the KashMe app installed. If problems persist, try closing and reopening the app, or restarting your device. If issues continue, please contact our technical support team."
      },
      {
        question: "I didn't receive funds in my mobile money account after approval. What should I do?",
        answer: "First, check if the loan was actually approved in the app. If it shows as approved but you haven't received funds, please verify your mobile money account details are correct in your profile. If everything is correct, contact our customer support team with your loan reference number."
      },
      {
        question: "How can I contact customer support?",
        answer: "You can contact our customer support team through multiple channels: in-app chat support, email at support@kashme.com, or by calling our helpline at +256 700 123456. Our team is available 24/7 to assist you."
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("General Questions");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Fixed: Properly add category property to each question when filtering
  const filteredFAQs = searchQuery 
    ? faqItems.flatMap(category => 
        category.questions.filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(question => ({ 
          ...question, 
          categoryName: category.category // Store category name in a new property called categoryName
        }))
      )
    : faqItems.find(category => category.category === activeCategory)?.questions || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-kashme-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-kashme-green">Questions</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to the most common questions about KashMe's services.
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:border-kashme-green"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Categories */}
              {!searchQuery && (
                <div className="md:w-1/4">
                  <h3 className="text-xl font-bold text-kashme-black mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition-colors ${
                          activeCategory === category
                            ? "bg-kashme-green text-kashme-black font-medium"
                            : "hover:bg-gray-100 text-kashme-darkgray"
                        }`}
                        onClick={() => setActiveCategory(category)}
                      >
                        <ChevronRight className={`h-4 w-4 mr-2 ${
                          activeCategory === category ? "text-kashme-black" : "text-kashme-darkgray"
                        }`} />
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Questions & Answers */}
              <div className={`${searchQuery ? 'w-full' : 'md:w-3/4'}`}>
                {searchQuery ? (
                  <>
                    <h3 className="text-xl font-bold text-kashme-black mb-4">Search Results</h3>
                    {filteredFAQs.length > 0 ? (
                      <Accordion type="single" collapsible className="space-y-4">
                        {filteredFAQs.map((item, index) => (
                          <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                              <div className="text-left">
                                {/* Fixed: Use categoryName instead of category */}
                                <div className="text-xs text-kashme-green font-medium mb-1">{item.categoryName}</div>
                                <div className="text-kashme-black font-medium">{item.question}</div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pt-0 pb-4">
                              <p className="text-kashme-darkgray">{item.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-kashme-darkgray mb-4">No results found for "{searchQuery}"</p>
                        <Button
                          variant="outline"
                          className="border-kashme-green text-kashme-green hover:bg-kashme-green hover:text-kashme-black"
                          onClick={() => setSearchQuery("")}
                        >
                          Clear Search
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-kashme-black mb-4">{activeCategory}</h3>
                    <Accordion type="single" collapsible className="space-y-4">
                      {filteredFAQs.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                            <div className="text-kashme-black font-medium text-left">{item.question}</div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pt-0 pb-4">
                            <p className="text-kashme-darkgray">{item.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-kashme-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-kashme-black mb-4">Still Have Questions?</h2>
            <p className="text-kashme-darkgray max-w-2xl mx-auto mb-8">
              Our customer support team is available 24/7 to assist you with any questions or concerns you may have about KashMe services.
            </p>
            <Button className="bg-kashme-green hover:bg-kashme-green/90 text-kashme-black font-semibold px-6 py-3 rounded-lg">
              Contact Support
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
