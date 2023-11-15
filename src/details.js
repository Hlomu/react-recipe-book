import { Details } from '@material-ui/icons';
import React from 'react';
import "../styles/details.css";
import Octopus from '../assets/octopus.jpeg';
import ChickenPasta from '../assets/chicken.jpeg';
import Trotters from '../assets/trotters.jpeg';

const RecipeCard = ({ title, description, imageUrl, ingredients, preparationSteps }) => (
  <div className="recipe-card">
    <h2>{title}</h2>
    <img src={imageUrl} alt={title} className="recipe-image" />
    <p>{description}</p>

    <div className="recipe-details">
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
  </div>
);

const App = () => {
  const grilledOctopusIngredients = ["Octopus", "Salt", "Pepper", "Olive oil", "Garlic", "Oregano", "Paprika"];
  const grilledOctopusSteps = ["Clean and prepare the octopus for cooking.", "Boil the octopus.", "Marinate the octopus in the olive oil, garlic, oregano, paprika, salt and pepper", "Grill until charred."];

  const creamyChickenIngredients = ["Chicken", "Cream", "Parmesan cheese", "Salt", "Pepper", "Chicken broth", "Pasya/Rice"];
  const creamyChickenSteps = ["Season and sear chicken.", "Make creamy sauce by mixing chicken broth, heavy cream and parmesan cheese.", "Simmer chicken in creamy sauce", "Serve with pasta or rice"];

  const porkTrottersIngredients = ["Pork trotters", "Aromatic spices", "Chicken broth"];
  const porkTrottersSteps = ["Sear pork trotters until brown.", "Season trotters with spices", "Simmer trotters in chicken broth for 2 hours", "test"];

  return (
    <div className="app-container">
      <RecipeCard
        title="Grilled Octopus"
        description="Tender, lightly seasoned and charred octopus that tastes amazing."
        imageUrl={Octopus}
        ingredients={grilledOctopusIngredients}
        preparationSteps={grilledOctopusSteps}
      />

      <RecipeCard
        title="Creamy Chicken"
        description="Succulent chicken bathed in a velvety cream sauce, perfectly balanced with the zing of lemon and capers."
        imageUrl={ChickenPasta}
        ingredients={creamyChickenIngredients}
        preparationSteps={creamyChickenSteps}
      />

      <RecipeCard
        title="Pork Trotters"
        description="A culinary masterpiece featuring succulent, slow-cooked trotters bathed in a symphony of aromatic spices."
        imageUrl={Trotters}
        ingredients={porkTrottersIngredients}
        preparationSteps={porkTrottersSteps}
      />
    </div>
  );
};

export default App;
