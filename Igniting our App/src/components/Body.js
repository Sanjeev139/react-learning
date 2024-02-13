import RestaurantCard, { restaurantsWithPromotedLable } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const promotedLabel = restaurantsWithPromotedLable(RestaurantCard);

  useEffect(() => {
    fetchAPi();
  }, []);

  const fetchAPi = async () => {
    const data = await fetch(RESTAURANT_API);
    const result = await data.json();
    setListOfRestaurent(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (onlineStatus === false)
    return (
      <h1>
        Opps ! Seems, you're offline. Please check your internet connection
      </h1>
    );
  const {setUserName} = useContext(UserContext);
  return listofRestaurent.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="flex">
        <div>
          <input
            type="text"
            className="m-10 h-10 w-100 border-r-4 border-l-4 border-b-4 border-t-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="p-2 h-50 w-200 bg-green-300"
            onClick={() => {
              const filteredRes = listofRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-5 my-10 h-10 w-200 bg-green-300 p-2 border-r-4 justify-center items-center"
          onClick={() => {
            const filteredList = listofRestaurent.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <label className="m-5 my-10 h-10 w-200">User Name</label>
        <input className="border border-black p-5 h-10 my-10" onChange={(e) => {
          setUserName(e.target.value)
        }}></input>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRes.map((resttaurentData) => (
          <Link
            to={"/restaurent/" + resttaurentData.info.id}
            key={resttaurentData.info.id}
          >
            {resttaurentData.info.Promoted ? (
              <promotedLabel restData={resttaurentData}></promotedLabel>
            ) : (
              <RestaurantCard restData={resttaurentData}></RestaurantCard>
            )}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
