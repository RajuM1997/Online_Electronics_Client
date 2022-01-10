import React, { useRef } from "react";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import register from "../../../Images/Register/register.jpg";
import axios from "axios";
import useFirebase from "../../../Components/Hook/Usefirebase";
const Register = () => {
  const { createAccount, updateProfile, auth } = useFirebase();
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const passConfirmRef = useRef();
  const navigate = useNavigate();
  const saveUserInfo = (data) => {
    axios
      .post("https://nameless-atoll-45965.herokuapp.com/users", data)
      .then((res) => console.log(res));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const passConfirm = passConfirmRef.current.value;
    if (email && pass && name && passConfirm) {
      console.log(emailRef.current.value, passRef.current.value);
      createAccount(email, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              //save user to db
              console.log(user);
              saveUserInfo({ name: name, email: email });
              navigate("/", { replace: true });
            })
            .catch((error) => {});
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div>
      <h1 className="text-center fw-bold fs-2 mt-5 mb-3">
        Please Register Below!
      </h1>
      <div className="register-container">
        <div>
          <img className="w-100 img-fluid" src={register} alt="" />
        </div>
        <div>
          <Form onSubmit={handleRegister} className="form-bg">
            <div className="mt-5 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Enter Your name
              </label>
              <input
                required
                ref={nameRef}
                type="text"
                className="form-control w-50"
                placeholder="Name"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Enter Your Email
              </label>
              <input
                required
                ref={emailRef}
                type="email"
                className="form-control w-50"
                placeholder="Email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 ">
              <label for="exampleInputPassword" className="form-label">
                Enter Your Password
              </label>
              <input
                required
                ref={passRef}
                type="password"
                className="form-control w-50 border"
                placeholder="Password"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 ">
              <label for="exampleInputPassword1" className="form-label">
                Re-enter Your Password
              </label>
              <input
                required
                ref={passConfirmRef}
                type="password"
                className="form-control w-50 border"
                placeholder="Re-enter Password"
                id="exampleInputPassword1"
              />
            </div>
            <Button type="submit" className="submit-btn" variant="primary">
              Register
            </Button>
            <NavLink to="/login">
              <button
                type="button"
                className="d-block text-decoration-none btn btn-link ms-5 mt-3"
              >
                Already Registered? Please Login
              </button>
            </NavLink>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
