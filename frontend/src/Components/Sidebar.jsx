
import React, { useState } from 'react';
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdSupervisedUserCircle } from "react-icons/md";
import '../CSS/Sidebar.css'; // You can add styles in a separate file.
import profile from '../Images/profile.jpg';

const Admin = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
     
     <button className="sidebar-toggle" onClick={toggleSidebar}> 
      <FaBars  className="mx-2 mt-1 fs-5" onClick={toggle} />
        <b>
        {isOpen ? 'Close Sidebar' : 'Open'}
        </b>
       </button> 
  
     
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="d-flex mx-4 mb-2 ">
        <h5>HOMEFINDS</h5>
        
      <FaBars  className="mx-3 mt-1" onClick={toggle} />
      </div>
      <div>
        <img src={profile}></img>
        <h4>Admin</h4>
     </div>
        <ul><hr/>
          <li><a href="#home"><FaHome className="icon"/><b>Home</b></a></li><hr/>
          <li><a href="#about"><FaUserPlus className="icon" /><b>Users</b></a></li><hr/>
          <li><a href="#services"><MdSupervisedUserCircle className="icon"/><b>Buyers</b></a></li><hr/>
          <li><a href="#contact"><FaUser className="icon"/><b>Sellers</b></a></li><hr/>
        </ul>
      </div>
      </div>
    
  );
};

export default Admin;
