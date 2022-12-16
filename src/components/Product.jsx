import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <div className="product-img-div">
        <img src={image} alt="product-img" />
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
