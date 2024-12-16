import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../CSS/ProductAdd.css";
import cart from "../../Images/cart.jpg";
import axios from 'axios';

export default function UpdateProducts() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        pName: '',
        description: '',
        category: '',
        price: '',
        type: '',
        image: null, 
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.post(`http://localhost:5724/products/getproduct/${id}`);
                console.log('Product:', response.data.product);
                setFormData(response.data.product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "type" && value === "donate") {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
                price: "0", 
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            image: file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.pName || !formData.description || !formData.category || !formData.price || !formData.type) {
            alert('Please fill in all the fields');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('pName', formData.pName);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('type', formData.type);

        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        try {
            const response = await axios.post(`http://localhost:5724/products/update-product/${id}`, formDataToSend, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log('Product updated:', response.data);
            alert('Product updated successfully');
            navigate('/userProfile'); // Redirect after success
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Failed to update product');
        }
    };

    return (
        <>
            <div className='login-bg_Product_Add'>
                <div>
                    <img src={cart} style={{ width: "500px", height: "500px ", marginLeft: "7rem", marginBottom: "10rem" }} alt="Cart" />
                </div>
                <div className="login-container_ProductAdd">
                    <form onSubmit={handleSubmit}>
                        <h4 className="my-4"><b>Update your product here...</b></h4>

                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Product name:</b></label>
                            <input
                                type="text"
                                name="pName"
                                value={formData.pName}
                                placeholder="Enter Product name"
                                className='input_ProductAdd'
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Description:</b></label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                placeholder="Enter Description"
                                className='input_ProductAdd'
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Category</b></label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className='input_ProductAdd_dropdown'
                            >
                                <option value="">Select a category</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="grocery">Grocery</option>
                            </select>
                        </div>

                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Price (in &#8377;):</b></label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                placeholder="Enter Price"
                                className='input_ProductAdd'
                                onChange={handleChange}
                                required
                                disabled={formData.type === "donate"}
                            />
                        </div>

                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>For:</b></label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                required
                                className='input_ProductAdd_dropdown'
                            >
                                <option value="">Select a type</option>
                                <option value="sell">Sell</option>
                                <option value="rent">Rent</option>
                                <option value="donate">Donate</option>
                            </select>
                        </div>

                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd" htmlFor="customFile"><b>Product Image :</b></label>
                            <input
                                type="file"
                                accept='image/*'
                                name='image'
                                onChange={handleImageChange}
                                className="form-control"
                                id="customFile"
                            />
                        </div>

                        <div className="form-group_ProductAdd">
                            <button className='Button_ProductAdd' type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
