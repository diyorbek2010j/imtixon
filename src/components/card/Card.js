import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Card.css"
import i from "../../assets/WEB_COD_720x720_adf0b9fd-7620-4d68-b0c7-3ef3418382eb_720x.jpg"
import m from "../../assets/kf-4-hyperx-procast-professional-xlr-microphone_720x.jpg"
import g from "../../assets/HyperX_Armada_25_homepage_hero_mobile_720x720_1_720x.jpg"
import { GoArrowUpRight } from "react-icons/go";

function Card() {
    const {pathname} = useLocation()
    if(pathname.includes("product")){
        return <></>
    }
  return (
    <div className='card'>
         <div className="card__cards">
            <div className="card__img">
                <img src={i} alt="" />
            </div>
            <div className="card__title">
                <p>Ready up, Squad!</p>
                <h1>CALL OF DUTY®: MODERN WARFARE III DIGITAL OFFER</h1>
                <h3>Receive free HyperX in-game items for Call of Duty®: Modern Warfare III with orders over $30!*</h3>
                <button className='card__btn'>Loren More <GoArrowUpRight /></button>
            </div>
         </div>
         <div className="card__cards">
            <div className="card__title">
                <p>Professional-grade condenser mic.</p>
                <h1>HYPERX PROCAST</h1>
                <h3>The HyperX ProCast is a professional-grade condenser microphone with an XLR connection built for people who make a living with their voices.</h3>
                <button className='card__btn'>Shop Now <GoArrowUpRight /></button>
            </div>
            <div className=" img__card card__img">
                <img src={m} alt="" />
            </div>
         </div>
         <div className="card__cards">
            <div className="card__img">
                <img src={g} alt="" />
            </div>
            <div className="card__title">
                <p></p>
                <h1>STREAMERS COLLECTION</h1>
                <h3>From gaming microphones with stunning RGB, to gaming monitors optimized for streaming, HyperX has everything you need for streaming and content creation.</h3>
                <button className='card__btn'>Shop Now <GoArrowUpRight /></button>
            </div>
         </div>
    </div>


  )
}

export default Card