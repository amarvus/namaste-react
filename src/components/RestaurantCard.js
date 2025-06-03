import { FOODIMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;

  const {name, cuisines, avgRatingString, costForTwo, sla, cloudinaryImageId} = resData?.info;
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;