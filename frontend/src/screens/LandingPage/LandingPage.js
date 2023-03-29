import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title"> Welcome to Notes Lagbe</h1>
              <p className="subtitle">
                One safe place to get all your academic assistance
              </p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton1">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingbutton2" variant="info">
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
