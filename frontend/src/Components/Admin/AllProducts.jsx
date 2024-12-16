import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from 'axios';
import Navbar from "../LandingPages/Navbar";
import { useNavigate } from 'react-router-dom';

export default function AllProducts() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.post(
                    process.env.REACT_APP_BACKEND_URL + '/products/get-all-products',
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                const result = await response.data.products;
                console.log(result);

                setProducts(result);
            } catch (err) {
                console.log(err);
            }
        }

        if (token) {
            getProducts();
        } else {
            alert('Please login as Admin to view all products');
            navigate('/login');
        }
    }, [token, navigate]);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Sidebar />
            </div>
            <h1>All Products</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.no.</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">For</th>
                        <th scope="col">Listed By</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={product.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.pName}</td>
                                <td className="text-truncate" style={{ maxWidth: "150px" }}>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.type}</td>
                                {product.addedBy.userName === 'saksham1800t' ? <td>Admin</td> : <td>{product.addedBy.userName}</td>}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}