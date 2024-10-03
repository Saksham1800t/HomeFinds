import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import "../../CSS/Login.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.userName || !form.password) {
            alert('Please fill in both fields');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5724/users/login', {
                userName: form.userName,
                password: form.password
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            console.log(response); 
            alert('Login Successful');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Login Failed. Please try again.');
            navigate('/login');
        }
    };

    return (
        <>
            <div className='login-bg_Login'>
                <div className="login-container_Login">
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4">WELCOME!</h2>

                        <div className="form-group">
                            <label className="label_Login">
                                <FaUser className="icon_Login" /><b>Username</b>
                            </label>
                            <input
                                className='input_Login'
                                type="text"
                                name="userName"
                                placeholder="Enter your username"
                                onChange={handleChange}
                                value={form.userName} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="label_Login">
                                <FaLock className="icon_Login" /><b>Password</b>
                            </label>
                            <input
                                className='input_Login'
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                value={form.password} 
                                required
                            />
                        </div>

                        <div className="box">
                            <label className="label_Login">
                                <input type="checkbox" style={{ margin: "0 .4rem 0 0" }} />
                                <b>Remember me</b>
                            </label>
                        </div>

                        <div className="form-group">
                            <button className='button_Login' type="submit">Login</button>
                        </div>

                        <Link to="/signup">
                            <h4 className="fs-6"><b>Don't have an account? SignUp</b></h4>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
