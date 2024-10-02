

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "./ProductItem"; 

export default function SearchResults() {
  
  const [products, setProducts] = useState([]);
  const location = useLocation();

  // Extract search query from URL
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      setProducts(data.products || []);
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Search Results for "{query}"</h2>
      <div className="row m-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products found for "{query}".</p>
        )}
      </div>
    </div>
  );
}






