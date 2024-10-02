
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemoveFromCart = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(item));
        Swal.fire(
          'Deleted!',
          'The Product deleted successfully.',
          'success'
        );
      }
    });
  };

  return (
    <div className="cart d-flex flex-column align-items-center justify-content-center mt-5">
      <h3 className="fw-bold">Cart</h3>
      {cartItems.length === 0 ? (
        <div className="empty-cart text-center">
          <FontAwesomeIcon icon={faShoppingCart} size="6x" />
          <h3>Your cart is empty.</h3>
          <p className="fs-4">There are no products yet!</p>
          <button className="BtnStyle mt-3" onClick={() => navigate("/")}>
            Keep Shopping
          </button>
        </div>
      ) : (
        <ul className="list-group h-auto">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <img src={item.images[0]} alt={item.title} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
              <div className="flex-grow-1 text-center">
                <h5>{item.title}</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="BtnStyle btn-sm" onClick={() => handleDecrement(item)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="BtnStyle btn-sm" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <p className="mt-2">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;


