import { useEffect,useState} from "react";

const onlineStatus = () => {

    const [isOnline,setOnline]=useState(true);

    useEffect(()=>{

        window.addEventListener("online",()=>setOnline(true));
        window.addEventListener("offline",()=>setOnline(false));

    },[])

    return isOnline;

}

export default onlineStatus;