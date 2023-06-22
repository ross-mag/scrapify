import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <Link to={"/music"} className="button__link" activeClassName="active">
        <button className="home__button">
          Start adding music
        </button>
      </Link>
      <Link to={"/journal"} className="button__link" activeClassName="active">
        <button className="home__button">
          Start journaling
        </button>
      </Link>
    </div>
  );
}

export default HomePage