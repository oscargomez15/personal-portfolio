import React from 'react'
import 'Components/Hero/Hero.css'
import heroPicture from 'Assets/oscar-hero.png'

export const Hero = () => {
  return (
    <div className='invisible-container'>
      <div className='hero-container'>
        <h1 className='name-heading'> Oscar Gomez </h1>
        <div className='hero'>
            <img src={heroPicture} alt='Oscars-Picture'/>
            <div className='hero-text'>
                <h1>Hello there,</h1>
                <p>I'm a front end developer and a Cloud Enthusiast
                  who's willing to help your business grow and adapt to a constantly changing tech enviorment.<br/></p>
                  <input type='submit' value='Download Resume'/>
                <p className='download-info'>or keep scrolling to learn more about me.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
