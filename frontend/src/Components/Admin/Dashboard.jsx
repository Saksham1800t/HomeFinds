import React from 'react';
import { FaCartPlus, FaUserPlus } from "react-icons/fa6";
import { IoMdGitPullRequest } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import '../../CSS/Dashboard.css';
import Sidebar from './Sidebar';

function Dashboard() {
    return (
        <>
        <div>
            <Sidebar />
        </div>
            <div className="dash">
                <div className="product_dashboard ">
                    <h3 className='h3_dash'><MdProductionQuantityLimits className="icon_dash" /><b>Products for buy</b></h3>
                    <h3 className='h3_dash'><b>0</b></h3>
                </div>
                <div className="product_dashboard ">
                    <h3 className='h3_dash'><FaCartPlus className="icon_dash" /><b>Products for sell</b></h3>
                    <h3 className='h3_dash'><b>0</b></h3>
                </div>
                <div className="pro_dashboard">
                    <h3 className='h3_dash'><IoMdGitPullRequest className="icon_dash" /><b>Requests</b></h3>
                    <h3 className='h3_dash'><b>0</b></h3>
                </div>
                <div className="pro_dashboard">
                    <h3 className='h3_dash'><FaUserPlus className="icon_dash" /><b>No. of Sellers</b></h3>
                    <h3 className='h3_dash'><b>0</b></h3>
                </div>
            </div>
        </>
    )

}
export default Dashboard;
