import React, { useRef, useEffect } from 'react'
import 'Components/Hero/Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faFreeCodeCamp, faLinkedin, faMeta, faSquareFacebook, faSquareGithub} from '@fortawesome/free-brands-svg-icons'
import oscar from 'Assets/oscar.jpg'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

export const Hero = () => {
  const dropDown = useRef(null);
  const dropDownContent = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if((e.key === "Enter" || e.key === ' ') && dropDown.current.contains(e.target) && dropDownContent.current.style.display !== "flex"){
        dropDownContent.current.style.display = "flex";
        console.log(dropDownContent.current.style.display);
      }else{
        dropDownContent.current.style.display = "none";
      }
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  },[])

  const handleBlur = () => {
    dropDownContent.current.style.display = "none"
  }


  return (
    <main className="hero-wrapper">
      <div className="hero-container">
      <nav>
        <header className="name">
          <h1 className='primary-heading'>oscar gomez</h1>
          <h2 className='sub-heading'>Cloud Engineer & Front End Developer</h2>
        </header>
      <ul>
        <li className='body-text'><a href="#projects">projects</a></li>
        <li className='body-text'><a href="#skills">skills</a></li>
        <div className='dropdown' ref={dropDown} onBlur={handleBlur}>
          <button className='dropdown-btn'> social <FontAwesomeIcon icon={faChevronDown} size='sm'/></button>
          <div className="dropdown-content" ref={dropDownContent}>
            <a href="https://www.facebook.com/oscargomez1998" target='__blank'> <FontAwesomeIcon icon={faSquareFacebook} /> facebook</a>
            <hr/>
            <a href="https://github.com/oscargomez15" target='__blak'> <FontAwesomeIcon icon={faSquareGithub} /> github</a>
            <hr/>
            <a href="https://www.linkedin.com/in/oscargomez1998/"target='__blank'> <FontAwesomeIcon icon={faLinkedin} /> linkedIn</a>
          </div>
        </div>
        <li className='contact-btn'><a href="#contact">contact</a></li>
        <li>
          <label htmlFor="" className='hamburger-menu'>
            <input type="checkbox" onClick={(e) => {console.log()}}/>
          </label>

          <aside className='sidebar'>
            <nav className=''>
              <ul>
                <li>Menu</li>
                <hr />
                <li>projects</li>
                <li>skills</li>
                <li>contact</li>
              </ul>
            </nav>
          </aside>
        </li>
      </ul>
      </nav>

      <section className="hero-grid">
        <article className="welcome-box">
          <h2 className='primary-heading'>Hey, <br/> I'm Oscar Gomez <br/></h2>
          <p className='sub-heading'>A <span>Front End Developer & Cloud Engineer</span> emphasized in delivering scalable, reliable, cost-optimized, and accessible designs to meet industry standards.
          </p>
          <a href="https://oscargomez-webportfolio.s3.amazonaws.com/Oscar-Cloud-Resume.pdf" target='_blank'>
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
                Located in Cape Coral, Florida - willing to relocate</p>
            </div>
            <div className="fact">
              <p><FontAwesomeIcon icon={faHandPointRight} style={{color:"black"}}/>
              Bachelor Degree in Computer Science</p>
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
            <a target='__blank' href="https://www.freecodecamp.org/certification/fcc017c1802-5df9-4f3b-878e-20584d956dee/responsive-web-design"><FontAwesomeIcon icon={faFreeCodeCamp} size='lg'/> Responsive Web Design Course </a>
            <a target='__blank' href="https://www.coursera.org/account/accomplishments/verify/JEPNHX3AT2GH"><FontAwesomeIcon icon={faMeta} size='lg'/> Front End Developer Course by Meta</a>
            <a target='__blank'href="https://cp.certmetrics.com/amazon/en/public/verify/credential"><FontAwesomeIcon icon={faAws} size='lg'/> Cloud Practictioner</a>
          </div>
        </article>
      </section>
      </div>
    </main>
  )
}
