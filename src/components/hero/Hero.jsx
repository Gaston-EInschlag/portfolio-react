import React from "react";
import "./Hero.css";
import Container from "react-bootstrap/Container";
import fire from "./img/fire.mp4";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";




const Hero = () => {

  const videoRef = useRef();
  const PlayBtnRef = useRef();
  const [repro, setRepro] = useState ('Pause');


  

  function playPause() {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setRepro('Pause')
      
    } else {
      videoRef.current.pause();
      setRepro('Play')
      
    }
  }

  return (
    <Container fluid className="Hero">
      <video autoPlay muted loop className="backGroundVideo" ref ={videoRef}>
        <source src={fire} type="video/mp4" />
      </video>

      <Container fluid className="presentation">
        <p>Hello, i'm Gastón Einschlag</p>
        <p>I am a full-stack web developer</p>

        <Link to="/AboutMe" className="direction" >
          <span>More about me </span>
          <FaArrowRight id="arrowRight" />
          <FaArrowDown id="arrowDown" />
        </Link>

      </Container>

      <Button ref = {PlayBtnRef} className = "PlayBtn" onClick = {playPause} > {repro} </Button>

    </Container>
  );
};

export default Hero;

