import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import gmailicon from "../assets/img/gmailicon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between ">
          <Col size={12} sm={6}>
            <p>Fridah Mbithe Taabu &copy; 2024</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end ">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mbithe-taabu-2671b8208/"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/fridahmbithe"><img src={github} alt="Icon" /></a>
              <a href="mailto: fridahmbithe45@gmail.com"><img src={gmailicon} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
