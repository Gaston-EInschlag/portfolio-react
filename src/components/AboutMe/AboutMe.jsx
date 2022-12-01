import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../Navbar/NavBar";
import "./AboutMe.css";
import photo from "./img/foto2.png";

const AboutMe = () => {
  return (
    <Container>
      <NavBar/>
    <Container fluid className="AboutMe">
      <p>
        After years developing my soft skills (teamwork, communication, empathy,
        problem solving, stress management, etc.) In the banking industry. Now i am
        currently developing a new passion for programming, studying full stack
        web development and looking to refocus my career in that direction.
      </p>

      <Container fluid className="photo">
        <img src={photo}/>
      </Container>
    </Container>
    </Container>
  );
};

export default AboutMe;
