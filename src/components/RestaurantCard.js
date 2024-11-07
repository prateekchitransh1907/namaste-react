import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRatingString,
    totalRatingsString,
    costForTwo,
    sla,
    areaName,
  } = props.resData?.info;
  return (
    <div data-testid="resCard" className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div>
        <label className="offer-label">
          {props.resData.info?.aggregatedDiscountInfoV3?.header &&
          props.resData.info?.aggregatedDiscountInfoV3?.subHeader
            ? props.resData.info?.aggregatedDiscountInfoV3?.header +
              " " +
              props.resData.info?.aggregatedDiscountInfoV3?.subHeader
            : ""}
        </label>
      </div>

      <div className="res-title">{name}</div>

      <div className="res-cuisine-eta">{cuisines.join(", ")}</div>
      <div className="res-rating-container">
        <img
          className="res-star-icon"
          src="https://image.pngaaa.com/227/456227-middle.png"
        />
        <span>
          {avgRatingString}
          {"(" + totalRatingsString + ")"}
        </span>
        &nbsp;
        {sla.deliveryTime + " Mins"}
      </div>
      <div className="res-cuisine-eta">{areaName}</div>
    </div>
  );
};

// export const offerRestaurantCard = (RestaurantCard) => {
//   return (props) => {
//     console.log("props", props);
//     return (
//       <div>
//         <label className="offer-label">
//           {props.resData.info.aggregatedDiscountInfoV3.header +
//             " " +
//             props.resData.info.aggregatedDiscountInfoV3.subHeader}
//         </label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
