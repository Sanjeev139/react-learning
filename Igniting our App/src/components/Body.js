import RestaurantCard from "./RestaurantCard"
import { cardList } from "../utils/mockData"
import { useState } from "react"

const Body = () => {
    const[listofRestaurent, setListOfRestaurent] = useState(cardList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listofRestaurent.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurent(filteredList)
                }}>Top Rated Restaurents</button>
            </div>
            <div className="res-container">
                {
                    listofRestaurent.map((resttaurentData) => (<RestaurantCard key = {resttaurentData.info.id} restData={resttaurentData}></RestaurantCard> ))
                }
            </div>
        </div>
    )
}
export default Body