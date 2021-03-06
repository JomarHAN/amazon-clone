import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../ContextAPI/StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ user, basket }] = useStateValue();

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
  };

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
        <Link className="header__navbarItem" to={!user && "/login"}>
          <div className="header__item" onClick={handleSignOut}>
            <p className="header__itemUp">
              {user ? user.email : "Guess"}
            </p>
            <p className="header__itemBelow">{user ? "Sign Out" : "Sign In"}</p>
          </div>
        </Link>
        <Link className="header__navbarItem" to="/orders">
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
        <Link className="header__navbarItem" to="/checkcart">
          <div className="header__cart">
            <p className="header__icon">
              <ShoppingCartIcon />
            </p>
            <p className="header__amount">{basket?.length}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
