import React from "react";
import "./checkout.css";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__Ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="Ad"
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping basket is empty</h2>
              <p>
                You have no item in the basket. To buy item click to "Add to
                Baket" button next to the item
              </p>
            </div>
          ) : (
            <div className="checkout__products">
              <h2 className="checkout__title">Your Shopping basket</h2>
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">{<Subtotal />}</div>
        )}
      </div>
    </>
  );
}

export default Checkout;
