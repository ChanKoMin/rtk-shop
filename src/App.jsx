import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import AddToCart from "./components/AddToCart";
import Search from "./components/Search";
import RouteGuard from "./components/RouteGuard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search />
            </RouteGuard>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
