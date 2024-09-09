import React from "react";
import '../../CSS/UserType.css';

export default function UserType() {
    return (
        <div className="bg_usertype">
        <div class="mai">
            <h1>Who Are You ?</h1>
            <h1>BUYER or SELLER</h1>
            <h3>Please Select Before Signup</h3>
            <div>
                <button className="button_UserType">
                    <h3>BUYER</h3>
                </button>
                <button className="button_UserType">
                    <h3>SELLER</h3>
                </button> 
                <button className="button_UserType">
                    <h3>DONATOR</h3>
                </button> 
            </div>
        </div>
        </div>
    );
}