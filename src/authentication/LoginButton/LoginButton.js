import "./LoginButton.scss";
import axios from "axios";

function LoginButton() {
  const handleLogin = () => {
    axios.get('http://localhost:1020/login')
      .then(response => {
        window.location.href = response.data.redirectUrl;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
}

export default LoginButton