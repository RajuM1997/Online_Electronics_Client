import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchServicedet } from "../../../../redux/slices/serviceSlice";

const ServiceDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchServicedet());
  // }, []);
  return (
    <div>
      <h1>this service details {id}</h1>
    </div>
  );
};

export default ServiceDetails;
