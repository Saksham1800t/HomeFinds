import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Navbar.css'; // Import CSS for additional styling
import logo from '../../Images/logo.png';
import profile from '../../Images/profile.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <ul className="nav-links">
            <li><img src={logo} className="logo ml-2"></img></li>
            <li>|</li>
            <li><Link to="#home"><b>Home</b></Link></li>
            <li>|</li>
            <li><Link to="/Login"><b>About</b></Link></li>
            <li>|</li>
            <li><Link to="/BuyNow"><b>Services</b></Link></li>
            <li>|</li>
            <li><Link to="/BuyPage"><b>Contact</b></Link></li>
          </ul>
        </div>
        <div>
          <ul className="d-flex right">
            <li><button><b>LogIn</b></button></li>
            <li><button className="signup"><b>SignUp</b></button></li>
            <li><img src={profile} className="image"></img></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
