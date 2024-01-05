import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {

    const { resId } = useParams()
    const resMenu = useRestaurantMenu(resId);

    if(resMenu === null) return <Shimmer></Shimmer>

    console.log(resMenu)

    const { name, cuisines } = resMenu?.cards[0]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards)

    return (
        <div id="res-menu-card">
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name}</li>)
                }
            </ul>
        </div>
    )
}
export default RestaurantMenu