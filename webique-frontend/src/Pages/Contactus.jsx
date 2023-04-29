import { useRef, useState } from "react";
import "./ContactUss.css";
import { Link } from "react-router-dom";

const initialState={
    name:"",
    email:"",
    mobile:"",
    message:"",
};

const ContactUs=()=>{
    const [query,setQuery]=useState(initialState);
    const [message,setMessage]=useState("");
    const reff=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(query.email==="" && query.mobile===""){
            setMessage("Please enter your email or phone number");
            reff.current.style.display="block";
            reff.current.id="MessageIn";
            setQuery(initialState);
            let timeOut=setTimeout(()=>{
                reff.current.id="MessageOut";
                clearTimeout(timeOut);
            },4000);
            let timeOutTwo=setTimeout(()=>{
                reff.current.style.display="none";
                reff.current.id="message";
                clearTimeout(timeOutTwo);
            },4460);
        } else {
            setMessage("Thank you for contacting us, we will reach you soon...");
            reff.current.style.display="block";
            reff.current.id="MessageIn";
            setQuery(initialState);
            let timeOut=setTimeout(()=>{
                reff.current.id="MessageOut";
                clearTimeout(timeOut);
            },4000);
            let timeOutTwo=setTimeout(()=>{
                reff.current.style.display="none";
                reff.current.id="message";
                clearTimeout(timeOutTwo);
            },4460);
        }
    };

    return <div id="Contact">
        <h1 style={{fontFamily:"serif"}}>GET IN TOUCH</h1>
        <div>
            <div id="ContactAddress">
                <div id="Email">
                    <h1>Email Id :</h1>
                    <a href="mailto:amar1998deep@gmail.com">amar1998deep@gmail.com</a>
                </div>
                <hr/>
                <div id="Phone">
                    <h1>Phone Number :</h1>
                    <a href="tel:+916388898362">+91-6388898362</a>
                </div>
                <hr/>
                <div id="Add">
                    <h1>Address :</h1>
                    <p>Robertsganj, Sonbhadra</p>
                    <p>Uttar Pradesh, 231216</p>
                </div>
            </div>
            <form onSubmit={(e)=>handleSubmit(e)} id="Form">
                <input type="text" placeholder="Enter your name" value={query.name} onChange={(e)=>setQuery({...query,name:e.target.value})}/>
                <input type="email" placeholder="Enter your e-mail" value={query.email} onChange={(e)=>setQuery({...query,email:e.target.value})}/>
                <input type="tel" placeholder="Enter your phone number" value={query.mobile} onChange={(e)=>setQuery({...query,mobile:e.target.value})}/>
                <textarea placeholder="Enter your message" value={query.message} onChange={(e)=>setQuery({...query,message:e.target.value})} required></textarea>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
        <div id="message" ref={reff} style={{display:"none"}}>
            {message}
        </div>
    </div>
}

export default ContactUs;
