html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
   
}


.header{
  display: flex;
  justify-content: space-between;
  border: 0px solid black;
  border-radius: 10px;
  align-items: center;
  background: linear-gradient(to bottom, #fff3c7, #ffffff);
}
.logo-img{
  width: 175px;
  padding-left: 20px;
 }
.logo-conatainer{
  width: 120px;
 }
.nav-items  ul{

  display: flex;

}

.nav-items ul li{
  display: flex;
  padding: 20px;
  list-style: none;
  font-family: monospace;
  font-size: 10px;
  flex-direction: column;
  align-items: center;
  font-weight: 300;

}

.nav-items ul li img{
  width: 35px;
  margin: 5px;
  transition: tarnsform 0.3s filter 0.3s;  
}
.nav-items ul li img:hover{
  transform: scale(1.2);
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
  cursor: pointer;
}

.search{
  display: flex;

}
.search-input{
  width:400px;
  height: 35px;
  border-radius:10px;
  border:none;
  padding-left: 40px;
  font-size: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); 
  transition: tarnsform 0.3s, box-shadow 0.3s;
  
}
.search-input:hover{
  cursor: pointer;
  border: 1px solid black;
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.cusine-title{
    font-family: monospace;
    padding-left: 150px;
    margin-top: 15px;


}


.cusine-container{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 1000px;
  margin: 0px auto;

}

.cusine-container::-webkit-scrollbar{
  display: none;
}
.cusine-image{
  width: 144px;
  height: 180px;
  transition: transform ease 0.3s, box-shadow ease 0.3s;

}

.cusine-image:hover{
  transform: scale(1.05);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 20px;
}

.cusinebuttons
{
  position: sticky;
  top: 35%;             
  background-color: rgba(176, 175, 175, 0.5);
  border: none;
  border-radius: 50%;  
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  transition: transform ease 0.3s, box-shadow ease 0.3s;
  z-index: 10;
}

.cusinebuttons:hover{
  background-color: aliceblue;
  transform: scale(1.1);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.cusineleftbtn
{
  left: 5px;
}

.cusinerightbtn
{
  right: 5px;
}

.area-title{
  font-family: monospace;
  margin-left: 50px;
  margin-top: 30px;
  font-family: Verdana;
  padding-left: 100px;
}

.buttonRescontainer
{
  display: block;
  position: relative;
   
}
.buttons{
  position: absolute;
  top: 30%;             
  background-color: rgba(176, 175, 175, 0.5);
  border: none;
  border-radius: 50%;  
  width: 50px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  z-index: 10;
  transition: transform ease 0.3s, box-shadow ease 0.3s; 
}

.buttons:hover{

  transform: scale(1.1);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: aliceblue;

}
button img{

  width:15px;

}

.leftbtn{
  left: 100px;
}

.rightbtn{
  right: 100px;
}
.rescard
{
  width: 222px;
  height: 270px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: transform ease 0.3s, box-shadow ease 0.3s;
}
.rescard:hover{
  transform: scale(1.05);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.res-container{
  display: flex;
  flex-wrap:nowrap;
  gap: 20px;       
  padding: 20px;
  border: none;
  margin-left: 10px;
  overflow-x:auto; 
  overflow-y: hidden;
  max-width: 1000px;
  margin: 0px auto;
}

.res-container::-webkit-scrollbar {
  display: none; 
}


.rescard h3, 
.rescard h4, 
.rescard p {
  margin: 3px;     
  padding: 0;
  font-family: monospace;
}
.res-logo{
  
  width: 222px; 
  height: 148px;     
  object-fit: cover; 
  border-radius: 8px;;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); 

}

.res-details{
  display: flex;
  flex-direction: column;
}

.ratingTiming
{
  display: flex;
  gap: 10px;
  align-items: center;
}

.ratingTiming h4{
  display: flex;
  align-items: center;
}

.ratingTiming span{
  line-height: 1;

}

.cuisines {
  white-space: nowrap;       
  overflow: hidden;          
  text-overflow: ellipsis;   
  max-width: 200px;          
  display: block;
  
}
.cuisineArea{
  color:rgba(128, 128, 128, 0.8);

}

.shimmer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  overflow-x: hidden;
}

.shimmer-card {
  width: 222px;
  height: 270px;
  border-radius: 10px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.5s infinite;
}

.shimmer2-container{
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  padding: 20px;
  overflow-x: auto;
  overflow-y: hidden;
}

.shimmer2-card{
  width: 144px;
  height: 144px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
}

.footer{
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: monospace;
  margin-top: 50px;
}

.social-media{
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.social-media img{
  width: 30px;
  transition: transform 0.3s, filter 0.3s;
}

.social-media img:hover{
  transform: scale(1.2);
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
  cursor: pointer;
}

.about{
  margin-top: 10px;
  display:flex;
  justify-content: center;
  gap: 30px;
}

.about h3{
  font-weight: 400;
}
.about h3:hover{
  text-decoration: underline red;

  cursor: pointer;
}

a {
  text-decoration: none; 
  color: inherit;       
}







import { useParams } from "react-router-dom";
import { menu_img } from "../utils/constants";  
import { Shimmer2 } from "./Shimmer";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Itemcards from "./Itemcards";
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
                            <div><img className="w-[20px] cursor-pointer" onClick={()=>handleClick(index)}  src="https://cdn-icons-png.flaticon.com/128/32/32195.png"/></div>
                            </div>
                              <div className="border-b border-gray-300"></div>
                             {showItems===index &&( <div>
                              {category?.card?.card?.itemCards?.map((item,index)=>{
                                 return(
                                     <div key={item?.card?.info?.id+"-"+index}>
                                        <Itemcards  item={item?.card?.info}/>
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


                       <div className="flex justify-between items-center">
                                   <div className="max-w-9/12 p-4">
                                       <h1 className="font-bold">{item.name}</h1>
                                   </div>
                       
                                   <div className="max-w-3/12">
                                       <img className="p-4 rounded-4xl" src={item?.imageId ? menu_img+item.imageId : "https://cdn-icons-png.flaticon.com/128/13543/13543287.png"} alt="food image"/>
                                   </div>
                                   
                        </div>   