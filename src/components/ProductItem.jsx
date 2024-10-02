
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice'; 
import Swal from 'sweetalert2';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo); // Get user info from the Redux store

  const handleAddToCart = () => {
    if (!userInfo) {
      // If user is not logged in, show alert
      Swal.fire({
        title: 'Login Required',
        text: 'Please log in to add products to your cart.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    } else {
      // If user is logged in, dispatch the action and show success alert
      dispatch(addToCart(product));
      Swal.fire({
        title: 'Product Added!',
        text: `${product.title} has been added to your cart.`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm ">
        <img
          src={product.images ? product.images[0] : "Product Img"}
          className="card-img-top product-img"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title ">{product.title}</h5>
          <p className="card-text ">${product.price}</p>
          <p className="card-text ">{product.description}</p>
          <h5 >Discount: {product.discountPercentage}%</h5>
          <p >
            Rating:
            <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107", marginLeft: "5px" }} />
            {product.rating}
          
          </p>
          <Link to={`/product/${product.id}`} className="shadow text-center text-decoration-none text-white p-2 mt-3 rounded-1 mb-2 m-2 navcolor fw-bold">
            View Details
          </Link>
          <button className="BtnStyle fw-bold " onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

