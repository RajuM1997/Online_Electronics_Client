import React from "react";
import "./News.css";

const News = () => {
  return (
    <section>
      <div className="py-5">
        <div className="container">
          <div className="news_main_text text-center pb-5">
            <h2>
              Our Latest <span>News</span>
            </h2>
            <p>
              There are many variations of passages of Lorem electronics repair,
              but the majority <br /> have suffered alteration in azer duskam
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card_img">
                  <img
                    src="https://i.ibb.co/w6Vr0cB/blog-s-01.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <h5>09 Dec</h5>
                </div>
                <div className="news_text py-3">
                  <h4 className="ps-2 pe-2">
                    We don’t meeting people by accident duskam
                  </h4>
                  <div className="w-70 d-flex justify-content-between ps-2 pe-2">
                    <p>PC & Laptop </p>
                    <p>By: Maksud</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card_img">
                  <img
                    src="https://i.ibb.co/2NZn99k/blog-s-02.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <h5>11 Dec</h5>
                </div>
                <div className="news_text py-3">
                  <h4 className="ps-2 pe-2">
                    All of my services laptop i like most
                  </h4>
                  <div className="w-70 d-flex justify-content-between ps-2 pe-2">
                    <p>Laptop Repair</p>
                    <p>By: Mark Rose</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card_img">
                  <img
                    src="https://i.ibb.co/QFzb3sb/blog-s-03.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <h5>12 Dec</h5>
                </div>
                <div className="news_text py-3">
                  <h4 className="ps-2 pe-2">
                    You need a lot of experience about on it{" "}
                  </h4>
                  <div className="w-70 d-flex justify-content-between ps-2 pe-2">
                    <p>PC Repair </p>
                    <p>By: Anna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
