import React from 'react';
import "./RecipeDetail.css";


// RecipeDetails component displays detailed information about a selected recipe
// It includes the recipe title, ingredients, preparation steps, and a "Back to Menu" button
// The onBack function is passed as a prop to handle the navigation back to the menu

const RecipeDetails = ({ title, ingredients, preparationSteps, onBack }) => (
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
        <button className="back-to-menu-button" onClick={onBack}>
      Back to Menu
    </button>
      </div>
    );
    
    export default RecipeDetails; 