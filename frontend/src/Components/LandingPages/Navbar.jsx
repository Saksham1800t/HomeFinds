import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Navbar.css';
import logo from '../../Images/rec_logo.png';
import { useNavigate } from 'react-router-dom';
import profile from '../../Images/user.jpg';
import axios from 'axios';

function NavbarS() {
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
    <nav className="navbar_Navbar">
      <div className="navbar-container_Navbar">
        <div>
          <ul className="nav-links_Navbar">
            <li><img src={logo} style={{ width: "35px", height: "35px" }} className="logo_Navbar"></img></li>
            <li><Link to="/"><b style={{ color: "Black" }}>Home</b></Link></li>
            <li>|</li>
            {role === 'admin' ? null :
              <>
                <li><Link to="/aboutus"><b style={{ color: "Black" }}>AboutUs</b></Link></li>
                <li>|</li>
                <li><Link to="/contactus"><b style={{ color: "Black" }}>Contact</b></Link></li>
                <li>|</li>
              </>}
            {token == null ? null :
              <>
                <li><Link to="/Productadd"><b style={{ color: "Black" }}>Add Item</b></Link></li>
                <li>|</li>
                <li><Link to="/requesttype"><b style={{ color: "Black" }}>Requests</b></Link></li>

              </>
            }

            {role === 'admin' ? <>
              <li>|</li>
              <li><Link to='/admindashboard'><b style={{ color: "Black" }}>Admin</b></Link></li> </> : null}
          </ul>
        </div>
        <div>
          <ul className="d-flex right_Navbar">
            {token ? <li><Link><button className='login_Navbar' onClick={handleLogout}><b>LogOut</b></button></Link></li>
              :
              <>
                <li><Link to="/Login"><button className='login_Navbar'><b>LogIn</b></button></Link></li>
                <li><Link to="/Signup"><button className="signup_Navbar login_Navbar"><b>SignUp</b></button></Link></li>
              </>
            }
            <li><Link to="/userprofile"><img src={user.userImageUrl ? user.userImageUrl : profile} className="image_Navbar"></img></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarS;
