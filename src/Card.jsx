import React from 'react'
import './Card.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import icon1 from './Assets/icon-1.jpg'
import icon2 from './Assets/icon-2.jpg'
import icon3 from './Assets/icon-3.jpg'
import icon4 from './Assets/icon-4.jpg'

function Card() {
    const options = {
        items:1,
        loop:true,
        autoplayTimeout:4000,
        animateOut:'fadeout',
        nav:true,
        dots:false,
        autoplay:true,
        margin:0,  
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            },
        },
        };

  return (
    <div className='container slider pb-20'>
    <div className='pb-20'>
        <h2 className='animate-pulse animate-bounce transition-duration: 150ms;'>Types of Kites</h2>
        <hr/>
    </div>
        <OwlCarousel className='owl-theme' {...options}>
            <div class='item'>
                <div className='slider-info '>
                    <img src={icon1} className="" alt=''/>
                    <hr/>
                    <p className=''>Diamonds kites</p>
                </div>
            </div>
            <div class='item'>
            <div className='slider-info'>
                    <img src={icon2} alt=''/>
                    <hr/>
                    <p className=''>Diamonds kites</p>
                </div>
            </div>
            <div class='item'>
            <div className='slider-info'>
                    <img src={icon3} alt=''/>
                    <hr/>
                    <p className=''>Diamonds kites</p>
                </div>
            </div>
            <div class='item'>
            <div className='slider-info'>
                    <img src={icon4} alt=''/>
                    <hr/>
                    <p className=''>Diamonds kites</p>
                </div>
            </div>
        </OwlCarousel>
    
    </div>
  )
}

export default Card