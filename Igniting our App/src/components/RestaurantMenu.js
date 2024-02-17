import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [ showIndex, setShowIndex] = useState(null)

  if (resMenu === null) return <Shimmer></Shimmer>;

  const { name, cuisines } = resMenu?.cards[0]?.card?.card?.info;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="font-bold text-md">{cuisines.join(", ")}</p>
      { categories.map((category, index) => (
        <RestaurantCategories key={category.card.card.title} data={category?.card?.card}
        showItems={index=== showIndex ? true : false } setShowIndex={()=>setShowIndex(index)}></RestaurantCategories>
      ))}
    </div>
  );
};
export default RestaurantMenu;
