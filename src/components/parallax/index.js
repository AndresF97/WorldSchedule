import React from "react"
import "./style.css"


function Parallax(){
    const parallax = document.getElementById("mainParallaxImg");
    window.addEventListener("scroll",function(){
        let offset = window.pageYOffset;
        console.log('Offset:' + offset)
        parallax.style.backgroundPositionY  = offset * 0.7 +"px";
    })


    return(
        <>
        <div>
            <span id="mainParallaxImg"></span>
        </div>
        </>
    )
}

export default Parallax;