import React from 'react';
import "./RecipeCard.css"; 


// RecipeCard component represents a card displaying basic information about a recipe
// It includes the recipe title, description, an image, and handles the onSelect function when clicked

const RecipeCard = ({ title, description, imageUrl, onSelect }) => (
  <div className="recipe-card" onClick={onSelect}>

  <h2>{title}</h2>
    <img src={imageUrl} alt={title} className="recipe-image" />
    <p>{description}</p>
    
    </div>
);

export default RecipeCard;