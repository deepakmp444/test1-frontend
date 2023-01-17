import axios from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [getmessage, setGetMessage] = useState("");

  const makeCookies = async (e) => {
    e.preventDefault();
    const cookieChecked = await axios.post("https://cookies.onrender.com/message", {
      message,
    });
    console.log("cookieChecked:", cookieChecked);
  };

  const getCookies = async () => {
    try {
      const getMessageCookie = await axios.get("https://cookies.onrender.com/message");
      console.log('getMessageCookie:', getMessageCookie.data.cookieMessage)
    } catch (error) {
      console.log('error:', error)
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
