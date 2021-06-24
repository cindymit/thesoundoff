import './App.css';
import Login from './screens/Login/Login'
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
            
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
