import React, { useRef } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import useFirebase from "../../../Components/Hook/Usefirebase";
import { addUserAuth } from "../../../redux/slices/serviceSlice";

import login from "../../../Images/Login/login.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const { emailLogin, googleSignIn } = useFirebase();
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const saveUserInfo = (data) => {
    axios
      .post("https://nameless-atoll-45965.herokuapp.com/users", data)
      .then((res) => console.log(res));
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(({ user }) => {
        // save info to db
        console.log(user);
        const userInfo = {
          name: user.displayName,
          email: user.email,
        };
        saveUserInfo(userInfo);
        dispatch(addUserAuth(user));
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    if (email && pass) {
      console.log(emailRef.current.value, passRef.current.value);
      emailLogin(email, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          dispatch(addUserAuth(user));
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <h1 className="text-center fw-bold fs-2 mt-5 mb-3">Please Login!</h1>
      <div className="login-container ">
        <div>
          <img className="w-100 img-fluid" src={login} alt="" />
        </div>
        <div>
          <Form onSubmit={handleLogin} className="form-bg">
            <div className="mt-5 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                required
                ref={emailRef}
                type="email"
                className="form-control w-50"
                placeholder="Enter Your Email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 ">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                required
                ref={passRef}
                type="password"
                className="form-control w-50 border"
                placeholder="Enter Your Password"
                id="exampleInputPassword1"
              />
            </div>
            <Button type="submit" className="submit-btn" variant="primary">
              Login
            </Button>
            <p
              style={{ cursor: "pointer" }}
              onClick={handleGoogleSignIn}
              className="text-primary ms-5 ps-5 pt-2"
            >
              Sign With google
            </p>
            <NavLink className="text-decoration-none" to="/register">
              <button
                type="button"
                className="py-0 my-0 d-block text-decoration-none btn btn-link ms-5 mt-3"
              >
                New User? Please Register
              </button>
            </NavLink>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
