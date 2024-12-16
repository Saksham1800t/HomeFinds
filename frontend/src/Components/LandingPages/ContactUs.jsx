import React from "react";
import NavbarS from "./Navbar";

export default function ContactUs() {
    return (
        <>
        <NavbarS/>
            <div className="container mt-5 d-flex flex-column card"
                style={{ boxShadow: "rgba(0, 0, 0, 0.48) 5px 6px 10px 0px", border: ".1px solid black" }}>
                <h1 className="mb-4">Contact Us</h1>
                <p>
                    If you have any questions or need further assistance, feel free to reach
                    out to us. We are here to help you.
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Email</h5>
                        <p>homefinds123@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Phone</h5>
                        <p>+91 7088894066</p>
                    </div>
                    <div className="col-md-12">
                        <h5>Address</h5>
                        <p>Homefinds</p>
                        <p>HCST</p>
                        <p>Mathura, Uttar Pradesh</p>
                        <p>281122 , India</p>
                    </div>
                </div>
            </div>
        </>
    );
};
