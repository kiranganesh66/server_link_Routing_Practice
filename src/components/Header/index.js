import {Link, Route, Switch} from 'react-router-dom'
import './index.css'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import NotFound from '../NotFound'

const Header = () => (
  <div className="main-bg">
    <div className="sub-bg">
      <nav className="Nav-Cont">
        <div className="Logo-Name-Cont">
          <img
            className="logo"
            alt="wave"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          />
          <h1 className="logo_Name">Wave</h1>
        </div>

        <ul className="un-orderLi">
          <li>
            <Link className="Nav-options" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Nav-options" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="Nav-options" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default Header
