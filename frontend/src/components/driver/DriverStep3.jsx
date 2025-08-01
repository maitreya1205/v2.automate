import React, { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import ProgressIndicator from '../common/ProgressIndicator';

const DriverStep3 = ({ formData, setFormData, onPrevious, onComplete }) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    
    setFormData({ ...formData, agreedToTerms });
    onComplete();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ProgressIndicator currentStep={3} totalSteps={3} />
          
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Document Submission & Verification
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Driving License
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors cursor-pointer relative">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    Drop your license here, or <span className="text-yellow-500">browse</span>
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF (Max 5MB)</p>
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    accept=".png,.jpg,.jpeg,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        console.log('License file selected:', e.target.files[0].name);
                      }
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Vehicle Registration Certificate
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors cursor-pointer relative">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    Drop your RC here, or <span className="text-yellow-500">browse</span>
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF (Max 5MB)</p>
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    accept=".png,.jpg,.jpeg,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        console.log('RC file selected:', e.target.files[0].name);
                      }
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Insurance Certificate
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors cursor-pointer relative">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    Drop your insurance here, or <span className="text-yellow-500">browse</span>
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF (Max 5MB)</p>
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    accept=".png,.jpg,.jpeg,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        console.log('Insurance file selected:', e.target.files[0].name);
                      }
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Profile Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors cursor-pointer relative">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    Drop your photo here, or <span className="text-yellow-500">browse</span>
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG (Max 2MB)</p>
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    accept=".png,.jpg,.jpeg"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        console.log('Profile photo selected:', e.target.files[0].name);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Verification Process</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Documents will be verified within 24-48 hours</li>
                <li>• You'll receive an email notification once approved</li>
                <li>• Background verification may take additional 2-3 days</li>
                <li>• You can start driving once all verifications are complete</li>
              </ul>
            </div>

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
                disabled={!agreedToTerms}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  agreedToTerms
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

export default DriverStep3;