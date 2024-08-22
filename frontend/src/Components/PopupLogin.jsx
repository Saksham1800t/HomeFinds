// PopupLoginForm.js
import React from 'react';
import '../CSS/PopupLogin.css'; // Make sure to create this CSS file for styling

const PopupLogin = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Form submitted');
    onClose(); // Close the popup after submission
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default PopupLogin;
