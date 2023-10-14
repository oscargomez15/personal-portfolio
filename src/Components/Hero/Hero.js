import React from 'react'
import 'Components/Hero/Hero.css'
import heroPicture from 'Assets/oscar-hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareGithub} from '@fortawesome/free-brands-svg-icons'

export const Hero = () => {
  return (
    <div className='invisible-container'>
        <div className='hero'>
          <div className='image-container'>
              <img src={heroPicture} alt='Oscars-Picture'/>
              <h1 className='name-heading'> Oscar Gomez </h1>
              <div className='hero-socials'>
                <a href='https://github.com/oscargomez15' target='__blank'>
                  <FontAwesomeIcon icon={faSquareGithub} size='2xl'/>
                </a>

                <a href='https://www.linkedin.com/in/oscar-gomez-77b472195/' target='__blank'>
                  <FontAwesomeIcon icon={faLinkedin} size='2xl' />
                </a>        
                
                <a href='https://www.facebook.com/oscargomez1998' target='__blank'>
                  <FontAwesomeIcon icon={faSquareFacebook} size='2xl'/>
                </a>
              </div>
              <p>Hi, there and welcome to my portfolio! I'm a front end developer and a Cloud Enthusiast
                  who's willing to help your business grow and adapt to a constantly changing tech enviorment.<br/></p>
                  <input type='submit' value='Download Resume'/>
            </div>
            <div className='hero-text'>
                <h1>Hello there,</h1>
                <p>I'm a front end developer and a Cloud Enthusiast
                  who's willing to help your business grow and adapt to a constantly changing tech enviorment.<br/></p>
                  <input type='submit' value='Download Resume'/>
                <p className='download-info'>or keep scrolling to learn more about me.</p>
            </div>
        </div>
    </div>
  )
}
