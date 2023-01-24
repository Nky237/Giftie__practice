import React from 'react'
import landSec from './landsec.module.css'
type Greet = {
    img: string
    namey: string
    para:string
    price: number
}
const LandSection = ({img, namey,para, price}:Greet) => {
  return (
    <div>
    <div className={landSec.wrapper}>
      <div className={landSec.image}>
      <img src={img} alt="" />
      </div>
    <div className={landSec.text}>
        <h1>{namey}</h1>
        <p>{para}</p>
        <h3>{price}</h3>
    </div>
    </div>
    <div className={landSec.btn}>
        <button>View ticket</button>
        <button>+ Add</button>
    </div>
    </div>
  )
}

export default LandSection