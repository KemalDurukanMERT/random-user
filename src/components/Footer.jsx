import design from "../assets/design.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-div">
            <a href="https:/www.google.com/" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
                <code className="brand">{"<Cosmios/>"}</code>
            </a>
            <img src={design} alt="design" style={{ width: '40px', margin:"0 25px 0 10px"}} />
            <span>design</span>
        </div>
    )
}


export default Footer