import React from 'react';
import '../../CSS/Navbar2.css'; // Import CSS for additional styling
import logo from '../../Images/logo.png';
import profile from '../../Images/profile.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar_Navbar2">
            <div className="navbar-container_Navbar2">
                <div>
                    <ul className="nav-links_Navbar2">
                        <li><img src={logo} className="logo_Navbar2"></img></li>
                        <li>|</li>
                        <li><Link to="/"><b>Home</b></Link></li>
                        <li>|</li>
                        <li><a href="#about"><b>About</b></a></li>
                        <li>|</li>
                        <li><a href="#services"><b>Services</b></a></li>
                        <li>|</li>
                        <li><a href="#contact"><b>Contact</b></a></li>
                    </ul>
                </div>
                <div>
                    <ul className="d-flex right_Navbar2">
                        <li><button className='login_Navbar2'><b>LogIn</b></button></li>
                        <li><button className="signup_Navbar2 login_Navbar2"><b>SignUp</b></button></li>
                        <li><img src={profile} className="image_Navbar2"></img></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
