import React from 'react'
import Landy from './Land.module.css'
import Center from './assets/center.png'
import Middle from './assets/middle.png'
import {details} from './data'
import Event from './assets/Event.png'
import LandSection from './components/LandSection'



const Land = () => {
  return (
    <div className={Landy.container}>
        <div className={Landy.card}>
            
      {
        details.map((item)=>(
          <div className={Landy.cardContent}>
            <img src={item.Image} />
              <h1>{item.header}</h1>
              <p>{item.para}</p>
             <div>
             <img src={item.im} />
              <small>{item.small}</small>
             </div>
          </div>     
        ))         
        }
        </div>
        <div>
            <img src={Center}   />
            <img src={Middle}   />
    </div>
        <div>
          <div className={Landy.wrapper}>
              <h1>Carol of 9 Lessons</h1>
          </div>
        <div className={Landy.wrap}> 
          <div>
          <LandSection img= {Event} namey = {'Master'}
           para={'With the regular ticket, you can have an individual access to te ev...'} 
           price = {3500} 
          />
          </div>
            <div>
            <LandSection img= {Event} namey = {'Regular'} 
            para={'With the regular ticket, you can have an individual access to te ev...'} 
            price = {4000} 
          />
            </div>
            <div>
            <LandSection img= {Event} namey = {'Regular'}
            para={'With the regular ticket, you can have an individual access to te ev...'} 
            price = {9000} 
          />
            </div>
            <div>
            </div>
            <div>
            <LandSection img= {Event} namey = {'Regular'}
             para={'With the regular ticket, you can have an individual access to te ev...'} 
             price = {4300} 
          />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Land