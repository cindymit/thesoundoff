import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

import React from 'react';

export default function Signup(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <h1>SIGN-UP</h1>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input type='text' name='email' value={email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
      <h4>Already have an account?
        <br />
        <Link to='/login'>Login Here!</Link>
      </h4>
    </form>
  );
}
