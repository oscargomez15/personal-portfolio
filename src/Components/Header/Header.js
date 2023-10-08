import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

  return (
    <header>
      <div className='header-container'>

        <div className='socials-container'>
          <a href='https://github.com/oscargomez15' target='__blank'>
            <FontAwesomeIcon icon={faSquareGithub} size='2xl'/>
            <p className='socials-text'> Github </p>
          </a>

          <a href='https://www.linkedin.com/in/oscar-gomez-77b472195/' target='__blank'>
           <FontAwesomeIcon icon={faLinkedin} size='2xl' />
            <p className='socials-text'> LinkedIn </p>
          </a>        
          
          <a href='https://www.facebook.com/oscargomez1998' target='__blank'>
            <FontAwesomeIcon icon={faSquareFacebook} size='2xl'/>
            <p className='socials-text'> Facebook </p>
          </a>
        </div>

        <div className='logo-container'>

          <div className='logo'>
            <h1 className='O'>O</h1>
            <div className='logo-divider'></div>
            <div className='hide-divider'></div>
            <h1 className='G'>G</h1>
          </div>

          <div className='name'>
            <p>Oscar Gomez</p>
          </div>

          <div className='role'>
            <p>Web & Cloud Dev</p>
          </div>

        </div>
        <a href='#contact' className='contact-btn'>
          <div className='contact-me'>
              <FontAwesomeIcon icon={faEnvelope}/>
            <p>Contact Me</p>
          </div>
        </a>
      </div>
    </header>
  )
}
