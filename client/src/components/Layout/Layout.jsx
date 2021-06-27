import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;

  return (
    <div className="layout">
      <header>
        <Link to="/">
          <h1>thesoundoff.</h1>
        </Link>
        {currentUser ? (
          <>
            <p>Welcome back, {currentUser.username}! <button onClick={handleLogout}>Logout</button></p>
            
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        {currentUser && (
          <>
            <Link to="/songs">All Songs</Link>
            <Link to="/songs/new">Create</Link>
            <Link to="/edit">Edit/Delete</Link>
            <Link to="/comments">Comments</Link>
          </>
        )}
        <hr />
      </header>
      {children}
    </div>
  );
}
