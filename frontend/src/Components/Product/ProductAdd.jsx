// import React, { useState } from 'react';
// import "../../CSS/ProductAdd.css";
// import cart from "../../Images/cart.jpg";


// function ProductAdd() {
//     const [formData, setFormData] = useState('');
//     const [productName, setProductName] = useState('');
//     const [description, setDescription] = useState('');

//     const [price, setPrice] = useState('');

//     // 
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     };

//     return (
//         <>
//             <div className='login-bg_Product_Add'>
//                 <div >
//                     <img src={cart} style={{ width: "500px", height: "500px ", marginLeft: "7rem", marginBottom: "10rem" }} ></img>
//                 </div>
//                 <div className="login-container_ProductAdd">
//                     <form onSubmit={handleSubmit}>
//                         <h4 className="my-4"><b>You can add your product here...</b></h4>
//                         <div className="form-group_ProductAdd">
//                             <label className="label_ProductAdd"><b>Product name:</b></label>
//                             <input type="product name" id="product name" placeholder="Product name" className='input_ProductAdd' onChange={handleChange} required />
//                         </div>
//                         <div className="form-group_ProductAdd">
//                             <label className="label_ProductAdd"><b>Description:</b></label>
//                             <input type="description" id="description" placeholder="Description" className='input_ProductAdd' onChange={handleChange} required />
//                         </div>
//                         <div className="form-group_ProductAdd">
//                             <label className="label_ProductAdd"><b>Category</b></label>
//                             <select class="form-select form-select-lg mb-3" aria-label="Large select example">
//                                 <option selected>Open this select menu</option>
//                                 <option value="1">One</option>
//                                 <option value="2">Two</option>
//                                 <option value="3">Three</option>
//                             </select>
//                             <input type="detail" id="detail" placeholder="Detail" className='input_ProductAdd' onChange={handleChange} required />
//                         </div>
//                         <div className="form-group_ProductAdd">
//                             <label className="label_ProductAdd"><b>Price:</b></label>
//                             <input type="price" id="price" placeholder="Price" className='input_ProductAdd' onChange={handleChange} required />
//                         </div>

//                         <div className="form-group_ProductAdd">
//                             <button className='Button_ProductAdd' type="submit">Submit</button>
//                         </div>



//                     </form>
//                 </div>
//             </div>
//         </>
//     );

// }

// export default ProductAdd;

import React, { useState } from 'react';
import "../../CSS/ProductAdd.css";
import cart from "../../Images/cart.jpg";

function ProductAdd() {
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        category: '',
        price: '',
        type: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.productName || !formData.description || !formData.category || !formData.price || !formData.type) {
            alert('Please fill in all the fields');
            return;
        }

        try {
            console.log(formData);
            const response = await axios.post('http://localhost:5724/products/adding', formData);
            console.log(response.data);
            
            
            if (response.ok) {
                alert('Product added successfully');
                setFormData({ productName: '', description: '', category: '', price: '', type: '' });
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
                                name="productName"
                                value={formData.productName}
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
                                <option value={null}>Select a category</option>
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
                                <option value={null}>Select a category</option>
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
