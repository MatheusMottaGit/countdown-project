import React from "react";
import './counter.css'

const Counter = ({title, number})=>{
    return(
        <div className="counter">
            <p className="counter-number">{number}</p>
            <h3 className="text">{title}</h3>
        </div>
    )
}

export default Counter