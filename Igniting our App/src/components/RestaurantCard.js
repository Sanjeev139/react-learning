import { IMAGE_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { restData } = props;
    const {name , cloudinaryImageId, costForTwo, avgRating, cuisines } = restData?.info
    return (
        <div className="m-4 p-4 bg-gray-100 w-60 rounded-lg hover:bg-gray-300">
            <img alt="res-logo" src={IMAGE_URL + cloudinaryImageId}></img>
            <h2 className="font-bold text-lg py-4">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Star</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
export default RestaurantCard