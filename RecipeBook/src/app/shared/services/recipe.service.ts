import { Injectable } from '@angular/core';
import { Recipe } from '../../recipe/recipe.model';
import { Ingredient } from '../ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe("Double Cheeseburger",
			"Double Cheeseburger Description",
			"https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:nutrition-calculator-tile?resmode=sharp2",
			[
				new Ingredient("Bread", 1),
				new Ingredient("Beef Patty", 2),
				new Ingredient("American Cheese Slice", 2)
			]
		),
		new Recipe("Pepperoni Pizza",
			"Pepperoni Pizza Description",
			"https://againstthegraingourmet.com/cdn/shop/products/Pepperoni_Pizza_Beauty_1000x1000.jpg?v=1658703726",
			[
				new Ingredient("Dough", 1),
				new Ingredient("Tomato Sauce", 1),
				new Ingredient("Pepperoni Slice", 20)
			])
	];

	constructor() {

	}

	GetRecipes() {
		return this.recipes.slice();
	}

	GetRecipe(index: number) {
		return this.recipes[index];
	}

	AddRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	UpdateRecipe(index: number, recipe: Recipe) {
		this.recipes[index] = recipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	DeleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}
