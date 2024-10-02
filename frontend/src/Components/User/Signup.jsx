import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "../../CSS/Signup.css";
import bg from "../../Images/bg.avif";
import { Link } from 'react-router-dom';
import axios from 'axios';


function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5724/users/signup', { userName, password, email, contact});
            console.log(response.data); 
        } catch (err) {
            console.log(err); 
        }
    };

    return (
        <>
            <div style={{
                justifyContent: "center",
                maxHeight: "100vh",
                padding: "30px 40px",
                backgroundImage: `url(${bg})`,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%"
            }}>
                <div className="login-container_Signup " >
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h2 className="mb-4 fs-5"><b><u>Signup for new account</u></b></h2>
                            <div className="form-group">
                                <label className="label_Signup"><FaUser className="icon_Signup" /><b>UserName:</b></label>
                                <input className="input_Signup" type="username" id="username" placeholder="username" onChange={(e) => setUserName(e.target.value)} required />
                            </div>
                            <div className="form-group_Signup">
                                <label className="label_Signup"><FaLock className="icon_Signup" /><b>Password</b></label>
                                <input className="input_Signup" type="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="form-group_Signup">
                                <label className="label_Signup"><MdEmail className="icon_Signup" /><b>Email:</b></label>
                                <input className="input_Signup" type="email" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group_Signup">
                                <label className="label_Signup"><IoMdContacts className="icon_Signup" /><b>Contact:</b></label>
                                <input className="input_Signup" type="contacts" id="contacts" placeholder="Enter Mobile no." onChange={(e) => setContact(e.target.value)} required />
                            </div>
                            <div className="form-group_Signup mt-2">
                                {/* <Link to="/"> */}
                                <button className="button_Signup" type="submit">SignUp</button>
                                {/* </Link> */}
                            </div>
                        </form>
                        <Link to="/login">
                            <h4 className="fs-6"><b>Already have an account? Login</b></h4>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Login;