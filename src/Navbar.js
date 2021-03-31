import React from "react";



const Navbar = () => {
    return(
        <div className="navbar">
            <a href="#">ABOUT US</a>
            <a href="#">FOR YOU</a>
            <a href="#">SERVICES</a>            
            <a href="#" className="active">BLOG</a>            
            <a href="#">VLOG</a>            
            <a href="#">CONTACT</a>            
        </div>
    )
}

export default Navbar;