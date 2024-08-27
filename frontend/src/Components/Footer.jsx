import React from "react";
import '../CSS/Footer.css';
import image from '../Images/logo.png';

export default function Footer() {
    return (
        <html>

            <body>
                <footer class="footer">
                    <div class="waves">
                        <div class="wave" id="wave1"></div>
                        <div class="wave" id="wave2"></div>
                        <div class="wave" id="wave3"></div>
                        <div class="wave" id="wave4"></div>
                    </div>
                    <div className="d-flex">
                        <div>
                            <img src={image} alt="" style={{marginRight: "21rem", height:"25rem"}}/>
                        </div>
                        <div >
                            <ul class="social-icon" style={{marginRight:"10rem"}}>
                                <li class="social-icon__item"><a class="social-icon__link" href="#">
                                    <i class="fa-brands fa-square-facebook"></i>
                                </a></li>
                                <li class="social-icon__item"><a class="social-icon__link" href="#">
                                    <i class="fa-brands fa-square-x-twitter"></i>
                                </a></li>
                                <li class="social-icon__item"><a class="social-icon__link" href="#">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a></li>
                                <li class="social-icon__item"><a class="social-icon__link" href="#">
                                    <i class="fa-brands fa-square-instagram"></i>
                                </a></li>
                            </ul>
                            <ul class="menu" style={{marginRight:"10rem"}}>
                                <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                                <li class="menu__item"><a class="menu__link" href="#">About</a></li>
                                <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
                                <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
                                <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

                            </ul>
                            <p style={{marginLeft: "6rem"}}>&copy;2024 HOMEFINDS | All Rights Reserved</p>
                        </div>
                    </div>
                </footer>
                
            </body>

        </html>
    );
}