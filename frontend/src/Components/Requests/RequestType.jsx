import React from "react";
import '../../CSS/UserType.css';
import {Link} from 'react-router-dom'

export default function UserType() {
    return (
        <div className="bg_usertype">
            <div class="mai">
                <h1>Here You Can</h1>
                <h1>Find All Requests</h1>
                <h3>Made by you or for you</h3>
                <div>
                    <button className="button_UserType">
                        <Link to="/madedreq"><h3>Request Made by You</h3></Link>
                    </button>
                    <button className="button_UserType">
                        <Link to='/receivedreq'><h3>Request Made for Your Product</h3></Link>
                    </button>
                </div>
            </div>
        </div>
    );
}