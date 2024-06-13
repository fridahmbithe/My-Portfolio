import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import LazyLoad from 'react-lazyload';
import {PopupButton } from "react-calendly";
import emailjs from 'emailjs-com';

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
  // const templateParams = {
  //   name: 'Fridah Mbithe',
  //   email: 'user@example.com',
  //   date: 'June 13, 2024',
  //   time: '10:00 AM',
  // };
  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  // const handleEmailSubmit = (event) => {
  //   event.preventDefault();
       
  //   emailjs.send('service_fjr4n1u', 'template_ls8mayx', templateParams, 'gMFWFJ-J5rRjQKxZC')
  //     .then((result) => {
  //       console.log('Email sent successfully!', result.text);
  //     }, (error) => {
  //       console.error('Error sending email:', error.text);
  //     });
  // };
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
                  <h5 className="greet">{`Front-end Web Developer `}</h5>
                  <p>
                    A creative and detail oriented front-end web developer with an
                    ability to create intuitive and innovative designs, and
                    also, translate the designs to a fully responsive Website.
                  </p>
                  <div className="calendly" ref={setRootElement}>
                    <PopupButton
                      url="https://calendly.com/fridahmbithe45"
                      text="Schedule a Call"
                      // color="#00a2ff"
                      // textColor="#ffffff"
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
