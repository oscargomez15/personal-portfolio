import React from 'react'
import './Skills.css'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactCoding from '../Videos/react-coding.mp4'
import photoEditing from '../Videos/photo-editing.mp4'
import apiIntegration from '../Videos/integration.mp4'
import { SkillBox } from './SkillBox';

const skillsList = [
  {
    video: reactCoding,
    heading:"React Framework",
    description: `With the help of my knowledge in React I'm capable of 
    contributing in not only the development of an application or web page that's efficient,
    but I will also contribute so that the design is striking, converts and that it is accessible
    for all public following the rules established by WCAG.`
  },
  {
    video: photoEditing,
    heading: "Photo Editing",
    description:`With an extensive experience in photo editing software such as Photoshop, Gimp and Canva, I can contribute on making 
    changes or creating appealing designs that will contribute on increasing scrolling time and help increase the conversion
    one way or another.`
  },
  {
    video: apiIntegration,
    heading: "API Integration",
    description: `Extend your website's usability by incorporating data from third parties. Sounds Complicated? 
    It isn't! I will assist on gathering data from different sources with the main objective
    of increasing the usability of your website.`
  },
  {
    video: null,
    heading: "UX and UI",
    description:`Still don't know exactly what your customers want? Let me take care of the heavy lifting for you! 
    I will contribute to dig those requirements that your clients demand and incorporate them into the design
    so that we focus on the user and manage to convert more. Similarly, we will focus in each of those aspects 
    that will make your customers stay active on the page for longer when implementing visual and design best practices.`
  },
  {
    video:null,
    heading:"Oscar and Karla",
    description:"Hello my name is Oscar and today I will present my girlfriend."
  }
]



export const Skills = () => {

  const renderObject = (object) => {
    return object.map(({video, heading, description}) => <SkillBox video={video} heading={heading} description={description} ></SkillBox>)
  }

  return (
    <div className='skills-container' >
        
        <div className='skill-title'>
            <h1>Technical Skills </h1>
            <FontAwesomeIcon icon={faLaptopCode} size='lg'/>  
        </div>
        

        {renderObject(skillsList)}
    </div>
  )
}
