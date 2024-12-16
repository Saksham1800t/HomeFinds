import React from "react";
import NavbarS from "./Navbar";

const AboutUs = () => {
  return (
    <>
      <NavbarS />
      <div className="container my-5 d-flex flex-column">
        <h1 className="mb-4 text-center">About Us</h1>
        <p>

          Welcome to HOMEFINDS, where we redefine convenience and sustainability in one place.
          Whether you're looking to buy, rent, or donate, our platform connects communities with the products they need,
          when they need them.
        </p>
        <p>
          Our mission is simple: to offer a seamless, eco-friendly marketplace that makes it easy for people to find, share, and exchange products.
          We believe in giving people flexibility—whether it's owning something new,
          renting something you only need temporarily,
          or giving back by donating items that others can use.

        </p>
        <p>
          What We Do
          Buy: Discover a wide range of products, from electronics to home goods, all available for purchase in just a few clicks.
          Rent: Need something for a short period? With our flexible rental options,
          you can access the products you need without the commitment of ownership.
          Donate: Have items sitting around that someone else could benefit from?
          Our donation feature allows you to pass on items for free, promoting a cycle of giving and reducing waste.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
