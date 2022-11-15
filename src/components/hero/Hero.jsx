import React from "react";
import "./Hero.css";
import Container from "react-bootstrap/Container";
import fire from "./img/fire.mp4";

const Hero = () => {
  return (
    <Container fluid className="Hero">
      <video autoPlay muted loop>
        <source src={fire} type="video/mp4" />
      </video>

      <div className="text">
      <p>Hello, i'm Gastón Einschlag</p>
      <p>I am a full-stack web developer</p>
      <p><a id="button" href="#navbar">More about me <i id="arrowrigth" class='fa fa-arrow-right'></i><i id="arrowdown"
            class='fa fa-arrow-down'></i></a></p>
    </div>

    <button id="playPauseBtn" onclick="playPause()">Pause</button>
    </Container>
  );
};

export default Hero;