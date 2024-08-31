import React from 'react';
import { FaCartPlus, FaUserPlus } from "react-icons/fa6";
import { IoMdGitPullRequest } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import '../../CSS/Dashboard.css';


function Dashboard(){
    return(
        <div className="dash">
            <div><Sidebar/></div>
            <div className="product ">
                <h3><MdProductionQuantityLimits className="icon" /><b>Products for buy</b></h3>
                <h3><b>0</b></h3>
            </div>
            <div className="product">
                <h3><FaCartPlus className="icon"/><b>Products for sell</b></h3>
                <h3><b>0</b></h3>
            </div>
            <div className="pro">
                <h3><IoMdGitPullRequest  className="icon"/><b>Requests</b></h3>
                <h3><b>0</b></h3>
            </div>
            <div className="pro">
                <h3><FaUserPlus className="icon"/><b>No. of Sellers</b></h3>
                <h3><b>0</b></h3>
            </div>
        </div>
    )
    
}
export default Dashboard;
