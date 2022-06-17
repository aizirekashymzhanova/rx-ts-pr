import React, { useEffect, useMemo, useState } from "react";
import { useProductActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelectore";
import OneProd from "./OneProd";

const ProductList = () => {
  let [count, setCount] = useState(1);

  const increment = () => {
    if (count == 3) setCount((count -= 3));
    setCount(count + 1);
  };
  const decrement = () => {
    if (count == 1) setCount((count += 3));
    setCount(count - 1);
  };
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
      <section className="home">
        <div className="slides-container">
          <div className={`slide ${count === 1 ? "active" : null}`}>
            <div className="content"></div>
            <div className="image">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kkiJftHG3Wo?autoplay=1&origin=http://youtube.com"
                title="YouTube video player"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allow="autoplay; encrypted-media muted"
              ></iframe>
            </div>
          </div>
          <div className={`slide ${count === 2 ? "active" : null}`}>
            <div className="content">
              <h3>Offers up to 50% </h3>
            </div>
            <div className="image">
              <img
                src={
                  "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/bc8ff837-69ab-42b1-b530-cc370c2be1eb_670x502_Ideashub.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <div className={`slide ${count === 3 ? "active" : null}`}>
            <div className="content">
              <h3>Offers up to 50% </h3>
            </div>
            <div className="image">
              <img
                src={
                  "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,h_500,q_auto:good,w_670/v1/mws/bc8ff837-69ab-42b1-b530-cc370c2be1eb_670x502_Ideashub.jpg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <button
          id="next-slide"
          className="fas fa-angle-right"
          onClick={increment}
        ></button>
        <button
          id="prev-slide"
          className="fas fa-angle-left"
          onClick={decrement}
        ></button>
      </section>
      <div className="box-container">
        <h2>
          {" "}
          “When it comes to your home, we believe you can have it all: great
          design and quality, at an affordable price.”
        </h2>
        <h2 style={{ color: "#bac34e", marginBottom: "20px" }}>
          Check Our New Collection!
        </h2>
      </div>
      <div className="box-products">
        {products.map((item) => (
          <OneProd item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
