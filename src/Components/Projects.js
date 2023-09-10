import React from 'react'
import './Projects.css'
import habanerosProject from '../habaneros-project.png'
import cryptoTracker from '../crypto-tracker-project.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import loading from './loading.png'

export const Projects = () => {
  return (
    <div className='projects-container'>
        <div className='project-title'>
            <h1> Projects </h1>
            <FontAwesomeIcon icon={faFolderOpen} size='lg' />
        </div>

        <div className='project'>
            <img src={habanerosProject} alt='example-project' width='300px' className='project-img'/>
            <p className='heading'>Local Restaurant Website</p>
            <p className='project-description'>
                Developed two static SEO-optimized and responsive websites 
                for a Mexican Restaurant using HTML, CSS, and Javascript 
                for basic functions. Responsible for creating and managing the ads 
                campaign as well as creating content for them. This led to
                an increase of 50% in organic traffic and a 125% increase 
                in paid traffic.
            </p>

            <a href='#' className='project-link'>
                <div className='see-more-btn'>
                    <p className='see-more'>Check it out</p>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </a>
        </div>

        <div className='project'>
            <img src={cryptoTracker} alt='example-project' width='300px' className='project-img'/>
            <p className='heading'>Cryptocurrency Tracker</p>
            <p className='project-description'>
            Built a Cryptocurrency Data Tracker using React that displayed a list of 
            cryptocurrencies and their price, volume, market cap, and names 
            along with the symbol using CoinGecko API. This tool has search capabilities 
            and was developed using hooks such as useEffect, useState and useRef.
            </p>
            <a href='#' className='project-link'>
                <div className='see-more-btn'>
                    <p className='see-more'>Check it out</p>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </a>
        </div>

        <div className='project'>
            <img src={loading} alt='example-project' width='300px' className='project-img'/>
            <p className='heading'>Exciting Upcoming Project</p>
            <p className='project-description'>
                I'm currently working on a project that showcases some 3D Objects and provides
                a description about them and interesting facts. For now, the topic is classified
                but stay tuned, I know you will love it!
            </p>
            {
            /*<a href='#' className='project-link'>
                <div className='see-more-btn'>
                    <p className='see-more'>Check it out</p>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </a>
            */
            }
        </div>

    </div>
  )
}
