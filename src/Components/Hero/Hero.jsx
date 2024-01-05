import React from 'react'
import 'Components/Hero/Hero.css'
import heroPicture from 'Assets/oscar-hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareGithub} from '@fortawesome/free-brands-svg-icons'
import resume from 'Assets/Resume.pdf'
import oscar from 'Assets/oscar.jpeg'

export const Hero = () => {
  return (
    <main className="hero-wrapper">
      <nav>
        <header className="name">
          <h1>oscar gomez</h1>
          <h2>web developer/front end developer</h2>
        </header>
      <ul>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#">certifications</a></li>
        <li><a href="#">social</a></li>
        <li className='contact-btn'><a href="#">contact</a></li>
      </ul>
      </nav>

      <section className="hero-grid">
        <article className="welcome-box">
          <h2>Meet your catalyst <br/> web developer</h2>
          <p>Together we can break boundaries.</p>
        </article>
        <img src={oscar} alt="oscar-picture" />
        <article className="profile-description">
          <p>Hey, welcome to my portfolio. My name is <span>Oscar Gomez</span> and I'm from Cape Coral, FL. I'm currently working on mastering my Front End developer skills. I've taken the time to showcase my work here.
          </p>
        </article>

        <article className="learn-more-box">
          <p>Keep scrolling to learn more about me</p>
        </article>
      </section>
    </main>
  )
}
