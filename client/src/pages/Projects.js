import React from "react";
import Card from "../components/Card"
import Card1 from "../components/Card1"
import Card2 from "../components/Card2"
import { Row, Container } from "../components/Grid";


function Projects() {
    return (
      <div>
       
    
        <h1 className="text-center">Projects</h1>
        <br></br>
        <h2 className="text-center">
          Look at all this Great Work!
        </h2>
        <br></br>
        <br></br>
        <Container>
        <Row>
        <Card></Card>
        <Card1></Card1>
        <Card2></Card2>
       </Row>
       </Container>
      </div>
    );
  };

export default Projects;
