import ShimmerUI from "./ShimmerUI";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const resId = useParams();
  const addItem = (item) => {};
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    areaName,
  } = resInfo?.cards[2].card.card.info;
  console.log(resInfo?.cards[4]);

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);
  return (
    <div>
      <div className="res-info-title">{name}</div>
      <div className="res-info-container">
        <div className="res-menu-item-rating-container">
          <img
            className="res-star-icon"
            src="https://image.pngaaa.com/227/456227-middle.png"
          />
          <span>
            <div className="res-info-eta-ratings">
              {avgRating}
              {"(" + totalRatingsString + ")" + " • " + costForTwoMessage}
            </div>
          </span>
        </div>
        <div className="res-info-outlet">
          Outlet <span className="res-info-areaName">{areaName}</span>
        </div>
        <div className="res-info-list">
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
                      onClick={() => addItem(item)}
                    >
                      ADD +
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
