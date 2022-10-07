import React from "react";
import logo from '../Images/logo.webp'
const Home = () => {
    return(
        <>
            <div className="Welcom">
                 <h1 className="WelcomeInfo"><u> Welcome to the Vkaps It Solution </u></h1>
                 <hr />
                 <img src={logo}></img>
            </div>
           
        </>
    )
}
 export default Home