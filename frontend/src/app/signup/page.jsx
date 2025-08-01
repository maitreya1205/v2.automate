"use client";

import { useState } from "react";
import Hero from "@/components/common/Hero";
import DriverBenefits from "@/components/driver/DriverBenefits";
import UserBenefits from "@/components/user/UserBenefits";
import UserStep1 from "@/components/user/UserStep1";
import UserStep2 from "@/components/user/UserStep2";
import UserStep3 from "@/components/user/UserStep3";
import UserStep4 from "@/components/user/UserStep4";
import DriverStep1 from "@/components/driver/DriverStep1";
import DriverStep2 from "@/components/driver/DriverStep2";
import DriverStep3 from "@/components/driver/DriverStep3";

function SignUpPage() {
  const [userType, setUserType] = useState('student');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleComplete = () => {
    const accountType = userType === 'student' ? 'User' : 'Driver';
    alert(`${accountType} account created successfully!`);
    // Reset form or redirect
    setCurrentStep(1);
    setFormData({});
  };

  const renderCurrentStep = () => {
    if (userType === 'student') {
      switch (currentStep) {
        case 1:
          return <UserStep1 formData={formData} setFormData={setFormData} onNext={handleNext} />;
        case 2:
          return <UserStep2 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} />;
        case 3:
          return <UserStep3 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} onComplete={handleComplete} />;
        case 4:
          return <UserStep4 formData={formData} setFormData={setFormData} onPrevious={handlePrevious} onComplete={handleComplete} />;
        default:
          return <UserStep1 formData={formData} setFormData={setFormData} onNext={handleNext} />;
      }
    } else {
      switch (currentStep) {
        case 1:
          return <DriverStep1 formData={formData} setFormData={setFormData} onNext={handleNext} />;
        case 2:
          return <DriverStep2 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} />;
        case 3:
          return <DriverStep3 formData={formData} setFormData={setFormData} onPrevious={handlePrevious} onComplete={handleComplete} />;
        default:
          return <DriverStep1 formData={formData} setFormData={setFormData} onNext={handleNext} />;
      }
    }
  }

  return (
  <div>
      <Hero userType={userType} setUserType={setUserType} />
      {renderCurrentStep()}
      {userType === 'student' ? <UserBenefits /> : <DriverBenefits />}
  </div>
  );
}
export default SignUpPage;
