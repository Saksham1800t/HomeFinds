import React, { useEffect, useState } from "react";
import "../../CSS/Buy&RentPage&Donate.css";
import noImage from "../../Images/noImage.jpeg";
import { useNavigate } from "react-router-dom";
import NavbarS from "../LandingPages/Navbar";
import axios from 'axios';

export default function BuyPage() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const fetchBuyProducts = async () => {
            try {
                const response = await axios.post( process.env.REACT_APP_BACKEND_URL + '/products/get-all-products', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (!token) {
            navigate('/login');
            alert("You need to login first!");
        } else {
            fetchBuyProducts();
        }
    }, [token, navigate]);

    const handleBuyNow = (id) => {
        navigate(`/buynow/${id}`);
    };

    const searchedProduct = products
        .filter((card) => card.pName
            .toLowerCase()
            .split(" ")
            .some((word) => word.startsWith(search.toLowerCase())))
        .filter((card) => card.type === "sell")
        .filter((card) => selectedCategory ? card.category === selectedCategory : true);

    return (
        <>
        <NavbarS/>
            <div>
                <div className="d-flex" style={{ marginLeft: "1rem" }}>
                    <div className="search_BuyRent">
                        <input className="search_input_BuyRent fs-5" type="text" placeholder="Search for buy products here..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        <i className="search_icon"><i className="fa fa-search"></i></i>
                    </div>
                    <div class="dropdown">
                        <button style={{ height: "54px", borderRadius: "30px", width: "7rem", backgroundColor: "rgb(223, 177, 93)", color: "black" }} class="btn btn-secondary dropdown-toggle mt-3 fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter
                        </button>
                        <ul class="dropdown-menu" style={{ borderRadius: "10px" }}>
                            <li class="dropdown-item" onClick={() => setSelectedCategory("")}>All</li>
                            <li class="dropdown-item" onClick={() => setSelectedCategory("electronics")}>Electronics</li>
                            <li class="dropdown-item" onClick={() => setSelectedCategory("grocery")}>Grocery</li>
                            <li class="dropdown-item" onClick={() => setSelectedCategory("clothing")}>Clothing</li>
                            <li class="dropdown-item" onClick={() => setSelectedCategory("toys")}>Toys</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card-grid_BuyRent">
                {searchedProduct.length > 0 ? (
                    searchedProduct.map((card) => (
                        <div key={card._id} className="card-style_BuyRent">
                            <img src={card.imageUrl ? card.imageUrl : noImage} className="image-style_BuyRent" alt={card.pName} />
                            <div className="card-content_BuyRent" style={{ marginBottom: "1rem" }}>
                                <h3>{card.pName}</h3>
                                <p className="card-text text-truncate">{card.description}</p>
                                <p>Price: ₹ {card.price}</p>
                            </div>
                            <div className="card-bottom_BuyRent">
                                <button className="btn" style={{ backgroundColor: "rgb(223, 177, 93)" }} onClick={() => handleBuyNow(card._id)}>BUY NOW</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>No Products Found</h1>
                )}
            </div>
        </>
    );
}
