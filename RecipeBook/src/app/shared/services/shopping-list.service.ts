import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {
	IngredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient("Bread", 1),
		new Ingredient("Tomato", 2),
		new Ingredient("Cheese", 3)
	];

	constructor() {

	}

	GetIngredients() {
		return this.ingredients.slice();
	}

	AddIngredient(newIng: Ingredient) {
		this.ingredients.push(newIng);

		this.IngredientsChanged.emit(this.ingredients.slice());
	}

	AddIngredients(newIngs: Ingredient[]) {
		//this.ingredients = this.ingredients.concat(newIngs);
		this.ingredients.push(...newIngs);

		this.IngredientsChanged.emit(this.ingredients.slice());
	}

	ClearIngredients() {
		this.ingredients.length = 0;

		this.IngredientsChanged.emit(this.ingredients.slice());
	}
}
