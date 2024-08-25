import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "../CSS/Signup.css";


function Login() {
    const [formData, setFormData] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
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
                    <h2 className="mb-4 fs-5"><b><u>Signup for new account</u></b></h2>
                    <div className="form-group">
                        <label><FaUser className="icon" /><b>UserName:</b></label>




                        <input type="username" id="username" placeholder="username" onChange={handleChange} required />

                    </div>
                    <div className="form-group">
                        <label><FaLock className="icon" /><b>Password</b></label>




                        <input type="password" id="password" placeholder="password" onChange={handleChange} required />

                    </div>



                    <div className="form-group">
                        <label><MdEmail className="icon" /><b>Email:</b></label>




                        <input type="email" id="password" placeholder="email" onChange={handleChange} required />

                    </div>
                    <div className="form-group">
                        <label><IoMdContacts className="icon" /><b>Contacts:</b></label>




                        <input type="contacts" id="contacts" placeholder="contacts" onChange={handleChange} required />

                    </div>




                    <div className="form-group mt-2">
                        <button type="submit">SignIn</button>
                    </div>
                    <h4 className="fs-6"><b>Already have an account? Login</b></h4>


                </form>
            </div>
            {/* </div> */}
        </>
    );

}

export default Login;