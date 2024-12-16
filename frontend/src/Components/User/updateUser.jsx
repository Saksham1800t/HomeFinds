import React, { useState, useEffect } from 'react';
import { FaUser, FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "../../CSS/Signup.css";
import bg from "../../Images/bg.avif";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [form, setForm] = useState({
        name: '',
        userName: '',
        email: '',
        contact: '',
        address: '',
        pincode: '',
        profileImage: null, // To handle profile image
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(process.env.REACT_APP_BACKEND_URL +  '/users/getUserData', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const user = response.data.user;
                setForm({
                    name: user.name,
                    userName: user.userName,
                    email: user.email,
                    contact: user.contact,
                    address: user.address,
                    pincode: user.pincode,
                    profileImage: user.profileImage || null, // Display existing image if available
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, profileImage: file }); // Handle image change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the form data for submission, including the profile image if selected
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('userName', form.userName);
        formData.append('email', form.email);
        formData.append('contact', form.contact);
        formData.append('address', form.address);
        formData.append('pincode', form.pincode);
        if (form.profileImage) {
            formData.append('profileImage', form.profileImage); // Append profile image
        }

        try {
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/users/updateUser', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data', // Ensure the correct content type for file upload
                },
            });
            console.log(response);
            alert('User Profile Updated Successfully');
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
                            <h2 className="mb-4 fs-5"><b><u>Update Your Profile</u></b></h2>

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

                            <div className="form-group_Signup">
                                <label className="label_Signup">
                                    <b>Profile Image:</b>
                                </label>
                                <input
                                    className="input_Signup"
                                    type="file"
                                    name="profileImage"
                                    accept="image/*"
                                    onChange={handleImageChange} // Handle image change
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

export default UpdateUser;
