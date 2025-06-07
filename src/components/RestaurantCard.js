import { FOODIMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;

  const {name, cuisines, avgRatingString, costForTwo, sla, cloudinaryImageId} = resData?.info;
    return(
        <div className="res-card p-4 m-4 w-64 h-[420px] bg-gray-100 rounded-md hover:bg-gray-200  flex flex-col">
            <img className="res-logo rounded-md w-full h-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo"/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;