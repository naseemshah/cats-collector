import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Dash2 from './components/pages/Dash2'
import { ApiContext } from "./contexts/ApiContext";
import axios from "axios";

const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_CATS_API}`,
})

function App() {
      

  return (
    <Router>
      <ApiContext.Provider value={{ api }}>
        <Switch>
          <Route path="/dash2">
            <Dash2 />
          </Route>
          <Route path="/dash">
            <Dashboard />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </ApiContext.Provider>
    </Router>
  );
}

export default App;
