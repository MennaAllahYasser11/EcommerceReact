
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!userInfo) {
      Swal.fire({
        title: "Login Required",
        text: "You must be logged in to add products to the cart.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
    dispatch(addToCart(product));
    Swal.fire({
      title: "Success!",
      text: "The product has been added to your cart.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  if (!product) {
    return (
      <div className="d-flex justify-content-center mt-2">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.images ? product.images[0] : "null"}
            className="img-fluid"
            alt={product.title}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <p>Discount: {product.discountPercentage}%</p>
          <p>
            Rating:
            <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107", marginLeft: "5px" }} />
            {product.rating}
          </p>
          <button className="BtnStyle" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



