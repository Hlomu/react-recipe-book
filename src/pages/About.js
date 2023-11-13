import React from "react";
import AboutImg from "../assets/about.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to 2Go Recipes – Your Culinary Companion in the Digital
          Kitchen! We believe that great meals begin with great recipes. Our
          platform is designed to be your go-to destination for culinary
          inspiration, bringing together a diverse community of food
          enthusiasts, home cooks, and professional chefs. What sets us apart is
          our commitment to simplicity, creativity, and community. Whether
          you're a seasoned chef or a kitchen novice, our user-friendly
          interface makes discovering, saving, and sharing recipes a breeze.
          From quick weekday dinners to show-stopping desserts, our extensive
          collection has something to suit every taste and skill level.Explore a vast library of
          tried-and-true recipes, curated by our community and culinary experts.
          Discover new cuisines, cooking techniques, and innovative twists on
          classic favorites. Happy
          cooking!
        </p>
      </div>
    </div>
  );
}

export default About;
