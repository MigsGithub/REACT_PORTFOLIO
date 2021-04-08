import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80">
        <h1>Miguel Maldonado</h1>
        <h2>Aspiring coder dedicated to take over the world with 1s and 0s</h2>
      </Hero>
      <Container style={{ marginTop: 20 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Mig's Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Miguel is a humble human that is dedicated to learn as much as he can about coding and web development. He has completed the University of Austin Coding bootcamp and is on path to complete more bootcamps in the near future. 
            </p>
            <p>
              In the navigation bar on top of this webpage, you will find projects and a resume.
            </p>
            <p>
              Again thank you for visiting, I'll now have to cut this meeting short as I have much to learn.

              <br>
              </br>
              <br>
              </br>

              <strong>Bye..</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
