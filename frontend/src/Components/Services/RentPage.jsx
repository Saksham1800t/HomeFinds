import React, { useEffect, useState } from "react";
import "../../CSS/Buy&RentPage&Donate.css";
import noImage from "../../Images/noImage.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function RentPage() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchBuyProducts = async () => {
            try {
                const response = await axios.post('http://localhost:5724/products/get-all-products', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data.products);
                setCards(response.data.products);
            } catch (error) {
                console.log(error);
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

    return (
        <>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="search_BuyRent">
                        <input className="search_input_BuyRent" type="text" placeholder="Search products here..." />
                        <a href="#" className="search_icon"><i className="fa fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-grid_BuyRent">
                {cards.map((card) => (
                    card.type === "rent" ? (
                        <div key={card._id} className="card-style_BuyRent">
                            <img src={noImage} className="image-style_BuyRent" alt={card.image} />
                            <div className="card-content_BuyRent">
                                <h3>{card.pName}</h3>
                                <p className="card-text text-truncate">{card.description}</p>
                                <p>Price: {card.price}/month</p>
                            </div>
                            <div className="card-bottom_BuyRent">
                                    <button className="btn" style={{ backgroundColor: "rgb(223, 177, 93)" }} onClick={() => handleBuyNow(card._id)}>Rent NOW</button>
                            </div>
                        </div>
                    ) : null
                ))}
            </div>
        </>
    );
}
