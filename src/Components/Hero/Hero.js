import React from 'react'
import 'Components/Hero/Hero.css'
import heroPicture from 'Assets/oscar-hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareGithub} from '@fortawesome/free-brands-svg-icons'
import resume from 'Assets/Resume.pdf'

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
              <p>Hi, there and welcome to my portfolio! I'm a front-end developer and a cloud enthusiast
                  who's passionate about creating engaging and user-friendly web experiences.
                  With a strong foundation in HTML, CSS, and JavaScript, I can transform ideas into interactive 
                  and visually appealing websites.</p>
                  <a href={resume} target="__blank" className='downloadBtn'> View Resume </a>
            </div>
            <div className='hero-text'>
                <h1>Hello there,</h1>
                <p> I'm a front-end developer and a cloud enthusiast
                  who's passionate about creating engaging and user-friendly web experiences.
                  With a strong foundation in HTML, CSS, and JavaScript, I can transform ideas into interactive 
                  and visually appealing websites.</p>
                  <a href={resume} target="__blank" className='downloadBtn'> View Resume </a>
                <p className='download-info'>or keep scrolling to learn more about me.</p>
            </div>
        </div>
    </div>
  )
}
