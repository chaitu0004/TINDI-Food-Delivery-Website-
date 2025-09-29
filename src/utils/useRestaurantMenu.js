import { useEffect, useState } from "react";
import { menuUrl } from "../utils/constants";
const useRestaurantMenu=(resId)=>{
    const[resInfo,setRestaurantinfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(menuUrl+resId);
        const json=await data.json();
        setRestaurantinfo(json);
    };


    return resInfo;
};

export default useRestaurantMenu;