import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws,faFreeCodeCamp,faMeta } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import 'Components/Certifications/Certifications.css'
import cloudCert from 'Assets/cloud-practictioner.png'
import courseraCert from 'Assets/coursera-meta.png'
import freeCodeCampCert from 'Assets/freecodecamp.png'
import { useRef,useEffect,useState } from 'react'

export const Certifications = () => {
const containerRef = useRef();
const [isVisible, setVisibility] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver((entries => {
    const entry = entries[0];

  if(entry.isIntersecting){
    setVisibility(true);
    observer.unobserve(containerRef.current);
  }
  }));

  //observing skills container
    observer.observe(containerRef.current);
  
},[containerRef])

  return (
    <div className={`certifications-container ${isVisible ? 'slideX-animation' : ''} `} ref={containerRef}>
        <div className='certs-heading'>
            <div className='certs-title'>
                <h1>Certifications</h1>
                <FontAwesomeIcon icon={faFileLines} />
            </div>
            <p> Click/Tap badges to verify.</p>
        </div>

            <div className='certification'>
                <a href='https://aw.certmetrics.com/amazon/public/verification.aspx' target='__blank'>
                    <img src={cloudCert} width='150px' alt='cloud-practictioner-certification' className='cert-badge'/>
                </a>
                <p>Validation Number: ENTDB5H2V244QKG2</p>
            </div>

            <div className='certification'>
                <a href='https://www.coursera.org/account/accomplishments/verify/JEPNHX3AT2GH' target='__blank'>
                    <img src={courseraCert} width='150px' alt='meta-webdev-certification' className='cert-badge'/>
                </a>
            </div>

            <div className='certification'>
                <a href='https://www.freecodecamp.org/certification/fcc017c1802-5df9-4f3b-878e-20584d956dee/responsive-web-design' target='__blank'>
                    <img src={freeCodeCampCert} width='150px' alt='freecodecamp-certification' className='cert-badge'/>
                </a>
        </div>
    </div>
  )
}
