import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loader from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setProducts(data);
    setIsLoaded(false);
  };
  if (isLoaded) {
    return <Loader />;
  }
  return (
    <div className="container d-flex flex-wrap gap-4">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
