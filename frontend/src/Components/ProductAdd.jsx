import React, { useState } from 'react';
// import { FaLock, FaUser } from "react-icons/fa";
import "../CSS/ProductAdd.css";
import cart from "../Images/cart.jpg";


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
        <div className='login-bg'>
            <div >
              <img src={cart} style={{width:"500px" , height:"500px ", marginLeft:"7rem", marginBottom:"10rem"}} ></img>
            </div>
            <div className="login-container  ">

                <form onSubmit={handleSubmit}>
                    <h4 className=" my-4"><b>You can add your product here...</b></h4>
                    <div className="form-group">
                        <label><b>Product name:</b></label>




                        <input type="product name" id="product name" placeholder="Product name" onChange={handleChange} required />
                        
                    </div>
                    <div className="form-group">
                        <label><b>Description:</b></label>




                        <input type="description" id="description" placeholder="Description" onChange={handleChange} required />
                        
                    </div>
                    <div className="form-group">
                        <label><b>Detail:</b></label>




                        <input type="detail" id="detail" placeholder="Detail" onChange={handleChange} required />
                        
                    </div>
                    <div className="form-group">
                        <label><b>Price:</b></label>




                        <input type="price" id="price" placeholder="Price" onChange={handleChange} required />
                        
                    </div>
                    <div className="form-group">
                        <label><b>Address:</b></label>




                        <input type="address" id="address" placeholder="Address" onChange={handleChange} required />
                        
                    </div>
                     
                     
                    

                     
                    

                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                    
                    

                </form>
            </div>
            </div>
        </>
    );

}

export default ProductAdd;