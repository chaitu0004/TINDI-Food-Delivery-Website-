import { useDispatch, useSelector } from "react-redux";
import { menu_img } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../ReduxFiles/cartSlice";

const Cart=()=>
{
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>store.cartContainer.items)
    const handleClearCart=()=>{
        dispatch(clearCart())
    };

    return(

        <div className="max-w-[800px] items-center mx-auto">
            {
                cartItems.map((item,index)=>(
                   
                       <div key={index} className="flex justify-between items-center">
                                   <div className="max-w-9/12 p-4">
                                       <h1 className="font-bold">{item.name}</h1>
                                   </div>
                                   <div className="max-w-3/12">
                                       <img className="p-4 rounded-4xl" src={menu_img+item.imageId} alt="food image"/>

                                   </div>


                        </div> 
                        
                        
                       
                ))}

                <div className="flex justify-center">
                        <button
                        className="bg-gradient-to-r from-red-500 to-red-700 text-white 
                                    px-6 py-2 rounded-lg shadow-md hover:from-red-600 
                                    hover:to-red-800 hover:scale-105 transform 
                                    transition duration-300 ease-in-out"
                        onClick={handleClearCart}
                        >
                        🗑️ Clear Cart
                        </button>
                </div>

           
            
        </div>
    )
}

export default Cart;