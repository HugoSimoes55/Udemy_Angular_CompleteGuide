import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../shared/services/recipe.service';
import { ShoppingListService } from '../../shared/services/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;
	index: number;

	constructor(private route: ActivatedRoute,
		private shopListServ: ShoppingListService,
		private recipeServ: RecipeService) {

	}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.index = parseInt(params["id"]);

			this.recipe = this.recipeServ.GetRecipe(this.index);
		});
	}

	onAddIngredientsToShopList() {
		this.shopListServ.AddIngredients(this.recipe.Ingredients);
	}
}
