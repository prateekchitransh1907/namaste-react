import ShimmerUI from "./ShimmerUI";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const resId = useParams();
  const addItem = () => {};
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
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
  console.log("itemCards", itemCards);

  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);

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
          {categories.map((category, index) => {
            return (
              //controlled component by lifting the state up
              <RestaurantCategory
                category={category.card.card}
                key={category.card.card.title}
                showItems={index === showIndex ? true : false}
                setShowIndex={() =>
                  //hide the accordion if clicked twice
                  //if the index of category is same as the state index set showIndex to null
                  //this will make showItems = { index === null ? true : false which will return false hence closing the clicked accordion}
                  setShowIndex(index === showIndex ? null : index)
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
