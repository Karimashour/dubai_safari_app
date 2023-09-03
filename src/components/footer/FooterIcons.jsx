import "./footer.css"

const FooterIcons = ({}) => {
    return ( 
        <div className="footer-icons">
            <div className="icon">
                <i style={{color:"green"}} className="bi bi-whatsapp"></i>
            </div>
            <div className="icon">
                <i style={{color:"#0000ff"}} className="bi bi-facebook"></i>
            </div>
            <div className="icon">
                <i style={{color:"skyblue"}} className="bi bi-twitter"></i>
            </div>
            <div className="icon">
                <i style={{color:"black"}} className="bi bi-behance"></i>
            </div>
        </div>
    );
}
export default FooterIcons