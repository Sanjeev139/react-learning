import { IMAGE_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { restData } = props;
    const {name , cloudinaryImageId, costForTwo, avgRating, cuisines } = restData?.info
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={IMAGE_URL + cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Star</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
export default RestaurantCard