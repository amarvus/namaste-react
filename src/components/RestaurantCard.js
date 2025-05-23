import { FOODIMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;

  const {name, cuisines, avgRating, deliveryTime} = resData?.data;
    return(
        <div className="res-card">
            <img className="res-logo" src={FOODIMG_URL} alt="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;