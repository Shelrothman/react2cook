/** @format */

import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


export default function Recipe(props) {
	const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);

	const { id, name, cookTime, servings, instructions, ingredients } = props;

	return (
		<div className="recipe">
			<div className="recipe__header">
				<h3 className="recipe__title">{name}</h3>
				<div>
					<OverlayTrigger 
					    key="left"
						placement="left"
						overlay={
						  <Tooltip 
							  id="tooltip-left"
							  className="edit--tooltip"
						  >
							<strong>Click to Edit</strong>
						  </Tooltip>
						}
					>
					<button
						className="btn btn--primary mr-1"
						onClick={() => handleRecipeSelect(id)}>
						<FontAwesomeIcon icon={faEdit} />
					</button>
					</OverlayTrigger>
					<OverlayTrigger 
					    key="bottom"
						placement="bottom"
						overlay={
						  <Tooltip 
							  id="tooltip-bottom"
							  className="delete--tooltip"
						  >
							<strong>Click to Delete</strong>
						  </Tooltip>
						}
					>
					<button
						className="btn btn--danger"
						onClick={() => handleRecipeDelete(id)}>
						<FontAwesomeIcon icon={faTrash} />
					</button>
					</OverlayTrigger>
				</div>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Cook Time: </span>
				<span className="recipe__value">{cookTime}</span>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Servings: </span>
				<span className="recipe__value">{servings}</span>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Instructions: </span>
				<div className="recipe__value recipe__instructions recipe__value--indented">
					{instructions}
				</div>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Ingredients: </span>
				<div className="recipe__value recipe__value--indented">
					<IngredientList ingredients={ingredients} />
				</div>
			</div>
		</div>
	);
}
