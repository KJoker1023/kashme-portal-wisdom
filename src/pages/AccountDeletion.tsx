
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  AlertCircle, 
  CheckCircle, 
  Info, 
  Lock, 
  Trash2, 
  X
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AccountDeletion = () => {
  const [reason, setReason] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmations, setConfirmations] = useState({
    noActiveLoans: false,
    understandIrreversible: false,
    confirmIdentity: false
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { toast } = useToast();

  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReason(e.target.value);
  };

  const handleCheckboxChange = (field: keyof typeof confirmations) => {
    setConfirmations({
      ...confirmations,
      [field]: !confirmations[field]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all confirmations are checked
    if (!confirmations.noActiveLoans || !confirmations.understandIrreversible || !confirmations.confirmIdentity) {
      toast({
        title: "Missing confirmations",
        description: "Please confirm all required checkboxes before proceeding.",
        variant: "destructive"
      });
      return;
    }
    
    // Check if email and phone are provided
    if (!email || !phoneNumber) {
      toast({
        title: "Missing information",
        description: "Please provide both email and phone number for verification.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate account deletion request submission
    setShowSuccessMessage(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-kashme-black py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Account <span className="text-kashme-green">Deletion</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're sorry to see you go. Before proceeding, please review the information below carefully.
            </p>
          </div>
        </section>

        {/* Account Deletion Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {!showSuccessMessage ? (
                <>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong>Important:</strong> Account deletion is permanent and cannot be undone. All personal data associated with your account will be permanently removed.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-kashme-black mb-4">Before You Delete Your Account</h2>
                    <p className="text-kashme-darkgray mb-4">
                      Please be aware of the following implications of deleting your KashMe account:
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-kashme-darkgray">Your account history, including loan history and repayment records, will be permanently deleted.</p>
                      </div>
                      
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-kashme-darkgray">You will lose any accumulated credit score or benefits from your relationship with KashMe.</p>
                      </div>
                      
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-kashme-darkgray">You must have fully repaid all outstanding loans before your account can be deleted.</p>
                      </div>
                      
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-kashme-darkgray">The deletion process may take up to 30 days to complete.</p>
                      </div>
                    </div>
                    
                    <div className="bg-kashme-gray p-4 rounded-lg">
                      <h3 className="font-bold text-kashme-black mb-2 flex items-center">
                        <Lock className="h-5 w-5 mr-2" />
                        Data Retention Notice
                      </h3>
                      <p className="text-kashme-darkgray text-sm">
                        While we will delete your personal information upon account deletion, we may retain certain information as required by law or for legitimate business purposes, such as basic transaction records for tax and regulatory compliance. This information will be kept in accordance with our data retention policies and applicable laws.
                      </p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-kashme-black mb-1">
                          Reason for deletion (optional)
                        </label>
                        <select
                          id="reason"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kashme-green"
                          value={reason}
                          onChange={handleReasonChange}
                        >
                          <option value="">Select a reason</option>
                          <option value="no_longer_need">I no longer need the service</option>
                          <option value="found_alternative">I found a better alternative</option>
                          <option value="not_satisfied">I'm not satisfied with the service</option>
                          <option value="privacy_concerns">I have privacy concerns</option>
                          <option value="difficult_to_use">The app is difficult to use</option>
                          <option value="other">Other reason</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-kashme-black mb-1">
                          Confirm your email address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kashme-green"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-kashme-black mb-1">
                          Confirm your phone number *
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kashme-green"
                          placeholder="Enter your phone number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-3 border-t border-b border-gray-200 py-4">
                        <div className="flex items-start">
                          <Checkbox
                            id="no-active-loans"
                            checked={confirmations.noActiveLoans}
                            onCheckedChange={() => handleCheckboxChange('noActiveLoans')}
                            className="mt-1"
                          />
                          <label htmlFor="no-active-loans" className="ml-2 text-sm text-kashme-darkgray">
                            I confirm that I have no active loans or outstanding balances with KashMe.
                          </label>
                        </div>
                        
                        <div className="flex items-start">
                          <Checkbox
                            id="understand-irreversible"
                            checked={confirmations.understandIrreversible}
                            onCheckedChange={() => handleCheckboxChange('understandIrreversible')}
                            className="mt-1"
                          />
                          <label htmlFor="understand-irreversible" className="ml-2 text-sm text-kashme-darkgray">
                            I understand that account deletion is permanent and cannot be undone, and I will lose all my account data and history.
                          </label>
                        </div>
                        
                        <div className="flex items-start">
                          <Checkbox
                            id="confirm-identity"
                            checked={confirmations.confirmIdentity}
                            onCheckedChange={() => handleCheckboxChange('confirmIdentity')}
                            className="mt-1"
                          />
                          <label htmlFor="confirm-identity" className="ml-2 text-sm text-kashme-darkgray">
                            I confirm that I am the owner of this account and have the authority to request its deletion.
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex justify-center">
                        <Button
                          type="submit"
                          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"
                        >
                          Request Account Deletion
                        </Button>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center bg-green-50 border border-green-100 rounded-lg p-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-kashme-black mb-4">Account Deletion Request Submitted</h2>
                  <p className="text-kashme-darkgray mb-6">
                    We have received your account deletion request. Our team will process your request within 30 days, and you will receive a confirmation email once the process is complete.
                  </p>
                  <p className="text-kashme-darkgray mb-6">
                    If you have any questions or wish to cancel this request, please contact our customer support at <span className="text-kashme-black font-semibold">support@kashme.com</span> or call <span className="text-kashme-black font-semibold">+256 700 123456</span> within the next 7 days.
                  </p>
                  <Button 
                    className="bg-kashme-green hover:bg-kashme-green/90 text-kashme-black font-semibold px-6 py-3 rounded-lg"
                    onClick={() => window.location.href = '/'}
                  >
                    Return to Home
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AccountDeletion;
