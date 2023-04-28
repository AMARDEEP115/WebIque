import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import WebIque from "../Logo/WebIqueLogo.png";
import "./Headerr.css";

const Header=()=>{
    const refTag=useRef();
    const Navi=useNavigate();

    const openDrawer=()=>{
        refTag.current.id="DrawerOpen";
    }

    const closeDrawer=()=>{
        refTag.current.id="DrawerClose";
        let TimeOut=setTimeout(()=>{
            refTag.current.id="Drawer";
            clearTimeout(TimeOut);
        },480);
    }

    return <header id="Header">
        <img id="Logo" src={WebIque} alt="Logo" onClick={()=>Navi("/")}/>
        <div id="FullScreenNav">
            <Link to="/">HOME</Link>
            <Link to="/aboutus">ABOUT US</Link>
            <Link to="/contactus">CONTACT US</Link>
            <Link to="/admin">ADMIN</Link>
        </div>
        <div id="Hamburger" onClick={openDrawer}>
            <div id="F"></div>
            <div id="S"></div>
            <div id="T"></div>
        </div>
        <div id="Drawer" ref={refTag}>
            <div>
                <h1>Web<span id="Ii">I</span>que</h1>
                <h1 onClick={closeDrawer}>X</h1>
            </div>
            <hr/>
            <div id="SmallScreenNav" onClick={closeDrawer}>
                <Link to="/">HOME</Link>
                <Link to="/aboutus">ABOUT</Link>
                <Link to="/contactus">CONTACT US</Link>
                <Link to="/admin">ADMIN</Link>
            </div>
        </div>
    </header>
}

export default Header;