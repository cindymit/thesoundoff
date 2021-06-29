import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

import React from "react";

export default function Signup(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  const { handleSignup } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="signup-container">
      <div
        className="signup-banner"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        {" "}
      </div>
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup(formData);
        }}
      >
        <h1>SIGN-UP</h1>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="signup-btn">Submit</button>
        <h4>
          Already have an account?
          <br />
          <Link to="/login">Login Here!</Link>
        </h4>
      </form>
    </div>
  );
}
