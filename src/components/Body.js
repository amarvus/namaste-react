import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {

    const [listofRestaurants, setlistofRestaurants] = useState(null);

    const [searchText, setsearchText] = useState("");

    const [filteredRestaurant, setfilteredRestaurant] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component) 
    //console.log("Body Rendered");
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5476717&lng=87.2931383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();
        
    
        setlistofRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        
    };


    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false) {
        return <p>Looks like your internet connection is disconnected.</p>
    }

    if(listofRestaurants == null){
        return <Shimmer/>;
    }

    

    return(
        <div className="body">

            <div className="filter">
                <div className="search">
                    <input type="text" className="search-text" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>
                    <button className="search-btn" onClick={()=>{
                        const filteredRes = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilteredRestaurant(filteredRes);
                        }}>
                        Search
                    </button>
                </div>
                
                <button className="filter-btn" onClick={() => {
                    const filteredList = listofRestaurants.filter((res) =>res.info.avgRating >= 4 ); 
                    setfilteredRestaurant(filteredList);
                    }}>
                    Top rated Restaurants
                </button>
            </div>

            <div className="res-container">

                {/* Whenever we loop over an array, we have to give unique key to every child */}

                {filteredRestaurant.map ((restaurant) => <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }> <RestaurantCard resData = {restaurant}/> </Link> )} 
                
            </div>
        </div>
    )
}

export default Body;