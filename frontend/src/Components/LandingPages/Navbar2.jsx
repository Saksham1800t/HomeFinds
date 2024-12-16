import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Navbar2.css'; // Import CSS for additional styling
import logo from '../../Images/logo.png';
import profile from '../../Images/user.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    const [user, setUser] = useState('');

    useEffect(() => {
        if (!token) {
            alert('Please login to view your profile');
            navigate('/login');
            return;
        }

        const getUser = async () => {
            try {
                const response = await axios.post(
                    process.env.REACT_APP_BACKEND_URL + '/users/getUserData',
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setUser(response.data.user);
            } catch (err) {
                console.log(err);
            }
        }

        getUser();
    }, [token, navigate]);


    return (
        <nav className="navbar_Navbar2">
            <div className="navbar-container_Navbar2">
                <div>
                    <ul className="nav-links_Navbar2">
                        <li><img src={logo} className="logo_Navbar2"></img></li>
                        <li>|</li>
                        <li><Link to="/"><b>Home</b></Link></li>
                        <li>|</li>
                        {role === 'admin' ? null :
                            <>
                                <li><Link to="/aboutus"><b>AboutUs</b></Link></li>
                                <li>|</li>
                                <li><Link to="/contactus"><b>Contact</b></Link></li>
                                <li>|</li>
                            </>}
                        {token == null ? null :
                            <>
                                <li><Link to="/Productadd"><b>Add Item</b></Link></li>
                                <li>|</li>
                                <li><Link to="/requesttype"><b>Requests</b></Link></li>

                            </>
                        }

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
                        <li><Link to="/userprofile"><img src={user.userImageUrl ? user.userImageUrl : profile} className="image_Navbar2"></img></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
