import React from 'react';
import { Check, DollarSign } from 'lucide-react';

const DriverBenefits = () => {
  const benefits = [
    'Fixed working hours for better work-life balance',
    'Competitive earnings with transparent pricing',
    'Daily payouts directly to your bank account',
    'Insurance coverage during rides',
    'Access to a large customer base on campus',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Benefits for Drivers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8 text-center max-w-sm">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                💰 Earn More
              </h3>
              <p className="text-gray-700 mb-4">
                Start earning up to <span className="font-bold text-yellow-600">₹25,000</span> per month
              </p>
              <div className="bg-white rounded-lg px-4 py-2 border border-yellow-300">
                <span className="text-yellow-600 font-bold">Join Today!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverBenefits;