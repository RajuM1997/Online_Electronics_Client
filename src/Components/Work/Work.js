import React from "react";
import Slider from "react-slick";
import "./Work.css";
import img1 from "../../img/work/01 (1).jpg";
import img2 from "../../img/work/02.jpg";
import img3 from "../../img/work/03.jpg";

const Work = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    dots: true,
    arrows: false,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container">
        <div className="work_text text-center py-5">
          <h1>
            Elecron <span>Work</span>
          </h1>
          <p>
            There are many variations of passages of Lorem electronics repair,
            but the majority <br /> have suffered alteration in azer duskam
          </p>
        </div>
        <div className="row">
          <Slider {...settings}>
            <div className="col-md-3">
              <img
                style={{ width: "350px", height: "250" }}
                src={img1}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-3">
              <img
                style={{ width: "350px", height: "250" }}
                src={img2}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-3">
              <img
                style={{ width: "350px", height: "250" }}
                src={img3}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-3">
              <img
                style={{ width: "350px", height: "250" }}
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="img-fluid"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Work;
