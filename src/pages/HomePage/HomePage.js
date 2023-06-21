import "./HomePage.scss";

function HomePage() {
  const clientId = 'd36db95cf91243fd95915178643b8381';
  const scopes = 'playlist-read-private playlist-read-collaborative user-library-read';
  const redirectUri = 'http://localhost:3000';

  const authorizationUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${encodeURIComponent(clientId)}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  // You can use the authorizationUrl in your React component, for example in an <a> tag for the user to click:

  return (
    <div className="home-page">
      <a href={authorizationUrl}>Authorize with Spotify</a>
    </div>
  );
}

export default HomePage