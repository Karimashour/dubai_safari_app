
import "../tour/single-tour.css"
const BookNow = ({priceFrom}) =>{



    return (
        <div className="tour">
            <div className="book-now">
                <div className="book-now-header">
                    Save Up to 70%
                </div>
                <div className="book-now-body">
                    <div className="book-now-booked">
                        Booked 40 times yesterday
                    </div>
                    <div className="book-now-price-wrapper">
                        <div className="book-now-price">
                            <b>${priceFrom}</b>
                            <p>per person</p>
                        </div>
                        <button className="book-now-btn">Book Now</button>
                    </div>
                    <p  className="book-now-more-info">
                        <i className="bi bi-calendar-check"></i>
                        <span>Reserve Now And Pay Later </span>
                        to book your spot and pay nothing today
                    </p>
                </div>
            </div>
        </div>
    );
}
export default BookNow;