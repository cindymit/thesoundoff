import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
        <h1>
          LOGIN
        </h1>
        <label>
          Username:
          <input type='text' name='username' value={username} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Password:
          <input type='password' name='password' value={password} onChange={handleChange}/>
        </label>
        <br />
      <button>Submit</button>
      <h4>Don't have an account?
        <br />
        <Link to='/signup'>Sign-up Here!</Link>
      </h4>
      </form>
  );
}