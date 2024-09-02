import React from "react";
import "../CSS/Buy&RentPage.css";
import noImage from "../Images/noImage.jpeg";

export default function BuyPage() {
    const cards = [
        {
            id: 1,
            image: "image1.jpg",
            title: "Card 1",
            description: "This is the description for Card 1."
        },
        {
            id: 2,
            image: "image2.jpg",
            title: "Card 2",
            description: "This is the description for Card 2."
        },
        {
            id: 3,
            image: "image3.jpg",
            title: "Card 3",
            description: "This is the description for Card 3."
        },
        {
            id: 4,
            image: "image4.jpg",
            title: "Card 4",
            description: "This is the description for Card 4."
        },
        {
            id: 5,
            image: "image5.jpg",
            title: "Card 5",
            description: "This is the description for Card 5."
        }
    ];


    return (
        <>
            <div class="container h-100">
                <div class="d-flex justify-content-center h-100">
                    <div class="search_BuyRent">
                        <input class="search_input_BuyRent" type="text" name="" placeholder="Search products here..." />
                        <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div class="card-grid_BuyRent">
                {cards.map((card) => (
                    <div class="card-style_BuyRent">
                        <img src={noImage} class="image-style_BuyRent" alt={card.image} />
                        <div class="card-content_BuyRent">
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                        <div class="card-bottom_BuyRent">
                            <button class="btn" style={{ backgroundColor: "rgb(223, 177, 93)" }}>BUY NOW</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}