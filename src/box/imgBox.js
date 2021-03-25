import React from 'react';
import "../routes/Intro/Intro1.css";

export default function PhilBox({ philCont }){
    const HoverDirect = "\"this.src='"+philCont.img_after+"'";
    console.log(HoverDirect);
    return(
        <div className="intro1-item"> 
            <img src={philCont.img_after}/>
        </div>
    )
}