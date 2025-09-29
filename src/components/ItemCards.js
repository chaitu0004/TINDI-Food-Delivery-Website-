import { menu_img } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../ReduxFiles/cartSlice";
const ItemCards=({items})=>{
    const dispatch=useDispatch();
    const handleClick=(items)=>{
        dispatch(addItems(items));
    }
    return(
        <div className="flex justify-between items-center">
            <div className="max-w-9/12 p-4">
                <h1 className="font-bold">{items.name}</h1>
                <div className="text-gray-400 line-clamp-2">{items.description}</div>
            </div>

            <div className="max-w-3/12">
                <button className="border-[0.5px] border-gray-200 absolute shadow-white bg-white text-green-500 text-lg font-bold px-4 py-2 rounded-lg 
                     hover:bg-gray-200 transition duration-300 ease-in-out" onClick={()=>handleClick(items)}>ADD</button>
                <img className="p-4 rounded-4xl w-[156px] h-[144px]" src={items?.imageId ? menu_img+items.imageId : "https://cdn-icons-png.flaticon.com/128/13543/13543287.png"} alt="food image"/>
            
            </div>
            
        </div>   
    )
}

export default ItemCards;