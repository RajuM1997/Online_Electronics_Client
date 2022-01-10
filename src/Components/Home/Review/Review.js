import React, { useEffect, useState } from "react";
import "./Review.css";
import Rating from "react-rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://nameless-atoll-45965.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
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
    <div className="testimonial mb-5">
      <h1 className="text-center py-2 ">Our Client Say</h1>
      <div className="container">
        <Slider {...settings}>
          {reviews.map(({ description, name, reveiw, _id }) => (
            <div className="col" key={_id}>
              <div className="card h-100">
                <img
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                  className="d-block"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{name}</h5>

                  <p className="card-text">{description.slice(0, 150)}</p>
                  {/* display the ratting */}
                  <div className="testimonial-icon">
                    <Rating
                      initialRating={reveiw}
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      readonly
                    ></Rating>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
