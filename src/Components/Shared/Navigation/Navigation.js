import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/Usefirebase";
import "./Navigation.css";

const Navigation = () => {
  const { user, handleLogOut } = useFirebase();
  return (
    <Navbar className="custome-bg" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} className="text-dark" to="/">
          {/* <img className="logo_img pe-2" src={logo} alt="" /> */}
          Online Electronics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" className="text-dark nav_link">
              Home
            </Nav.Link>
            {user.email && (
              <Nav.Link
                as={Link}
                to="/dashboard"
                className="text-dark nav_link"
              >
                Dashboard
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/blog" className="text-dark nav_link">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-dark nav_link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-dark nav_link">
              Contact
            </Nav.Link>
          </Nav>
          {!user?.email ? (
            <Nav.Link as={Link} to="/login">
              <div className="login-or-signup">
                <button className="login-btn">Log In</button>
              </div>
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">
              <div className="login-or-signup">
                <button onClick={handleLogOut} className="login-btn">
                  Log Out
                </button>
              </div>
            </Nav.Link>
          )}
          <Nav.Link>
            {/* {user?.email && (
              <Navbar.Text className="text-white">
                Signed in as:{" "}
                <small className="pe-1">{user?.displayName}</small>
                <img className="user-img" src={user?.photoURL} alt="" />
              </Navbar.Text>
            )} */}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
