import React from 'react';
import '../../CSS/AdminLogin.css';

export default function AdminLogin() {
    return (
        <div className='yo_AdminLogin'>
            <div class="main_AdminLogin">
                <h1 className='h1_AdminLogin'>Admin Login</h1>
                <h3>Enter your login credentials</h3>
                <form>
                    <label className='label_AdminLogin' for="first">
                        Username:
                    </label>
                    <input className='input_AdminLogin' type="text"
                        id="first"
                        name="first"
                        placeholder="Enter your Username" required />

                    <label className='label_AdminLogin' for="password">
                        Password:
                    </label>
                    <input className='input_AdminLogin' type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your Password" required />

                    <div class="wrap_AdminLogin">
                        <button className='button_AdminLogin' type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}