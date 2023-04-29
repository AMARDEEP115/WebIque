import WebIque from "../Logo/WebIqueLogo.png";
import quotesBackImg from "../Logo/quotesBackImg.png";
import "./Homee.css";

const Home=()=>{
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
            <h1>QUOTES</h1>
            <h1>QUOTES</h1>
            <h1>QUOTES</h1>
            <h1>QUOTES</h1>
            <h1>QUOTES</h1>
            <h1>QUOTES</h1>
            <h1>QUOTES</h1>
        </div>
    </div>
}

export default Home;