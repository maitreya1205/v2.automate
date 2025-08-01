import React from 'react';
import { ArrowLeft, ArrowRight, Upload } from 'lucide-react';
import ProgressIndicator from '../common/ProgressIndicator';

const UserStep2 = ({ formData, setFormData, onNext, onPrevious }) => {
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
          <ProgressIndicator currentStep={2} totalSteps={4} />
          
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          College Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
              College
              </label>
              <select 
                value={formData.university || ''}
                onChange={(e) => handleInputChange('university', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all bg-white"
                required
              >
                <option value="">Select your College</option>
                <option value="vspcoe">Vasantdada Patil College of Engineering and Visual Arts</option>
                <option value="mphca">Manohar Phalke College of Architecture</option>
                <option value="other">Other</option>
              </select>
            </div>

            {formData.role === 'student' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID Number
                  </label>
                  <input
                    type="text"
                    value={formData.studentId || ''}
                    onChange={(e) => handleInputChange('studentId', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="Enter your student ID"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year of Study
                  </label>
                  <select 
                    value={formData.yearOfStudy || ''}
                    onChange={(e) => handleInputChange('yearOfStudy', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all bg-white"
                    required
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="graduate">Graduate Student</option>
                    <option value="phd">PhD Student</option>
                  </select>
                </div>
              </>
            )}

            {(formData.role === 'teaching-staff' || formData.role === 'non-teaching-staff') && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employee ID
                  </label>
                  <input
                    type="text"
                    value={formData.employeeId || ''}
                    onChange={(e) => handleInputChange('employeeId', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="Enter your employee ID"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    value={formData.department || ''}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="Enter your department"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload ID Card
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yellow-400 transition-colors cursor-pointer relative">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Drop your file here, or <span className="text-yellow-500">browse</span>
                </p>
                <p className="text-sm text-gray-500">
                  Supports: PNG, JPG, PDF (Max 5MB)
                </p>
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      console.log('File selected:', e.target.files[0].name);
                    }
                  }}
                />
              </div>
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

export default UserStep2;
