import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "../../CSS/Signup.css";
import bg from "../../Images/bg.avif";


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

                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4 fs-5"><b><u>Signup for new account</u></b></h2>
                        <div className="form-group">
                            <label className="label_Signup"><FaUser className="icon_Signup" /><b>UserName:</b></label>




                            <input className="input_Signup" type="username" id="username" placeholder="username" onChange={handleChange} required />

                        </div>
                        <div className="form-group_Signup">
                            <label className="label_Signup"><FaLock className="icon_Signup" /><b>Password</b></label>




                            <input className="input_Signup" type="password" id="password" placeholder="password" onChange={handleChange} required />

                        </div>



                        <div className="form-group_Signup">
                            <label className="label_Signup"><MdEmail className="icon_Signup" /><b>Email:</b></label>




                            <input className="input_Signup" type="email" id="password" placeholder="email" onChange={handleChange} required />

                        </div>
                        <div className="form-group_Signup">
                            <label className="label_Signup"><IoMdContacts className="icon_Signup" /><b>Contacts:</b></label>




                            <input className="input_Signup" type="contacts" id="contacts" placeholder="contacts" onChange={handleChange} required />

                        </div>




                        <div className="form-group_Signup mt-2">
                            <button className="button_Signup" type="submit">SignIn</button>
                        </div>
                        <h4 className="fs-6"><b>Already have an account? Login</b></h4>


                    </form>
                </div>
            </div>
        </>
    );

}

export default Login;