import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listofRestaurants, setlistofRestaurants] = useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {const filteredList = listofRestaurants.filter((res) =>res.data.avgRating >= 4 ); setlistofRestaurants(filteredList);}}>Top rated Restaurants</button>
            </div>
            <div className="res-container">

                {/* Whenever we loop over an array, we have to give unique key to every child */}

                {listofRestaurants.map ((restaurant) => <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>)} 
                
            </div>
        </div>
    )
}

export default Body;