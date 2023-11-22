import React from 'react';
import "./RecipeDetail.css";

const RecipeDetails = ({ title, ingredients, preparationSteps }) => (
  <div className="recipe-details">
<h2>{title}</h2>
    <h3>Ingredients</h3>
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>

        ))}
        </ul>
    
        <h3>Preparation Steps</h3>
        <ol>
    {preparationSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );
    
    export default RecipeDetails; 