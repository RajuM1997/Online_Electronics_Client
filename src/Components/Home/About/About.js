import React from "react";
import img from "../../../img/about-02.png";
import "./About.css";

const About = () => {
  return (
    <section>
      <div className="about_me py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left_side_text">
                <h6>ABOUT SOMETHING</h6>
                <h2>
                  It’s Our <span>Honour</span>, To <br /> Be <span>With</span>{" "}
                  You
                </h2>
                <p>
                  There are many variations of passages of electronics Services,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. by injected humour, or randomised words
                  which don't look even
                </p>
                <p>
                  There are many variations of passages of electronics repair,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words duskam azer which don't
                  look
                </p>
                <div className="about_btn">
                  <button>DISCOVER MORE</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-2">
              <img src={img} alt="about_image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
