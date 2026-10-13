import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";
function App(){
 const [color,setColor]=useState("lime"); const [angle,setAngle]=useState(0);
 return <main>
  <nav><b>FORM / 01</b><span>OBJECTS FOR EVERYDAY LIFE</span><button>MENU +</button></nav>
  <section className="hero">
   <div className="copy"><p>THE NEW / FIELD SYSTEM</p><h1>DESIGN<br/><i>IN MOTION.</i></h1><p className="desc">A fictional product landing page built to demonstrate depth, lighting, interaction and responsive motion without external 3D assets.</p><button className="cta">EXPLORE PRODUCT ↗</button></div>
   <div className={"product "+color} style={{"--angle":angle+"deg"}} onPointerMove={e=>setAngle((e.clientX/innerWidth-.5)*22)}>
     <div className="shadow"/><div className="device"><div className="screen"><span>FORM</span><b>09:41</b></div><div className="button b1"/><div className="button b2"/><div className="side"/></div>
   </div>
  </section>
  <section className="swatches"><span>COLOR /</span>{["lime","violet","silver"].map(c=><button className={color===c?"sel":""} onClick={()=>setColor(c)} key={c}>{c}</button>)}</section>
  <section className="details"><div><span>01</span><h2>Quiet<br/>hardware.</h2></div><p>Precision surfaces, restrained typography and a deliberately physical interface. Move your pointer over the object to change the perspective.</p><div className="spec"><b>48mm</b><span>CASE</span><b>7.2mm</b><span>THICKNESS</span><b>24h</b><span>BATTERY</span></div></section>
 </main>
}
createRoot(document.getElementById("root")).render(<App/>);
