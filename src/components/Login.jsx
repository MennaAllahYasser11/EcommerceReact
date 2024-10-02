import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { signIn, signUp } from '../firebase';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    // Validate email
    if (!validateEmail(email)) {
      Swal.fire("Invalid email format");
      return;
    }

    if (password.length < 6) {
      Swal.fire("Password must be at least 6 characters long");
      return;
    }

    if (isSignIn) {
      const user = await signIn(email, password);
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );

        // Load cart from local storage
        const savedCart = JSON.parse(localStorage.getItem("cartItems"));
        if (savedCart) {
          savedCart.forEach((item) => dispatch(addToCart(item)));
        }

        resetForm(); // Reset the form on successful login
        navigate("/"); // Redirect to home page
      } else {
        Swal.fire("Login failed. Please check your credentials.");
      }
    } else {
      if (password !== confirmPassword) {
        Swal.fire("Passwords do not match.");
        return;
      }
      try {
        const user = await signUp(email, password);
        if (user) {
          dispatch(
            login({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            })
          );
          resetForm(); // Reset the form on successful sign-up
          navigate("/"); // Redirect to home page
        }
      } catch (error) {
        // Handle Firebase errors
        Swal.fire(`Signup failed: ${error.message}`);
      }
    }
  };

  return (
    <div className="container">
      <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isSignIn && (
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        )}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {!isSignIn && (
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-dark">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn
              ? "Create an account"
              : "Already have an account? Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
