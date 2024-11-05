import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuItemList = ({ itemCards }) => {
  console.log("itemCards", itemCards);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    //dispatch an action for adding item
    dispatch(addItem(item));
  };
  return (
    <div>
      <ul>
        {itemCards.map((item) => (
          <div key={item.card.info.id} className="res-menu-item-container">
            <li className="res-list-items">
              <div className="res-list-item-details ">
                <div className="res-menu-item-name">
                  {item.card.info.name}
                  <div className="res-item-price-offer">
                    ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </div>
                </div>
                <div className="res-menu-item-desc">
                  {item.card.info.description}
                </div>
              </div>
              <div className="res-list-item-img-add-container">
                <img
                  alt="res-logo"
                  className="res-list-item-img"
                  src={CDN_URL + item.card.info.imageId}
                />
                <button
                  className="res-list-item-add-btn"
                  onClick={() => addItemToCart(item)}
                >
                  ADD +
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenuItemList;
