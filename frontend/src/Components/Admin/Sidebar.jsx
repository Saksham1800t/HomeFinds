
import React, { useState } from 'react';
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdSupervisedUserCircle } from "react-icons/md";
import '../../CSS/Sidebar.css'; 
import profile from '../../Images/profile.jpg';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars className="mx-2 mt-1 fs-5" onClick={toggle} />
        <b>
          {isOpen ? 'Close Sidebar' : 'Open'}
        </b>
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="d-flex mb-2 ">
          <FaBars className="mx-3 mt-1 icon_sidebar" onClick={toggle} />
          <h5>HOMEFINDS</h5>
        </div>
        <div>
          <img className='img_sidebar' src={profile}></img>
          <h4 className='h4_sidebar'>ADMIN</h4>
        </div>
        <ul className='ul_sidebar'><hr />
          <li className='li_sidebar'><Link className='a_sidebar' to="/admindashboard"><FaHome className="icon_sidebar" /><b>Home</b></Link></li><hr />
          <li className='li_sidebar'><Link className='a_sidebar' to="/adminAllUsers"><FaUserPlus className="icon_sidebar" /><b>Users</b></Link></li><hr />
          <li className='li_sidebar'><Link className='a_sidebar' to="/adminAllProducts"><MdSupervisedUserCircle className="icon_sidebar" /><b>All Products</b></Link></li><hr />
          <li className='li_sidebar'><a className='a_sidebar' href="#contact"><FaUser className="icon_sidebar" /><b>Sellers</b></a></li><hr />
        </ul>
      </div>
    </div>

  );
};

export default Admin;
