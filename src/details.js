import React, { useState } from 'react';
import "./details.css";
import Octopus from '/Users/muslinegororo/recipe page/react-recipe-book/src/assets/octopus.jpeg';
import ChickenPasta from '/Users/muslinegororo/recipe page/react-recipe-book/src/assets/chicken.jpeg';
import Trotters from '/Users/muslinegororo/recipe page/react-recipe-book/src/assets/trotters.jpeg';
import Burger from '/Users/muslinegororo/recipe page/react-recipe-book/src/assets/burger.jpeg';
import Cake from '/Users/muslinegororo/recipe page/react-recipe-book/src/assets/cake.jpeg';
import IceCream from '/Users/muslinegororo/recipe page/react-recipe-book/src/assets/ice-cream.jpeg';

const RecipeCard = ({ title, description, imageUrl, ingredients, preparationSteps, onSelect }) => (
  <div className="recipe-card" onClick={onSelect}>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title} className="recipe-image" />
    <p>{description}</p>
  </div>
);

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

  const App = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    const grilledOctopusIngredients = ["Octopus", "Salt", "Pepper", "Olive oil", "Garlic", "Oregano", "Paprika"];
    const grilledOctopusSteps = ["Clean and prepare the octopus for cooking.", "Boil the octopus.", "Marinate the octopus in the olive oil, garlic, oregano, paprika, salt and pepper", "Grill until charred."];
 
    const creamyChickenIngredients = ["Chicken", "Cream", "Parmesan cheese", "Salt", "Pepper", "Chicken broth", "Pasta/Rice"];
  const creamyChickenSteps = ["Season and sear chicken.", "Make creamy sauce by mixing chicken broth, heavy cream and parmesan cheese.", "Simmer chicken in creamy sauce", "Serve with pasta or rice"];
 
  const porkTrottersIngredients = ["Pork trotters", "Aromatic spices", "Chicken broth"];
  const porkTrottersSteps = ["Sear pork trotters until brown.", "Season trotters with spices", "Simmer trotters in chicken broth for 2 hours", "test"];

  const BurgerIngredients = ["Ground Beef", "Bread Crumbs", "Grated Parmesan Cheese", "Fresh Parsley", "Minced Garlic", "Oregano", "Basil", "Salt and pepper", "Hamburger Buns", "Cheese slices", "Tomatoe Slices", "Lettuce"];
  const BurgerSteps = ["Combine ground beef, breadcrumbs, Parmesan, parsley, garlic, oregano, basil, salt, and pepper and shape into a burger patty", "Grill patties for 4-5 minutes per side and cheese slices during last minute", "Place patties on buns and top with tomato slices, lettuce, or preferred toppings", "Enjoy your delicious Italian hamburgers!"];
  
  const CakeIngredients = ["All purpose flour", "cocoa powder", "Sugar", "Baking Powder", "Baking soda", "Salt", "2 Large eggs", "Whole milk", "Vegetable oil", "Vanilla extract", "Boiling water"];
  const CakeSteps = ["Preheat your oven to 350°F (180°C). Grease and flour two 9-inch round cake pans", "In a large mixing bowl, sift together the flour, cocoa powder, sugar, baking powder, baking soda, and salt.", "Combine Wet Ingredients:", "Gradually add the boiling water to the batter, mixing well", "Bake in the preheated oven for 30 to 35 minutes", "Allow the cakes to cool", "Frost and Enjoy"];

  const IceCreamIngredients = ["Heavy cream", "Whole milk", "Sugar", "Vanilla extract", "Fudge sauce", "Peanuts"];
  const IceCreamSteps = ["In a mixing bowl, whisk together the heavy cream, whole milk, sugar, and vanilla extract until the sugar is fully dissolved.", "Chill the Mixture", "Churn the Ice Cream", "Layer with Fudge and Peanuts", "Swirl and Freeze", "Serve and Enjoy"];


  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="app-container">
    <div className="app-container">
      {selectedRecipe ? (
        <RecipeDetails
          title={selectedRecipe.title}
          ingredients={selectedRecipe.ingredients}
          preparationSteps={selectedRecipe.preparationSteps}
        />
      ) : (
        <>
<div className="recipe-grid">
        <RecipeCard
            title="Grilled Octopus"
            description="Tender, lightly seasoned and charred octopus that tastes amazing."
            imageUrl={Octopus}
            ingredients={grilledOctopusIngredients}
            preparationSteps={grilledOctopusSteps}
            onSelect={() => handleRecipeSelect({ title: "Grilled Octopus", ingredients: grilledOctopusIngredients, preparationSteps: grilledOctopusSteps })}
          />

          <RecipeCard
          title="Creamy Chicken"
          description="Succulent chicken bathed in a velvety cream sauce, perfectly balanced with the zing of lemon and capers."
          imageUrl={ChickenPasta}
          ingredients={creamyChickenIngredients}
          preparationSteps={creamyChickenSteps}
          onSelect={() => handleRecipeSelect({ title: "Creamy Chicken", ingredients: creamyChickenIngredients, preparationSteps: creamyChickenSteps })}
        />

        <RecipeCard
            title="Pork Trotters"
            description="A culinary masterpiece featuring succulent, slow-cooked trotters bathed in a symphony of aromatic spices."
            imageUrl={Trotters}
            ingredients={porkTrottersIngredients}
            preparationSteps={porkTrottersSteps}
            onSelect={() => handleRecipeSelect({ title: "Pork Trotters", ingredients: porkTrottersIngredients, preparationSteps: porkTrottersSteps })}
          />

        <RecipeCard
            title="Italian Hamburger"
            description="A mouthwatering fusion of succulent ground beef infused with aromatic Italian herbs and spices."
            imageUrl={Burger}
            ingredients={BurgerIngredients}
            preparationSteps={BurgerSteps}
            onSelect={() => handleRecipeSelect({ title: "Italian Burger", ingredients: BurgerIngredients, preparationSteps: BurgerSteps })}
          />

        <RecipeCard
            title="Chocolate Cake"
            description="Generously sandwiched between luscious chocolate ganache, creating a symphony of intense cocoa flavors."
            imageUrl={Cake}
            ingredients={CakeIngredients}
            preparationSteps={CakeSteps}
            onSelect={() => handleRecipeSelect({ title: "Chocolate Cake", ingredients: CakeIngredients, preparationSteps: CakeSteps })}
          /> 

        <RecipeCard
            title="Ice Cream"
            description="A timeless treat that marries velvety vanilla ice cream with swirls of fudgy chocolate and roasted peanuts."
            imageUrl={IceCream}
            ingredients={IceCreamIngredients}
            preparationSteps={IceCreamSteps}
            onSelect={() => handleRecipeSelect({ title: "Ice Cream", ingredients: IceCreamIngredients, preparationSteps: IceCreamSteps })}
          />  
</div>
          </>
      )}

      </div>
    </div>
  );
};

export default App;