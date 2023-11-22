/*
import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Recipe Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              description={menuItem.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
*/

import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";

import RecipeCard from "../RecipeCard";
import RecipeDetail from "../RecipeDetail";
import "../styles/Menu.css";

function Menu() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };
  return (
    <div className="menu">
      <h1 className="menuTitle">Recipe Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <div key={key}>

<RecipeCard
              title={menuItem.name}
              description={menuItem.description}
              imageUrl={menuItem.image}
              onSelect={() =>

                handleRecipeSelect({
                  title: menuItem.name,
                  ingredients: menuItem.ingredients || [],
                  preparationSteps: menuItem.preparationSteps || [],
                })
              }
              />
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <RecipeDetail
          title={selectedRecipe.title}
          ingredients={selectedRecipe.ingredients}
          preparationSteps={selectedRecipe.preparationSteps}
        />
        )}
        </div>
      );
    }
    
    export default Menu;