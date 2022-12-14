import React, { useEffect } from "react";

const Alert = ({type, msg, removeAlert}) => {
    useEffect(() =>{
        const timeout = setTimeout(() =>{
            removeAlert();
        },5000);
        return()=>clearTimeout(timeout);
    })
    
    return(
        <p className={`text text-${type}`}>
            {msg}
        </p>
    )
}

export default Alert