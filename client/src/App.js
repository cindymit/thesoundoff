import './App.css';
import Layout from './components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>

          </Route>
        </Switch>
        <Switch>
          <Route path='/signup'>
            
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
