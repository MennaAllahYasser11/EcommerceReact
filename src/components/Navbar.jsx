import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { clearCart } from "../store/cartSlice";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userInfo = useSelector((state) => state.user.userInfo); // Get user info from Redux

  // Calculate total quantity in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchInput.trim()) {
      navigate(`/search?query=${searchInput}`);
      setSearchInput("");
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/"); // Redirect to homepage after logout
    dispatch(clearCart()); // Clear the cart on logout
  };

  return (
    <nav className=" navbar d-flex justify-content-between align-items-center p-3 bg-dark text-white">
      <div className="navbar-left d-flex align-items-center">
        <Link
          className="me-3 text-decoration-none text-white fw-bold fs-2"
          to="/"
        >
          STORE
        </Link>
      </div>
      <div className="navbar-right d-flex flex-wrap align-items-center gap-1" >
        <input
          className="p-2 me-1 border-solid search"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick} className="SearchStyle fw-bold">
          Search
        </button>

        {userInfo ? (
          <>
            <button
              className="mx-2 text-decoration-none SearchStyle fw-bold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className="mx-2 text-decoration-none SearchStyle fw-bold"
            to="/login"
          >
            Login
          </Link>
        )}

        <Link
          className="text-white fs-5 position-relative"
          to="/cart"
         
        >
          <FontAwesomeIcon icon={faCartShopping} />
          {totalQuantity > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-12px",
                right: "-10px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 8px",
                fontSize: "12px",
              }}
            >
              {totalQuantity}
            </span>
          )}
        </Link>

        

      </div>
    </nav>
  );
}




