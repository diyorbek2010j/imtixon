import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { PiTiktokLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

import r from "../../assets/hyperx.png"
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
        <div className="footer__midle">
<div className="footer__collection">
  <h2>Support</h2>
  <h3>  <FaPlus />
</h3>
  <p>Product Support</p>
  <p>Contact Support</p>
  <p>Shipping Information</p>
  <p>Refund Policy</p>

</div>
<div className="footer__collection compony">
  <h2>Company</h2>
  <FaPlus />
  <p>About HyperX</p>
  <p>Limited Warranty Statement</p>
  <p>Terms and conditions of Sales <br /> and Service</p>
  <p>Personal Data Rights Notice</p>
  <p>Privacy Statement</p>
  <p>Refund Policy</p>
  <p>Use of Cookies</p>
  <p>Accessibility</p>
  <p>Careers</p>

</div>
<div className="footer__collection blog">
  <h2>Other Resources</h2>
  <FaPlus />
  <p>NGENUITY Software</p>
  <p>Blog</p>

</div>
<div className="footer__midle-img">
<img src={r} alt="" />
</div>
        </div>
    </div>
  )
}

export default Footer