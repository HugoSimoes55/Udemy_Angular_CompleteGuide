import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
	recipes: Recipe[];

	constructor(private recipeServ: RecipeService) {

	}

	ngOnInit() {
		this.recipes = this.recipeServ.GetRecipes();
	}
}
