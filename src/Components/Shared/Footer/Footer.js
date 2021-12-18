import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="compny">
              <strong>
                Long established fact that a reader electronics services the
                readable content
              </strong>
              <div className="footer_btn">
                <input type="text" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service">
              <h5>SERVICES</h5>
              <h6>Heating Repair</h6>
              <h6>electronics Repair</h6>
              <h6>Conditioning Repair</h6>
              <h6>Electrical Services</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact">
              <h5>QUICK CONTACT</h5>
              <h6>Bluesitline, 4/3 north corn walinon, Usa.</h6>
              <h6>elecron11@gmail.com</h6>
              <h6>+88345 789 456</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="social">
              <h5>SOCIAL MEDIA</h5>
              <strong>
                It is a long established fact that a reader will page when
                looking at looking
              </strong>
              <div className="icon"></div>
            </div>
          </div>

          <div className="copy_right pt-5 text-center">
            <hr />
            <p> Copyright © Raju 2022 All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
