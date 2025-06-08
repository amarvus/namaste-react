import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    //console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item))
    }
    
    return(
        <div>
            {items.map((item) => (
                <div key = {item?.card?.info?.id} className="p-2 m-2 h-48 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-8/12">
                        <div className="py-2">
                            <span className="font-bold text-gray-700 text-lg">{item?.card?.info?.name}</span>
                            <p className=" font-semibold py-1">₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</p>
                        </div>

                        <p className="text-sm text-gray-600">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute my-32">
                            <button 
                                className="px-8 py-2 mx-8 text-green-600 font-bold rounded-md bg-white shadow-md cursor-pointer"
                                onClick={() => handleAddItem(item)}
                            >
                                ADD
                            </button>
                        </div>
                        <img className="h-36 w-[156px] object-cover rounded-xl " src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item?.card?.info?.imageId} ></img>
                        
                    </div>            
                </div>
            ))} 
        </div>
    )
}

export default ItemList;