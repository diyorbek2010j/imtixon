import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Banner.css"
import r from "../../assets/HyperX_Pulsefire_Haste_2_Mini_homepage_hero_desktop_2880x1300_6b418d9a-5de3-44f5-a20a-080fbadbf3b3_1944x.jpg"
function Banner() {
  const {pathname} = useLocation()
  if(pathname.includes("product")){
      return <></>
  }
  return (
    <div className="navbar__bottom">
      <img src={r} alt="" />
    </div>
  )
}

export default Banner