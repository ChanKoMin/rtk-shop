import React from "react";
import { useLocation } from "react-router-dom";
import SearchCart from "./SearchCart";

const Search = () => {
  const location = useLocation();
  const items = location?.state?.filterProduct;
  return (
    <div className="container d-flex flex-wrap gap-4">
      {items.map((item) => {
        return <SearchCart key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Search;
