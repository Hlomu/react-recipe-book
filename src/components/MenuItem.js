import React from "react";

function MenuItem({ image, name, description }) {
  return (
    <div className="menuItem">
      <a href="/"><div style={{ backgroundImage: `url(${image})` }}> </div></a>
      <h1> {name} </h1>
      <p> {description} </p>
    </div>
  );
}

export default MenuItem;
