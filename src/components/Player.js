import React from "react";
import "./Player.css";
import Body from "./Body";
import SideBar from "./SideBar";
import Footer from "./Footer";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        {/* sidebar */}
        <SideBar />
        {/* Body */}
        <Body />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
