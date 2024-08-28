import React from 'react';
import '../../CSS/AdminLogin.css';

export default function AdminLogin() {
    return (
        <div class="main">
            <h1>Admin Login</h1>
            <h3>Enter your login credentials</h3>
            <form>
                <label for="first">
                    Username:
                </label>
                <input type="text"
                    id="first"
                    name="first"
                    placeholder="Enter your Username" required />

                <label for="password">
                    Password:
                </label>
                <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your Password" required />

                <div class="wrap">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}