import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Crown, Users, Gift } from 'lucide-react';
import ProgressIndicator from '../common/ProgressIndicator';

const UserStep3 = ({ formData, setFormData, onNext, onPrevious, onComplete }) => {
  const [paymentMethods, setPaymentMethods] = useState(formData.paymentMethods || []);
  const [selectedPlan, setSelectedPlan] = useState(formData.selectedPlan || null);
  const [referralCode, setReferralCode] = useState(formData.referralCode || '');
  const [autoRenewal, setAutoRenewal] = useState(formData.autoRenewal || false);
  const [discount, setDiscount] = useState(0);

  const subscriptionPlans = [
    {
      id: 'monthly',
      name: 'Monthly Pass',
      price: 500,
      duration: '/month',
      trips: '50 trips',
      costPerRide: '₹10/ride',
      badge: null,
      color: 'yellow'
    },
    {
      id: 'quarterly',
      name: 'Quarterly Pass',
      price: 1500,
      duration: '/3 months',
      trips: '150 trips',
      costPerRide: '₹10/ride',
      badge: null,
      color: 'yellow'
    },
    {
      id: 'semester',
      name: 'Semester Pass',
      price: 2500,
      duration: '/6 months',
      trips: '250 trips',
      costPerRide: '₹10/ride',
      badge: 'Best Value',
      color: 'yellow'
    },
    {
      id: 'annual',
      name: 'Annual Pass',
      price: 6000,
      duration: '/year',
      trips: '600 trips',
      costPerRide: '₹10/ride',
      badge: 'Best Value',
      color: 'yellow'
    },
    {
      id: 'vip',
      name: 'VIP Pass',
      price: 1500,
      duration: '/month',
      trips: '50 trips',
      costPerRide: '₹30/ride',
      badge: 'Premium',
      color: 'purple'
    },
    {
      id: 'bestie',
      name: 'Bestie Pass',
      price: 1500,
      duration: '/month',
      trips: 'Shared rides',
      costPerRide: '₹30 For 2 people',
      badge: 'Shared',
      color: 'pink'
    }
  ];

  const handlePaymentMethodChange = (method) => {
    const newMethods = paymentMethods.includes(method)
      ? paymentMethods.filter(m => m !== method)
      : [...paymentMethods, method];
    setPaymentMethods(newMethods);
    setFormData({ ...formData, paymentMethods: newMethods });
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setFormData({ ...formData, selectedPlan: planId });
  };

  const applyReferralCode = () => {
    if (referralCode === 'VROOMVROOM') {
      setDiscount(10);
      setFormData({ ...formData, referralCode, discount: 10});
    } else {
      setDiscount(0);
      setFormData({ ...formData, referralCode, discount: 0 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ 
      ...formData, 
      paymentMethods, 
      selectedPlan, 
      referralCode, 
      autoRenewal, 
      discount 
    });
    
    // If E-Card Subscription is selected, go to payment step
    // Otherwise, skip to account creation
    if (paymentMethods.includes('E-Card Subscription')) {
      onNext();
    } else {
      // Skip payment step and go directly to completion
      onComplete();
    }
  };

  const getBadgeStyles = (color) => {
    switch (color) {
      case 'purple':
        return 'bg-purple-500 text-white';
      case 'pink':
        return 'bg-pink-500 text-white';
      default:
        return 'bg-yellow-400 text-white';
    }
  };

  const getCardStyles = (planId, color) => {
    const isSelected = selectedPlan === planId;
    const baseStyles = 'cursor-pointer transition-all duration-200 hover:shadow-lg';
    
    if (isSelected) {
      switch (color) {
        case 'purple':
          return `${baseStyles} border-2 border-purple-500 bg-purple-50`;
        case 'pink':
          return `${baseStyles} border-2 border-pink-500 bg-pink-50`;
        default:
          return `${baseStyles} border-2 border-yellow-400 bg-yellow-50`;
      }
    }
    
    return `${baseStyles} border border-gray-200 hover:border-gray-300`;
  };

  const calculateDiscountedPrice = (price) => {
    return discount > 0 ? price - (price * discount / 100) : price;
  };

  const showSubscriptionPlans = paymentMethods.includes('E-Card Subscription');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ProgressIndicator currentStep={3} totalSteps={4} />
          
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Payment Preferences
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Payment Methods */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Payment Methods
              </label>
              <div className="space-y-3">
                {['R-Wallet', 'E-Card Subscription', 'Cash'].map((method) => (
                  <label key={method} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={paymentMethods.includes(method)}
                      onChange={() => handlePaymentMethodChange(method)}
                      className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                    />
                    <span className="ml-3 text-gray-900">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Subscription Plans - Only show if E-Card Subscription is selected */}
            {showSubscriptionPlans && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Choose Your Subscription Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {subscriptionPlans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => handlePlanSelect(plan.id)}
                      className={`${getCardStyles(plan.id, plan.color)} p-6 rounded-xl relative`}
                    >
                      {plan.badge && (
                        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm font-semibold ${getBadgeStyles(plan.color)} flex items-center space-x-1`}>
                          {plan.badge === 'Premium' && <Crown className="w-4 h-4" />}
                          {plan.badge === 'Shared' && <Users className="w-4 h-4" />}
                          <span>{plan.badge}</span>
                        </div>
                      )}
                      
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 mt-2">
                          {plan.name}
                        </h3>
                        <div className="mb-4">
                          {discount > 0 ? (
                            <div>
                              <span className="text-lg text-gray-500 line-through">₹{plan.price}</span>
                              <span className="text-3xl font-bold text-gray-900 ml-2">₹{calculateDiscountedPrice(plan.price)}</span>
                              <span className="text-gray-600">{plan.duration}</span>
                              <div className="text-sm text-green-600 font-semibold">Save {discount}%!</div>
                            </div>
                          ) : (
                            <>
                              <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
                              <span className="text-gray-600">{plan.duration}</span>
                            </>
                          )}
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>{plan.trips}</p>
                          <p>{plan.costPerRide}</p>
                        </div>
                      </div>

                      {selectedPlan === plan.id && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Referral Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Referral Code (Optional)
                  </label>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Enter referral code"
                    />
                    <button 
                      type="button"
                      onClick={applyReferralCode}
                      className="px-6 py-3 border border-yellow-400 text-yellow-600 hover:bg-yellow-50 rounded-lg font-semibold transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="mt-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center space-x-2">
                    <Gift className="w-5 h-5 text-yellow-600" />
                    <p className="text-sm text-yellow-800">
                      Use code 'VROOMVROOM' for 10% off all passes
                    </p>
                  </div>
                </div>

                {/* Auto Renewal */}
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={autoRenewal}
                      onChange={(e) => setAutoRenewal(e.target.checked)}
                      className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                    />
                    <span className="ml-3 text-gray-900">Enable auto-renewal for my pass</span>
                  </label>
                </div>
              </div>
            )}

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
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {paymentMethods.includes('E-Card Subscription') ? (
                  <div className="flex items-center space-x-2">
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                ) : (
                  <span>Create Account</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserStep3;