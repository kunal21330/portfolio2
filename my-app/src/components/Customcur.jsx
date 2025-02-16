import { useEffect, useState } from "react";
import React from "react";
import './Customcur.css';


function Customcur(){
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    

    useEffect(()=>{
        const updatecur = (e) =>{
            setx(e.clientX);
            sety(e.clientY);
        }

        window.addEventListener("mousemove",updatecur);
        return () => {
            window.removeEventListener("mousemove", updatecur);
        };
    },[])
    
    return <>
    <div id ="cusmouse" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>

}

export default Customcur;