import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="banner_text">
          <h1>
            We <span>Fix</span>, As <br /> Soon As <span>Possible</span>
          </h1>
          <p>
            There are many variations of passages of Electronics Services, but
            the electronics have suffered <br /> alteration electronics repair,
            by injected humour yrawtap lewoj itaque quam praesentium.
          </p>
          <div className="btn">
            <button>Know More</button>
            <button>About Me</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
