import React from "react";
import SearchResults from "../components/SearchResults";
import NavbarComponent from "../components/NavbarComponent";
import { useQuery } from "react-query";

const SearchPage = () => {
  const { isLoading, isError, error, data } = useQuery(
    "home-products",
    async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      return jsonData;
    }
  );
  if (isLoading) {
    return <h2>"Loading..."</h2>;
  }

  if (isError) {
    return <h2>"An error has occurred: " + {error.message}</h2>;
  }
  return (
    <div>
      <NavbarComponent />
      <SearchResults products={data} />
    </div>
  );
};

export default SearchPage;
