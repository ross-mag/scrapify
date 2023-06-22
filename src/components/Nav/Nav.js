import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="list-item">
            <NavLink exact to={"/"} className="list-item__link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"/music"} className="list-item__link" activeClassName="active">
              Music
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"/journal"} className="list-item__link" activeClassName="active">
              Journal
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"/scrapbook"} className="list-item__link" activeClassName="active">
              Scrapbook
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav