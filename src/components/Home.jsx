import React, { useState } from "react";
import "./home.css";
import Header from "./Header";
import Product from "./Product";
import useFetch from "react-fetch-hook";

export default function Home() {
  const productsToShow = 9;
  const [next, setNext] = useState(productsToShow);
  const loadMore = () => {
    setNext(next + productsToShow);
  };
  const { isLoading, data, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    );
  }

  return (
    <>
      <Header product={data} />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Banner"
        />

        {/* Products */}

        <div className="home__row">
          <div className="home__products">
            {isLoading && <h2>Loading...</h2>}
            {!isLoading &&
              data?.slice(0, next).map((product) => {
                return (
                  <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                  />
                );
              })}
          </div>
          <div className="home__loadMoreBtn">
            {next < data?.length && (
              <button className="loadMoreBtn" onClick={loadMore}>
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
