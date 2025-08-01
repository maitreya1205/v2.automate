'use client'
import React, { useState, useEffect } from "react";
import {
  FaBars, FaTimes, FaUser, FaStar, FaStarHalfAlt,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaCheck, // For feature checks and pricing features
  FaShieldAlt, FaRupeeSign, FaClock, FaUsers, FaCreditCard, FaHeadset, // Specific icons for features
  FaUserGraduate, FaCar, // Used in signup page, included here for completeness
  FaArrowRight, FaArrowLeft, // Used in signup page, included here for completeness
  FaPiggyBank, FaQuestionCircle // From previous signup context
} from "react-icons/fa";
import { FaSignInAlt as LogIn, FaUser as User } from "react-icons/fa";
import "./landing.css"; // The extracted CSS file
import Link from "next/link";

const Landing = ({ onLoginClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPricingMonthly, setIsPricingMonthly] = useState(true); // true for monthly, false for semester
  const [faqOpenStates, setFaqOpenStates] = useState({}); // Stores boolean for each FAQ item

  // Data for pricing plans based on original HTML
  const monthlyPlans = [
    { name: "Basic Pass", description: "Perfect for occasional campus trips", price: "750", period: "/month", features: ["50 trips per month", "₹15 per ride", "Valid for 30 days", "Standard vehicles", "Basic support"] },
    { name: "Semester Pass", description: "Best for regular campus commuters", price: "3750", period: "/semester", popular: true, features: ["250 trips (50 per month)", "₹15 per ride", "Valid for 150 days", "Priority booking", "24/7 support"] },
    { name: "VIP Pass", description: "Premium experience for discerning students", price: "1500", period: "/month", features: ["50 trips per month", "₹30 per ride", "Premium vehicles", "Priority pickup", "Dedicated support"] },
  ];

  const semesterPlans = [
    { name: "Basic Pass", description: "Perfect for occasional campus trips", price: "2250", period: "/quarter", features: ["50 trips per month", "₹15 per ride", "Valid for 90 days", "Standard vehicles", "Basic support"] },
    { name: "Semester Pass", description: "Best for regular campus commuters", price: "3750", period: "/semester", popular: true, features: ["250 trips (50 per month)", "₹15 per ride", "Valid for 150 days", "Priority booking", "24/7 support"] },
    { name: "VIP Pass", description: "Premium experience for discerning students", price: "4500", period: "/semester", features: ["50 trips per month", "₹45 per ride (for two people)", "Premium vehicles", "Priority pickup", "Dedicated support"] },
  ];


  // Effect for body overflow
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Pricing toggle handler
  const handlePricingToggle = () => {
    setIsPricingMonthly(!isPricingMonthly);
  };

  // FAQ toggle handler
  const toggleFAQ = (index) => {
    setFaqOpenStates(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  // Smooth scrolling (basic implementation)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header height
        behavior: 'smooth'
      });
      // Close mobile menu if open after navigating
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const currentPlans = isPricingMonthly ? monthlyPlans : semesterPlans;

  const faqItemsData = [
    {
      question: "How do I sign up for AutoMate?",
      answer: "Signing up for AutoMate is easy! Click on the 'Sign Up' button, choose whether you're a student or driver, and follow the registration process. Students will need to verify their university email, while drivers will need to submit additional documentation for verification."
    },
    {
      question: "How much does AutoMate cost?",
      answer: "AutoMate offers various pricing plans to suit different needs. Our basic monthly pass starts at ₹750 for 50 trips, while semester passes offer better value at ₹3750 for 250 trips. You can also opt for our premium VIP pass at ₹1500 per month for priority service and premium vehicles."
    },
    {
      question: "How do I book a ride?",
      answer: "Booking a ride is simple! Open the AutoMate app, enter your pickup location and destination, choose your preferred time (now or schedule for later), and confirm your booking. You'll be matched with a nearby driver, and you can track their arrival in real-time."
    },
    {
      question: "Is AutoMate safe?",
      answer: "Safety is our top priority! All drivers undergo thorough background checks and are verified by university authorities. You can share your trip details with friends, track your ride in real-time, and rate your experience after each trip. We also have a 24/7 support team available to assist with any issues."
    },
    {
      question: "Can I become a driver for AutoMate?",
      answer: "Yes, you can! If you have a valid driver's license, a vehicle that meets our requirements, and are associated with a university (as a student or staff), you can apply to become an AutoMate driver. Sign up through our app or website, submit the required documentation, and our team will review your application."
    },
    {
      question: "What payment methods are accepted?",
      answer: "AutoMate accepts various payment methods including credit/debit cards, UPI, net banking, and cash. You can also opt for our e-wallet or subscription cards for a seamless payment experience. All transactions are secure and you can manage your payment preferences in the app."
    }
  ];


  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <a href="#" className="logo-link" onClick={() => scrollToSection('hero')}>
                <div className="logo-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-2 0h-2m-4-8v1m0 0v1m0-1h1m-1 0h-1m4 6h-2m2 0v2m0-2v-2m-8 6h2m-2 0v-2m0 2v2m0-6V4m0 6h1m-1 0h-1" />
                  </svg>
                </div>
                <span className="logo-text">AutoMate</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <a href="#features" className="nav-link" onClick={() => scrollToSection('features')}>Features</a>
              <a href="#how-it-works" className="nav-link" onClick={() => scrollToSection('how-it-works')}>How It Works</a>
              <a href="#pricing" className="nav-link" onClick={() => scrollToSection('pricing')}>Pricing</a>
              <a href="#testimonials" className="nav-link" onClick={() => scrollToSection('testimonials')}>Testimonials</a>
              <a href="#faq" className="nav-link" onClick={() => scrollToSection('faq')}>FAQ</a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="desktop-cta">
              <button className="btn-login" onClick={onLoginClick}>
                <LogIn className="w-4 h-4" />
                <Link href={'http://localhost:3001/login'}>Log In</Link>
              </button>
              <button className="btn-signup">
                <User className="w-4 h-4" />
                <Link href={'http://localhost:3001/signup'}>Sign Up</Link>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-button" id="mobile-menu-button" onClick={toggleMobileMenu}>
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} id="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} id="mobile-menu">
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <div className="mobile-logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="mobile-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-2 0h-2m-4-8v1m0 0v1m0-1h1m-1 0h-1m4 6h-2m2 0v2m0-2v-2m-8 6h2m-2 0v-2m0 2v2m0-6V4m0 6h1m-1 0h-1" />
              </svg>
            </div>
            <span className="mobile-logo-text">AutoMate</span>
          </div>
          <button className="mobile-close-button" id="mobile-close-button" onClick={toggleMobileMenu}>
            <FaTimes />
          </button>
        </div>

        <div className="mobile-menu-content">
          <nav className="mobile-nav">
            <a href="#features" className="mobile-nav-link" onClick={() => scrollToSection('features')}>Features</a>
            <a href="#how-it-works" className="mobile-nav-link" onClick={() => scrollToSection('how-it-works')}>How It Works</a>
            <a href="#pricing" className="mobile-nav-link" onClick={() => scrollToSection('pricing')}>Pricing</a>
            <a href="#testimonials" className="mobile-nav-link" onClick={() => scrollToSection('testimonials')}>Testimonials</a>
            <a href="#faq" className="mobile-nav-link" onClick={() => scrollToSection('faq')}>FAQ</a>
          </nav>

          <div className="mobile-cta flex flex-col space-y-2">
            <button className="btn-login" onClick={onLoginClick}>
                <LogIn className="w-4 h-4" />
                <span>Log In</span>
              </button>
              <button className="btn-signup">
                <User className="w-4 h-4" />
                <span>Sign Up</span>
              </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Campus Transportation Made Easy</h1>
              <p className="hero-subtitle">AutoMate connects students with reliable drivers for safe and affordable transportation around campus. Say goodbye to transportation worries!</p>

              <div className="hero-cta">
                <a href="" className="btn btn-primary btn-large">Get Started</a>
                <a href="#how-it-works" className="btn btn-secondary btn-large" onClick={() => scrollToSection('how-it-works')}>Learn More</a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">Students</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Drivers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Campuses</div>
                </div>
              </div>
            </div>

            <div className="hero-image-container">
              <svg className="hero-image" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect x="0" y="0" width="500" height="400" fill="#F3F4F6" rx="20" />

                {/* Road */}
                <rect x="50" y="250" width="400" height="100" fill="#E5E7EB" rx="5" />
                <rect x="50" y="295" width="400" height="10" fill="#D1D5DB" />
                <rect x="75" y="295" width="50" height="10" fill="white" />
                <rect x="175" y="295" width="50" height="10" fill="white" />
                <rect x="275" y="295" width="50" height="10" fill="white" />
                <rect x="375" y="295" width="50" height="10" fill="white" />

                {/* Car */}
                <g transform="translate(300, 280)">
                  {/* Car Body */}
                  <rect x="0" y="0" width="120" height="30" fill="#FFD400" rx="10" />
                  <rect x="10" y="-20" width="80" height="25" fill="#FFD400" rx="8" />

                  {/* Windows */}
                  <rect x="15" y="-15" width="30" height="15" fill="#B4C6FC" rx="3" />
                  <rect x="55" y="-15" width="30" height="15" fill="#B4C6FC" rx="3" />

                  {/* Wheels */}
                  <circle cx="30" cy="30" r="12" fill="#1B1B1B" />
                  <circle cx="30" cy="30" r="6" fill="#6B7280" />
                  <circle cx="90" cy="30" r="12" fill="#1B1B1B" />
                  <circle cx="90" cy="30" r="6" fill="#6B7280" />

                  {/* Lights */}
                  <rect x="0" y="10" width="5" height="10" fill="#EF4444" rx="2" />
                  <rect x="115" y="10" width="5" height="10" fill="#FBBF24" rx="2" />
                </g>

                {/* Buildings */}
                <rect x="50" y="50" width="100" height="200" fill="#9CA3AF" rx="5" />
                <rect x="60" y="70" width="20" height="30" fill="#B4C6FC" />
                <rect x="90" y="70" width="20" height="30" fill="#B4C6FC" />
                <rect x="120" y="70" width="20" height="30" fill="#B4C6FC" />
                <rect x="60" y="110" width="20" height="30" fill="#B4C6FC" />
                <rect x="90" y="110" width="20" height="30" fill="#B4C6FC" />
                <rect x="120" y="110" width="20" height="30" fill="#B4C6FC" />
                <rect x="60" y="150" width="20" height="30" fill="#B4C6FC" />
                <rect x="90" y="150" width="20" height="30" fill="#B4C6FC" />
                <rect x="120" y="150" width="20" height="30" fill="#B4C6FC" />
                <rect x="60" y="190" width="20" height="30" fill="#B4C6FC" />
                <rect x="90" y="190" width="20" height="30" fill="#B4C6FC" />
                <rect x="120" y="190" width="20" height="30" fill="#B4C6FC" />

                <rect x="350" y="100" width="100" height="150" fill="#9CA3AF" rx="5" />
                <rect x="360" y="120" width="20" height="30" fill="#B4C6FC" />
                <rect x="390" y="120" width="20" height="30" fill="#B4C6FC" />
                <rect x="420" y="120" width="20" height="30" fill="#B4C6FC" />
                <rect x="360" y="160" width="20" height="30" fill="#B4C6FC" />
                <rect x="390" y="160" width="20" height="30" fill="#B4C6FC" />
                <rect x="420" y="160" width="20" height="30" fill="#B4C6FC" />
                <rect x="360" y="200" width="20" height="30" fill="#B4C6FC" />
                <rect x="390" y="200" width="20" height="30" fill="#B4C6FC" />
                <rect x="420" y="200" width="20" height="30" fill="#B4C6FC" />

                {/* Trees */}
                <circle cx="200" cy="200" r="30" fill="#10B981" />
                <rect x="195" y="200" width="10" height="50" fill="#7C3AED" />

                <circle cx="250" cy="180" r="25" fill="#10B981" />
                <rect x="245" y="180" width="10" height="40" fill="#7C3AED" />

                {/* People */}
                <circle cx="150" cy="240" r="10" fill="#F472B6" />
                <rect x="145" y="250" width="10" height="20" fill="#F472B6" />
                <rect x="140" y="260" width="5" height="15" fill="#F472B6" />
                <rect x="155" y="260" width="5" height="15" fill="#F472B6" />

                <circle cx="180" cy="240" r="10" fill="#60A5FA" />
                <rect x="175" y="250" width="10" height="20" fill="#60A5FA" />
                <rect x="170" y="260" width="5" height="15" fill="#60A5FA" />
                <rect x="185" y="260" width="5" height="15" fill="#60A5FA" />

                {/* Phone */}
                <rect x="220" y="100" width="60" height="100" fill="#1B1B1B" rx="10" />
                <rect x="225" y="110" width="50" height="70" fill="#B4C6FC" rx="5" />
                <circle cx="250" cy="190" r="8" fill="#E5E7EB" />

                {/* App Interface on Phone */}
                <rect x="230" y="115" width="40" height="60" fill="white" rx="3" />
                <rect x="235" y="120" width="30" height="10" fill="#FFD400" rx="2" />
                <rect x="235" y="135" width="30" height="5" fill="#E5E7EB" rx="1" />
                <rect x="235" y="145" width="30" height="5" fill="#E5E7EB" rx="1" />
                <rect x="235" y="155" width="30" height="5" fill="#E5E7EB" rx="1" />
                <rect x="235" y="165" width="15" height="5" fill="#FFD400" rx="1" />
              </svg>
            </div>
          </div>

          {/* Background Shapes */}
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose AutoMate?</h2>
            <p className="section-subtitle">We've designed our service with students in mind, focusing on safety, affordability, and convenience.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-container">
                <FaShieldAlt className="feature-icon" />
              </div>
              <h3 className="feature-title">Safety First</h3>
              <p className="feature-description">All our drivers undergo thorough background checks and are verified by university authorities. Track your ride in real-time for added security.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <FaRupeeSign className="feature-icon" />
              </div>
              <h3 className="feature-title">Student-Friendly Pricing</h3>
              <p className="feature-description">Enjoy affordable rates designed specifically for student budgets. Choose from various subscription plans or pay per ride.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <FaClock className="feature-icon" />
              </div>
              <h3 className="feature-title">Convenient Scheduling</h3>
              <p className="feature-description">Book rides in advance for your classes or schedule recurring rides for your regular commute. Never be late again!</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <FaUsers className="feature-icon" />
              </div>
              <h3 className="feature-title">Ride Sharing</h3>
              <p className="feature-description">Share rides with classmates going the same way to split costs and reduce your carbon footprint. Connect with friends on the app!</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <FaCreditCard className="feature-icon" />
              </div>
              <h3 className="feature-title">Flexible Payment Options</h3>
              <p className="feature-description">Choose from multiple payment methods including e-wallet, subscription cards, or cash. Manage all your transactions in one place.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <FaHeadset className="feature-icon" />
              </div>
              <h3 className="feature-title">24/7 Support</h3>
              <p className="feature-description">Our dedicated support team is available round the clock to assist you with any issues or questions you might have.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How AutoMate Works</h2>
            <p className="section-subtitle">Getting started with AutoMate is quick and easy. Follow these simple steps to enjoy hassle-free campus transportation.</p>
          </div>

          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Sign Up</h3>
                <p className="step-description">Create your account using your student email. Verify your identity to ensure the safety of our community.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Choose Your Plan</h3>
                <p className="step-description">Select from our range of subscription plans or opt for pay-per-ride. Find the option that best suits your needs and budget.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Book Your Ride</h3>
                <p className="step-description">Schedule a ride in advance or book one on-demand. Enter your pickup location and destination, and we'll match you with a driver.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Enjoy Your Journey</h3>
                <p className="step-description">Track your driver in real-time, share your trip details with friends for safety, and rate your experience after the ride.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">Choose the plan that works best for you. All plans include access to our full range of features.</p>
          </div>

          <div className="pricing-toggle">
            <span className="toggle-label">Monthly</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-input"
                id="pricing-toggle"
                checked={!isPricingMonthly} // Checked means "Semester" is active
                onChange={handlePricingToggle}
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="toggle-label">Semester</span>
          </div>

          <div className="pricing-grid">
            {currentPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="pricing-name">{plan.name}</h3>
                  <p className="pricing-description">{plan.description}</p>
                </div>

                <div className="pricing-price">
                  <span className="price">₹{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="pricing-feature">
                      <FaCheck className="feature-check" />
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pricing-cta">
                  <a href="http://localhost:3001/signup" className="btn btn-primary">Get Started</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Users Say</h2>
            <p className="section-subtitle">Don't just take our word for it. Here's what students and drivers have to say about AutoMate.</p>
          </div>

          <div className="testimonials-container">
            <div className="testimonial-card">
              <p className="testimonial-content">AutoMate has been a game-changer for me! As a student living off-campus, I used to struggle with transportation. Now, I can easily book rides to and from classes, and the subscription plan saves me a lot of money.</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <FaUser />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Priya Sharma</h4>
                  <p className="author-role">Student, Delhi University</p>
                </div>
                <div className="testimonial-rating">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-content">I joined AutoMate as a driver to earn some extra income while studying. The flexible hours allow me to work around my class schedule, and the platform makes it easy to find rides. Plus, I get to meet fellow students!</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <FaUser />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Rahul Patel</h4>
                  <p className="author-role">Driver & Student, IIT Delhi</p>
                </div>
                <div className="testimonial-rating">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-content">Safety was my biggest concern when it came to transportation. With AutoMate, I can share my trip details with friends, track my ride in real-time, and know that all drivers are verified. It gives me peace of mind.</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <FaUser />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Ananya Gupta</h4>
                  <p className="author-role">Student, JNU</p>
                </div>
                <div className="testimonial-rating">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Have questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.</p>
          </div>

          <div className="faq-container">
            {faqItemsData.map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3 className="question-text">{item.question}</h3>
                  <svg className={`question-icon ${faqOpenStates[index] ? 'open' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={`faq-answer ${faqOpenStates[index] ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Campus Commute?</h2>
            <p className="cta-subtitle">Join thousands of students enjoying safe, reliable, and affordable transportation with AutoMate.</p>

            <div className="cta-buttons">
              <a href="http://localhost:3001/signup" className="btn btn-cta-primary">Sign Up Now</a>
              <a href="#how-it-works" className="btn btn-cta-secondary" onClick={() => scrollToSection('how-it-works')}>Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-2 0h-2m-4-8v1m0 0v1m0-1h1m-1 0h-1m4 6h-2m2 0v2m0-2v-2m-8 6h2m-2 0v-2m0 2v2m0-6V4m0 6h1m-1 0h-1" />
                  </svg>
                </div>
                <span className="footer-logo-text">AutoMate</span>
              </div>
              <p className="footer-description">
                Making campus transportation safe, reliable, and affordable for students across India.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link"><FaFacebookF /></a>
                <a href="#" className="social-link"><FaTwitter /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
                <a href="#" className="social-link"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#features" className="footer-link" onClick={() => scrollToSection('features')}>Features</a></li>
                <li><a href="#how-it-works" className="footer-link" onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
                <li><a href="#pricing" className="footer-link" onClick={() => scrollToSection('pricing')}>Pricing</a></li>
                <li><a href="#testimonials" className="footer-link" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
                <li><a href="#faq" className="footer-link" onClick={() => scrollToSection('faq')}>FAQ</a></li>
                <li><a href="blog.html" className="footer-link">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="terms.html" className="footer-link">Terms of Service</a></li>
                <li><a href="privacy.html" className="footer-link">Privacy Policy</a></li>
                <li><a href="refund.html" className="footer-link">Refund Policy</a></li>
                <li><a href="cookie.html" className="footer-link">Cookie Policy</a></li>
                <li><a href="safety.html" className="footer-link">Safety Guidelines</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-contact">
                <li className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Vasantdada Patil Prathishthan's College of Engineering and Visual Arts, Sion - 400022 </span>
                </li>
                <li className="contact-item">
                  <FaPhoneAlt className="contact-icon" />
                  <span>+91 81082 10981</span>
                </li>
                <li className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>support@automate.edu</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © 2025 AutoMate. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="privacy.html" className="bottom-link">Privacy</a>
              <a href="terms.html" className="bottom-link">Terms</a>
              <a href="cookie.html" className="bottom-link">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;