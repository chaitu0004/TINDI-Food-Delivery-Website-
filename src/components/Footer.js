import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="text-center bg-[#f0f0f0] p-[20px] mt-[50px]">
           <div className="flex justify-center p-[20px] gap-10">
            <Link to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHyUnACf6YcdwAAAZj0WNRYqiYlAmuvkoq4fm3lSoG9-Mr_kGOx7pyag0DmxZoi4B4liXlZnErX-HLJRZICTxc_U0o3_fU2k3dz1bg45chcRsovff_KODQclGMzArO2YnG2LZo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsai-sri-ram-charan-pindi-58115b2a9%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"><img className="w-[40px] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125 hover:drop-shadow" src="https://cdn-icons-png.flaticon.com/128/1384/1384088.png" alt="linkedin"/></Link>
            <Link to="https://github.com/SaiSriRamCharann"><img className="w-[40px] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-125 hover:drop-shadow" src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" alt="github"/></Link>
           </div>
           <div className="flex gap-15 justify-center">
            <h3 className="cursor-pointer hover:underline hover:decoration-red-500"><Link to="/about">AboutUs</Link></h3>
            <h3 className="cursor-pointer hover:underline hover:decoration-red-500"><Link to="/contact"></Link>Contact</h3>
            <h3 className="cursor-pointer hover:underline hover:decoration-red-500"><Link to="/privacypolicy"></Link>PrivacyPolicy</h3>
           </div>
        </div>
    )
}

export default Footer;