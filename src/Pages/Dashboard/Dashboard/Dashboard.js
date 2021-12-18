import React from "react";
import "./Dashboard.css";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <aside>
      <div className="dashboard">
        <div className="admin-box">
          <div className="row">
            <div className="col-md-3">
              <div className="bashboard-manu p-1">
                <div className="all-menu mt-5">
                  {/* user profile start here */}
                  {/* <div className="user text-center d-flex flex-column justify-content-center align-content-center">
                    <img className="mx-auto pb-1" src={user.photoURL} alt="" />
                    <small>{user.email}</small>
                    <small>{user.displayName}</small>
                    <small>
                      <button className="logOut_btn">
                        Log Out
                      </button>
                    </small>
                  </div> */}
                  {/* user profile end here */}
                  <div className="all-order active">
                    <div className="icon pe-3">
                      <i className="fas fa-gift"></i>
                    </div>
                    <li className="admin-menu p-2">
                      {" "}
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/dashboard"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fas fa-home"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/"
                      >
                        Home Page
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/dashboard/myOrder"
                      >
                        All Order
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i className="fas fa-baby-carriage"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/dashboard/addProduct"
                      >
                        Add Product
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i className="fas fa-baby-carriage"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/dashboard/myOrder"
                      >
                        My Order
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i className="far fa-user"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/dashboard/makeAdmin"
                      >
                        Make Admin
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fas fa-truck"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/dashboard/mangeOrder"
                      >
                        Mange Order
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fas fa-user-cog"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/dashboard/mangeProduct"
                      >
                        Mange Product
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i className="fas fa-ice-cream"></i>
                    </div>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fab fa-cc-paypal"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          background: "none",
                        }}
                        to="/dashboard/payment"
                      >
                        Payment
                      </NavLink>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Dashboard;
