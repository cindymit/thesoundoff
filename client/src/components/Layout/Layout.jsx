import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;

  return (
    <div className="layout-container">
      <header>
        <div className="logo-div">
          <Link to="/">
            <img
              src="https://i.imgur.com/dN5rghq.png"
              alt="logo"
              className="logo"
            />
            </Link>
          </div>
        
        {currentUser ? (
          <>
            <div className="welcome">
              <p>
                Welcome back, {currentUser.username}!
                <button onClick={handleLogout}>Logout</button>
              </p>
              </div>
            </>
        ) : (
          <>
            <div className="register-links">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          </>
        )}
        {currentUser && (
          <>
            <div className="authorized-links">
              <div className="home-link">
                <Link to="/">
                  <img src="https://img.icons8.com/material-rounded/100/ffffff/home.png" alt="home-icon"/>{" "}
                  Home
                </Link>
              </div> 
              <br />
              <div className="songs-link">
                <Link to="/songs">
                  <img src="https://img.icons8.com/ios-glyphs/100/ffffff/headphones.png" alt="songs-icon" />{" "}
                  All Songs
                </Link>
              </div>
              <br />
              <div className="create-link">
                <Link to="/songs/new">
                  <img src="https://img.icons8.com/ios-glyphs/100/ffffff/add--v1.png" alt="create-icon" />{" "}
                  Create
                </Link>
              </div>
            </div>
          </>
        )}
      </header>
      {children}
    </div>
  );
}
