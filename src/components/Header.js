const loginimg=new URL("../../images/user.png", import.meta.url).toString();
const cartimg=new URL("../../images/trolley.png",import.meta.url).toString();
const searchimg=new URL("../../images/search.png",import.meta.url).toString();
const logoimg=new URL("../../images/logo-img.png",import.meta.url).toString();
const logoutimg=new URL("../../images/logout.png",import.meta.url).toString();
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

import { useState } from "react";
import { Link } from "react-router-dom";

const Header=({onSearch})=>{

 

  const cartItems=useSelector((s)=>s.cartContainer.items);



  const isOnline=useOnlineStatus();
  const [LogImg,setLogimg]=useState(true);
  const [searchText,setSearchText]=useState("");
  return(
    <div className="flex justify-between items-center bg-gradient-to-b from-[#fff3c7] to-[#ffffff]">
      <div className="logo-container">
         <img className="w-50 pl-3"src={logoimg}/>
      </div>
      <div className="self-center">
        <input type="text" placeholder="Search for ......" className="w-100 h-10   hover:drop-shadow-xl/25 hover:border-1 rounded-md transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" style={
          {
            background:`white url(${searchimg}) no-repeat left 10px`,
            backgroundSize:"20px 20px",
            paddingLeft:"40px",
            backgroundPosition: "10px 10px",
          }
        } value={searchText} onChange={(e)=>setSearchText(e.target.value)}
        onKeyDown={(e)=>{if(e.key==="Enter"){
          onSearch(searchText);
        }}

        }
        /> 
      </div>
      <div className="flex mx-[10px]">
        <ul className="flex justify-between gap-10">
          <li><img src={LogImg?loginimg:logoutimg} 
          className="w-10 transition:[tarnsform 0.3s filter 0.3s] hover:scale-110 cursor-pointer"
          onClick={()=>setLogimg(!LogImg)}/></li>
          <li><Link to="/cart"><img src={cartimg} className=" w-10 transition:[tarnsform 0.3s filter 0.3s] hover:scale-110 cursor-pointer"/><h1 className="text-center">{cartItems.length}</h1></Link></li>
        </ul>
      </div> 
      <div>
      </div>   
    </div>
   
  )
}

export default Header;