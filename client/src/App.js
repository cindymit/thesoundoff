import './App.css';
import Login from './screens/Login/Login'
import Signup from './screens/Signup/Signup'
import Layout from './components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
