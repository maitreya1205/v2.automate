import React from 'react';
import { Check } from 'lucide-react';

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                step < currentStep
                  ? 'bg-yellow-400 text-white'
                  : step === currentStep
                  ? 'bg-yellow-400 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step < currentStep ? <Check className="w-5 h-5" /> : step}
            </div>
            {index < totalSteps - 1 && (
              <div
                className={`w-12 h-1 mx-2 ${
                  step < currentStep ? 'bg-yellow-400' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressIndicator;