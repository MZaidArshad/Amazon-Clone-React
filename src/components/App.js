import React, { useState, useEffect } from "react";
import CountButton from "./Button/countButton";
import SearchBar from "./SearchBar/searchBar";

const App = () => {
  const [productState, setProductState] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductArray = productsArray.map((product) => {
          return product.title;
        });
        setProductState(newProductArray);
      });
  }, [productState]);

  const hasProducts = productState.length > 0;

  return (
    <div>
      <div>
        <CountButton incrementBy={1} buttonColor={"blue"} />
        <CountButton incrementBy={2} buttonColor={"blue"} />
        <CountButton incrementBy={5} buttonColor={"blue"} />
        <CountButton incrementBy={10} buttonColor={"red"} />
      </div>
      <div>
        {hasProducts ? <SearchBar products={productState} /> : "loading..."}
      </div>
    </div>
  );
};
export default App;
