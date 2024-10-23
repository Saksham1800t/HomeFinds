import React, { useState, useEffect } from 'react';
import { FaUser, FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "../../CSS/Signup.css";
import bg from "../../Images/bg.avif";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function updateUser() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [form, setForm] = useState({
        name: '',
        userName: '',
        email: '',
        contact: '',
        address: '',
        pincode: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5724/users/getUserData', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const user = response.data.user;
                setForm({
                    name: user.name,
                    userName: user.userName,
                    email: user.email,
                    contact: user.contact,
                    address: user.address,
                    pincode: user.pincode
                });
            } catch (err) {
                console.log(err);
                alert('Failed to fetch user data');
            }
        };
        if (token) {
            fetchData();
        } else {
            alert('Please login to continue');
            navigate('/login');
        }
    }, [token, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5724/users/updateUser', {
                name: form.name,
                userName: form.userName,
                email: form.email,
                contact: form.contact,
                address: form.address,
                pincode: form.pincode
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            alert('User Profile Updated successfully Successful on our website');
            navigate('/userprofile');
        } catch (err) {
            console.log(err);
            alert('Updating Failed');
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

                            <div className="form-group_Signup mt-2">
                                    <button className="button_Signup" type="submit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default updateUser;
