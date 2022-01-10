import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./ServiceDetails.css";
import { useSelector } from "react-redux";

const ServiceDetails = () => {
  const user = useSelector((state) => state.user.userAuth);
  console.log(user.displayName);
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://nameless-atoll-45965.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.email === "") {
      data.email = user.email;
    } else if (data.displayName === "") {
      data.displayName = user.displayName;
    } else if (data.price === "") {
      data.price = service.price;
    }
    fetch(`https://nameless-atoll-45965.herokuapp.com/order`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        reset(data);
        alert("Thank You");
      });
  };

  return (
    <div>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="details">
              <div className="details-img">
                <img
                  className="img-fluid"
                  src={service?.details_img1}
                  alt="details-img"
                />
              </div>
              <h3 className="py-3">{service?.main_title}</h3>
              <strong>Price: ${service?.price}</strong>
              <p className="py-3">{service?.des}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="booking-from text-center py-3 ms-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email")}
                  defaultValue={user?.email}
                  placeholder="email"
                  className="p-1 m-2 w-100"
                />
                <input
                  {...register("displayName")}
                  defaultValue={user?.displayName}
                  placeholder="name"
                  className="p-1 m-2 w-100"
                />
                <input
                  {...register("product")}
                  placeholder="Product Name"
                  defaultValue=""
                  className="p-1 m-2 w-100"
                />
                <br />
                <input
                  {...register("address")}
                  placeholder="address"
                  type="address"
                  className="p-1 m-2 w-100"
                />
                <br />
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  type="number"
                  className="p-1 m-2 w-100"
                />
                <input
                  {...register("price")}
                  defaultValue={service?.price}
                  placeholder="price"
                  className="p-1 m-2 w-100"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="Book Now" className="booking-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
