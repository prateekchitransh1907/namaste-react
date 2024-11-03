import RestaurantMenuItemList from "./RestaurantMenuItemList";
const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const toggleItem = () => {
    setShowIndex();
  };
  return (
    <div>
      <div onClick={toggleItem} className="item-category-accordion-header">
        <span>{category.title + " (" + category.itemCards.length + ")"}</span>
        <span>{!showItems ? "🔽" : "🔼"}</span>
      </div>
      {showItems && <RestaurantMenuItemList itemCards={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
