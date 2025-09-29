import {useRef} from "react";
import Rescard from "./Rescard";
import { Right_Btn } from "../utils/constants";
import { Left_Btn } from "../utils/constants";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";


const BodyLayout=({restaurants})=>{
  const scrollRef=useRef(null);





  const ScrollLeft=()=>{

    scrollRef.current.scrollBy({left:-300,behavior:"smooth"});

  };

  const ScrollRight=()=>{
   
    scrollRef.current.scrollBy({left:300,behavior:"smooth"});
  };


  if(restaurants.length===0){
    return <Shimmer/>;
  }

  

  return(    
    
   
 
    <div className="max-w-[1000px] mx-auto">
      
      <div className="block relative">
        <button onClick={ScrollLeft} className="left-[5px] absolute top-[30%] bg-[rgba(176,175,175,0.5)] rounded-full w-[50px] h-[50px] text-[18px] cursor-pointer z-10 transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg"><img className="w-[30px] place-self-center"src={Left_Btn}/></button>
        <div className="res-container flex gap-[20px] p-[20px] border-0 overflow-x-auto overflow-y-hidden max-w[1000px] mx-auto" ref={scrollRef}>
        {restaurants?.map(r =><Link key={r.info.id} to={"/restaurant/"+r.info.id}><Rescard  resData={r}/></Link>)}
        </div>
        <button onClick={ScrollRight} className="right-[5px] absolute top-[30%] bg-[rgba(176,175,175,0.5)] rounded-full w-[50px] h-[50px] text-[18px] cursor-pointer z-10 transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg" ><img className="w-[30px] place-self-center"src={Right_Btn}/></button>
        
      </div>
    </div>
  )
}

export default BodyLayout;