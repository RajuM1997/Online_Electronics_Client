import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../../Components/Hook/Usefirebase";

const Register = () => {
  const {
    signInWithGoogle,
    createAccountWithGoogle,
    setUser,
    setIsLoading,
    createUserName,
    error,
    setError,
  } = useFirebase();

  const history = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/home";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    createAccountWithGoogle(email, password)
      .then((res) => {
        setIsLoading(true);
        createUserName(email, name);
        setUser(res.user);
        history.push(url);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        const user = res.user;
        console.log(user);
        history.push(url);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <Container className="py-5 mt-5">
        <small className="text-danger">{error}</small>
        <Form className="w-75 mx-auto" onSubmit={handleRegistration}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onBlur={handleChangeName}
              type="text"
              placeholder="Enter Name"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleChangeEmail}
              type="email"
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handleChangePassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <div className="w-75 pt-3 mx-auto">
          <h3>
            Already You Have A Account..?? <Link to="/Login">Login</Link>{" "}
          </h3>
          <button onClick={handleGoogleSignIn} className="mt-2 login_btn">
            <i className="fab fa-google-plus-g me-1"></i>
            GoogleSignIn
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Register;
