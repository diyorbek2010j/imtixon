import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { PiTiktokLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__top">
          <div className="footertop__title">
            <h2>Join the #HyperXFamily on social!</h2>
            <p>Get a sneak peek at our new products when you sign up <br /> to join the HyperX Family.</p>
            <div className="footertop__icon">
            <FaInstagram />
            <CiFacebook />
            <CiTwitter />
            <PiTiktokLogo />
            <FiYoutube />

            </div>
         </div>
         <div className="footer__input">
          <h1>Sign up for our newsletter</h1>
          <p>Get a sneak peek at our new products when you sign up <br /> to join the HyperX Family.</p>
          <div className="footertop__input">
<input type="text" placeholder='Email Address' />
<button>Sign Up</button>
          </div>
         </div>
        </div>
        
    </div>
  )
}

export default Footer