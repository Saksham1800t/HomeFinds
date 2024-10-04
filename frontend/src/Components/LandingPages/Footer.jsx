import React from "react";

export default function Footer() {
    return (
        <>
            <div>
                <footer
                    class="text-center text-lg-start text-white"
                    style={{backgroundColor: "rgb(223, 177, 93)"}}
                >
                    <div class="p-4 pb-0">
                            <div class="row">
                                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold fs-1">
                                        HOMEFINDS
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>

                                <hr class="w-100 clearfix d-md-none" />

                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold">Services</h6>
                                    <p>
                                        <a class="text-white">MDBootstrap</a>
                                    </p>
                                    <p>
                                        <a class="text-white">MDWordPress</a>
                                    </p>
                                    <p>
                                        <a class="text-white">BrandFlow</a>
                                    </p>
                                    <p>
                                        <a class="text-white">Bootstrap Angular</a>
                                    </p>
                                </div>

                                <hr class="w-100 clearfix d-md-none" />

                                <hr class="w-100 clearfix d-md-none" />

                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i class="fas fa-home mr-3"></i> HCST, Farah, Mathura</p>
                                    <p><i class="fas fa-envelope mr-3"></i> homefinds123@gmail.com</p>
                                    <p><i class="fas fa-phone mr-3"></i> + 91 7088894066</p>
                                    <p><i class="fas fa-print mr-3"></i> + 91 7088894066</p>
                                </div>

                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                    <a
                                        class="btn btn-dark btn-floating m-1"
                                        style={{backgroundColor: "#3b5998"}}
                                        href="#!"
                                        role="button"
                                    ><i class="fab fa-facebook-f"></i
                                    ></a>

                                    <a
                                        class="btn btn-dark btn-floating m-1"
                                        style={{backgroundColor: "#55acee"}}
                                        href="#!"
                                        role="button"
                                    ><i class="fab fa-twitter"></i
                                    ></a>

                                    <a
                                        class="btn btn-dark btn-floating m-1"
                                        style={{backgroundColor: "#dd4b39"}}
                                        href="#!"
                                        role="button"
                                    ><i class="fab fa-google"></i
                                    ></a>

                                    <a
                                        class="btn btn-dark btn-floating m-1"
                                        style={{backgroundColor: "#ac2bac"}}
                                        href="#!"
                                        role="button"
                                    ><i class="fab fa-instagram"></i
                                    ></a>

                                    <a
                                        class="btn btn-dark btn-floating m-1"
                                        style={{backgroundColor: "#0082ca"}}
                                        href="#!"
                                        role="button"
                                    ><i class="fab fa-linkedin-in"></i
                                    ></a>
                                    <a
                                        class="btn btn-dark btn-floating m-1"
                                        style={{backgroundColor: "#333333"}}
                                        href="#!"
                                        role="button"
                                    ><i class="fab fa-github"></i
                                    ></a>
                                </div>
                            </div>
                    </div>

                    <div
                        class="text-center p-3"
                        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                    >
                        © 2024 Copyright: HOMEFINDS
                    </div>
                </footer>
            </div>
        </>

    );
}