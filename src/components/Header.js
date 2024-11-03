import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/Logo.json";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Header = () => {
  const [btnName, setBtnName] = useState("Login"); //setBtnName will create a new reference and value for BtnName which will re-render the Header Component
  console.log("header rendered");
  //if no dependency array - called after every render of component - by default
  //with a dependency array which is empty - called only for initial render of the component ( just once )
  //if dependency array has a value it will be called when the value is updated
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <span className="app-title">Binge Eat</span>
        <Lottie
          style={{ margin: 15 }}
          options={defaultOptions}
          height={100}
          width={100}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
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
