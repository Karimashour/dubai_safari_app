import "./news-letter.css"
import NewsLetterImage from "../../images/Capture11.PNG"
const NewsLetter = ({}) => {
    return ( 
        <div  className="news-letter">  
            <div  className="news-letter-container">  
                <div  className="news-letter-image-wrapper">  
                    <img src={NewsLetterImage} alt="newsLetter" className="news-letter-image"/>
                </div>
                <div className="news-letter-content">
                    <h2 className="news-letter-content-title">
                        Your Dubai is Your Favourite Destination
                    </h2>
                    <p className="news-letter-content-desc">
                        Hello in our website , Hello in our website, Hello in our website
                        Hello in our website, Hello in our website.
                    </p>
                    <div className="news-letter-inputs">
                        <input type="text" placeholder="Your Email" className="news-letter-input"/>
                        <button className="news-letter-btn">Sign UP</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewsLetter