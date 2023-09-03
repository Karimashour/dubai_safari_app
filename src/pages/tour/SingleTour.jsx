import {useParams} from "react-router-dom";
import { toursList } from "../../data";
import Rating from "../../components/tours/Rating";
import "../tour/single-tour.css"
import BookNow from "./BookNow";
const SingleTour = () =>{

    const {id}=useParams();
    const tour = toursList.find(t => t.id === +id )//parseInt(id) === +id


    return (
        <section className="tour">
            <div className="tour-step">
                United Arab Emirates <i className="bi bi-chevron-right"></i>
                Things to do in dubai  <i className="bi bi-chevron-right"></i> Safari
            </div>
            <div className="tour-category">
                ADVENTURE
            </div>
            <h1 className="tour-title">Dubai : {tour.title}</h1>
            <div className="tour-info">
                <Rating rating={tour.rating}   reviews={tour.reviews}/>
                <div className="tour-provider">
                    Activity Provider : <span>Karim Ashour</span>
                </div>
            </div>
            <div className="tour-img-wrapper">
                <img src={tour.image} alt={tour.title} className="tour-img"/>
                <BookNow priceFrom={tour.priceFrom}/>
            </div>
            <p className="tour-description">
                lorem this nothing find from static getDerived StateFrom Props(props, state) 
                this .thenresult.catch err define'require','dependency', factory'use strict';lorem this nothing find from static getDerived State FromProps(props, state) 
                this .thenresult.catch err define'require','dependency', factory'use strict';        
            </p>
            <div className="tour-more-info">
                <h2 className="tour-info-title">About This Activity</h2>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">                   
                        <i style={{color:'#c2ff33'}} className="bi bi-calendar3"></i>Free Cancellation
                    </div>  
                    <p className="tour-info-item-desc">lorem this nothing find from static getDerivedStateFromProps</p>                 
                </div>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">                   
                        <i style={{color:'#3336ff'}} className="bi bi-calendar-plus-fill"></i>Reserve Now & Pay Later
                    </div>  
                    <p className="tour-info-item-desc">lthenresult.catch err define'require','dependency';</p>                 
                </div>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">                   
                        <i style={{color:'#ff33ee'}} className="bi bi-virus"></i>Covid - 19
                    </div>  
                    <p className="tour-info-item-desc">lthenresult.catch err define'require','dependency';</p>                 
                </div>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">                   
                        <i style={{color:'#ff3355'}} className="bi bi-clock-history"></i>Durations 4 - 8 hours
                    </div>  
                    <p className="tour-info-item-desc">lorem this nothing find from static getDerivedStateFromProps</p>                 
                </div>
                <div className="tour-info-item">
                    <div className="tour-info-item-title">                   
                        <i style={{color:'#1d6d13'}} className="bi bi-person-check"></i>Live Tour Guide
                    </div>  
                    <p className="tour-info-item-desc">l'dependency'functionrequire, factory'use strict';</p>                 
                </div>
            </div>
        </section>
    );
}
export default SingleTour;