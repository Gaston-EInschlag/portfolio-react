import React from "react";
import "./Hero.css";
import Container from "react-bootstrap/Container";
import fire from "./img/fire.mp4";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
// import Button from 'react-bootstrap/Button';



const Hero = () => {
  return (
    <Container fluid className="Hero">
      <video autoPlay muted loop className="backGroundVideo">
        <source src={fire} type="video/mp4" />
      </video>

      <Container fluid className="presentation">
        <p>Hello, i'm Gastón Einschlag</p>
        <p>I am a full-stack web developer</p>

        <a className="direction" href="#navbar">
          <span>More about me </span>
          <FaArrowRight id="arrowRight" />
          <FaArrowDown id="arrowDown" />
        </a>

      </Container>

      {/* <Button className = "PlayBtn"> Pause</Button> */}

    </Container>
  );
};

export default Hero;

