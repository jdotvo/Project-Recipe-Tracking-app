import React from "react";

function RecipeList({ deleteRecipe, recipes }) {
  
// Map through data of recipes to collect required information for a recipe to be added onto new row of the recipe list 
  const addRecipes = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => {
      if (recipes.length > 0) {
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td>
              <img src={photo} alt={cuisine} />
            </td>
            <td className="content_td"><p>{ingredients}</p></td>
            <td className="content_td"><p>{preparation}</p></td>
            <td name="action">
              <button name="delete" onClick={() => deleteRecipe(index)}>
                Delete
              </button>
            </td>
          </tr>
        );
      } else {
        return null;
      }
    }
  );
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addRecipes}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
