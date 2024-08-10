import React, { useRef } from 'react'
import './About.css'
import oscar from '../../Assets/oscar-picture.jpg'
import oscar2 from '../../Assets/oscar.jpg'
import youngPicture from 'Assets/oscar-young.png'
import { motion, useInView } from 'framer-motion'

export const About = () => {

    const viewportConfig = {amount:0.1, once:true};
    const variantsOpacity = {
        visible:{opacity:  1 , y: 0},
        hide:{opacity: 0, y:  50 }
    }

  return (
    <section
    id='about'
    className='about-section'>
      {/* Heading section with body content. */}
            <article
            className="content">
                <motion.h1
                className='section-heading'
                variants={variantsOpacity}
                initial="hide"
                whileInView='visible'
                viewport={viewportConfig}
                transition={{duration:2}}
                >ABOUT</motion.h1>
                <motion.p
                className='section-text'
                variants={variantsOpacity}
                initial="hide"
                whileInView='visible'
                viewport={viewportConfig}
                transition={{duration:2}}>
                    Hi there, <br/>
                    My name is Oscar Gomez, and I am a <b>Cloud Engineer and Full Stack Developer</b>. My passion for technology started in childhood (yes, that's the kid version of me in the picture). This early interest inspired me to pursue a career in tech, where I continue to grow and learn every day.
                    <br/><br/>
                    As a dedicated and skilled Fullstack and Cloud Engineer, I am now seeking to join a tech-centered company where I can leverage my expertise in building scalable web applications and cloud solutions. I am eager to collaborate with a team of talented professionals, further develop my technical skills, and contribute to innovative projects that drive the company’s success.</motion.p>
            </article>

            {/* This div is to be displayed only on Desktop devices or screens greater than 1280 pixels. */}
            <motion.div className="image-collection-desktop"
            variants={variantsOpacity}
            initial='hide'
            whileInView='visible'
            viewport={viewportConfig}
            transition={{delay: 0, duration: 2}}>
                <motion.img src={oscar} alt=""
                initial={{opacity:0, scale:0.8}}
                whileInView={{opacity:1, scale: 1}}
                viewport={viewportConfig}
                transition={{delay: 1, duration: 1}}/>

                <motion.img src={youngPicture} alt="" className='image-behind'
                initial={{x:0, rotate:0, opacity: 0}}
                whileInView={{x:350, rotate: 15, opacity:1}}
                viewport={viewportConfig}
                transition={{duration:2, delay:2}}/>
            </motion.div>

            {/* This div is to be displayed only on small devices/mobile. */}
            <motion.div className="image-collection-mb"
            variants={variantsOpacity}
            initial='hide'
            whileInView='visible'
            viewport={viewportConfig}
            transition={{delay: 0, duration: 2}}>
                <motion.img src={oscar} alt=""
                initial={{opacity:0, scale:0.8}}
                whileInView={{opacity:1, scale: 1}}
                viewport={viewportConfig}
                transition={{delay: 1, duration: 1}}/>

                <motion.img src={youngPicture} alt="" className='image-behind'
                initial={{x:50, rotate:0, opacity: 0}}
                viewport={viewportConfig}
                whileInView={{x:-20, rotate:15, opacity:1}}
                transition={{duration:2, delay:2}}/>
            </motion.div>

    </section>
  )
}
