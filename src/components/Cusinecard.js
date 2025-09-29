import React, { useEffect } from "react";
import { cusine_img } from "../utils/constants";
import { useRef } from "react";
import { useState } from "react";
import { Shimmer2 } from "./Shimmer";  

const Cusinecard = () => {

  const [cusineList,setCusineList]=useState([]);

  const scrollReference=useRef(null);

  const ScrollLeft=()=>{

    scrollReference.current.scrollBy({left:-300,behavior:"smooth"});

  };    

  const ScrollRight=()=>{
    scrollReference.current.scrollBy({left:300,behavior:"smooth"});
  }

useEffect(() => {
  const getData = async () => {
    await fetchCusineData();
  };
  getData();
}, []);

    const fetchCusineData=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4485835&lng=78.39080349999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json=await data.json();

            const cusineList=json?.data?.cards?.[0]?.card?.card?.imageGridCards?.info|| [];
            setCusineList(cusineList);

    }

    if(cusineList.length===0){
      return <Shimmer2/>;
    }

  return (
    <div className="cusine-container flex flex-nowrap overflow-x-auto overflow-y-hidden max-w-[1000px] mx-auto" ref={scrollReference}>

        <button onClick={ScrollLeft} className="sticky  left-[5px] top-[35%] bg-[rgba(176,175,175,0.5)] border-none rounded-lg w-10 h-10 text-[18px] cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-md hover:scale-105 z-10">{"<"}</button>
      {cusineList?.map((c) => {
        const {id,imageId} = c;
        return (
          <div key={id} className="flex-shrink-0">
            <img className="w-[144px] h-[180px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:rounded-[20px]" src={cusine_img + imageId}/>
          </div>
        );
      })}
    <button onClick={ScrollRight} className="sticky right-[5px] top-[35%] bg-[rgba(176,175,175,0.5)] border-none rounded-lg w-[50px] h-10 text-[18px] cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-md hover:scale-105 z-10" >{">"}</button>
    </div>
  );
};

export default Cusinecard;