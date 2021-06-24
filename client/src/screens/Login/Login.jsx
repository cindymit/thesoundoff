import "./Login.css";
import React from "react";
import { useState } from "react";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <h1>
          <LOGIN></LOGIN>
        </h1>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handleChange}/>
        </label>
        <br />
        <Link to="/signup">Signup</Link>
        <button>Submit</button>
      </form>
    </div>
  );
}
