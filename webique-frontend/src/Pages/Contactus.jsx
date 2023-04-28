import { useState } from "react";

const initialState={
    name:"",
    email:"",
    mobile:"",
    message:"",
};

const ContactUs=()=>{
    const [query,setQuery]=useState(initialState);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(query.email==="" || query.number===""){
            alert("Please enter your email or phone number");
        } else {
            console.log(query);
        }
    };

    return <div>
        <h1>ContactUs</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder="Enter your name" value={query.name} onChange={(e)=>setQuery({...query,name:e.target.value})}/>
            <input type="text" placeholder="Enter your e-mail" value={query.email} onChange={(e)=>setQuery({...query,email:e.target.value})}/>
            <input type="text" placeholder="Enter your phone number" value={query.mobile} onChange={(e)=>setQuery({...query,mobile:e.target.value})}/>
            <textarea placeholder="Enter your message" value={query.message} onChange={(e)=>setQuery({...query,message:e.target.value})} required></textarea>
            <input type="submit" name="" value="SUBMIT" />
        </form>
    </div>
}

export default ContactUs;