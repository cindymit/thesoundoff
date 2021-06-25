
import { Switch, Route } from 'react-router-dom';
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <h1>This is the main container!</h1>
      <Switch>
        <Route path='/songs/:id/edit'>
          <h3>Edit Song</h3>
        </Route>
        <Route path='/songs/new'>
          <h3>Create A Song</h3>
        </Route>
        <Route path='/songs'>
          <h3>Delete Song</h3>
        </Route>
      </Switch>
    </div>
  )
}
