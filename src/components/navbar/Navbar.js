import { Link } from "react-router-dom";
import "./Navbar.css";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color,setColor]=useState(false)
  const changeColor =()=> {
    if(window.screenY>=100){
      setColor(true)
    }
  }
  window.addEventListener("scroll",changeColor);
  return (
    <div className={color?"header header-bg":"header"}>
      <Link to={"/"}>
        <h1>Ravi Shankar Mehta</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaBars size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
