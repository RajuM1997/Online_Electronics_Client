import React from "react";
import img from "../../img/about-03.png";
import "./About.css";

const About = () => {
  return (
    <section>
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-md-7">
            <div className="left_side_text">
              <h1>
                It’s Our <span>Honour</span>, To <br /> Be <span>With</span> You
              </h1>
              <p>
                There are many variations of passages of electronics repair, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. by injected humour
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="laptop">
                  <h3>Laptop Repair</h3>
                  <p>
                    There are many variations of passages of electronics repair,
                    but the majority have suffered alteration
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="camera ">
                  <h3>Camera Repair</h3>
                  <p>
                    There are many variations of passages of electronics repair,
                    but the majority have suffered alteration
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="desktop">
                  <h3>Desktop Repair</h3>
                  <p>
                    There are many variations of passages of electronics repair,
                    but the majority have suffered alteration
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="iphone">
                  <h3>Iphone Repair</h3>
                  <p>
                    There are many variations of passages of electronics repair,
                    but the majority have suffered alteration
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src={img} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
