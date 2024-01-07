import "./HomePage.scss";
import { Link } from "react-router-dom";
// import axios from "axios"; // Import Axios for making HTTP requests

function HomePage() {

  // const handleSpotifyLogin = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:2020/login');
  //     // After triggering the login, the user will be redirected to Spotify for authentication
  //     console.log(response);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

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
        {/* <button className="spotify-login__button" onClick={handleSpotifyLogin}>
          Log in with Spotify
        </button> */}
      </div>
    </div>
  );
}

export default HomePage