import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => state.user.userAuth);
  const loading = useSelector((state) => state.user.loading);
  let location = useLocation();

  if (loading) {
    return "loading....";
  }
  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
