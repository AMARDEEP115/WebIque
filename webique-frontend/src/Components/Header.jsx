import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import WebIque from "../Logo/WebIqueLogo.png";           // This to get website logo for Navbar.
import "../AllCSSStyles/Headerr.css";

const Header=({ isAuth, setIsAuth })=>{
    const refTag=useRef();         // This is for taking reference of HTML Tag.
    const Navi=useNavigate();      // This is to navigate to another page.

    const openDrawer=()=>{                   // This function is to open menu bar for small screen.
        refTag.current.id="DrawerOpen";
    }

    const closeDrawer=()=>{                   // This function is to close menu bar for small screen.
        refTag.current.id="DrawerClose";
        let TimeOut=setTimeout(()=>{
            refTag.current.id="Drawer";
            clearTimeout(TimeOut);
        },480);
    }

    const handleAdminLogout=()=>{             // This function is to handle admin logout.
        setIsAuth(false);
        localStorage.removeItem("webiqueAuth");
    }

    return <header id="Header">
        <img id="Logo" src={WebIque} alt="Logo" onClick={()=>Navi("/")}/>
        <div id="FullScreenNav">
            <Link to="/">HOME</Link>
            <Link to="/aboutus">ABOUT US</Link>
            <Link to="/contactus">CONTACT US</Link>
            <Link to="/admin">ADMIN</Link>
            {isAuth && <Link onClick={handleAdminLogout}>LOGOUT</Link>}
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
                {isAuth && <Link onClick={handleAdminLogout}>LOGOUT</Link>}
            </div>
        </div>
    </header>
}

export default Header;