import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./login.css";
import reactLogo from "../../assets/react.svg";
const Login = () => {
  const [username, setUsername] = useState("Demo");
  const [password, setPassword] = useState("Demo");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const randomImage = `https://picsum.photos/1920/1080?random=${Math.floor(
    Math.random() * 1000
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    if (username === "Demo" && password === "Demo") {
      navigate("/user-profile");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${randomImage})`,
      }}
    >
      <div
        className="overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1 className="title">Welcome Back</h1>
        <img src={reactLogo} className="logo" alt="React logo" />

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <Link className="back-link" to="/">
          Back To Home
        </Link>

        <div
          style={{
            color: "white",
            textAlign: "center ",
            border: "1px solid var(--color-primary)",
            marginTop: "8px",
            borderRadius: "16px",
          }}
        >
          <h2>Login Credentials</h2>
          <p>User: Demo</p>
          <p>Password: Demo</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
