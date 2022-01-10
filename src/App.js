import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceDetails from "./Components/Home/Service/ServiceDetails/ServiceDetails";
import About from "./Pages/About/About";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import UserProfile from "./Pages/Dashboard/UserProfile";
import Review from "./Pages/Dashboard/Review/Review";
import Contact from "./Pages/Contact/Contact";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/service/:id"
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route exact path="/dashboard" element={<UserProfile />}></Route>
            <Route exact path="/dashboard/review" element={<Review />}></Route>
            <Route path={`/dashboard/myOrder`} element={<MyOrder />}></Route>
            <Route
              path={`/dashboard/makeAdmin`}
              element={<MakeAdmin />}
            ></Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
