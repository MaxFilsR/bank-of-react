import React from "react";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <Link className="link" to="/">
        <div className="logo-container">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>Bank Of React</h1>
        </div>
      </Link>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
