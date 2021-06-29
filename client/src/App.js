import "./App.css";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Layout from "./components/Layout/Layout";
import Main from "./containers/Main";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  loginUser,
  signupUser,
  verifyUser,
  removeToken,
} from "./services/users";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleSignup = async (formData) => {
    const userData = await signupUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Signup handleSignup={handleSignup} />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
