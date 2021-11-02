
import Form from './Form.jsx';
import Results from './Results.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Add Result</Link>
            </li>
            <li>
              <Link to="/results">View Results</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

    