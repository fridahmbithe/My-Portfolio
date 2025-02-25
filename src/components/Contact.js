import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { send } from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState([]);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState((""));

  //clear form fields after email is send
  const resetFormFields = () => {
    setFormDetails(formInitialDetails);
  };

  const onFormUpdate = (category, value) => {
    setFormDetails((prevFormDetails) => ({
      ...prevFormDetails,
      [category]: value,
    }));
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    const templateParams = {
      from_name: `${formDetails.firstName} ${formDetails.lastName}`,
      to_name: 'Mbithe&s Portfolio',
      email: formDetails.email,
      email: formDetails.phone,
      message: formDetails.message,
    };
  
    send(
      'service_fjr4n1u',
      'template_ls8mayx',
      templateParams,
      'gMFWFJ-J5rRjQKxZC'
    )
      .then((response) => {
       // console.log('Email sent!', response.status, response.text);
        setStatus({ success: true, message: 'Thank you for Contacting Fridah, She will get back to you via email ASAP!' });
        resetFormFields();
        setButtonText("Send");
      })
      .catch((error) => {
       // console.log('Email failed to send', error);
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        setButtonText("Send");
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

