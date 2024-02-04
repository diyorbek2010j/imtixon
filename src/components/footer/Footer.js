import React from 'react'
import "./Footer.css"
import a from "../../assets/shopify_pay-957a48d1202dc65a7890b292de764ee886f7e64cea486ae82e291e9dc824c914.svg"
import b from "../../assets/american_express-12858714bc10cdf384b62b8f41d20f56d8c32c1b8fed98b662f2bfc158dcbcf0.svg"
import c from "../../assets/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg"
import d from "../../assets/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg"
import h from "../../assets/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg"
import w from "../../assets/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
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
        <div className="footer__bottom">
<img src={a} alt="" />
<img src={b} alt="" />
<img src={d} alt="" />
<img src={c} alt="" />
<img src={h} alt="" />
<img src={w} alt="" />

        </div>
    </div>
  )
}

export default Footer