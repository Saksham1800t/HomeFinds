import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import "../../CSS/Login.css";


function Login() {
    const [formData, setFormData] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if (!userName || !password) {
            setError('Please fill in both fields');
            return;
        }
    };

    return (
        <>
            <div className='login-bg_Login'>
                <div className="login-container_Login " >
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4">WELCOME!</h2>
                        <div className="form-group">
                            <label className="label_Login"><FaUser className="icon_Login" /><b>Username</b></label>
                            <input className='input_Login' type="username" id="username" placeholder="username" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="label_Login"><FaLock className="icon_Login" /><b>Password</b></label>
                            <input className='input_Login' type="password" id="password" placeholder="password" onChange={handleChange} required />
                        </div>
                        <div className="box">
                            <label className="label_Login">
                                <input type="checkbox" style={{margin: "0 .4rem 0 0"}} />
                                <b>Remember me</b>
                            </label>
                        </div>
                        <div className="form-group">
                            <button className='button_Login' type="submit">Login</button>
                        </div>
                        <h4 className="fs-6"><b>Don't have an account? SignUp</b></h4>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Login;