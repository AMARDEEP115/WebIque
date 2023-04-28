import { Link } from "react-router-dom";
import FooterLogo from "../Logo/FooterLogo.png";
import "./footerr.css";

const Footer=()=>{

    const ScrollToTop=()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return <footer id="footer">
        <div id="footerTop">
            <img id="FooterLogo" src={FooterLogo} alt="Logo" />
            <div id="Socials">
                <h1>Social</h1>
                <a href="https://drive.google.com/file/d/11pN2MFLhuvhCYY2Tu3geGDQ1hh54icPE/view" target="_blank" rel="noreferrer">RESUME</a>
                <a href="https://amardeep115.github.io/" target="_blank" rel="noreferrer">PORTFOLIO</a>
                <a href="https://www.linkedin.com/in/amar-deep-8359aa246/" target="_blank" rel="noreferrer">LINKED IN</a>
                <a href="https://github.com/AMARDEEP115" target="_blank" rel="noreferrer">GITHUB</a>
            </div>
            <div id="QuickLinks">
                <h1>Quick Link</h1>
                <Link to="/" onClick={ScrollToTop}>HOME</Link>
                <Link to="/aboutus" onClick={ScrollToTop}>ABOUT US</Link>
                <Link to="/contactus" onClick={ScrollToTop}>CONTACT US</Link>
                <Link to="/admin" onClick={ScrollToTop}>ADMIN</Link>
            </div>
            <div id="Address">
                <h1>Address</h1>
                <Link>Robertsganj | Sonbhadra</Link>
                <Link>Uttar Pradesh | INDIA</Link>
                <a href="mailto:amar1998deep@gmail.com">Email : amar1998deep@gmail.com</a>
                <a href="tel:+916388898362">Mobile : (+91) 6388898362</a>
            </div>
        </div>
        <p id="copy">© 2023 WebIque, Inc. All Rights Reserved</p>
    </footer>
};

export default Footer;