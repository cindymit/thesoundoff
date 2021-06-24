import "./Login.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

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
      <form>
        <h1>
          LOGIN
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
        <Link to="/signup">SIGN-UP</Link>
        <button>Submit</button>
      </form>
  );
}
