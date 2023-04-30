import { useEffect, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Admins.css";
import axios from "axios";
import { DBURL } from "../dburl";

let wrngCre={msg:"wrong emaiil or password",colr:"red"};
let CrctCre={msg:"Login Successfull",colr:"green"};
let MasDel={msg:"Message Deleted",colr:"rgb(0, 98, 255)"};
let Sww={msg:"Something went wrong !",colr:"orange"};

const Admin=({ isAuth, setIsAuth })=>{
    const [shwPass,setShwPass]=useState(false);
    const [msg,setMsg]=useState({});
    const [cred,setCred]=useState({email:"",password:""});
    const [allMsg,setAllMsg]=useState([]);
    const msgRef=useRef();

    const handleAminLogin=(e)=>{
        e.preventDefault();
        axios.post(DBURL+"/admin/login",cred).then((res)=>{
            let msgres=res.data.message;
            if(msgres==="login succesfull"){
                setIsAuth(true);
                setMsg(CrctCre);
                localStorage.setItem("webiqueAuth",true);
            } else if(msgres==="Please check email or password"){
                setMsg(wrngCre);
            } else if(msgres==="Something went wrong"){
                setMsg(Sww);
            }
            msgRef.current.style.display="block";
            msgRef.current.id="ToastIn";
            let timeOut=setTimeout(()=>{
                msgRef.current.id="ToastOut";
                clearTimeout(timeOut);
            },4000);
            let timeOutTwo=setTimeout(()=>{
                msgRef.current.style.display="none";
                msgRef.current.id="Toast";
                clearTimeout(timeOutTwo);
            },4460);
        }).catch(err=>console.log(err));
    }

    const handleRemoveMsg=(ID)=>{
        console.log(ID);
        axios.delete(DBURL+`/message/remove/${ID}`).then((res)=>{
            let mseg=res.data.message;
            if(mseg==="message deleted"){
                setMsg(MasDel);
            } else {
                setMsg(Sww);
            }
            msgRef.current.style.display="block";
            msgRef.current.id="ToastIn";
            let timeOut=setTimeout(()=>{
                msgRef.current.id="ToastOut";
                clearTimeout(timeOut);
            },4000);
            let timeOutTwo=setTimeout(()=>{
                msgRef.current.style.display="none";
                msgRef.current.id="Toast";
                clearTimeout(timeOutTwo);
            },4460);
            let newList=allMsg.filter((el)=>el._id!==ID);
            setAllMsg(newList);
        }).catch(err=>console.log(err));
    }

    useEffect(()=>{
        axios.get(DBURL+"/message/all",cred).then((res)=>{
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
            {allMsg.map((el,index)=><div key={index} className="ARecvMsg">
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