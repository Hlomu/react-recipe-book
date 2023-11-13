import React from "react";
import {} from "react-router-dom";
import BannerImage from "../assets/bg-image.jpeg";
import "../styles/Home.css";

function home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>________</h1>
        <p> FIT YOUR CRAVINGS</p>
      </div>
    </div>
  );
}

export default home;
