import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="container contact-page">
        <div className="row py-5">
          <div className="col-md-5">
            <div className="contact-page-text">
              <div className="contact-page-info">
                <h3>CONTACT INFO</h3>
                <p className="pt-3">
                  Bicycles are a favorite personal vehicle for both boys and
                  girls. Especially useful for students and those who travel
                  short distances regularly
                </p>
              </div>
              <div className="info ">
                <div className="d-flex">
                  <strong>Address: </strong>
                  <p className="ps-4">
                    123 Sky Tower address name,
                    <br /> Los Algeles, USA, Country, 01234
                  </p>
                </div>
                <div className="d-flex">
                  <strong>Phone: </strong>
                  <p className="ps-4">01911111111</p>
                </div>
                <div className="d-flex">
                  <strong>Email: </strong>
                  <p className="ps-4">mraju5795@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Name">
                  <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Email address"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <FloatingLabel controlId="floatingInputGrid" label="Subject">
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <div className="pt-3 w-100">
                <button className="common-btn">Submit</button>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
