import React from "react";
import { Link } from "react-router";
import "./home.css";
import reactLogo from "../../assets/react.svg";

const HomePage = () => {
  const randomImage = `https://picsum.photos/1920/1080?random=${Math.floor(
    Math.random() * 1000
  )}`;

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <div className="overlay">
        <h1 className="title">Bank of React</h1>
        <img src={reactLogo} className="logo" alt="React logo" />
        <div className="quick-nav">
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/user-profile">
            Profile
          </Link>

          <Link className="link" to="/credits">
            Credits
          </Link>
          <Link className="link" to="/debits">
            Debits
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
