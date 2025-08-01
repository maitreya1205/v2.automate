import React from 'react';
import { GraduationCap, Car } from 'lucide-react';
import Image from 'next/image';

const Hero = ({ userType, setUserType }) => {
  return (
    <section
      className="py-16 relative"
    >
      <Image
        src="https://i.postimg.cc/T1K2nHv0/auto1.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10 absolute inset-0 opacity-50" 
      />
      {/* Overlay to make text readable */}


      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
          Join AutoMate Today
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {userType === 'student'
            ? 'Your Campus,Your Ride'
            : 'Your Campus,Your Ride'}
        </p>

        {/* User Type Toggle */}
        <div className="inline-flex bg-gray-100 rounded-xl p-1 mb-12">
          <button
            onClick={() => setUserType('student')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
              userType === 'student'
                ? 'bg-yellow-400 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            <span>User</span>
          </button>
          <button
            onClick={() => setUserType('driver')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
              userType === 'driver'
                ? 'bg-yellow-400 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Car className="w-5 h-5" />
            <span>Driver</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
