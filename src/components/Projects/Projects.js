import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import Chatapp from "../../Assets/Projects/Chatapp.png";
import editor from "../../Assets/Projects/Zomato-Clone.png";
import chatify from "../../Assets/Projects/Dino-Dragon.png.png";
import Hirrd_jobportal from "../../Assets/Projects/Hirrd_jobportal.png";
import Library_Management_App from "../../Assets/Projects/Library_Management_App.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatapp}
              isBlog={false}
              title="Talk-A-Tive Chat App"
              description=
              "Talk-A-Tive Chat App
A real-time chat application built using the MERN stack to create an interactive and user-friendly platform for personal and group chats.
Tech Stack: 
Frontend: React.js, Redux Toolkit, Tailwind CSS, Shadcn/UI for smooth and beautiful design.
Backend: Express.js, MongoDB, and Socket.IO for real-time messaging.
Tools: Postman for API testing.
Features:
Clean, simple, and responsive UI.
Fast real-time messaging.
Search and connect with users.
Personal chats and group chats.
Group management: create, update names, add/remove members (admin only).
Profile viewing with user details.
Instant notifications for messages.
This project showcases my skills in building scalable and interactive web apps with real-time communication."
ghLink="https://github.com/karunakarusala/TALK-A-TIVE-CHAT-APP"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hirrd_jobportal}
              isBlog={false}
              title="Hirrd Job-Portal"
              description="A job portal platform designed to learn how such systems work and enhance my skills in building interactive, full-stack applications with the MERN stack.

Tech Stack:

Frontend: React.js, Redux Toolkit, Tailwind CSS, Shadcn/UI for styling and state management.
Backend: Express.js, MongoDB for data handling.
APIs: RESTful APIs for communication between frontend and backend.
Tools: Postman for testing APIs.
Features:

User-friendly and responsive interface.
Job listings with search and filter options.
User authentication for job seekers and employers.
Job applications: submit and track applications.
Profile management: create and update user profiles.
Employer functionalities: post, update, and delete job listings.
Real-time notifications for job updates.
This project showcases my understanding of job portal systems and strengthens my ability to create scalable, full-stack web applications."
              ghLink="https://github.com/karunakarusala/Hirrd-Job_portal"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DINO vs Dragon: Collision of Titans"
              description="Dino-Dragon Game: Collision of Titans
An interactive web-based game built using modern frontend technologies to enhance my skills in creating engaging and responsive user experiences.

Tech Stack:

Tailwind CSS and Shadcn/UI for sleek and responsive styling.
React.js for building interactive components.
RESTful APIs for fetching game data and images.
Features:

Smooth and responsive design with vibrant visuals.
Dynamic gameplay with Dino and Dragon characters.
Collision detection for interactive gaming mechanics.
Score tracking to keep users engaged.
User-friendly interface with intuitive controls.
This project highlights my ability to build fun, visually appealing, and interactive web applications using modern frontend tools."
              ghLink="https://github.com/karunakarusala/DINO-DRANGON-GAME"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Library_Management_App}
              isBlog={false}
              title="Library Management App"
              description=
              "A personal project built using the MERN stack, this Library Management App streamlines the management of students and books. It includes a Student Page for entering student details and a Book Library Page for cataloging books. All data is stored securely in MongoDB and managed through a Node.js backend, making the app fast and reliable. The Library Page integrates all entries, displaying student and book information in one place for easy tracking and management. Designed for functionality and ease of use, this app showcases skills in full-stack development with a focus on efficient data handling."
              ghLink="https://github.com/karunakarusala/Library-Management-Application"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */} 

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
