import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
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
          <div className="header">
            <h2>Skills</h2>
            <p className="align-left">
              Junior level programming experience in front-end web development
            </p>
          </div>
          <div className="skilllist">
            <Row>
              <Col>
                <div className="list">
                  {/* <h5>Front-end Web Developer</h5>
                  <div> */}
                    <Card className="list axis-horizontal skills-card" responsive={responsive}>
                      <div className="skillslist">
                        <h2 className="skills-title">Web Development</h2>
                        <ul className="skills-items">
                          <li className="skills-item">
                            <i className="fab fa-html5 skills-icon"></i>
                            <span className="skills-label">HTML</span>
                          </li>
                          <li className="skills-item">
                            <i className="fab fa-js-square skills-icon"></i>
                            <span className="skills-label">JavaScript</span>
                          </li>
                          <li className="skills-item">
                            <i className="fab fa-react skills-icon"></i>
                            <span className="skills-label">React JS</span>
                          </li>
                          <li className="skills-item">
                            <i className="fab fa-css3-alt skills-icon"></i>
                            <span className="skills-label">CSS, Tailwind, Bootstrap & MUI</span>
                          </li>
                          <li className="skills-item">
                            <i className="fas fa-code skills-icon"></i>
                            <span className="skills-label">Rest APIs</span>
                          </li>
                          <li className="skills-item">
                            <i className="fab fa-csharp skills-icon"></i>
                            <span className="skills-label">C#</span>
                          </li>
                        </ul>
                      </div>
                    </Card>
                  {/* </div> */}
                </div>
              </Col>
              <Col>
                <div className="list">
                <Card className="list axis-horizontal skills-card" responsive={responsive}>
                      <div className="skillslist">
                        <h2 className="skills-title">UI/UX Design</h2>
                        <ul className="skills-items">
                          <li className="skills-item">
                            <i className="fab fa-html5 skills-icon"></i>
                            <span className="skills-label">Figma design</span>
                          </li>
                          <li className="skills-item">
                            <i className="fab fa-js-square skills-icon"></i>
                            <span className="skills-label">Adobe XD</span>
                          </li>
                          <li className="skills-item">
                            <i className="fab fa-react skills-icon"></i>
                            <span className="skills-label">Canva</span>
                          </li>
                          <li className="skills-item">
                            <i className="fab fa-css3-alt skills-icon"></i>
                            <span className="skills-label">Logo Creation</span>
                          </li>
                          <li className="skills-item">
                            <i className="fas fa-code skills-icon"></i>
                            <span className="skills-label">Video Editing</span>
                          </li>
                        </ul>
                      </div>
                    </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};