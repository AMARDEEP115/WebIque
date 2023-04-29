import { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Admins.css";

const Admin=()=>{
    const [shwPass,setShwPass]=useState(false);
    const [isAuth,setIsAuth]=useState(false);
    const [msg,setMsg]=useState({});
    const msgRef=useRef();

    const handleAminLogin=(e)=>{
        e.preventDefault();
        let wrngCre={msg:"wrong emaiil or password",colr:"red"};
        let CrctCre={msg:"Login Successfull",colr:"green"};
        let MasDel={msg:"Message Deleted",colr:"rgb(0, 98, 255)"};
        let Sww={msg:"Something went wrong !",colr:"orange"};
        // setMessage("Please enter your email or phone number");
        setMsg(Sww)
        msgRef.current.style.display="block";
        msgRef.current.id="ToastIn";
        // setQuery(initialState);
        let timeOut=setTimeout(()=>{
            msgRef.current.id="ToastOut";
            clearTimeout(timeOut);
        },4000);
        let timeOutTwo=setTimeout(()=>{
            msgRef.current.style.display="none";
            msgRef.current.id="Toast";
            clearTimeout(timeOutTwo);
        },4460);
    }

    return <div id="Admin">
        {!isAuth && <form id="AdminForm" onSubmit={(e)=>handleAminLogin(e)}>
            <h1>ADMIN LOGIN</h1>
            <input type="email" placeholder="Enter Email"/>
            <div>
                <input type={shwPass?"text":"password"} placeholder="Enter Password"/>
                {shwPass && <AiOutlineEyeInvisible onClick={()=>setShwPass(false)}/>}
                {!shwPass && <AiOutlineEye onClick={()=>setShwPass(true)}/>}
            </div>
            <button type="submit">LOGIN</button>
        </form>}
        {/* <BsFillTelephoneFill style={{marginRight:"5px",marginBottom:"-1px"}}/><AiOutlineMail style={{marginRight:"5px",marginBottom:"-1px"}}/> */}
        {isAuth && <div id="MessagesRecived">
            <h1>RECEIVED MESSAGES</h1>
            <div className="ARecvMsg">
                <div>
                    <div><p>Name : </p><p>fsdgdbfdnbfnfgnfgn fsdgdbfdnbfnfgnfgn</p></div>
                    <div><p>Email :</p><p>dsddbdbdbdfsddsvdbcbcx</p></div>
                    <div><p>Mobile :</p><p>dvdsvdsbbfdbdbfdbfdbfbb</p></div>
                    <div id="MessageBox"><p>Message :</p><p className="MessageP">sdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdngfdgfdgfdgfdgfdgbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdngfdgfdgfdgfdgfdgbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdngfdgfdgfdgfdgfdgbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdngfdgfdgfdgfdgfdgbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnbsdhvdsobijdobdfbidhbifbdifbdfibnfdbnfdnb</p></div>
                </div>
                <div id="MsgRmRpBox">
                    <button>REMOVE</button>
                    <a className="Reply" href="mailto:example@gmail.com" >REPLY</a>
                </div>
            </div>
        </div>}
        <div id="Toast" ref={msgRef} style={{background:msg.colr,display:"none"}}>{msg.msg}</div>
    </div>
}

export default Admin;