import React, { useState, useEffect } from 'react';
import '../../CSS/BuyNow.css';
import profile from '../../Images/user.jpg';
import noImage from '../../Images/noImage.jpeg';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarS from '../LandingPages/Navbar';

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [seller, setSeller] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_BACKEND_URL + `/products/getproduct/${id}`);
        setProduct(response.data.product);

        if (response.data.product && response.data.product.addedBy) {
          setSeller(response.data.product.addedBy);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);


  return (
    <>
    <NavbarS />
      <div className='background_BuyNOw'>
        <div className="d-flex">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <img
                  src={product.imageUrl ? product.imageUrl : noImage}
                  alt="radio"
                  className="img_BuyNow"
                  style={{ margin: "1.2rem 0px 0px 6rem " }}
                />
              </div>

              <div className="Des_BuyNow">
                <p className='fs-3'><b>{product.pName}</b></p>
              </div>

              <div className="data_BuyNow mb-3">
                <h6><b>About the product</b>:</h6>
                <p className="data_BuyNow_card-text">{product.description}</p>
              </div>
            </div>
          </div>

          <div className="Detail_BuyNow">
            <div className="price_BuyNow">
              {product.type === 'sell' ?
                <>
                  <h5 className="text-danger fs-4"><b>Rs. {product.price}</b></h5>
                  <h6><br />Inclusive of all taxes. No Cost EMI available.</h6>
                </> : product.type === 'rent' ?
                  <>
                    <h5 className="text-danger fs-4"><b>Rs. {product.price}/month</b></h5>
                    <h6><br />Inclusive of all taxes. EMI starts at ₹242</h6>
                  </> :
                  <>
                    <h5 className="text-danger fs-1"><b>FREE !!!</b></h5>
                  </>
              }
            </div>
            <hr />

            <div className="seller_BuyNow d-flex">
              <img src={seller.userImageUrl ? seller.userImageUrl : profile} className="image_BuyNow" alt="profile" />
              <div className="heading_BuyNow">
                <h3>Seller</h3>
                <p><b>Name:</b> {seller.userName}</p>
                <p><b>Contact:</b> {seller.contact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;