import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import NoInternet from "./NoInternet";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  //useEffect - two args - first is callback fn and the second is dependency arr
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.842340847601832&lng=77.65196329276118&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  const filterTopRestaurant = (results) => {
    const topRestaurants = results.filter((res) => res.info.avgRating > 4.2);
    console.log(topRestaurants);
    setFilteredRestaurant(topRestaurants);
  };
  const sortTopRestaurant = (results) => {
    const topSortedRestaurants = [...results].sort((a, b) => {
      return a.info.avgRating - b.info.avgRating;
    });
    console.log(topSortedRestaurants);
    setFilteredRestaurant(topSortedRestaurants);
  };
  const searchRestaurant = () => {
    const filteredRestaurant =
      listOfRestaurant.length && searchText.length > 0
        ? listOfRestaurant.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
        : listOfRestaurant;
    console.log(filteredRestaurant);
    setFilteredRestaurant(filteredRestaurant);
  };

  if (onlineStatus === false) return <NoInternet />;
  //Conditional Rendering
  //   if (listOfRestaurant.length === 0) {
  //     return <ShimmerUI />;
  //   }
  return listOfRestaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="res-search-container">
          <input
            type="text"
            className="res-search-input"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search any restaurant..."
            onKeyUp={searchRestaurant}
            value={searchText}
          />
        </div>
        <button
          className="filter-btn"
          onClick={() => filterTopRestaurant(filteredRestaurant)}
        >
          ⭐️ Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => sortTopRestaurant(listOfRestaurant)}
        >
          ㆔ Sort by Ratings
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
