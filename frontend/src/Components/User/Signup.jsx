import React, { useState } from 'react';
import { FaLock, FaUser, FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "../../CSS/Signup.css";
import bg from "../../Images/bg.avif";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        userName: '',
        password: '',
        email: '',
        contact: '',
        address: '',
        pincode: '',
        profileImage: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0]; 
        setForm({ ...form, profileImage: file }); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('userName', form.userName);
        formData.append('password', form.password);
        formData.append('email', form.email);
        formData.append('contact', form.contact);
        formData.append('address', form.address);
        formData.append('pincode', form.pincode);
        if (form.profileImage) {
            formData.append('profileImage', form.profileImage); 
        }

        try {
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/users/signup', formData);
            alert('Register Successful on our website');
            navigate('/login');
            console.log(response);
            
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.error || 'Registration failed. Please try again.');
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
                <div className="login-container_Signup">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h2 className="mb-4 fs-5"><b><u>Signup for new account</u></b></h2>

                            <div className="form-group">
                                <label className="label_Signup">
                                    <FaUser className="icon_Signup" />
                                    <b>Name:</b>
                                </label>
                                <input
                                    className="input_Signup"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    onChange={handleChange}
                                    value={form.name}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="label_Signup">
                                    <FaUser className="icon_Signup" />
                                    <b>Username:</b>
                                </label>
                                <input
                                    className="input_Signup"
                                    type="text"
                                    name="userName"
                                    placeholder="Enter Username"
                                    onChange={handleChange}
                                    value={form.userName}
                                    required
                                />
                            </div>

                            <div className="form-group_Signup">
                                <label className="label_Signup">
                                    <FaLock className="icon_Signup" />
                                    <b>Password:</b>
                                </label>
                                <input
                                    className="input_Signup"
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    onChange={handleChange}
                                    value={form.password}
                                    required
                                />
                            </div>

                            <div className="form-group_Signup">
                                <label className="label_Signup">
                                    <MdEmail className="icon_Signup" />
                                    <b>Email:</b>
                                </label>
                                <input
                                    className="input_Signup"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                    value={form.email}
                                    required
                                />
                            </div>

                            <div className="form-group_Signup">
                                <label className="label_Signup">
                                    <IoMdContacts className="icon_Signup" />
                                    <b>Contact:</b>
                                </label>
                                <input
                                    className="input_Signup"
                                    type="text"
                                    name="contact"
                                    placeholder="Enter Mobile no."
                                    onChange={handleChange}
                                    value={form.contact}
                                    required
                                />
                            </div>

                            <div className="form-group_Signup">
                                <label className="label_Signup">
                                    <FaHome className="icon_Signup" />
                                    <b>Address:</b>
                                </label>
                                <input
                                    className="input_Signup"
                                    type="text"
                                    name="address"
                                    placeholder="Enter Address"
                                    onChange={handleChange}
                                    value={form.address}
                                    required
                                />
                            </div>

                            <div className="form-group_Signup">
                                <label className="label_Signup">
                                    <b>Pincode:</b>
                                </label>
                                <input
                                    className="input_Signup"
                                    type="text"
                                    name="pincode"
                                    placeholder="Enter Pincode"
                                    onChange={handleChange}
                                    value={form.pincode}
                                    required
                                />
                            </div>

                            <div className="form-group_Signup">
                                <label className="label_Signup">
                                    <b>Profile Image:</b>
                                </label>
                                <input
                                    className="input_Signup"
                                    type="file"
                                    name="profileImage"
                                    accept="image/*"
                                    onChange={handleImageChange} 
                                />
                            </div>

                            <div className="form-group_Signup mt-2">
                                <button className="button_Signup" type="submit">SignUp</button>
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

export default Signup;
