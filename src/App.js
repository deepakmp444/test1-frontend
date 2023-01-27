import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
function App() {
  const [message, setMessage] = useState("");
  const [getmessage, setGetMessage] = useState("");
  const [cookies, setCookie] = useCookies(["userOrder"]);
  const makeCookies = async (e) => {
    // Hint process.env.REACT_APP_API = "REACT_APP_API = "http://localhost:4000"
    e.preventDefault();

    const response = await axios.post(`${process.env.REACT_APP_API}/message`, {
      message,
    });
    console.log("response:", response.data.status);
    localStorage.setItem("display", response.data.status);
  };
  const getCookies = async () => {
    try {
      const getMessageCookie = await axios.get(
        `${process.env.REACT_APP_API}/message`
      );
      setGetMessage(getMessageCookie.data.cookieMessage);
      console.log("getMessageCookie:", getMessageCookie.data.cookieMessage);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleClearCookie = async () => {
    try {
      const getMessageCookie = await axios.post(
        `${process.env.REACT_APP_API}/clear`
      );

      console.log("getMessageCookie:", getMessageCookie.data);
    } catch (error) {}
  };

  const setCookieHandle = () => {
    setCookie("smAddress", "finding", { path: "/" });
  };
  
  const setGetCookieHandle = async () => {
    try {
      const response = await axios.post(`https://cookies.onrender.com/smaddress`);
      console.log("response:", response);
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

      <button type="button" onClick={handleClearCookie}>
        Clear Cookies
      </button>

      <button type="button" onClick={getCookies}>
        Get Cookies
      </button>
      <br />
      {getmessage === "undefined" ? <h1>undefined</h1> : getmessage}
      <br />
      <button type="button" onClick={setCookieHandle}>
        Set Cookies
      </button>
      <br />
      <button type="button" onClick={setGetCookieHandle}>
        Get Cookies of SM
      </button>
    </div>
  );
}

export default App;
