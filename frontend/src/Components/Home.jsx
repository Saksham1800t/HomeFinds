import React from "react";
import newbg from "../Images/HomeBg.png";
import buy from "../Images/srBuy.jpeg";
import sell from "../Images/srSell.jpeg";
import rent from "../Images/srRent.jpeg";
import { useTypewriter } from "react-simple-typewriter";
import "../CSS/Home.css"

export default function Home() {

    const [text2] = useTypewriter({
        words: ["Buy", "Rent", "Sell"],
        loop: {},
        delaySpeed: 850,
    });

    return (
        <>
            <div className="BG">
                <div>
                    <img class="container-fluid chochomelon" src={newbg} alt="" />
                    <div
                        className="position-absolute top-50 start-50 translate-middle w-100"
                        style={{  marginLeft: "70px" }}
                    >
                        <h1 className="text-secondary text-dark midtext mb-5" ><b>HOMEFINDS</b></h1>
                        <h1
                            className="text-secondary text-dark midtext"
                        >
                            FIND <b style={{ color: "rgb(223, 177, 93)" }}>ITEMS</b> FOR
                        </h1>

                        <h1
                            className="text-secondary text-dark midtext"
                        >
                            #{text2}
                        </h1>

                        <div className="d-flex flex-row justify-content-centre float-end midb ">
                            <button
                                type="button"
                                class="btn  btn-lg rounded-pill mx-2 midbtn"
                            >
                               FOR BUY 
                            </button>
                            <button
                                type="button"
                                class="btn btn-lg rounded-pill mx-2 midbtn"
                            >
                                FOR RENT
                            </button>

                        </div>
                    </div>
                </div>

                <div className="mt">
                    <h4 class=" text-secondary ms-5 lol sizeText "> SERVICES WE  <b style={{ color: "rgb(223, 177, 93)" }}> PROVIDE.</b></h4>
                   
                       ``
                </div>

                <div className="d-flex justify-content-lg-around mtcards">
                    <div
                        className="card w-25"
                        style={{
                            backgroundColor: "white",
                            height: "500px",
                            paddingTop: "30px",
                        }}
                    >
                        <img
                            className="card-img-top object-fit-contain rounded-4 p-2"
                            alt="..."
                            src={buy}
                        />
                        <div className="card-body">
                            <p className="card-text fs-5">
                                This Section Helps you to buy items from our trusted Sellers.
                            </p>
                        </div>
                    </div>

                    <div
                        className="card w-25 p"
                        style={{
                            backgroundColor: "white",
                            height: "500px",
                            paddingTop: "30px",
                        }}
                    >
                        <img
                            class="card-img-top object-fit-contain rounded-4 p-2"
                            alt="..."
                            src={rent}
                        />
                        <div class="card-body">
                            <p class="card-text fs-5">
                                Rent items from our trusted sellers and get the best deals.
                            </p>
                        </div>
                    </div>

                    <div
                        class="card w-25  "
                        style={{
                            backgroundColor: "white",
                            height: "500px",
                            paddingTop: "30px",
                        }}
                    >
                        <img
                            class="card-img-top object-fit-contain rounded-4 p-2"
                            alt="..."
                            src={sell}
                        />
                        <div class="card-body ">
                            <p class="card-text fs-5">
                                Sell your items to our trusted buyers and get the best deals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

