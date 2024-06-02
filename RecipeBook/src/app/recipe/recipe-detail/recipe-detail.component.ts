import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
	@Input() recipe: Recipe;

	constructor(private shopListServ: ShoppingListService) {

	}

	onAddIngredientsToShopList() {
		this.shopListServ.AddIngredients(this.recipe.Ingredients);
	}
}
