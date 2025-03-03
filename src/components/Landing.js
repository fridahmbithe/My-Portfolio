import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile1.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import LazyLoad from 'react-lazyload';
import {PopupButton } from "react-calendly";

export const Landing = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-end Web Developer", "Web Designer"];
  const period = 2000;
  const profileimg = headerImg;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  //const { headerImg } = this.props;

  const handleClick = () => {
    window.location.href = 'tel:+254112579157';
  };

   const [rootElement, setRootElement] = useState(null);
  
  const handleScheduleClick = () => {
    setShowCalendlyPopup(true);
  };
  const [showCalendlyPopup, setShowCalendlyPopup] = useState(false);

  return (
    <section className="landing" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomin" : ""
                  }
                >
                  
                  <span className="tagline">
                  Fridah Mbithe{" "}
                  </span> <br />
                  {/* <h5 className="greet">{`Front-end Web Developer `}</h5> */}
                  <p>
                  Welcome to my Portfolio! I’m a meticulous <span class="text-white text-xl font-bold"> front-end web developer </span> 
                  with a passion for crafting intuitive and innovative designs. From wireframes to fully responsive websites, I bring creativity and attention to detail to every project.
                   Explore my work and discover how I turn ideas into seamless digital experiences!
                  </p>
                  <div className="calendly" ref={setRootElement}>
                    <PopupButton
                      url="https://calendly.com/fridahmbithe45"
                      text="Schedule a Meeting"
                      className="schedule-button"
                      onClick={handleScheduleClick}
                      rootElement={rootElement}
                      
                    />
                    
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="card1">
                    <LazyLoad>
                      <img src={headerImg} alt="Header" />
                    </LazyLoad>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
