import React from "react";
import { Link } from 'react-router-dom';

const MenuItem = ({ image, name, description }) => {
  return (
    <div className="menuItem">
      <h1> {name} </h1>
     <Link to = {`/recipe/${name.toLowerCase()}`}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
     </Link>
      <p> {description} </p>
    </div>
  );
}

export default MenuItem;
