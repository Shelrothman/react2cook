/** @format */

import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from '../App';

export default function RecipeEdit({ recipe }) {

	const { handleRecipeChange } =  useContext(RecipeContext)

	//helper function for all the inputs in the edit
	//will pass in the changes we want to make
	function handleChange(changes) {
		//here we are overriding the name and recipe with the name from changes and 
		//we want to pass this to the handle recipe change function
		handleRecipeChange(recipe.id, { ...recipe, ...changes })

	}

	//very similar to function form app.js but applying to ingredients line 74..
	function handleIngredientChange(id, ingredient) {
		const newIngredients = [...recipe.ingredients]
		const index = newIngredients.findIndex(i => i.id === id)
		newIngredients[index] = ingredient
		
		handleChange({ ingredients: newIngredients })
		//in this function, we are just taking our current array of ingredients and swapping out
		//the ingredient with tis ID with the ingredient were passing into the function
		//and then were making sure that we propagate that up by calling handlechange 
		//which calls our handle recipe change function to make sure our state is set for us
	}



	return (
		<div className="recipe-edit">
			<div className="recipe-edit__remove-button-container">
				<button className="btn recipe-edit__remove-button">&times;</button>
			</div>
			<div className="recipe-edit__details-grid">
				<label htmlFor="name" className="recipe-edit__label">
					Name
				</label>
				<input
					type="name"
					name="name"
                    id="name"
					value={recipe.name}
					onChange={e => handleChange({ name: e.target.value })}
					className="recipe-edit__input"
				/>
				<label htmlFor="cookTime" className="recipe-edit__label">
					Cook Time
				</label>
				<input
					type="name"
					name="cookTime"
                    id="cookTime"
					value={recipe.cookTime}
					onChange={e => handleChange({ cookTime: e.target.value })}
					className="recipe-edit__input"
				/>
				<label htmlFor="servings" className="recipe-edit__label">
					Servings
				</label>
				<input
					type="number"
					min="1"
					name="servings"
                    id="servings"
					value={recipe.servings}
					onChange={e => handleChange({ servings: parseInt(e.target.value) || "" })}
					className="recipe-edit__input"
				/>
				<label htmlFor="instructions" className="recipe-edit__label">
					Instructions
				</label>
                <textarea 
                    name="instructions"
					className="recipe-edit__input" 
					onChange={e => handleChange({ instructions: e.target.value })}
					value={recipe.instructions} 
					id="instructions" 
				/> 
			</div>
			<br />
			<label className="recipe-edit__label">Ingredients</label>
			<div className="recipe-edit__ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
                {recipe.ingredients.map(ingredient => (
                    <RecipeIngredientEdit 
						key={ingredient.id} 
						handleIngredientChange={handleIngredientChange}
                        ingredient={ingredient} 
                    />
                ))}
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button className="btn btn--primary">Add Ingredient</button>
			</div>
		</div>
	);
}
