import queryString from "query-string";
import { useEffect } from "react";
import axios from "axios";

const CallbackComponent = () => {
  useEffect(() => {
    const { code, state } = queryString.parse(window.location.search);
    // Make a POST request to your Node.js backend to exchange the authorization code for tokens
    axios
      .post("http://localhost:1020/callback", { code, state })
      .then((response) => {
        // Handle the response (access token, refresh token, etc.) as per your application's needs
        console.log(response.data);
      });
  }, []);

  return <div>Processing callback...</div>;
};

export default CallbackComponent;