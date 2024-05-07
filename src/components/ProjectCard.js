import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Oooops!" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br />
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          {link}</a>
        </div>
      </div>
    </Col>
  );
};