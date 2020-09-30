import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      <div className="header__searchBox">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__navbar">
        <Link className="header__navbarItem" to="/login">
          <div className="header__item">
            <p className="header__itemUp">Hello Jomar</p>
            <p className="header__itemBelow">Sign Out</p>
          </div>
        </Link>
        <Link className="header__navbarItem">
          <div className="header__item">
            <p className="header__itemUp">Returns</p>
            <p className="header__itemBelow">& Orders</p>
          </div>
        </Link>
        <Link className="header__navbarItem">
          <div className="header__item">
            <p className="header__itemUp">Your</p>
            <p className="header__itemBelow">Prime</p>
          </div>
        </Link>
        <Link className="header__navbarItem">
          <div className="header__cart">
            <p className="header__icon">
              <ShoppingCartIcon />
            </p>
            <p className="header__amout">0</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
