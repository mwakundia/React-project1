// import React from "react";
import { Link } from  "react-router-dom";
const NavBar = () => {

return(
<nav class="navbar">
    <h2>BLOG POST</h2>
    <div className="links">
     <Link to="/" >Home</Link> 
     <Link to="/create">new Blog</Link>
    </div>
</nav>
)
}


export default NavBar;