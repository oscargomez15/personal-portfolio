import React, { useEffect, useRef } from 'react'
import './About.css'
import oscar from '../../Assets/oscar-picture.jpeg'
import oscar2 from '../../Assets/oscar.jpg'

import { motion, useInView, delay } from 'framer-motion'

export const About = () => {

    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, {amount:0.2});

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
                    Hello there, my name is Oscar Gomez. I was born and raised in Honduras but
                    decided to move to Florida in 2020 to pursue better career and professional
                    opportunities. By 2024 I have been able to successfully achieve a Bachelor’s
                    Degree in Computer Science and become a certified AWS Cloud Solutions Architect.
                    I'm actively seeking a company that would benefit
                    from my talent.</motion.p>
            </article>

            <motion.div className="image-collection"
            initial={{opacity: 0}}
            animate={{opacity: sectionInView ? 1 : 0}}
            transition={{delay: 0, duration: 2}}>
                
                <motion.img src={oscar} alt=""
                initial={{opacity:0, scale:0.8}}
                animate={{opacity: sectionInView ? 1 : 0, scale: sectionInView ? 1 : 0.8}}
                transition={{delay: 1, duration: 1}}/>

                <motion.img src={oscar2} alt="" className='image-behind'
                initial={{x:0, rotate:0, opacity: 0}}
                animate={{x: sectionInView ? 250 : 0, rotate:sectionInView ? 15 : 0, opacity: sectionInView ? 1 : 0}}
                transition={{duration:2, delay:2}}/>
            </motion.div>

    </section>
  )
}
