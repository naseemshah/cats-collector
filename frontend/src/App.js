import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import { ApiContext } from "./contexts/ApiContext";
import axios from "axios";

const api = axios.create({
  baseURL: `http://${process.env.NODE_ENV === 'development' ? process.env.REACT_APP_CATS_API_DEV : process.env.REACT_APP_CATS_API_PRO}`
})

function App() {
      

  return (
    <Router>
      <ApiContext.Provider value={{ api }}>
        <Switch>
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
