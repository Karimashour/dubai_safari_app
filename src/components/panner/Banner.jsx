import "./banner.css"
import SkyScrapper from "../../images/Capture888.PNG"
const Banner = ({}) => {
    return ( 
        <div  className="banner">  
            <div className="banner-wrapper">
                <div className="banner-layout">
                    <h1 className="banner-layout-title"> Dubai Is Waiting For You</h1>             
                </div>
                <img src={SkyScrapper} alt="dubai-banner" className="banner-img"/>
            </div>
        </div>
    );
}
export default Banner