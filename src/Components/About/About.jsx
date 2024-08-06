import React, { useRef } from 'react'
import './About.css'
import oscar from '../../Assets/oscar-picture.jpg'
import oscar2 from '../../Assets/oscar.jpg'
import youngPicture from 'Assets/oscar-young.png'
import { motion, useInView } from 'framer-motion'

export const About = () => {
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, {amount:0.1});

    const textVariants = {
        visible:{opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50},
        hide:{opacity: 1, y:  50 }
    }

  return (
    <section
    id='about'
    className='about-section'
    ref={sectionRef}>
            <article
            className="content">
                <motion.h1
                className='section-heading'
                variants={textVariants}
                initial="hide"
                animate="visible"
                transition={{duration:2}}>ABOUT</motion.h1>
                <motion.p
                className='section-text'
                variants={textVariants}
                initial="hide"
                animate="visible"
                transition={{duration:2}}>
                    Hi there, <br/>
                    My name is Oscar Gomez, and I am a <b>Cloud Engineer and Full Stack Developer</b>. My passion for technology started in childhood (yes, that's the kid version of me in the picture). This early interest inspired me to pursue a career in tech, where I continue to grow and learn every day.
                    <br/><br/>
                    As a dedicated and skilled Fullstack and Cloud Engineer, I am now seeking to join a tech-centered company where I can leverage my expertise in building scalable web applications and cloud solutions. I am eager to collaborate with a team of talented professionals, further develop my technical skills, and contribute to innovative projects that drive the company’s success.</motion.p>
            </article>

            <motion.div className="image-collection-desktop"
            initial={{opacity: 0}}
            animate={{opacity: sectionInView ? 1 : 0}}
            transition={{delay: 0, duration: 2}}>
                <motion.img src={oscar} alt=""
                initial={{opacity:0, scale:0.8}}
                animate={{opacity: sectionInView ? 1 : 0, scale: sectionInView ? 1 : 0.8}}
                transition={{delay: 1, duration: 1}}/>

                <motion.img src={youngPicture} alt="" className='image-behind'
                initial={{x:0, rotate:0, opacity: 0}}
                animate={{x: sectionInView ? 350 : 0, rotate:sectionInView ? 15 : 0, opacity: sectionInView ? 1 : 0}}
                transition={{duration:2, delay:2}}/>
            </motion.div>

            <motion.div className="image-collection-mb"
            initial={{opacity: 0}}
            animate={{opacity: sectionInView ? 1 : 0}}
            transition={{delay: 0, duration: 2}}>
                <motion.img src={oscar} alt=""
                initial={{opacity:0, scale:0.8}}
                animate={{opacity: sectionInView ? 1 : 0, scale: sectionInView ? 1 : 0.8,  rotate: sectionInView ? -10 : 0, x: sectionInView? 20 : 0}}
                transition={{delay: 1, duration: 1}}/>

                <motion.img src={youngPicture} alt="" className='image-behind'
                initial={{x:50, rotate:0, opacity: 0}}
                animate={{x: sectionInView ? -15 : 0, rotate:sectionInView ? 15 : 0, opacity: sectionInView ? 1 : 0}}
                transition={{duration:2, delay:2}}/>
            </motion.div>

    </section>
  )
}
