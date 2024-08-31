import React, { useState } from 'react';
// import { FaLock, FaUser } from "react-icons/fa";
import "../../CSS/ProductAdd.css";
import cart from "../../Images/cart.jpg";


function ProductAdd() {
    const [formData, setFormData] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    // const [, setPrice] = useState('');
    // const [error, setError] = useState('');
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // if (!userName || !password) {
        //     setError('Please fill in both fields');
        //     return;
        // }
    };

    return (
        <>
            <div className='login-bg_Product_Add'>
                <div >
                    <img src={cart} style={{ width: "500px", height: "500px ", marginLeft: "7rem", marginBottom: "10rem" }} ></img>
                </div>
                <div className="login-container_ProductAdd">
                    <form onSubmit={handleSubmit}>
                        <h4 className="my-4"><b>You can add your product here...</b></h4>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Product name:</b></label>
                            <input type="product name" id="product name" placeholder="Product name" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Description:</b></label>
                            <input type="description" id="description" placeholder="Description" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Detail:</b></label>
                            <input type="detail" id="detail" placeholder="Detail"  className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Price:</b></label>
                            <input type="price" id="price" placeholder="Price" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Address:</b></label>
                            <input type="address" id="address" placeholder="Address" className='input_ProductAdd' onChange={handleChange} required />
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