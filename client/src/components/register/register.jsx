import { useState } from 'react';
import { FaUser, FaUserTie } from 'react-icons/fa';
import './register.css';

export default function RegisterPage({ setShowLogin }) {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    license: '',
    vehicleNo: '',
    terms: false,
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInput = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = () => {
    const { name, email, phone, password, confirmPassword, license, vehicle, terms } = formData;
    setSuccessMsg('');
    setErrorMsg('');

    if (!name || !email || !phone || !password || !confirmPassword) {
      setErrorMsg('Please fill in all required fields');
      return;
    }
    if (!terms) {
      setErrorMsg('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    if (!/^\d{10,}$/.test(phone)) {
      setErrorMsg('Please enter a valid phone number');
      return;
    }
    if (role === 'driver' && (!license || !vehicle)) {
      setErrorMsg('Please fill in all driver details');
      return;
    }

    setSuccessMsg(`Registration successful! Welcome to AutoMate as a ${role}.`);
    setTimeout(() => alert(`Demo: You would now be redirected to complete your ${role} profile.`), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md">
        <div className="register-header" style={{ marginBottom: 24 }}>
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            textAlign: "center",
            color: "#1f2937",
            margin: 0
          }}>
            AutoMate
          </h2>
          <div style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "1.15rem",
            fontStyle: "italic",
            marginTop: 4
          }}>
            Your Campus, Your Ride
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-center text-gray-800">Join AutoMate Today</h2>
        <div className="mt-8 space-y-6">
          {!role && (
            <>
              <div
                className={`register-card${role === 'user' ? ' selected' : ''}`}
                onClick={() => setRole('user')}
                tabIndex={0}
                style={{ cursor: 'pointer' }}
              >
                <div className="register-icon">
                  <FaUser size={32} />
                </div>
                <div>
                  <div className="register-title">Book as User</div>
                  <div className="register-desc">
                    Book auto rickshaws for your campus commute. Quick, easy, and reliable rides.
                  </div>
                  <button
                    className="register-btn"
                    onClick={e => {
                      e.stopPropagation();
                      props.onRegisterRole('user');
                    }}
                  >
                    Register as User
                  </button>
                </div>
              </div>
              <div
                className={`register-card${role === 'driver' ? ' selected' : ''}`}
                onClick={() => setRole('driver')}
                tabIndex={0}
                style={{ cursor: 'pointer' }}
              >
                <div className="register-icon">
                  <FaUserTie size={32} />
                </div>
                <div>
                  <div className="register-title">Drive with Us</div>
                  <div className="register-desc">
                    Join our network of drivers. Flexible hours and competitive earnings.
                  </div>
                  <button
                    className="register-btn"
                    onClick={e => {
                      e.stopPropagation();
                      setRole('driver');
                    }}
                  >
                    Register as Driver
                  </button>
                </div>
              </div>
            </>
          )}

          {role && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center mb-2">
                Register as {role === 'user' ? 'User' : 'Driver'}
              </h3>

              <input id="name" type="text" placeholder="Full Name" onChange={handleInput} className="form-input" />
              <input id="email" type="email" placeholder="Email Address" onChange={handleInput} className="form-input" />
              <input id="phone" type="tel" placeholder="Phone Number" onChange={handleInput} className="form-input" />
              <input id="password" type="password" placeholder="Password" onChange={handleInput} className="form-input" />
              <input id="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleInput} className="form-input" />

              {role === 'driver' && (
                <>
                  <input id="license" type="text" placeholder="Driver's License Number" onChange={handleInput} className="form-input" />
                  <input id="vehicle" type="text" placeholder="Vehicle Registration Number" onChange={handleInput} className="form-input" />
                </>
              )}

              <label className="flex items-center text-sm">
                <input id="terms" type="checkbox" onChange={handleInput} className="mr-2 h-4 w-4 text-yellow-500" />
                I agree to the <a href="#" className="text-yellow-600 mx-1">Terms</a> & <a href="#" className="text-yellow-600">Privacy</a>
              </label>

              <button onClick={handleSubmit} className="btn-primary w-full py-2 rounded-lg">Create Account</button>
              <button onClick={() => setRole('')} className="text-sm text-gray-500 underline w-full mt-2">← Back to Role Selection</button>

              {successMsg && <div className="mt-4 text-green-700 bg-green-100 p-2 rounded-lg text-sm">{successMsg}</div>}
              {errorMsg && <div className="mt-4 text-red-700 bg-red-100 p-2 rounded-lg text-sm">{errorMsg}</div>}
            </div>
          )}
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already registered?{' '}
          <a
            href="#"
            className="text-yellow-600 font-medium hover:underline"
            onClick={e => {
              e.preventDefault();
              setShowLogin(true);
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
