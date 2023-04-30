import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail } from "react-icons/ai"; // Getting social media icon's from react icons.
import { BsFillTelephoneFill } from "react-icons/bs"; // Getting social media icon's from react icons.
import { DBURL } from "../dburl";                     // This to get the base url of backend API.
import "../AllCSSStyles/Admins.css";

let wrngCre={msg:"wrong emaiil or password",colr:"red"};     // Message and background color, if Admin email id or password is wrong.
let CrctCre={msg:"Login Successfull",colr:"green"};          // Message and background color, if Admin email id or password is correct.
let MasDel={msg:"Message Deleted",colr:"rgb(0, 98, 255)"};   // Message and background color, if Admin deleted a message.
let Sww={msg:"Something went wrong !",colr:"orange"};        // Message and background color, if Something went wrong.

const Admin=({ isAuth, setIsAuth })=>{

    const [shwPass,setShwPass]=useState(false);              // This is to set to show or not the password entered in login form.
    const [msg,setMsg]=useState({});                         // This is to set the toast alert box message and background color.
    const [cred,setCred]=useState({email:"",password:""});   // This is to store the email and passwored entered in form.
    const [allMsg,setAllMsg]=useState([]);                   // This is to store all the received messages that we get from data base.
    const msgRef=useRef();                                   // This is for taking reference of HTML Tag.

    const handleAminLogin=(e)=>{                             // This function is for handling the admin login form submition.
        e.preventDefault();

        axios.post(DBURL+"/admin/login",cred).then((res)=>{  // This is POST request to authenticate the admin.

            let msgres=res.data.message;

            if(msgres==="login succesfull"){                 // If entered email id and password for admin login is correct.
                setIsAuth(true);
                setMsg(CrctCre);
                localStorage.setItem("webiqueAuth",true);

            } else if(msgres==="Please check email or password"){  // If entered email id or password for admin login is wrong.

                setMsg(wrngCre);

            } else if(msgres==="Something went wrong"){     // If something went wrong.

                setMsg(Sww);
            }

            msgRef.current.style.display="block";    // This is alert box function Start.
            msgRef.current.id="ToastIn";
            let timeOut=setTimeout(()=>{
                msgRef.current.id="ToastOut";
                clearTimeout(timeOut);
            },4000);
            let timeOutTwo=setTimeout(()=>{
                msgRef.current.style.display="none";
                msgRef.current.id="Toast";
                clearTimeout(timeOutTwo);
            },4460);                                 // This is alert box function Ends.

        }).catch(err=>console.log(err));
    }

    const handleRemoveMsg=(ID)=>{                                     // This function handles the message delete functionailty.

        axios.delete(DBURL+`/message/remove/${ID}`).then((res)=>{     // This DELETE request to delete the specific message.

            let mseg=res.data.message;

            if(mseg==="message deleted"){                             // If message is deleted from data base.
                setMsg(MasDel);

                let newList=allMsg.filter((el)=>el._id!==ID);         // Updating the list od messages after deleting the message from data base.
                setAllMsg(newList);

            } else {                                                  // If something went wrong.
                setMsg(Sww);
            }

            msgRef.current.style.display="block";    // This is alert box function Start.
            msgRef.current.id="ToastIn";
            let timeOut=setTimeout(()=>{
                msgRef.current.id="ToastOut";
                clearTimeout(timeOut);
            },4000);
            let timeOutTwo=setTimeout(()=>{
                msgRef.current.style.display="none";
                msgRef.current.id="Toast";
                clearTimeout(timeOutTwo);
            },4460);                                 // This is alert box function Ends.

        }).catch(err=>console.log(err));
    }

    useEffect(()=>{

        axios.get(DBURL+"/message/all",cred).then((res)=>{ // To get all messages recived from data base
            setAllMsg(res.data.message);
        }).catch(err=>console.log(err));

    },[]);

    return <div id="Admin">
        {!isAuth && <form id="AdminForm" onSubmit={(e)=>handleAminLogin(e)}>
            <h1>ADMIN LOGIN</h1>
            <input value={cred.email} type="email" placeholder="Enter Email" onChange={(e)=>setCred({...cred,email:e.target.value})}/>
            <div>
                <input value={cred.password} type={shwPass?"text":"password"} placeholder="Enter Password" onChange={(e)=>setCred({...cred,password:e.target.value})}/>
                {shwPass && <AiOutlineEyeInvisible onClick={()=>setShwPass(false)}/>}
                {!shwPass && <AiOutlineEye onClick={()=>setShwPass(true)}/>}
            </div>
            <button type="submit">LOGIN</button>
        </form>}
        {isAuth && <div id="MessagesRecived">
            <h1>RECEIVED MESSAGES</h1>
            {allMsg.length===0 ? <h5>Nothing To Display</h5>  : allMsg.map((el,index)=><div key={index} className="ARecvMsg">
                <div>
                    <div><p>Name : </p><p>{el.name}</p></div>
                    {el.email && <div><p>Email :</p><p>{el.email}</p></div>}
                    {el.mobile && <div><p>Mobile :</p><p>{el.mobile}</p></div>}
                    <div id="MessageBox"><p>Message :</p><p className="MessageP">{el.message}</p></div>
                </div>
                <div id="MsgRmRpBox">
                    <button onClick={()=>handleRemoveMsg(el._id)}>REMOVE</button>
                    {el.email && <a className="Reply" href={`mailto:${el.email}`} rel="noreferrer"><AiOutlineMail style={{marginRight:"5px",marginBottom:"-1px"}}/>REPLY</a>}
                    {el.mobile && <a className="Reply" href={`tel:${el.mobile}`}  rel="noreferrer"><BsFillTelephoneFill style={{marginRight:"5px",marginBottom:"-1px"}}/>REPLY</a>}
                </div>
            </div>)}
        </div>}
        <div id="Toast" ref={msgRef} style={{background:msg.colr,display:"none"}}>{msg.msg}</div>
    </div>
}

export default Admin;