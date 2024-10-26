import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const SearchBar = () => {
  return (
    <div className="res-search-container">
      <input
        className="res-search-input"
        placeholder="Search any restauarant"
        onKeyUp={(e) => console.log("searching..." + e.target.value)}
      />
    </div>
  );
};

const Body = () => {
  const [listOfRestaurant, setListofRestaurant] = useState(resData);
  const filterTopRestaurant = (results) => {
    const topRestaurants = results.filter((res) => res.info.avgRating > 4.2);
    setListofRestaurant(topRestaurants);
  };
  return (
    <div className="body">
      <div className="filter">
        <SearchBar />
        <button
          className="filter-btn"
          onClick={() => filterTopRestaurant(resData)}
        >
          ⭐️ Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
