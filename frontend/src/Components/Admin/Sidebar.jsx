
import React, { useState } from 'react';
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdSupervisedUserCircle } from "react-icons/md";
import '../../CSS/Sidebar.css'; // You can add styles in a separate file.
import profile from '../../Images/profile.jpg';

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
          <li className='li_sidebar'><a className='a_sidebar' href="#home"><FaHome className="icon_sidebar" /><b>Home</b></a></li><hr />
          <li className='li_sidebar'><a className='a_sidebar' href="/adminAllUsers"><FaUserPlus className="icon_sidebar" /><b>Users</b></a></li><hr />
          <li className='li_sidebar'><a className='a_sidebar' href="#services"><MdSupervisedUserCircle className="icon_sidebar" /><b>Buyers</b></a></li><hr />
          <li className='li_sidebar'><a className='a_sidebar' href="#contact"><FaUser className="icon_sidebar" /><b>Sellers</b></a></li><hr />
        </ul>
      </div>
    </div>

  );
};

export default Admin;
