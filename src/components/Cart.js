import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuItemList from "./RestaurantMenuItemList";
import { clearCart } from "../utils/cartSlice";
import Lottie from "react-lottie";
import animationData from "../lottie/EmptyCart.json";
import { Link } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); //this will make cart have all the data in items
  console.log(cartItems);
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };
  const sumValues = (arr) => {
    return arr.reduce(
      (total, item) =>
        total +
        (item.card.info.defaultPrice
          ? item.card.info.defaultPrice
          : item.card.info.price / 100 || 0),
      0
    );
  };

  return cartItems.length !== 0 ? (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Your cart 🛒</h2>
        <button className="clear-cart-btn" onClick={clearCartItems}>
          Remove All 🗑
        </button>
      </div>
      <RestaurantMenuItemList itemCards={cartItems} />
      <div className="price-container">
        <h4 className="order-charges">
          🏷 Total Price = {sumValues(cartItems)}
        </h4>
        <h4 className="order-charges">
          ％ GST (18%) = {Math.round(sumValues(cartItems) * 0.18)}
        </h4>
        <h4 className="order-charges">
          🛵 Delivery Charge = {Math.round(sumValues(cartItems) * 0.03)}
        </h4>
        <div className="total-charges">
          💳 You Pay{" = "}
          {sumValues(cartItems) +
            Math.round(sumValues(cartItems) * 0.18) +
            Math.round(sumValues(cartItems) * 0.03)}
        </div>
      </div>
    </div>
  ) : (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Your cart is empty 🛒</h2>
      </div>
      <Lottie options={defaultOptions} width={200} height={200} />
      <h2 className="unsure-eating">
        Still not sure what to eat ? Our chefs are preparing hot meals for you !
      </h2>
      <Link to="/">
        <h2 className="back-to-res">Go back to restaurants</h2>
      </Link>
    </div>
  );
};
export default Cart;
