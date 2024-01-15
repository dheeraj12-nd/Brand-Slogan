import React from 'react'
import Festivalimg from './Assets/image.jpg'
import './Zigzag.css'

function Zigzag() {
  return (
    <>
    <div className='container zigzag pt-20 pb-20'>
      <div className='row'>
        <div className='col-md-4'>
          <img src={Festivalimg} alt='' />
        </div>
        <div className='col-md-8'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
        </div>
      </div>   
    </div>
    </>
  )
}

export default Zigzag