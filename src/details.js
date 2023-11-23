
import React, { useState } from 'react';
import "./details.css";
import RecipeCard from './RecipeCard';
import RecipeDetail from './RecipeDetail';
import Octopus from './assets/octopus.jpeg';
import Trotters from './assets/trotters.jpeg';
import Chicken from './assets/chicken.jpeg';
import Cake from './assets/cake.jpeg';
import Burger from './assets/burger.jpeg';
import IceCream from './assets/ice-cream.jpeg';


const App = () => {

  // State to manage the selected recipe
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Ingredients and steps for each recipe

  const grilledOctopusIngredients = ["Octopus", "Salt", "Pepper", "Olive oil", "Garlic", "Oregano", "Paprika"];
  const grilledOctopusSteps = ["Clean and prepare the octopus for cooking.", "Boil the octopus.", "Marinate the octopus in the olive oil, garlic, oregano, paprika, salt and pepper", "Grill until charred."];

  const porkTrottersIngredients = ["Pork trotters", "Aromatic spices", "Chicken broth"];
  const porkTrottersSteps = ["Sear pork trotters until brown.", "Season trotters with spices", "Simmer trotters in chicken broth for 2 hours", "test"];


  const creamyChickenIngredients = ["Chicken", "Cream", "Parmesan cheese", "Salt", "Pepper", "Chicken broth", "Pasta/Rice"];
  const creamyChickenSteps = ["Season and sear chicken.", "Make creamy sauce by mixing chicken broth, heavy cream and parmesan cheese.", "Simmer chicken in creamy sauce", "Serve with pasta or rice"];

  const italianHamburgerIngredients = ["Ground beef", "Italian herbs", "Spices", "Burger bun", "Tomato", "Lettuce", "Cheese"];
  const italianHamburgerSteps = ["Season ground beef with Italian herbs and spices.", "Form patties and grill until cooked.", "Assemble burger with bun, tomato, lettuce, and cheese."];

  const chocolateCakeIngredients = ["Flour", "Sugar", "Cocoa powder", "Baking powder", "Eggs", "Milk", "Butter", "Vanilla extract"];
  const chocolateCakeSteps = ["Mix dry ingredients in a bowl.", "Add wet ingredients and mix until smooth.", "Bake in a preheated oven.", "Frost with chocolate ganache."];

  const tinRoofIceCreamIngredients = ["Vanilla ice cream", "Chocolate swirls", "Roasted peanuts"];
  const tinRoofIceCreamSteps = ["Softened vanilla ice cream.", "Swirl in chocolate and add roasted peanuts.", "Freeze until firm."];

// Array of recipes with their details
  const recipes = [
    {
      title: "Grilled Octopus",
      description: "Tender, lightly seasoned and charred octopus that tastes amazing.",
      imageUrl: Octopus,
      ingredients: grilledOctopusIngredients,
      preparationSteps:  grilledOctopusSteps
    },
    {
      title: "Pork Trotters",
      description: "A culinary masterpiece featuring succulent, slow-cooked trotters bathed in a symphony of aromatic spices.",
      imageUrl: Trotters,
      ingredients: porkTrottersIngredients,
      preparationSteps: porkTrottersSteps
    },
    {
      title: "Creamy Chicken",
      description: "Succulent chicken bathed in a velvety cream sauce, perfectly balanced with the zing of lemon and capers.",
      imageUrl: Chicken,
      ingredients: creamyChickenIngredients,
      preparationSteps: creamyChickenSteps
    },
    {
      title: "Italian Hamburger",
      description: "A mouthwatering fusion of succulent ground beef infused with aromatic Italian herbs and spices.",
      imageUrl: Burger,
      ingredients: italianHamburgerIngredients,
      preparationSteps: italianHamburgerSteps
    },
    {
      title: "Chocolate Cake",
      description: "Generously sandwiched between luscious chocolate ganache, creating a symphony of intense cocoa flavors.",
      imageUrl: Cake,
      ingredients: chocolateCakeIngredients,
      preparationSteps: chocolateCakeSteps
    },
    {
      title: "Tin Roof Ice Cream",
      description: "A timeless treat that marries velvety vanilla ice cream with swirls of fudgy chocolate and roasted peanuts.",
      imageUrl: IceCream,
      ingredients: tinRoofIceCreamIngredients,
      preparationSteps: tinRoofIceCreamSteps
    },

  ];

  // Function to handle selecting a recipe
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to go back to the menu
  const handleBackToMenu = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="app-container">
      {selectedRecipe ? (
        <RecipeDetail
          title={selectedRecipe.title}
          ingredients={selectedRecipe.ingredients}
          preparationSteps={selectedRecipe.preparationSteps}
          onBack={handleBackToMenu}
        />

        ) : (
          <div className="recipe-grid">
            {recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                title={recipe.title}
                description={recipe.description}
                imageUrl={recipe.imageUrl}
                onSelect={() => handleRecipeSelect(recipe)}
              />

              ))}
        </div>
      )}
    </div>
  );
};

export default App;