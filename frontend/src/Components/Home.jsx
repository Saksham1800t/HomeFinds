import React from "react";
import newbg from "../Images/HomeBg.png";
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
                            FIND <b style={{ color: "darkorange" }}>ITEMS</b> FOR
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
                                BUY ITEMS
                            </button>
                            <button
                                type="button"
                                class="btn btn-lg rounded-pill mx-2 midbtn"
                            >
                                RENT ITEMS
                            </button>

                        </div>
                    </div>
                </div>

                <div className="mt">
                    <h4 class=" text-secondary ms-5 lol sizeText "> SERVICES WE </h4>
                    <div className="d-flex">
                        <h4 class="  ms-5 lol sizeText">
                            <b style={{ color: "#ffcd80" }}> PROVIDE.</b>
                        </h4>
                    </div>
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
                            className="card-img-top object-fit-contain p-2"
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text fs-5">
                                Medilo will help you out with your search to find the generic
                                medicine.
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
                            class="card-img-top object-fit-contain"
                            alt="..."
                        />
                        <div class="card-body">
                            <p class="card-text fs-5">
                                Medical map will help you out to locate the nearest medical
                                stores.
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
                            class="card-img-top object-fit-contain p-2"
                            alt="..."
                        />
                        <div class="card-body ">
                            <p class="card-text fs-5">
                                You can contact us regarding any feedback or regarding any
                                store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

