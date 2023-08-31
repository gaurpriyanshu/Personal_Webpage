import React from 'react';
import './CSS Files/projects.css';

import face from './Images/face_recog.png';
import socket from './Images/socket.jpeg';
import gui from './Images/GUI.webp';
import java from './Images/JavaScript.png';
import banking from './Images/background.jpg';
import kubernetes from './Images/K8s.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function ProjectCard({ title, imageSrc, githubLink, technologies, description }) {
  return (
    <div className='project'>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className='images' src={imageSrc} alt={title} />
      </a>
      <div className='project-info'>
        <div className='project-title'>
          <h2>{title}</h2>
          <div className='liness'></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <h3><span style={{ color: '#FF004F' }}>{technologies}</span></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id='Projects'>
      <h1 className='title'>
        My Projects <span style={{ color: '#FF004F' }}>.</span>{' '}
      </h1>
      <div className='projects-wrapper'>
        <ProjectCard
          title="Face Recognition using ML"
          imageSrc={face}
          githubLink="https://www.linkedin.com/pulse/face-recognition-using-ml-launching-aws-priyanshu-gaur"
          technologies="Python, LBPH, OpenCV, AWS, EC2, Pywhatkit."
          description="The project has objective of finding the faces (location and size) in an image and probably extract them to be used by the face recognition algorithm. 
              With the facial images already reorganised, the face recognition algorithm is responsible for finding characteristics that best describe the image and to send personalized messages to Email and WhatsApp."
        />

        <ProjectCard
          title="Live Streaming Video Chat App"
          imageSrc={socket}
          githubLink="https://www.linkedin.com/posts/gaurpriyanshu_task3-vimaldaga-righteducation-activity-6809520098009739264-uj-F?utm_source=share&utm_medium=member_desktop"
          technologies="Python, Socket Programming, EC2, OpenCV, Computer Vision."
          description="This project is assembled as a web app for sharing screens by using socket Programming (UDP)and Python with the help of computer vision and Python. It establishes a UDP connection between 2 devices for video streaming"
        />

        <ProjectCard
          title="Launching GUI Applications in a Container"
          imageSrc={gui}
          githubLink="https://www.linkedin.com/pulse/launching-gui-applications-container-priyanshu-gaur"
          technologies="Docker, Python, Linux"
          description="In this project, I deployed a UI application on docker container to display the user interface screen on your local machine while running the application inside the docker container"
        />

        <ProjectCard
          title="Basic banking Website"
          imageSrc={banking}
          githubLink="https://www.linkedin.com/posts/gaurpriyanshu_webdevelopment-kratigenceclub-intern-activity-6724554450653990912-vh7A?utm_source=share&utm_medium=member_desktop"
          technologies="HTML, CSS, Javascript, Php, MySQL"
          description="This was my first ever Web Dev project. It is an essential banking website that allows 100+ users parallel to transfer money from one account to
            another account and store the data in the back end using MySQL and XAMPP server."
        />

        <ProjectCard
          title="Javascript Integration with Docker"
          imageSrc={java}
          githubLink="https://www.linkedin.com/pulse/javascript-integration-docker-priyanshu-gaur"
          technologies="Python, JavaScript, Docker, HTML/CSS"
          description="In this project I have created a Web Application for Docker (one of the great Containerization Tool which provides the user Platform as a Service (PaaS)) by showing your own creativity and UI/UX designing skills to make the web portal user friendly."
        />
        <ProjectCard
          title="Kubernetes Integration with Python-CGI "
          imageSrc={kubernetes}
          githubLink="https://www.linkedin.com/pulse/kubernetes-integration-python-cgi-priyanshu-gaur"
          technologies="Python, K8s, Javascript, HTML/CSS"
          description="I this project we have used Python-CLI to integrate with Kubernetes and make a user-friendly Web UI where users can easily create, replicate and, delete pods without using complex commands."
        />
      </div>
    </div>
  );
}

export default Projects;
