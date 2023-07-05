import React from "react";
import SearchResults from "../components/SearchResults";
import NavbarComponent from "../components/NavbarComponent";

const SearchPage = ({ products }) => {
  return (
    <div>
      <NavbarComponent />
      <SearchResults products={products} />
    </div>
  );
};

export default SearchPage;
