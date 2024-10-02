import React from 'react';
import '../../CSS/BuyNow.css';
import profile from '../../Images/profile.jpg';
import radio from '../../Images/radio-removebg-preview.png';

function ProductInfo() {

  return (
    <div className='background_BuyNOw'>
      <div className="d-flex ">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                src={radio}
                alt="radio"
                className="img_BuyNow"
                style={{ margin: "1.2rem 0px 0px 6rem " }}

              ></img>
            </div>
            <div>
              <h2 className="text-dark" style={{ marginLeft: "3rem" }}><b><u>Radio</u></b></h2>
            </div>
            <div className="data_BuyNow">
              <h6><b>Brand</b>    : Carvaan</h6>
              <h6><b>Colour</b>   : Black</h6>
              <h6><b>Special Feature</b>  :  Portable</h6>
              <h6><b>Connectivity Technology</b>  :  Bluetooth</h6>
              <h6><b>Product Dimensions</b>  :  21L x 24W x 7.8H Centimeters</h6>
            </div>

            <div className="Des_BuyNow fs-7 text-dark ">
              <p><b>Saregama Carvaan Lite Hindi - Portable Music Player with 3000 Pre-Loaded Evergreen Songs, FM/BT/AUX</b></p>
            </div>
          </div>
        </div>
        <div className="Detail_BuyNow">


          <div className="price_BuyNow">
            <h5 className="text-danger fs-4"><b>Rs. 4,990</b></h5>
            <h6><br />Inclusive of all taxes
              EMI starts at ₹242. No Cost EMI available.</h6>
          </div>
          <hr />

          <div className="seller_BuyNow d-flex">
            <img src={profile} className="image_BuyNow" alt="profile" ></img>
            <div className="heading_BuyNow">
              <h3>Seller</h3>
              <h5>764583499</h5>
            </div>
          </div>



          <button className="button_BuyNow"><b>Rent Now</b></button>

        </div>
      </div>



    </div>
  )


}



export default ProductInfo;

