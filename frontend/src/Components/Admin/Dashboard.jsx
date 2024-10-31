import React, { useEffect, useState } from 'react';
import { FaCartPlus, FaUserPlus } from "react-icons/fa6";
import { IoMdGitPullRequest } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import '../../CSS/Dashboard.css';
import Sidebar from './Sidebar';
import axios from 'axios';

function Dashboard() {
    const token = localStorage.getItem('token');
    const [counts, setCounts] = useState({
        buy: 0,
        rent: 0,
        donate: 0,
        users: 0,
    });

    const fetchCounts = async () => {
        try {
            const response = await axios.post('http://localhost:5724/admin/fetch-counts', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCounts({
                buy: response.data.buyCount,
                rent: response.data.rentCount,
                donate: response.data.donateCount,
                users: response.data.usersCount,
            })
        } catch (error) {
            console.error("error fetching counts:", error);
        }
    };

    useEffect(() => {
        fetchCounts();
    }, []);

    return (
        <>
            <div>
                <Sidebar />
            </div>
            <div className="dash">
                <div className="product_dashboard ">
                    <h3 className='h3_dash'><MdProductionQuantityLimits className="icon_dash" /><b>Products for buy</b></h3>
                    <h3 className='h3_dash'><b>{counts.buy}</b></h3>
                </div>
                <div className="product_dashboard ">
                    <h3 className='h3_dash'><FaCartPlus className="icon_dash" /><b>Products for rent</b></h3>
                    <h3 className='h3_dash'><b>{counts.rent}</b></h3>
                </div>
                <div className="pro_dashboard">
                    <h3 className='h3_dash'><IoMdGitPullRequest className="icon_dash" /><b>Products for donate</b></h3>
                    <h3 className='h3_dash'><b>{counts.donate}</b></h3>
                </div>
                <div className="pro_dashboard">
                    <h3 className='h3_dash'><FaUserPlus className="icon_dash" /><b>No. of Users</b></h3>
                    <h3 className='h3_dash'><b>{counts.users}</b></h3>
                </div>
            </div>
        </>
    )

}
export default Dashboard;
