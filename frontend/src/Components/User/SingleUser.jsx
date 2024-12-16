import React, { useEffect, useState } from 'react';
import '../../CSS/UserProfile.css';
import userImage from '../../Images/user.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleUser = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [user, setUser] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (!token) {
            alert('Please login to view your profile');
            navigate('/login');
            return;
        }

        const getUser = async () => {
            try {
                const response = await axios.get(
                    process.env.REACT_APP_BACKEND_URL +  `/users/getSingleUserData/${id}`);
                setUser(response.data.user);
            } catch (err) {
                console.log(err);
            }
        }

        getUser();
    }, [token, navigate]);


    return (
        <>
            <div className="body_UserProfile">
                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-xl-12 col-md-12">
                                <div className="card user-card-full user-page">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white d-flex mt-2">
                                                <div>
                                                    <img src={user.userImageUrl ? user.userImageUrl : userImage} className="img-radius" alt="User-Profile-Image" />
                                                </div>
                                                <div className='yoho'>
                                                    <h6 className="f-w-600 name">{user.name}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 mt-4">
                                            <div className="card-block">
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-900"><b>Information</b></h6>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="m-b-10 f-w-600">Username</p>
                                                        <h6 className="text-muted f-w-400">{user.userName}</h6>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <p className="m-b-10 f-w-600">Email</p>
                                                        <h6 className="text-muted f-w-400">{user.email}</h6>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <p className="m-b-10 f-w-600">Phone</p>
                                                        <h6 className="text-muted f-w-400">{user.contact}</h6>
                                                    </div>
                                                </div>
                                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-900"><b>Location</b></h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Address</p>
                                                        <h6 className="text-muted f-w-400">{user.address}</h6>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <p className="m-b-10 f-w-600">Pincode</p>
                                                        <h6 className="text-muted f-w-400">{user.pincode}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default SingleUser;
