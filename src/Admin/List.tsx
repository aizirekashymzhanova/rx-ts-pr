import React, { useEffect, useMemo, useState } from "react";
import { useProductActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelectore";
import ProductCard from "./Card";

const ProductList = () => {
  const { error, products, loading } = useTypedSelector(
    (state) => state.product
  );

  const { getProduct } = useProductActions();
  const { cart } = useTypedSelector((state) => state.cart);

  useEffect(() => {
    getProduct();
    return () => {
      getProduct();
    };
  }, []);

  if (error) {
    return <h1>{error}card</h1>;
  }
  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <div className="box-container">
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
