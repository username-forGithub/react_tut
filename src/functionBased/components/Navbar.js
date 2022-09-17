import React from "react";
import { useState } from "react"
import { NavLink } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const links = [
      
        {
          id: 1,
          path: "/about",
          text: "About",
        },
        {
            id: 2,
            path: '/contact',
            text: "Contact",
          },
      ]
      const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }
      const closeMenu = () => {
        setNavbarOpen(false)
      }
  return(
    <nav>  
        <button onClick={handleToggle}>{navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (
                <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            )}
        </button>     
       
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>  
            <li className="home">
                <NavLink onClick={() => closeMenu()} to="/"><ImHome3 style={{ color: "black", fontSize: "24px" }} /></NavLink>
            </li>          
            {links.map(link => {
                return (
                <li key={link.id}>
                    <NavLink onClick={() => closeMenu()} to={link.path} >{link.text}</NavLink>
                </li>
                )
            })}          
    
        </ul>
    </nav>        
  )
}
export default Navbar