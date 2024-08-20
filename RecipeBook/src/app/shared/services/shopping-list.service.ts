import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../ingredient.model';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {
	IngredientsChanged = new Subject<Ingredient[]>();

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

		this.IngredientsChanged.next(this.ingredients.slice());
	}

	AddIngredients(newIngs: Ingredient[]) {
		//this.ingredients = this.ingredients.concat(newIngs);
		this.ingredients.push(...newIngs);

		this.IngredientsChanged.next(this.ingredients.slice());
	}

	ClearIngredients() {
		this.ingredients.length = 0;

		this.IngredientsChanged.next(this.ingredients.slice());
	}
}
