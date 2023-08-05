import React, { useEffect, useState } from "react";
import { getProductId } from "../../ApiService/Api";
import { useParams ,Link } from "react-router-dom";
import "./ProductDetails.css";


function ProductDetails() {
  const Productbuy=()=>{
    window.confirm("the product is out of stock")

  }


  const { id } = useParams();
  const [ProductDetails, setProductdetails] = useState({});

  useEffect(() => {
    const fetchdetails = async () => {
      const value = await getProductId(id);
      setProductdetails(value);
      console.log(value);
    };
    fetchdetails();
  }, [id]);

  return (
    <div className="container" key={ProductDetails}>
      <img
        src={ProductDetails.image}
        alt="product_image"
        className="product-image"
      ></img>
      <div className="product-info">
        <h2 className="product-details">{ProductDetails.title}</h2>
        <p className="product-description">{ProductDetails.description}</p>
        <p className="product-price">{ProductDetails.price}</p>
        <button className="product-buynow" onClick={Productbuy}>Buy Now</button>
        <Link to='/'>
        <button className="product-home">Go back to home</button>
      
        </Link>
        </div>
       
    </div>
  );
}

export default ProductDetails;
