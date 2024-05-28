import React from 'react'
import ridesDiagram from 'Assets/Rides-diagram.png'
import 'Components/AWS Diagrams/Diagrams.css'

export const Diagrams = () => {
const diagramsInfo = [{
    image: ridesDiagram,
    title:'Architecture Deployment for Ride Service Web Application',
    description:`Employed AWS Amplify to seamlessly clone the code from the CodeCommit repository
    Implemented user authentication and registration functionalities using AWS Cognito, ensuring secure access to the web application.
    Utilized AWS API Gateway to invoke Lambda functions, facilitating the storage of metadata and ride logs in DynamoDB for efficient data management.
    Implemented IAM permissions following the principle of least privilege, ensuring a secure environment and minimizing the risk of unauthorized access or data breaches.`
}]

return (
    <section className='diagrams-wrapper'>
        <div className="diagram-grid">
            <div className="diagram-title">
                <h2 className='secondary-heading'>Cloud Infrastructure Diagrams</h2>
                <p className='sub-heading'> Building highly-available, secure, cost-optimized, and reliable solutions while taking off the Building highly-available, secure, cost-optimized, and reliable solutions while taking off the undifferentiated heavy lifting from your organization. heavy lifting from your organization.</p>
            </div>
            <div className='diagrams-container'>
            {diagramsInfo.map((item) => {
                return(
                    <article>
                        <img src={item.image} alt="" />
                        <div className="diagram-content">
                            <h3 className='diagram-title'>{item.title}</h3>
                            <p className='diagram-description'>{item.description}</p>
                        </div>
                    </article>
            )
            })}
            </div>

        </div>
    </section>
  )
}
