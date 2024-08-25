import React from 'react';
import '../CSS/BuyNow.css';
import radio from '../Images/radio.jpg';

function ProductInfo(){
   
       return(
        <div className="d-flex">
        <div className="container bg-white">
        <div className="row">
          <div className="col-md-8">
            <img
              src={radio}
              alt="radio"
              className="img-fluid"
              style={{ margin: "1.2rem 0px 0px 6rem " }}
              
            ></img>
            </div>
            <div>
            <h2 className="text-dark"><b><u>Radio</u></b></h2>
            </div>
            <div className="data">
              <h6><b>Brand</b>    : Carvaan</h6>
              <h6><b>Colour</b>   : Black</h6>
              <h6><b>Special Feature</b>  :  Portable</h6>
              <h6><b>Connectivity Technology</b>  :  Bluetooth</h6>
              <h6><b>Product Dimensions</b>  :  21L x 24W x 7.8H Centimeters</h6>
            </div>
            <div className="Des fs-7 text-dark">
            <p><b>Saregama Carvaan Lite Hindi - Portable Music Player with 3000 Pre-Loaded Evergreen Songs, FM/BT/AUX</b></p>
            </div>
            </div>
          </div>
                <div className="Detail ">
                   
                    
                    <div className="price">
                    <h5 className="text-danger">Rs. 4,990</h5>
                    <h6><br/>Inclusive of all taxes
                    EMI starts at ₹242. No Cost EMI available.</h6>
                    </div>
                    <button><b>BuyNow</b></button>
                </div>
            
        
        
        </div>
       )
       

}



export default ProductInfo;

