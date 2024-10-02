import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Swal from "sweetalert2";
import About from "./About";
import Contact from "./Contact";
export default function Home() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const location = useLocation();

  const menCategories = ["mens-shirts", "mens-shoes", "mens-watches"];
  const womenCategories = [
    "womens-dresses",
    "womens-shoes",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
  ];

  const fetchAllProducts = async () => {
    setLoading(true);
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    setProducts(data.products);
    setVisibleCount(6);
    setLoading(false);
  };

  const fetchCategoryProducts = async (categoryList) => {
    setLoading(true);
    let allProducts = [];

    for (const category of categoryList) {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await response.json();
      allProducts = [...allProducts, ...data.products];
    }

    setProducts(allProducts);
    setVisibleCount(6);
    setLoading(false);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      fetchAllProducts();
    }
  }, [location.pathname]);

  const handleAddToCart = (product) => {
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

  return (
    <>
      <div className="category-buttons text-center mt-4 " id="ProductHome"> 
        <button
          className="btn btn-outline-dark mx-2 mt-1"
          onClick={fetchAllProducts} // Fetch all products
        >
          All Products
        </button>

        <button
          className="btn btn-outline-dark mx-2 mt-1"
          onClick={() => fetchCategoryProducts(menCategories)}
        >
          Men's Category
        </button>
        <button
          className="btn btn-outline-dark mx-2 mt-1"
          onClick={() => fetchCategoryProducts(womenCategories)}
        >
          Women's Category
        </button>
      </div>

      
<div className="container my-5">
<div className="row ">
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : products.length > 0 ? (
          products
            .slice(0, visibleCount)
            .map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                addToCart={handleAddToCart}
              />
            ))
        ) : (
""        )}

        {products.length > visibleCount && (
          <div className="text-center mt-4">
            <button
              className="btn btn-dark"
              onClick={() => setVisibleCount((prevCount) => prevCount + 6)}
            >
              View More Products
            </button>
          </div>
        )}
      </div>

</div>



      <About />
      <Contact />
    </>
  );
}




















