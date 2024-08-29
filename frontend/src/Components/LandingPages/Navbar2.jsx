import React from 'react';
import '../../CSS/Navbar2.css'; // Import CSS for additional styling
import logo from '../../Images/logo.png';
import profile from '../../Images/profile.jpg';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div>
                    <ul className="nav-links">
                        <li><img src={logo} className="logo"></img></li>
                        <li>|</li>
                        <li><a href="#home"><b>Home</b></a></li>
                        <li>|</li>
                        <li><a href="#about"><b>About</b></a></li>
                        <li>|</li>
                        <li><a href="#services"><b>Services</b></a></li>
                        <li>|</li>
                        <li><a href="#contact"><b>Contact</b></a></li>
                    </ul>
                </div>
                <div>
                    <ul className="d-flex right">
                        <li><button className='login'><b>LogIn</b></button></li>
                        <li><button className="signup login"><b>SignUp</b></button></li>
                        <li><img src={profile} className="image"></img></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
