import '../src/App.css';
import Merchants from './routes/merchants/merchants';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/"
          // target="_blank"
          rel="noopener noreferrer"
        >
          CrypoBank Marketplace
        </a>
      </header>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link exact='true' to="/merchants">Merchants</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/merchants">
              <Merchants/>
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
