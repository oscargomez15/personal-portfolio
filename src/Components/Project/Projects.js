import React from 'react'
import 'Components/Project/Projects.css'
import habanerosProject from 'Assets/habaneros-project.png'
import cryptoTracker from 'Assets/crypto-tracker-project.png'
import ecommerceProject from 'Assets/ecommerce-Project.png'
import gameProject from 'Assets/game-project.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {faSquareGithub} from '@fortawesome/free-brands-svg-icons'
import portfolio from 'Assets/portfolio.png'

import { useRef, useState, useEffect } from 'react'

export const Projects = () => {
const containerRef = useRef();
const [isVisible, setVisibility] = useState(false);
const projectsInfo =[
    {
        image:ecommerceProject,
        title:'Pixel World eCommerce',
        description:`Developed an ecommerce web app using HTML, CSS, and React.js in which the user can purchase videogames from
        a variety of platforms. The app uses RAWG API to deliver data about 500,000+ videogames. Users are capable of adding to cart and checking out.`,
        gitHubRepo:'https://github.com/oscargomez15/pixelworldecommerce',
        projectLink:'https://oscargomez15.github.io/pixelworldecommerce/'
    },
    {
        image:habanerosProject,
        title: 'Local Restaurant Website',
        description:`Developed two static SEO-optimized and responsive websites 
        for a Mexican Restaurant using HTML, CSS, and Javascript 
        for basic functions. Responsible for creating and managing the ads 
        campaign as well as creating content for them. This led to
        an increase of 50% in organic traffic and a 125% increase 
        in paid traffic.`,
        gitHubRepo: "#",
        projectLink: "https://habanerosbonitasprings.com/"
    },
    {
        image:gameProject,
        title:'Hangman Game Project',
        description:`Developed a simple Hangman Game using React/Typescript. This game was developed
        using mostly CSS to render the Drawing along with some computations using Typescript to 
        set a word to guess and compare if the letters entered by the user were found within it.`,
        gitHubRepo:"https://github.com/oscargomez15/hangman",
        projectLink:"https://oscargomez15.github.io/hangman/"
    },
    {
        image:cryptoTracker,
        title:'Cryptocurrency Tracker',
        description:`Built a Cryptocurrency Data Tracker using React that displayed a list of 
        cryptocurrencies and their price, volume, market cap, and names 
        along with the symbol using CoinGecko API. This tool has search capabilities 
        and was developed using hooks such as useEffect, useState and useRef.`,
        gitHubRepo:'https://github.com/oscargomez15/crypto-tracker-app',
        projectLink:'https://oscargomez15.github.io/crypto-tracker-app/'
    },
    {
        image:portfolio,
        title:'Personal Portfolio',
        description:`Developed this website using HTML, CSS and React.js. Through it I'm able to showcase 
        my skills, projects, and certifications in the Web Development Spectrum. Using Intersection Observer, and Email JS I was able to add 
        additional interactivity that has made this website stand out the most out of all the projects.`,
        gitHubRepo:'https://github.com/oscargomez15/personal-portfolio',
        projectLink: 'https://oscargomez15.github.io/personal-portfolio/'
    }

]

useEffect(() => {
  const observer = new IntersectionObserver((entries => {
    const entry = entries[0];

  if(entry.isIntersecting){
    setVisibility(true);
    observer.unobserve(containerRef.current);
  }
  }));

  observer.observe(containerRef.current);
  
},[containerRef])

  return (
    <section>
        <div className={`projects-container ${isVisible ? 'slideX-animation' : ''} `}  ref={containerRef}>

            <div className='projects-list'>
                <div className='project-card'>
                    <h1>Project Showcasing</h1>
                    <p> Take a peak at some of my latest projects along with its Github repository.
                    </p>
                </div>
            
            {projectsInfo.map((project) => {
                return (
                <article>
                    <div className='project'>
                        <img src={project.image} alt='example-project' className='project-img'/>
                        <p className='heading'>{project.title}</p>
                        <p className='project-description'>
                            {project.description}
                        </p>
                        <div className='project-buttons'>
                            <a href={project.projectLink} className='project-link' target='__blank'>
                                <div className='see-more-btn'>
                                    <p className='see-more'>View</p>
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </div>
                            </a>

                            <a href={project.gitHubRepo} className='project-link' target='__blank'>
                                <div className='github-btn'>
                                    <FontAwesomeIcon icon={faSquareGithub} size='2xl'/>
                                </div>
                            </a>
                        </div>
                    </div>
                </article>                  
            )})}
            </div>
        </div>
    </section>
  )
}
