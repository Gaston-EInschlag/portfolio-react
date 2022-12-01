import "./Contact.css";
import React from "react";
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import fire from "./img/fire.mp4";
import { Link } from "react-router-dom";
import { VscReply } from "react-icons/vsc";

const Contact = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm("");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container fluid className="formContainer">
      <video muted loop className="backGroundVideo2">
        <source src={fire} type="video/mp4" />
      </video>

      <Container fluid className="fContainer">
        <form onSubmit={handleSubmit}>
          <Container fluid className="form">
            <label>Name</label>
            <input type="text" {...register("Name")} />
          </Container>

          <Container fluid className="form">
            <label>Company</label>
            <input type="text" {...register("Company")} />
          </Container>

          <Container fluid className="form">
            <label>Phone number</label>
            <input type="text" {...register("Phone number")} />
          </Container>

          <Container fluid className="form">
            <label>Mail</label>
            <input
              type="text"
              {...register(
                "Mail",
                {
                  pattern:
                    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                },
                { required: true }
              )}
            />
          </Container>

          <Container fluid className="form">
            <label>Message</label>
            <textarea type="text" id="textArea" />
          </Container>

          <Container fluid className="form">
            <input type="submit" value="Send" id="sendButton" />
          </Container>

          <Container id="Back" className="form">
            <Link to="/Hero" id="Link">
              Back to Home <VscReply />
            </Link>
          </Container>
        </form>
      </Container>
    </Container>
  );
};

export default Contact;
