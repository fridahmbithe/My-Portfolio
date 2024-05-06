import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="responsive" id="skills">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <h2>My Skills</h2>
            <p className="align-left">
              I have Junior level programming experience in React.js with Tailwind and MUI for frontend and .NET Framework for backend development.
            </p>
          </div>
          <div className="skilllist">
            <Row>
              <Col>
                <div className="list p-2">
                  <h5>Full Stack Web Developer</h5>
                  <div>
                    <div className="slider-wrapper axis-horizontal" responsive={responsive} >
                      <ul>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>React JS</li>
                        <li>CSS, Tailwind, Bootstrap & MUI</li>
                        <li>Rest APIs</li>
                        <li>C#</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="list">
                  <h5>UI/UX Design</h5>
                  <div>
                    <div className="slider-wrapper axis-horizontal" responsive={responsive} >
                      <ul>
                        <li>Web Design</li>
                        <li>Video Creation and Editing</li>
                        <li>Logo Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};