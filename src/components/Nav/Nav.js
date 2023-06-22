import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="list-item">
            <Link to={"/"} className="list-item__link" style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to={"/music"} className="list-item__link" style={{ textDecoration: 'none' }}>
              Music
            </Link>
          </li>
          <li className="list-item">
            <Link to={"/journal"} className="list-item__link" style={{ textDecoration: 'none' }}>
              Journal
            </Link>
          </li>
          <li className="list-item">
            <Link to={"/scrapbook"} className="list-item__link" style={{ textDecoration: 'none' }}>
              Scrapbook
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav