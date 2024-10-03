import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Navbar2.css'; // Import CSS for additional styling
import logo from '../../Images/logo.png';
import profile from '../../Images/profile.jpg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
        alert('Logged out successfully :(');
    };

    return (
        <nav className="navbar_Navbar2">
            <div className="navbar-container_Navbar2">
                <div>
                    <ul className="nav-links_Navbar2">
                        <li><img src={logo} className="logo_Navbar2"></img></li>
                        <li>|</li>
                        <li><Link to="/"><b>Home</b></Link></li>
                        <li>|</li>
                        <li><Link to="/aboutus"><b>AboutUs</b></Link></li>
                        <li>|</li>
                        <li><Link to="/services"><b>Services</b></Link></li>
                        <li>|</li>
                        <li><Link to="/contact"><b>Contact</b></Link></li>
                        {role === 'admin' ? <>
                            <li>|</li>
                            <li><Link to='/admindashboard'><b>Admin</b></Link></li> </> : null}
                    </ul>
                </div>
                <div>
                    <ul className="d-flex right_Navbar2">
                        {token ? <li><Link><button className='login_Navbar2' onClick={handleLogout}><b>LogOut</b></button></Link></li>
                            :
                            <>
                                <li><Link to="/Login"><button className='login_Navbar2'><b>LogIn</b></button></Link></li>
                                <li><Link to="/Signup"><button className="signup_Navbar2 login_Navbar2"><b>SignUp</b></button></Link></li>
                            </>
                        }
                        <li><Link to="/userprofile"><img src={profile} className="image_Navbar2"></img></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
