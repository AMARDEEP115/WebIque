import { Routes, Route } from "react-router-dom";
import AboutUs from "../Pages/Aboutus";
import Admin from "../Pages/Admin";
import ContactUs from "../Pages/Contactus";
import Home from "../Pages/Home";

const AllRoutes=({ isAuth, setIsAuth })=>{               // This tell the which page to show at what roue.

    return <Routes>
        <Route path="/" element={<Home/>} />                                                 {/*  Home Page Route       */}

        <Route path="/aboutus" element={<AboutUs/>} />                                       {/*  About Us Page Route */}

        <Route path="/contactus" element={<ContactUs/>} />                                   {/*  Contact Us Page Route */}

        <Route path="/admin" element={<Admin isAuth={isAuth} setIsAuth={setIsAuth}/>} />     {/*  Admin Page Route */}
    </Routes>
}


export default AllRoutes;