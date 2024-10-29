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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5724/products/update-product/${id}`, formData);
            console.log('Product updated:', response.data);
            alert('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Failed to update product');
        }
        navigate('/userProfile');
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
                                placeholder="Product name"
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
                                placeholder="Description"
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
                                placeholder="Price"
                                className='input_ProductAdd'
                                onChange={handleChange}
                                required
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