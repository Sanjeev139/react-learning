import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"


const Body = () => {
    const[listofRestaurent, setListOfRestaurent] = useState([]);
    const[filteredRes, setFilteredRes] = useState([]);
    const[searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchAPi()
    },[])

    const fetchAPi = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const result = await data.json();
        setListOfRestaurent(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRes(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listofRestaurent.length === 0 ? <Shimmer></Shimmer> : (
        <div className="body">
            <div className="filter">
                <div className="seach">
                    <input type="text" className="search-box" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value)
                        }
                    }></input>
                    <button className="search-btn" onClick={
                        () => {
                            const filteredRes = listofRestaurent.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRes(filteredRes)
                        }
                    }>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listofRestaurent.filter((res) => res.info.avgRating > 4);
                    setFilteredRes(filteredList)
                }}>Top Rated Restaurents</button>
            </div>
            <div className="res-container">
                {
                    filteredRes.map((resttaurentData) => (<RestaurantCard key = {resttaurentData.info.id} restData={resttaurentData}></RestaurantCard> ))
                }
            </div>
        </div>
    )
}
export default Body