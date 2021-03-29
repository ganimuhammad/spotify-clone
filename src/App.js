import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { useStateProviderValue } from "./components/StateProvider";
import { getTokenFromResponse } from "./utils/spotify";

function App() {
  const [{ token, spotify }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("4itoe3vwSney1xtIe9hlHw").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player />}
    </div>
  );
}

export default App;
