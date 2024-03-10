import React from 'react'
import 'Components/Project/Projects.css'
import videogames from "Assets/videogames.jpg"
import habaneros from "Assets/habaneros.jpg"
import hangman from "Assets/hangman-ss.png"
import live from "Assets/liveAnimation.json"
import saas from "Assets/saas-project.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Lottie from 'lottie-react'

export const Projects = () => {
const projectsInfo =[
    {
        image:saas,
        title:'Saas Landing Page',
        description:`Developed a ficticious Software-as-a-Service that provides big companies with assisted predictive analysis
        with the intention of helping them import their data and finding patterns that are hidden in plain sight. It's a single Page
        for now but I'm planning on integrating a Login page with a Dashboard.`,
        gitHubRepo:'https://github.com/oscargomez15/saas-landing-page',
        projectLink:'https://oscargomez15.github.io/saas-landing-page/'
    },
    {
        image:videogames,
        title:'Videogames Ecommerce',
        description:`Developed an ecommerce web app using HTML, CSS, and React.js in which the user can purchase videogames from
        a variety of platforms. The app uses RAWG API to deliver data about 500,000+ videogames. Users are capable of adding to cart and checking out.`,
        gitHubRepo:'https://github.com/oscargomez15/pixelworldecommerce',
        projectLink:'https://oscargomez15.github.io/pixelworldecommerce/'
    },
    {
        image:hangman,
        title:'Hangman Game',
        description:`Developed a simple Hangman Game using React/Typescript. This game was developed
        using mostly CSS to render the Drawing along with some computations using Typescript to
        set a word to guess and compare if the letters entered by the user were found within it.`,
        gitHubRepo:"https://github.com/oscargomez15/hangman",
        projectLink:"https://oscargomez15.github.io/hangman/"
    },
    {
        image:habaneros,
        title: 'Local Restaurant Website',
        description:`Developed two static SEO-optimized and responsive websites
        for a Mexican Restaurant using HTML, CSS, and Javascript
        for basic functions. Responsible for creating and managing the ads
        campaign as well as creating content for them. This led to
        an increase of 50% in organic traffic and a 125% increase
        in paid traffic.`,
        gitHubRepo: "#",
        projectLink: "https://habanerosbonitasprings.com/"
    }

]

  return (
    <section className='project-wrapper' id='projects'>
        <div className="project-grid fade-in-effect">
            <div className="project-title">
                <h2 className='secondary-heading' tabIndex={-1}> Project Showcase</h2>
                <p className='sub-heading'>Bringing digital ideas to life with creative web development</p>
            </div>
            {projectsInfo.map((item,index) => {
                return (
                    //add the slide-left or right depending on where the item is positioned
                    <article className={`${index % 2 ? "slide-left" : "slide-right"} project-item`}>
                        <figure>
                            <div className="darken"></div>
                            <img src={item.image} alt="" />
                            </figure>
                        <h3 className='third-heading'> {item.title}</h3>
                        <p className='body-text'> {item.description} </p>
                        <div className="button-group">
                            <a href={item.gitHubRepo} target='__blank'> <div className='project-button'>
                            <FontAwesomeIcon icon={faGithub}/>
                            </div>
                            </a>
                            <a href={item.projectLink} target='__blank'>
                            <div className='project-button'>
                                <Lottie animationData={live} class='lottie-live'/>
                                 <p className='button-text'>Live Preview</p>
                                 </div>
                                 </a>
                        </div>
                    </article>
                )
            })}
        </div>
    </section>
  )
}
