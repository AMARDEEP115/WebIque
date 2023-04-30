import { useRef, useState } from "react";
import axios from "axios";
import { DBURL } from "../dburl";  // This to get the base url of backend API.
import "../AllCSSStyles/ContactUss.css";

const initialState={              // This is intial or default state of form data.
    name:"",
    email:"",
    mobile:"",
    message:"",
};

const ContactUs=()=>{
    const [query,setQuery]=useState(initialState);          // This is for storing the data of contact us form.
    const [message,setMessage]=useState({msg:"",bgClr:""}); // This is for toast alert message for storing alert messag and backgorund color.
    const reff=useRef();                                    // This is for taking reference of HTML Tag.

    const handleSubmit=(e)=>{  // This function for handling Contact Us form submition.
        e.preventDefault();
        if(query.email==="" && query.mobile===""){ // This will throw alert if both mobile and email is not present.

            setMessage({msg:"Please enter your email or phone number",bgClr:"orange"});

            reff.current.style.display="block";    // This is alert box function Start.
            reff.current.id="MessageIn";
            let timeOut=setTimeout(()=>{
                reff.current.id="MessageOut";
                clearTimeout(timeOut);
            },4000);
            let timeOutTwo=setTimeout(()=>{
                reff.current.style.display="none";
                reff.current.id="message";
                clearTimeout(timeOutTwo);
            },4460);                                // This is alert box function Ends.

        } else {
            let obj={};

            obj.name=query.name;
            obj.message=query.message;

            if(query.email!==""){
                obj.email=query.email;
            };
            if(query.mobile!==""){
                obj.mobile=query.mobile;
            };

            axios.post(DBURL+"/message/add",obj).then((res)=>{  // This is POST request to add new message in data base.

                if(res.data.message==="message added"){ // If message is stored in data base

                    setMessage({msg:"Thank you for contacting us, we will reach you soon...",bgClr:"green"});
                    setQuery(initialState);
                } else if(res.data.message==="Something went wrong"){ // If something went wrong while storing message in data base.

                    setMessage({msg:"Something went wrong, try again !",bgClr:"red"});
                }
                
                reff.current.style.display="block";    // This is alert box function Start.
                reff.current.id="MessageIn";
                let timeOut=setTimeout(()=>{
                    reff.current.id="MessageOut";
                    clearTimeout(timeOut);
                },4000);
                let timeOutTwo=setTimeout(()=>{
                    reff.current.style.display="none";
                    reff.current.id="message";
                    clearTimeout(timeOutTwo);
                },4460);                                // This is alert box function Ends.
                
            }).catch(err=>console.log(err));
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
        <div id="message" ref={reff} style={{display:"none",backgroundColor:message.bgClr}}>
            {message.msg}
        </div>
    </div>
}

export default ContactUs;
