
import { useParams } from "react-router-dom";
import { menu_img } from "../utils/constants";  
import { Shimmer2 } from "./Shimmer";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCards from "./ItemCards";
import { useState } from "react";
const RestaurantInfo = () => {
    const {resId}=useParams();

    const [showItems,setShowItems]=useState(null);

    const handleClick=(index)=>{
        setShowItems(showItems===index ? null : index);
    }



    const resInfo=useRestaurantMenu(resId);

    if(resInfo===null) {
        return (<>
        <Shimmer/>,
              <Shimmer2/>
        
        </>
        )

    }

  
    const {name,city,cuisines,locality,slaString,avgRatingString,totalRatingsString}=resInfo?.data?.cards?.find(c=>c.card.card.info)?.card?.card?.info;
    const categoryCard=resInfo?.data?.cards.find(c=>c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards||[];
    const itemcards=resInfo?.data?.cards.find(c => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(c => c?.card?.card?.itemCards || [])||[];
   


    return(

        <div className="max-w-[800px] m-auto ">
            <div className="shadow-[0_4px_6px_-2px_gray]  rounded-3xl p-4 border-b border-gray-300 pb-4">
                <h1 className="font-extrabold text-2xl align-middle mb-[30px]">{name}</h1>
                <div className="flex items-center"><img className="w-[30px] h-auto" src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png"/> <h4 className="ml-[4px] font-bold">{avgRatingString}</h4><h4 className="font-medium ml-[4px]">({totalRatingsString})</h4></div>
                <h3 className="text-bold mt-[4px] text-orange-500 mb-[10px] font-bold underline decoration-orange-400">{cuisines.join(", ")}</h3>
                <h3 className="text-gray-500 flex">{locality}<img  className="ml-1 w-[20px] h-auto" src="https://cdn-icons-png.flaticon.com/128/14033/14033698.png"/></h3>

               
            </div>

             <div className="border-b border-gray-300 mt-8 "></div>

             <div className="max-w-[800px] m-auto p-4">
                <div>
                 {categoryCard.filter(cat=>cat?.card?.card?.["@type"].includes("ItemCategory"))?.map((category,index)=>{
                    return(
                        <div  key={category?.card?.card?.title+"-"+index} className="mb-8 mt-8">
                            <div className="flex justify-between ">
                            <h2 key={index} className="mb-15 font-extrabold">{category?.card?.card?.title}({category?.card?.card?.itemCards?.length})</h2>
                            <div><img className="w-[20px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" onClick={()=>handleClick(index)}  src="https://cdn-icons-png.flaticon.com/128/32/32195.png"/></div>
                            </div>
                              <div className="border-b border-gray-300"></div>
                             {showItems===index &&( <div>
                              {category?.card?.card?.itemCards?.map((item,index)=>{
                                 return(
                                     <div key={item?.card?.info?.id+"-"+index}>
                                        <ItemCards  items={item?.card?.info}/>
                                    </div>
                                    )
                             })}

                          </div>  )}
                        </div>        
                    )
                 })}
                </div>
               
        </div> 

    </div>
    )
}

export default RestaurantInfo;