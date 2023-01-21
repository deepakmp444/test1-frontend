import axios from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [getmessage, setGetMessage] = useState("");

  const makeCookies = async (e) => {
    // Hint process.env.REACT_APP_API = "REACT_APP_API = "http://localhost:4000"
    e.preventDefault();
    console.log('`${process.env.REACT_APP_API}/message`:', `${process.env.REACT_APP_API}/message`)
    const response = await axios.post(`${process.env.REACT_APP_API}/message`, {
      message,
    });
    console.log("response:", response.data.status);
    localStorage.setItem("display", response.data.status)
  };

  const getCookies = async () => {
    try {
      const getMessageCookie = await axios.get(
        `${process.env.REACT_APP_API}/message`
      );
      console.log("getMessageCookie:", getMessageCookie.data.cookieMessage);
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
