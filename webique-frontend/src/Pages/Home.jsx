import WebIque from "../Logo/WebIqueLogo.png";
import quotesBackImg from "../Logo/quotesBackImg.png";
import { Quotes } from "../Components/Quotes";
import "./Homee.css";
import { useEffect, useState } from "react";
let id;

const Home=()=>{
    const [qts,setQts]=useState(0);
    useEffect(()=>{
        id=setInterval(()=>{
            setQts(pre=>{
                if(pre<=(Quotes.length-2)){
                    return pre+1;
                } else {
                    return 0;
                }
            });
        },5000);

        return ()=>{
            return clearInterval(id);
        }
    },[]);
    return <div id="Home">
        <div id="HLeft">
            <div>
                <div>
                    <div>
                        <p>W</p><p>e</p><p>l</p><p>c</p><p>o</p><p>m</p><p>e</p>
                    </div>
                    <div>
                        <p>t</p><p>o</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>W</p><p>e</p><p>b</p><p>I</p><p>q</p><p>u</p><p>i</p><p>e</p>
                    </div>
                </div>
                <div>
                    <div><p>A</p></div>
                    <div>
                        <p>T</p><p>e</p><p>c</p><p>h</p>
                    </div>
                    <div>
                        <p>u</p><p>n</p><p>I</p><p>q</p><p>u</p><p>i</p><p>e</p>
                    </div>
                    <div>
                        <p>W</p><p>e</p><p>b</p><p>s</p><p>i</p><p>t</p><p>e</p>
                    </div>
                </div>
            </div>
            <img src={WebIque} alt="Logo" />
        </div>
        <div id="HRight" style={{backgroundImage:quotesBackImg}}>
            <p>{Quotes[qts]}</p>
        </div>
    </div>
}

export default Home;