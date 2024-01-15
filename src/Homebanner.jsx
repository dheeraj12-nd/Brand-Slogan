import React from 'react'
import Homebannerimg from './Assets/banner.jpg'
import './Homebanner.css'

function Homebanner() {
  return (
    <div className='homebanner'>
        <img src={Homebannerimg} alt=''></img>
    </div>
  )
}

export default Homebanner