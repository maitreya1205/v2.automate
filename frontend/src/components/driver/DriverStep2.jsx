import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProgressIndicator from '../common/ProgressIndicator';

const DriverStep2 = ({ formData, setFormData, onNext, onPrevious }) => {
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <ProgressIndicator currentStep={2} totalSteps={3} />
          
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Vehicle & License Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>
              <select 
                value={formData.vehicleType || ''}
                onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all bg-white"
                required
              >
                <option value="">Select vehicle type</option>
                <option value="auto-rickshaw">Auto Rickshaw</option>
                <option value="e-rickshaw">E-Rickshaw</option>
                <option value="taxi">Taxi</option>
              
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Registration Number
                </label>
                <input
                  type="text"
                  value={formData.vehicleNumber || ''}
                  onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  placeholder="DL 01 AB 1234"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Model
                </label>
                <input
                  type="text"
                  value={formData.vehicleModel || ''}
                  onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  placeholder="Enter vehicle model"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Driving License Number
                </label>
                <input
                  type="text"
                  value={formData.licenseNumber || ''}
                  onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  placeholder="Enter license number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  License Expiry Date
                </label>
                <input
                  type="date"
                  value={formData.licenseExpiry || ''}
                  onChange={(e) => handleInputChange('licenseExpiry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Driving Experience
              </label>
              <select 
                value={formData.experience || ''}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all bg-white"
                required
              >
                <option value="">Select experience</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Insurance Policy Number
              </label>
              <input
                type="text"
                value={formData.insuranceNumber || ''}
                onChange={(e) => handleInputChange('insuranceNumber', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="Enter insurance policy number"
                required
              />
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
                className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DriverStep2;