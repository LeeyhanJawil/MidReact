import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Venues from './Venues';
import Schedules from './Schedules';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/venues/:id">
          <Schedules />
        </Route>
        <Route path="/venues">
        <Venues />
        </Route>
        
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
