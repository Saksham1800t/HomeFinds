import React, { useState } from 'react';
import "../../CSS/ProductAdd.css";
import cart from "../../Images/cart.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductAdd() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        pName: '',
        description: '',
        category: '',
        price: '',
        type: '',
    });

    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.pName || !formData.description || !formData.category || !formData.price || !formData.type) {
            alert('Please fill in all the fields');
            return;
        }

        try {
            console.log(formData);
            const response = await axios.post('http://localhost:5724/products/add-product', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            if (response.status === 201) {
                alert('Product added successfully');
                setFormData({ pName: '', description: '', category: '', price: '', type: '' });
                navigate('/');
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while adding the product');
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
                        <h4 className="my-4"><b>You can add your product here...</b></h4>

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
                                placeholder="Category"
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
                                <option value="">Select a category</option>
                                <option value="sell">Sell</option>
                                <option value="rent">Rent</option>
                                <option value="donate">Donate</option>
                            </select>
                        </div>

                        <div className="form-group_ProductAdd">
                            <button className='Button_ProductAdd' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProductAdd;
