import "./styles.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "reactstrap";

const Stepper = ({ stepsJson }) => {
  //Manage state for stepper
  const [activeStep, setActiveStep] = useState("1");

  return (
    <Container className="mainblock">
      <Row>
        <Col
          md="12"
          className="mainform rounded shadow-lg"
          style={{ float: "right" }}
        >
          <Row>
            <Col md="3" className=""></Col>
            <Col md="6" className="justify-content-center">
              <Row className="mt-2 text-center">
                {stepsJson.map((item) => (
                  <Col
                    md="2"
                    className={
                      item.order == 0
                        ? "button-nav-first"
                        : item.order == stepsJson.length - 1
                        ? "button-nav-last"
                        : "button-nav"
                    }
                    key={item.id}
                  >
                    <div>&nbsp;</div>
                    <Button
                      color="secondary"
                      size="lg"
                      className={
                        "btn btn-xl btn-outline-light btn-block text-black rounded-circle " +
                        (item.id == activeStep ? "buttonSave" : "buttonGrey")
                      }
                      onClick={() => setActiveStep(item.id)}
                    >
                      {item.id}
                    </Button>
                    <div
                      style={{
                        fontWeight: item.id == activeStep ? "bold" : "normal"
                      }}
                    >
                      {item.name}
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md="3" className=""></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Stepper;
