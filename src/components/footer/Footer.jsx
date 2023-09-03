import { languages,currencies } from "../../data";
import FooterIcons from "./FooterIcons";
import SelectBox from "./SelectBox";
import "./footer.css"

const Footer = ({}) => {
    return ( 
        <footer  className="footer">  
        <div className="footer-item select-box-wrapper">
        <SelectBox items={languages} labels="Languages"/>
        <SelectBox items={currencies} labels="Currency"/>
        </div>
            <div  className="footer-item">  
                <h3 className="footer-item-title">Support</h3>
                <ul className="footer-item-list">
                    <li className="footer-item-link">Contact</li>
                    <li className="footer-item-link">Notice</li>
                    <li className="footer-item-link">Privacy</li>
                    <li className="footer-item-link">Terms</li>
                    <li className="footer-item-link">Map</li>
                </ul>
            </div>
            <div  className="footer-item">  
                <h3 className="footer-item-title">Company</h3>
                <ul className="footer-item-list">
                    <li className="footer-item-link">About</li>
                    <li className="footer-item-link">Career</li>
                    <li className="footer-item-link">Blog</li>
                    <li className="footer-item-link">Press</li>
                    <li className="footer-item-link">Cards</li>
                    <li className="footer-item-link">Magazine</li>
                    <li className="footer-item-link">Travel</li>
                </ul>
            </div>
            <div  className="footer-item">  
                <h3 className="footer-item-title">Work With Us</h3>
                <ul className="footer-item-list">
                    <li className="footer-item-link">Supply</li>
                    <li className="footer-item-link">Partner</li>
                </ul>
                <FooterIcons/>
                <div className="footer-copy-right">
                    Copyright &copy; 2023 Dubai Safari
                </div>
            </div>
        </footer>
    );
}
export default Footer