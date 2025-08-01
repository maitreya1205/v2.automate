// src/components/Profile.jsx
import React, { useState } from 'react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    studentId: 'S123456',
    email: 'john.doe@example.com',
    phone: '9876543210',
    address: '123 Campus Lane, University City',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // In a real application, you would send this data to a backend API
    console.log('Saving user details:', userDetails);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-content">
      <h2>Profile</h2>
      <div className="profile-details">
        {isEditing ? (
          <div className="profile-form">
            <label>
              Name:
              <input type="text" name="name" value={userDetails.name} onChange={handleChange} />
            </label>
            <label>
              Student ID:
              <input type="text" name="studentId" value={userDetails.studentId} onChange={handleChange} disabled />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={userDetails.email} onChange={handleChange} />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" value={userDetails.phone} onChange={handleChange} />
            </label>
            <label>
              Address:
              <textarea name="address" value={userDetails.address} onChange={handleChange}></textarea>
            </label>
            <button className="btn-primary" onClick={handleSave}>
              Save
            </button>
            <button className="btn-secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="profile-info">
            <p>
              <strong>Name:</strong> {userDetails.name}
            </p>
            <p>
              <strong>Student ID:</strong> {userDetails.studentId}
            </p>
            <p>
              <strong>Email:</strong> {userDetails.email}
            </p>
            <p>
              <strong>Phone:</strong> {userDetails.phone}
            </p>
            <p>
              <strong>Address:</strong> {userDetails.address}
            </p>
            <button className="btn-primary" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;