import React from "react";
import { Link } from "react-router";

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
        <h1 className="title">Welcome to the Bank of React</h1>
        <div className="quick-nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/userProfile">
            Profile
          </Link>
          <Link className="link" to="/login">
            Login
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
