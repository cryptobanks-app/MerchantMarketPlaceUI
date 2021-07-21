import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import MerchantSignIn from './merchant-signin';
import MerchantRegister from './merchant-register';
import MerchantHome from './merchant-home';

function Merchants() {
  return (
    <div className="Merchants">
      <header className="App-header">
          Merchants
      </header>
      <Router>
          <div>

            <nav>
              <ul>
                <li>
                  <NavLink to="/merchants/merchants-signin">Sign In</NavLink>
                </li>
                <li>
                  <NavLink to="/merchants/merchants-register">Register</NavLink>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/merchants/merchants-signin">
                <MerchantSignIn/>
              </Route>
              <Route path="/merchants/merchants-register">
                <MerchantRegister/>
              </Route>
              <Route path="/merchants">
                <MerchantHome/>
              </Route>
            </Switch>

          </div>
      </Router>
    </div>
  );
}

export default Merchants;
