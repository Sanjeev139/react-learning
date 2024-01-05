import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { RESTAURANT_API } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"


const Body = () => {
    const[listofRestaurent, setListOfRestaurent] = useState([]);
    const[filteredRes, setFilteredRes] = useState([]);
    const[searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchAPi()
    },[])

    const fetchAPi = async () => {
        const data = await fetch(RESTAURANT_API);
        const result = await data.json();
        setListOfRestaurent(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRes(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if (onlineStatus === false) return (<h1>Opps ! Seems, you're offline. Please check your internet connection</h1>); 

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
                    filteredRes.map((resttaurentData) => (<Link to={"/restaurent/"+resttaurentData.info.id} key = {resttaurentData.info.id}><RestaurantCard restData={resttaurentData}></RestaurantCard> </Link>))
                }
            </div>
        </div>
    )
}
export default Body