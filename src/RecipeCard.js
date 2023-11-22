import React from 'react';
import "./RecipeCard.css"; 

const RecipeCard = ({ title, description, imageUrl, onSelect }) => (
  <div className="recipe-card" onClick={onSelect}>

  <h2>{title}</h2>
    <img src={imageUrl} alt={title} className="recipe-image" />
    <p>{description}</p>

    </div>
);

export default RecipeCard;