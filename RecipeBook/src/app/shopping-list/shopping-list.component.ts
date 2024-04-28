import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
	ingredients: Ingredient[] = [
		new Ingredient("Bread", 1),
		new Ingredient("Tomato", 2),
		new Ingredient("Cheese", 3)
	];

}
