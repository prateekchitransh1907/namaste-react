import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login"); //setBtnName will create a new reference and value for BtnName which will re-render the Header Component
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <span className="app-title">Swiggy</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
            className="login"
          >
            👤 {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
