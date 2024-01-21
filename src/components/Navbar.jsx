import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { PiShoppingCartLight } from "react-icons/pi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setProducts(data);
  };
  const filterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    navigate("/search", { state: { filterProduct } });
  };
  const { cartItems } = useSelector((state) => state.cart);
  const noti =
    cartItems.length > 0
      ? "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      : "";
  return (
    <div
      className="navbar bg-light container shadow-lg mb-5 mt-3 position-sticky top-0"
      style={{ zIndex: 1000 }}
    >
      <div className="container-fluid">
        <Link to={"/"}>
          <FcShop className=" fs-1" />
        </Link>
        <form onSubmit={searchHandler} className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
          />
          <Link to={"/addtocart"}>
            <button type="button" className="btn btn-primary position-relative">
              <PiShoppingCartLight className="fs-4" />
              <span className={noti}>
                {cartItems.length > 0 && cartItems.length}
              </span>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
