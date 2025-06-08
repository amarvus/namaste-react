import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    

    return( 
        <div className="text-center m-4 p-4">
           <h1 className="font-bold text-3xl">Cart</h1> 
           <div className="w-6/12 m-auto">
            
            {cartItems.length == 0 ? <h1 className="p-2 m-2 font-medium">Cart is empty. Add items to your cart!</h1> : 
                <button className="px-3 py-1 m-3 bg-black text-white rounded-lg cursor-pointer"
                onClick={handleClearCart}
            >        
                Clear Cart
            </button>
            }
             <ItemList items = {cartItems} />
           </div>
        </div>
        
        
    )
}

export default Cart;