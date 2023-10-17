import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/blogifylogo.png";
import "../style/navbar.css";

const NavBar = () => {
  const nav = useNavigate();

  const Logout = (event) => {
    event.preventDefault();
    const auth = getAuth();
    localStorage.clear();
    signOut(auth)
      .then((res) => nav("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar-design">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/blogs"} className="navbar-brand">
            <img src={logo} alt="Blogify Logo" className="rounded" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/blogs"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link active" aria-current="page">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/cr"} className="nav-link active" aria-current="page">
                  Create a new Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/ab"} className="nav-link active" aria-current="page">
                  Added Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={Logout} className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
