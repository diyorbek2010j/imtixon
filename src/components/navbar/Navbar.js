import React from 'react'
import "./Navbar.css"
import x from "../../assets/hyperx.png"
import m from "../../assets/mouse.jfif"
import { IoMdMenu } from "react-icons/io";  
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar__top">
            <p>Important Information: Our Privacy Statement has been updated, please click here</p>
        </div>
        <div className="navbar__middle">
        <IoMdMenu className='menu' />

            <img src={x}  alt="" />
            <ul className="nav__collection">
                <li className="nav__item">Shop By Cotegory</li>
                <li className="nav__item">Shop By Platform</li>
                <li className="nav__item">We are all gamer</li>
                <li className="nav__item">Support</li>

            </ul>
<div className="nav__icon">
<IoIosSearch />

</div>
        </div>
        <div className="navbar__bottom">
        </div>
    </div>
  )
}

export default Navbar