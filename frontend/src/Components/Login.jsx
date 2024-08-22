import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import "../CSS/Login.css";


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
            {/* <div style={{backgroundImage:`url(${background})`,backgroundSize:"80vh"}}> */}
            <div className="login-container " >

                <form onSubmit={handleSubmit}>
                    <h2 className="mb-4">WELCOME!</h2>
                    <div className="form-group">
                        <label><FaUser className="icon"/><b>Username</b></label>




                        <input type="username" id="username" placeholder="username" onChange={handleChange} required />
                        
                    </div>
                    <div className="form-group">
                        <label><FaLock className="icon"/><b>Password</b></label>




                        <input type="password" id="password" placeholder="password" onChange={handleChange} required />
                        
                    </div>
                     
                    

                     <div className="box">

                        
                        
                        <label><input type="checkbox" />  <b>Remember me</b> </label>

                    </div> 
                    

                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                    <h4 className="fs-6"><b>Don't have an account? SignUp</b></h4>
                    

                </form>
            </div>
            {/* </div> */}
        </>
    );

}

export default Login;