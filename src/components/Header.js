import { useState, useEffect, useContext } from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/Logo.json";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

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
  const { loggedInUser } = useContext(UserContext);
  //Subscribing to the store using a Selector -- a hook in react-redux
  const cartItems = useSelector((store) => store.cart.items); //this will make cart have all the data in items
  console.log(cartItems);
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
        <span className="app-title">Binge Eat</span>
        <Lottie
          isClickToPauseDisabled={true}
          style={{ margin: 15 }}
          options={defaultOptions}
          height={100}
          width={100}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>{loggedInUser}</li>
          <li>
            <Link to="/cart">🛒 ({cartItems.length})</Link>
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
