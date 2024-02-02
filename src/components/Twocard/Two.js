import React from 'react'
import "./Two.css"
import u  from "../../assets/uskuna.jfif"
import d from "../../assets/dow.jfif"
function Two() {
  return (
    <div className='twocard'>
        <div className="twocard__title-img">
            <h1>ELEVATE YOUR <br /> CONTENT</h1>
            <img src={u} alt="" />
        </div>
        <div className="twocard__img">
            <img src={d} alt="" />
        </div>
    </div>
  )
}

export default Two