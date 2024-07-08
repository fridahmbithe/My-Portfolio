import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import kemis from "../assets/img/kemis.png";
import elimutrees from "../assets/img/elimutrees.png";
import projImg3 from "../assets/img/resrise.png";
import projImg4 from "../assets/img/first work.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      id: 1,
      description: "KEMIS (Kenya Education Management Information System",
      imgUrl: kemis,
      link: 'https://kemis.education.go.ke',

    },
    {
      id: 2,
      description: "ElimuTrees (Tree Growing and Monitoring Web App)",
      imgUrl: elimutrees,
      link: 'https://elimutrees.education.go.ke',
    },
    {
      description: "Resume Rise (CV Revamp, job advertising website",
      imgUrl: projImg3,
      link: 'https://resumeriseltd.vercel.app/',

    },
    //    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility >
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Some of the Projects that I have Worked on</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="ooOOps!"></img>
    </section>
  )
}
