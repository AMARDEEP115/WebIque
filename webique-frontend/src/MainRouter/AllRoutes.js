import { Routes, Route } from "react-router-dom";
import AboutUs from "../Pages/Aboutus";
import Admin from "../Pages/Admin";
import ContactUs from "../Pages/Contactus";
import Home from "../Pages/Home";

const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/admin" element={<Admin/>} />
    </Routes>
}


export default AllRoutes;