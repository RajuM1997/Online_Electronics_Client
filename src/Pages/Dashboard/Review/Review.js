import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Review = () => {
  const user = useSelector((state) => state.user.userAuth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.displayName === "") {
      data.displayName = user.displayName;
    }
    fetch(`https://nameless-atoll-45965.herokuapp.com/review`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Review Added Successfully");
      });
  };
  return (
    <div className="order text-center py-5">
      <h2 className="text-center pb-4">Add Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          defaultValue={user.displayName}
          placeholder="Name"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("reveiw")}
          placeholder="Reveiw Rating"
          type="number"
          className="p-2 m-2 w-50"
        />
        <br />
        <textarea
          {...register("description")}
          placeholder="Your Comment"
          className="p-2 m-2 w-50"
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value="Add Review" className="about-btn" />
      </form>
    </div>
  );
};

export default Review;
