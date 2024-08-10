import React, { useRef, useEffect, useState } from 'react'
import 'Components/Hero/Hero.css'
import { motion, useInView } from 'framer-motion'
import Lottie from 'lottie-react'

import animationData from "Assets/scroll.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCircleArrowUp, faDiamond, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export const Hero = () => {
  const sectionRef = useRef();
  const sectionInView = useInView(sectionRef);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const hamburgerMenu = useRef();

  useEffect(()=>{
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop){
        setIsVisible(false);
      }else{
        setIsVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0: scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(()=> {
    if(hamburgerOpen){
      addNoScroll();
    }else{
      removeNoScroll();
    }
  },[hamburgerOpen])

  const handleClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  const addNoScroll = () => {
    document.body.classList.add('no-scroll');
  }

  const removeNoScroll = () => {
    document.body.classList.remove('no-scroll');
    setHamburgerOpen(false);
  }

  return (
    <main className="hero-wrapper" id='home'>
      <video autoPlay loop muted playsInline>
        <source src='https://oscargomez-webportfolio.s3.amazonaws.com/abstract.mp4' type='video/mp4'/>
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <motion.div className="hamburger"
      ref={hamburgerMenu}
      animate={{y: isVisible ? 0 : -100}}
      whileTap={{scale:1.1, color:'gray'}}
      onClick={handleClick}>
        <FontAwesomeIcon icon={faBars}/>
      </motion.div>

      <motion.div
      className="back-to-top"
      animate={{y: isVisible ? 0 : 100}}
      transition={{
        y:{duration:1}
      }}>
        <a href="#home"><FontAwesomeIcon icon={faCircleArrowUp}/></a>
      </motion.div>

      <motion.div className="hamburger-menu"
      initial={{opacity:0, display:"none"}}
      animate={{opacity: hamburgerOpen === true ? 1 : 0, display: hamburgerOpen ? "block" : "none"}}
      transition={{duration:.5}}>
        <nav className='nav-mobile'>
          <h2>NAVIGATION</h2>
        <ul>
            <li><a href="#home" onClick={removeNoScroll}><FontAwesomeIcon icon={faDiamond}/>HOME</a></li>
            <li><a href="#about" onClick={removeNoScroll}><FontAwesomeIcon icon={faDiamond}/>ABOUT</a></li>
            <li><a href="#skills" onClick={removeNoScroll}><FontAwesomeIcon icon={faDiamond}/>SKILLS</a></li>
            <li> <a href="#experience" onClick={removeNoScroll}><FontAwesomeIcon icon={faDiamond}/>EXPERIENCE</a></li>
            <li><a href="#projects" onClick={removeNoScroll}><FontAwesomeIcon icon={faDiamond}/>PROJECTS</a></li>
            <li><a href="#diagrams" onClick={removeNoScroll}><FontAwesomeIcon icon={faDiamond}/>DIAGRAMS</a></li>
            <li className='contact-button' onClick={removeNoScroll}><a href="#contact"><FontAwesomeIcon icon={faDiamond}/>CONTACT</a></li>
          </ul>
          <div className="socials">
            <h2>LET'S CONNECT</h2>
            <div className="socials-icons">
              <a href="https://www.linkedin.com/in/oscargomez1998/" target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>

              <FontAwesomeIcon icon={faDiamond}/>

              <a href="https://github.com/oscargomez15" target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub}/>
              </a>

              <FontAwesomeIcon icon={faDiamond}/>

              <a href="https://www.facebook.com/oscargomez1998" target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </div>
          </div>
        </nav>
      </motion.div>

      <div className="hero-content">
        <nav className='desktop-nav'>
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li> <a href="#experience">EXPERIENCE</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#diagrams">DIAGRAMS</a></li>
            <li className='contact-button'><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>

        <motion.div
        ref={sectionRef}
        initial= {{opacity:0, y: 50}}
        animate= {{opacity: sectionInView ? 1: 0, y: sectionInView ? 0 : 75 }}
        transition={{duration:2}}
        className="text-content">
          <h2>CLOUD ENGINEER & FULL STACK DEVELOPER</h2>
          <h1>OSCAR GOMEZ</h1>
          <div className="certifications">
            <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/bf73a72437574e879acee54fc1f40421" target='_blank' className="cert-link" rel='noreferrer'>
              <motion.div className="cert-item"
              whileHover={{scale:1.1, cursor:"pointer"}}
              whileTap={{scale: 1.1}}>
                <FontAwesomeIcon icon={faAws}/>
                <h3>AS Solutions Architect</h3>
              </motion.div>
            </a>

            <FontAwesomeIcon icon={faDiamond}/>
            <a href="https://oscargomez-webportfolio.s3.amazonaws.com/bs-cs-oscargomez.jpg" className='cert-link' target='_blank' rel='noreferrer'>
              <motion.div className="cert-item"
              whileHover={{scale:1.1, cursor:"pointer"}}
              whileTap={{scale:1.1}}>
                <FontAwesomeIcon icon={faGraduationCap}/>
                <h3>BS Computer Science </h3>
              </motion.div>
            </a>

          </div>
          <Lottie animationData={animationData} className='scroll'/>
        </motion.div>

      </div>
    </main>
  )
}
