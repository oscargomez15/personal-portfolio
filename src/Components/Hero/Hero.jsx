import React from 'react'
import 'Components/Hero/Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faFreeCodeCamp, faLinkedin, faMeta, faSquareFacebook, faSquareGithub} from '@fortawesome/free-brands-svg-icons'
//import resume from 'Assets/Resume.pdf'
import oscar from 'Assets/oscar.jpeg'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

export const Hero = () => {
  return (
    <main className="hero-wrapper">
      <div className="hero-container">
      <nav>
        <header className="name">
          <h1>oscar gomez</h1>
          <h2>Front End Developer</h2>
        </header>
      <ul>
        <li><a href="#projects">projects</a></li>
        <li><a href="#skills">skills</a></li>
        <div className='dropdown'>
          <button className='dropdown-btn'> social <FontAwesomeIcon icon={faChevronDown} size='sm'/></button>
          <div className="dropdown-content">
            <a href="https://www.facebook.com/oscargomez1998" target='__blank'> <FontAwesomeIcon icon={faSquareFacebook} /> facebook</a>
            <a href="https://github.com/oscargomez15" target='__blak'> <FontAwesomeIcon icon={faSquareGithub} /> github</a>
            <a href="https://www.linkedin.com/in/oscargomez1998/"target='__blank'> <FontAwesomeIcon icon={faLinkedin} /> linkedIn</a>
          </div>
        </div>
        <li className='contact-btn'><a href="#contact">contact</a></li>
      </ul>
      </nav>

      <section className="hero-grid">
        <article className="welcome-box">
          <h2 className='primary-heading'>Hey, <br/> I'm Oscar Gomez <br/></h2>
          <p>A <span>Front End Developer</span> emphasized in delivering scalable, optimized and accessible designs to meet industry standards.</p>
          <a href="src\Assets\Resume.pdf" download={true}>
            <div className="resume">
              <p>Download Resume</p>
            </div>
          </a>
        </article>
        <figure>
          <img src={oscar} alt="oscar-picture" />
          <a href="#contact"> Let's Connect </a>
        </figure>

        <article className="profile-description">
          <h3 className='third-heading'>Facts About Me</h3>
          <div className="facts-container">
            <div className="fact">
              <p>
                <FontAwesomeIcon icon={faHandPointRight} style={{color:"black"}}/>
                Located in Cape Coral, Florida</p>
            </div>
            <div className="fact">
              <p><FontAwesomeIcon icon={faHandPointRight} style={{color:"black"}}/>
              Learning new things is my favorite Hobby</p>
            </div>
            <div className="fact">
              <p><FontAwesomeIcon icon={faHandPointRight} style={{color:"black"}}/>
              Passionate about technology since I was a kid</p>
            </div>
          </div>
        </article>

        <article className="certifications-box">
          <h3 className='third-heading'>Certifications</h3>
          <div className='certifications'>
            <a href="#"><FontAwesomeIcon icon={faFreeCodeCamp} size='lg'/> Responsive Web Design Course </a>
            <a href="#"><FontAwesomeIcon icon={faAws} size='lg'/> Cloud Practictioner</a>
            <a href="#"><FontAwesomeIcon icon={faMeta} size='lg'/> Front End Developer Course by Meta</a>
          </div>
        </article>
      </section>
      </div>
    </main>
  )
}
