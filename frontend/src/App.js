import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/dash">
            <Dashboard />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
