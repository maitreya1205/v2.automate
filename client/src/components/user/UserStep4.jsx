import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Building2 } from 'lucide-react';
import ProgressIndicator from '../common/ProgressIndicator';

const UserStep4 = ({ formData, setFormData, onPrevious, onComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    upiId: '',
    bankName: '',
    accountNumber: '',
    ifscCode: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const selectedPlan = formData.selectedPlan ? 
    [
      { id: 'monthly', name: 'Monthly Pass', price: 750 },
      { id: 'quarterly', name: 'Quarterly Pass', price: 2250 },
      { id: 'semester', name: 'Semester Pass', price: 3750 },
      { id: 'annual', name: 'Annual Pass', price: 7200 },
      { id: 'vip', name: 'VIP Pass', price: 1500 },
      { id: 'bestie', name: 'Bestie Pass', price: 2250 }
    ].find(plan => plan.id === formData.selectedPlan) : null;

  const finalPrice = selectedPlan ? 
    (formData.discount > 0 ? selectedPlan.price - (selectedPlan.price * formData.discount / 100) : selectedPlan.price) 
    : 0;

  const handlePaymentDetailChange = (field, value) => {
    setPaymentDetails({ ...paymentDetails, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    
    setFormData({ 
      ...formData, 
      paymentMethod, 
      paymentDetails, 
      agreedToTerms 
    });
    onComplete();
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <ProgressIndicator currentStep={4} totalSteps={4} />
          
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Payment Details for E-Card Subscription
          </h2>

          {selectedPlan && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Selected Plan</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{selectedPlan.name}</span>
                <div className="text-right">
                  {formData.discount > 0 && (
                    <div className="text-sm text-gray-500 line-through">₹{selectedPlan.price}</div>
                  )}
                  <div className="text-xl font-bold text-gray-900">₹{finalPrice}</div>
                  {formData.discount > 0 && (
                    <div className="text-sm text-green-600">Save {formData.discount}%!</div>
                  )}
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Payment Method Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Payment Method
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === 'card' 
                      ? 'border-yellow-400 bg-yellow-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-gray-600" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </div>
                </div>
                <div
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === 'upi' 
                      ? 'border-yellow-400 bg-yellow-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-6 h-6 text-gray-600" />
                    <span className="font-medium">UPI</span>
                  </div>
                </div>
                <div
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all md:col-span-2 ${
                    paymentMethod === 'netbanking' 
                      ? 'border-yellow-400 bg-yellow-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-6 h-6 text-gray-600" />
                    <span className="font-medium">Net Banking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details Forms */}
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={paymentDetails.cardholderName}
                    onChange={(e) => handlePaymentDetailChange('cardholderName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="Enter cardholder name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={paymentDetails.cardNumber}
                    onChange={(e) => handlePaymentDetailChange('cardNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.expiryDate}
                      onChange={(e) => handlePaymentDetailChange('expiryDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.cvv}
                      onChange={(e) => handlePaymentDetailChange('cvv', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  UPI ID
                </label>
                <input
                  type="text"
                  value={paymentDetails.upiId}
                  onChange={(e) => handlePaymentDetailChange('upiId', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  placeholder="yourname@paytm"
                  required
                />
              </div>
            )}

            {paymentMethod === 'netbanking' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Name
                  </label>
                  <select
                    value={paymentDetails.bankName}
                    onChange={(e) => handlePaymentDetailChange('bankName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all bg-white"
                    required
                  >
                    <option value="">Select your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="pnb">Punjab National Bank</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={paymentDetails.accountNumber}
                    onChange={(e) => handlePaymentDetailChange('accountNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="Enter account number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    value={paymentDetails.ifscCode}
                    onChange={(e) => handlePaymentDetailChange('ifscCode', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="Enter IFSC code"
                    required
                  />
                </div>
              </div>
            )}

            {/* Terms Agreement */}
            <div className="pt-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400 mt-1"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-yellow-600 hover:text-yellow-700 underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-yellow-600 hover:text-yellow-700 underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <button 
                type="button"
                onClick={onPrevious}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>
              <button 
                type="submit"
                disabled={!agreedToTerms || !paymentMethod}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  agreedToTerms && paymentMethod
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserStep4;