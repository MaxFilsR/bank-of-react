import { Link } from "react-router";
import reactLogo from "../../assets/react.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link className=" logo-container" to="/">
          <img src={reactLogo} className="logo" alt="React logo" />
          <h1>Bank Of React</h1>
        </Link>

        <nav className="nav-links main-links">
          <Link className="link" to="/user-profile">
            Profile
          </Link>

          <Link className="link" to="/credits">
            Credits
          </Link>
          <Link className="link" to="/debits">
            Debits
          </Link>
        </nav>
      </div>

      <div className="nav-links bottom-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/login">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
