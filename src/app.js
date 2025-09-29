import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider,useOutletContext} from "react-router-dom";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import { lazy,Suspense } from "react";
//importing components
import Header from "./components/Header";
import BodyLayout from "./components/BodyLayout";
import Cusinecard from "./components/Cusinecard";
import Footer from "./components/Footer";
import useOnlineStatus from "./utils/useOnlineStatus";
const About = lazy(()=>import("./components/About"));
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./ReduxFiles/appStore";
import Cart from "./components/Cart" 
const Areatitle=()=>{
  return(
    <div className="font-bold text-[30px] mt-[20px] pl-[150px] font-mono">
      <h1>Top restaurants in Hyderabad</h1>
    </div>
  )
}

const CusineTitle=()=>{
  return(
    <div className="font-bold text-[30px] mt-[20px] pl-[150px] font-mono ">
      <h1 >What's on your mind?</h1>
    </div>
  )
}
const Home=()=>{
  const {filteredrestaurants: frs}=useOutletContext();
  return(
    <div className="home">
      <CusineTitle/>
      <Cusinecard/>
      <Areatitle/>
      <BodyLayout restaurants={frs}/>
    </div>  
  )
}


const AppLayout=()=>{

  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const isOnline=useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4485835&lng=78.39080349999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantlist =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setFilteredRestaurants(restaurantlist);
    setAllRestaurants(restaurantlist);
  };

  const headersearch=(query)=>{

     if (!query) {
    setFilteredRestaurants(allRestaurants); 
     } 
     else {
    const filteredList=(allRestaurants.filter((res)=>res.info.name.toLowerCase().includes(query.toLowerCase())));
  setFilteredRestaurants(filteredList)
   }
  };

  return(
  <Provider store={appStore}>
    <div className="app">
   
      <Header onSearch={headersearch}/>

       {!isOnline && (
        <div style={{ background: "red", color: "white", padding: "10px", textAlign: "center" }}>
          ⚠️ You are offline. Please check your internet connection.
        </div>
      )}
      <Outlet context={{filteredrestaurants}}/>
      <Footer/>
      
  
    </div>
  </Provider>
  )
}

const appRouter=createBrowserRouter([
  { path:"/", element:<AppLayout/>,
     errorElement:<Error/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"/about", element:<Suspense><About/></Suspense>},
      {path:"/restaurant/:resId", element:<RestaurantInfo/>},
      {path:"/cart",element:<Cart/>},      
    ]
    },
 
])

const root=ReactDOM.createRoot(document.getElementById("print"));
root.render(<RouterProvider router={appRouter}/>);

