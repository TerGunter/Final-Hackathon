import React, { useEffect } from "react";
import ProdList from "../components/ProdList";
import { useProductContext } from "../contexts/ProductContextProvider";

const Shop = () => {
  const { getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <ProdList />
    </div>
  );
};

export default Shop;
