import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/Zomato-Clone.png";
import chatify from "../../Assets/Projects/Dino-Dragon.png.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Library-Management-App.png";

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
              imgPath={chatify}
              isBlog={false}
              title="DINO vs Dragon: Collision of Titans"
              description="A personal project that's simple yet fun and interactive. This game lets players experience an exciting face-off between a powerful dinosaur and a fire-breathing dragon. Built with engaging animations and easy controls, it’s designed to capture attention with each clash. Aimed at offering both fun and creativity, this project is a showcase of interactive design and gameplay."
              ghLink="https://github.com/karunakarusala/DINO-DRANGON-GAME"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Library Management App"
              description=
              "A personal project built using the MERN stack, this Library Management App streamlines the management of students and books. It includes a Student Page for entering student details and a Book Library Page for cataloging books. All data is stored securely in MongoDB and managed through a Node.js backend, making the app fast and reliable. The Library Page integrates all entries, displaying student and book information in one place for easy tracking and management. Designed for functionality and ease of use, this app showcases skills in full-stack development with a focus on efficient data handling."
              ghLink="https://github.com/karunakarusala/Library-Management-Application"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Zomato Clone"
              description="Zomato Clone
This Zomato Clone is a full-stack application built to mimic the core functionalities of Zomato. Using the MERN stack, this project allows users to explore restaurants, browse menus, and see detailed information on dishes. Key features include a restaurant listing page, menu display, and user review system. Data is stored and managed with MongoDB and Node.js for seamless performance, while React and Express provide a responsive and dynamic front-end experience. This project highlights skills in building interactive, user-centered web applications with a focus on real-time data handling and modern design."
              ghLink="https://github.com/karnakar22/zomato-clone-project"
              demoLink="https://editor.soumya-jit.tech/"              
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
