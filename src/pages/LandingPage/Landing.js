import React from "react";
import { Container, FormControl, InputGroup, Button } from "react-bootstrap";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <h1 className="landing__h1">Welcome Stranger !</h1>
      <p className="landing__p">
        Subscribe for Newsletter on Web-Development every week
      </p>
      <div className="landing__form">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Email"
            aria-label="Subscription Email"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="dark">Subscribe</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
}

export default Landing;
