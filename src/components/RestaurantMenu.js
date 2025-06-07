import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);
    
   
    if (resInfo == null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
        c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(categories);
    
    
    
    return(

        <div className="text-center">
            <h1 className="font-bold mt-4 mb-0.5 text-3xl">{name}</h1>
            <p className="font-bold text-md">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) => (
                <RestaurantCategory key = {category?.card?.card?.categoryId} data = {category?.card?.card} 
                showItems = {index == showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index)}
                />))}
        </div>
    )
}

export default RestaurantMenu;