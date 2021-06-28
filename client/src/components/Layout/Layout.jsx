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
            <p>
              <div className="welcome">
              Welcome back, {currentUser.username}!{" "} <br/>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </p>
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
              <Link to="/">Home</Link><br/>
              <Link to="/songs">All Songs</Link><br/>
              <Link to="/songs/new">Create</Link>
            </div>
          </>
        )}
      </header>
      {children}
    </div>
  );
}
