import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header-container">
      <img src="" alt="logo image" />
      <ul className="Header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
