import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Admins.css";

const Admin=()=>{
    const [shwPass,setShwPass]=useState(false);
    const [isAuth,setIsAuth]=useState(false);

    return <div id="Admin">
        {!isAuth && <form id="AdminForm">
            <h1>ADMIN LOGIN</h1>
            <input type="email" placeholder="Enter Email"/>
            <div>
                <input type={shwPass?"text":"password"} placeholder="Enter Password"/>
                {shwPass && <AiOutlineEyeInvisible onClick={()=>setShwPass(false)}/>}
                {!shwPass && <AiOutlineEye onClick={()=>setShwPass(true)}/>}
            </div>
            <button>LOGIN</button>
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
    </div>
}

export default Admin;