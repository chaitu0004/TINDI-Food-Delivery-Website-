import { Res_Img } from "../utils/constants";

const Rescard=(props)=>{
  const {resData}=props;

  const{
    name,cuisines,avgRating,areaName,cloudinaryImageId,sla,id
  }=resData?.info;
  return(
    <div className="w-[222px] h-[270px] rounded-[10px] border-0 shadow-[0px 5px 10px rgba(0, 0, 0, 0.2)] transition:[transform ease 0.3s, box-shadow ease 0.3s] hover:scale-105  shadow:[0px 8px 15px rgba(0, 0, 0, 0.3)]">
      <img src={Res_Img+cloudinaryImageId}
      className="w-[222px] h-[148px] object-cover rounded-[8px]  shadow: [0 2px 6px rgba(0, 0, 0, 0.2)] " alt="Restaurant Logo"/>
      <div className="flex flex-col">
        <h3 className="font-bold overflow-x-hidden truncate">{name}</h3>
        <div className="flex gap-[7px] ">
          <h4 className="flex font-medium"><img className="w-[20px] h-[20px]" src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png"/>{avgRating}</h4>
          <h4 className="align-middle">{sla.slaString}</h4>
        </div>
        <div className="cuisineArea">
          <h4 className="overflow-x-hidden truncate text-[#808080]">{cuisines.join(",")}</h4>
          <h4 className="text-[#808080]">{areaName}</h4>
        </div>
        
      </div>
    </div>
  )

}

export default Rescard;