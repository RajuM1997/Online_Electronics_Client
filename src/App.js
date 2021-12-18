import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceDetails from "./Components/Home/Service/ServiceDetails/ServiceDetails";
import About from "./Pages/About/About";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import AddService from "./Pages/Dashboard/AddService/AddService";
import AllOrder from "./Pages/Dashboard/AllOrder/AllOrder";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import MangeOrder from "./Pages/Dashboard/MangeOrder/MangeOrder";
import MangeService from "./Pages/Dashboard/MangeService/MangeService";
import Payment from "./Pages/Dashboard/Payment/Payment";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/service/:id" element={<ServiceDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route exact path="/dashboard" element={<DashboardHome />}></Route>
            <Route
              path={`/dashboard/addProduct`}
              element={<AddService />}
            ></Route>
            <Route
              path={`/dashboard/allProduct`}
              element={<AllOrder />}
            ></Route>
            <Route path={`/dashboard/myOrder`} element={<MyOrder />}></Route>
            <Route
              path={`/dashboard/makeAdmin`}
              element={<MakeAdmin />}
            ></Route>
            <Route
              path={`/dashboard/mangeOrder`}
              element={<MangeOrder />}
            ></Route>
            <Route
              path={`/dashboard/mangeProduct`}
              element={<MangeService />}
            ></Route>
            <Route path={`/dashboard/payment`} element={<Payment />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
