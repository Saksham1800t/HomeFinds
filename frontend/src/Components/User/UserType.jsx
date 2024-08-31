import React from "react";
import '../CSS/UserType.css';

export default function UserType() {
    return (
        <div class="main">
            <h1>Who Are You ?</h1>
            <h1>BUYER or SELLER</h1>
            <h3>Please Select Before Signup</h3>
            <div>
                <button>
                    <h3>BUYER</h3>
                </button>
                <button>
                    <h3>SELLER</h3>
                </button> 
            </div>
        </div>
    );
}