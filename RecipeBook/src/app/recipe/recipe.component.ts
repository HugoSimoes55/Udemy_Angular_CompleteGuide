import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrl: './recipe.component.css',
	providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
	selectedRecipe: Recipe;

	constructor(private recipeServ: RecipeService) {

	}

	ngOnInit() {
		this.recipeServ.recipeSelected.subscribe((recipe: Recipe) => {
			this.selectedRecipe = recipe;
		});
	}

	onRecipeSelected(recipe: Recipe) {
		this.selectedRecipe = recipe;
	}
}
