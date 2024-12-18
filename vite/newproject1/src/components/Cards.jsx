import React from 'react'
import pic from "../images/download.png"
import "../components/Cards.css"

const Cards = (props) => {
  return (
    <div className="cards">
        <h2>{props.name}</h2>
        <img src={props.pic} alt="" />
        <h2>{props.roll}</h2>
    </div>
  )
}

export default Cards