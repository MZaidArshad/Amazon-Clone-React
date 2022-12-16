import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebaseApp";

export default function Header() {
  const [{ basket, user }] = useStateValue();
  const [searchValue, setSearchValue] = useState("");

  const signInSignOut = async () => {
    if (user) {
      const confirm = await window.confirm("Are You Sure?");
      if (confirm) {
        auth.signOut();
      }
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <div className="logo_container">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon Logo"
          />
        </div>
      </Link>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header_navContainer">
        <div className="header__nav">
          <Link to={!user && "/login"} className="header__link">
            <div onClick={signInSignOut} className="header__option">
              <span className="header__optionLineOne">
                {`Hello ${user ? user.displayName : ""}!`}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign out" : "Sign in"}
              </span>
            </div>
          </Link>

          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__optionLineOne" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
