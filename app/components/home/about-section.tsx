import React from 'react'
import './about.scss'
import Image from 'next/image'
import ceo from '../../assets/CEO.jpg'


const AboutSection = () => {

  return (
    <div className='container fluid-container'>
      <div className='container-header'>
          <div className='about'>
            <b  style={{fontSize:'2.5rem'}}className="wine_color">About Us</b>
            <span className='grey_color'>We are the leading start Up forex trading company</span>
          </div>
          <div className="about_container">
            <div className='about_left'>
              

              <span className='wine_color msg'>We have been providing quality <br/>services for more than 3 years </span>
              <div>
                <Image alt="CEO" src={ceo} width={50} height={50}/>
                <span className='wine_color' style={{fontWeight:'bold'}}>Dalli Fx,<span className='grey_color'>CEO</span></span>
              </div>
             
            
            </div>
            
            <hr /> 
            <div className='about_right'>
             <p className='grey_color'>
              We are dedicated team committed to delivering exceptional products/Services and 
              providing a seamless user experience.With expertise in our fields we strive to meet the needs
              and exceed the expectations of our valued customers.
            </p>
            <a className='wine_color' href="/about">Read More</a>
        </div>


          </div>
          
        </div>
        
      

    </div>
  )
}

export default AboutSection