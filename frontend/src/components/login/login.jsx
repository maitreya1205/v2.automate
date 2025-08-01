"use client"
import { useState } from "react";
import { FaUser, FaUserTie } from "react-icons/fa";
import "./login.css";

export default function Login() {
  const [role, setRole] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ role, email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Login</h2>
        <h2 className="text-2xl font-extrabold text-center text-gray-800">AutoMate</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Your Campus, Your Ride</p>

        <div className="mb-5">
          <p className="text-sm text-gray-700 mb-2">Select your role</p>
          <div className="flex gap-4">
            {["User", "Driver"].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 px-4 flex items-center justify-center gap-2 border rounded-lg text-sm font-medium ${
                  role === r
                    ? "bg-yellow-50 border-yellow-400 text-gray-800"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                {r === "User" ? (
                  <FaUser className="w-5 h-5" />
                ) : (
                  <FaUserTie className="w-5 h-5" />
                )}
                {r}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email or Phone Number</label>
            <input
              type="text"
              required
              placeholder="Enter your email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-500" />
              Remember me
            </label>
            <a href="#" className="text-yellow-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-yellow-500 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
