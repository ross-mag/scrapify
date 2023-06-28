import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-page__header">Scrapify</h1>
      <h3 className="home-page__subheader">Music Scrapbook</h3>
      <div className="button__container">
        <Link to={"/music"} className="button__link" activeclassname="active">
          <button className="home__button">
              Add Songs
          </button>
        </Link>
        <Link to={"/journal"} className="button__link" activeclassname="active">
          <button className="home__button">
              Journal
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage