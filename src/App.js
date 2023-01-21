import axios from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [getmessage, setGetMessage] = useState("");

  const makeCookies = async (e) => {
    // Hint process.env.REACT_APP_API = "REACT_APP_API = "http://localhost:4000"
    e.preventDefault();
      console.log('`${process.env.REACT_APP_API}/message`:', `${process.env.REACT_APP_API}/setCookie`)
        axios.post(`${process.env.REACT_APP_API}/setCookie`, {
      name: "sessionId",
      value: "abc123",
      options: {
        maxAge: 3600, // expires in 1 hour
        path: "/",
        domain: "cookies.onrender.com",
        secure: true,
        httpOnly: true,
        sameSite: "lax"
      }
    })
    .then(response => {
      console.log("Cookie set successfully!");
    })
    .catch(error => {
      console.log("Error setting cookie: ", error);
    });

  };

  const getCookies = async () => {
    try {
      axios.get("https://cookies.onrender.com/getCookie", {
      params: {
        name: "sessionId"
      }
    })
    .then(response => {
      console.log("Cookie value: ", response.data.value);
    })
    .catch(error => {
      console.log("Error retrieving cookie: ", error);
    });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <h1>center</h1>
      <form>
        <input
          value={message}
          placeholder="Enter Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" onClick={makeCookies}>
          Click
        </button>
      </form>

      <button type="button" onClick={getCookies}>
        Get Cookies
      </button>
    </div>
  );
}

export default App;
