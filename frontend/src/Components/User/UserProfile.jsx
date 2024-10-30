import React, { useEffect, useState } from 'react';
import '../../CSS/UserProfile.css';
import userImage from '../../Images/user.jpg';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [user, setUser] = useState('');
    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (!token) {
            alert('Please login to view your profile');
            navigate('/login');
            return;
        }

        const getUser = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:5724/users/getUserData',
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setUser(response.data.user);
                console.log(response.data.user);
                const result = await axios.post('http://localhost:5724/products/get-user-products', {}, { headers: { Authorization: `Bearer ${token}` } });
                console.log(result.data.product);
                setProduct(result.data.product);
            } catch (err) {
                console.log(err);
            }
        }

        getUser();
    }, [token, navigate]);

    const handleDeleteProfile = async () => {
        try {
            await axios.post('http://localhost:5724/users/deleteUser', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("User profile deleted successfully");
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.error("Error deleting user profile:", error);
            alert("Failed to delete user profile");
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.post(`http://localhost:5724/products/delete-product/${productId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setProduct(product.filter((item) => item._id !== productId));
            alert("Product deleted successfully");
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Failed to delete product");
        }
    };

    const handleUpdateProduct = (id) => {
        navigate(`/updateProduct/${id}`);
    }

    return (
        <>
            <div className="body_UserProfile">
                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-xl-12 col-md-0">
                                <div className="card user-card-full user-page">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white d-flex mt-2">
                                                <div>
                                                    <img src={userImage} className="img-radius" alt="User-Profile-Image" />
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
                                                <div className="mt-4">
                                                    <Link to='/updateUser'><button className="btn btn-primary col-md-1">Edit</button></Link>
                                                    <button className="btn btn-danger mx-4 col-md-1" onClick={handleDeleteProfile}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-4">
                    <h1 className="text-left">Your Products :</h1>
                    <div className="mt-4" style={{ marginRight: "1rem" }}>
                        {product.map((product) => {
                            return (
                                <div className="col-md-9 mt-1" style={{ boxShadow: "10px 10px 20px 0 rgba(0, 0, 0, 1);" }}>
                                    <div className="card container">
                                        <div className="card-body">
                                            <h5 className="card-title fs-4">{product.pName}</h5>
                                            <p className="card-text text-truncate" style={{maxWidth: "200px"}}>{product.description}</p>
                                            <p className="card-text fs-6"><b>For:</b> {product.type}</p>
                                            <p className="card-text fs-6"><b>Price:</b> &#8377;{product.price}</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary mt-1 mb-2 mx-3 col-md-1" onClick={() => handleUpdateProduct(product._id)}>Edit</button>
                                            <button className="btn btn-danger mt-1 mb-2 mx-2" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </>
    );
};

export default UserProfile;
