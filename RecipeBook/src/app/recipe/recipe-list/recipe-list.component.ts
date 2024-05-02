import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
	@Output() onRecipeItemSelected: EventEmitter<Recipe> = new EventEmitter();

	recipes: Recipe[] = [
		new Recipe("Recipe 1", "Recipe Desc 1", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"),
		new Recipe("Recipe 2", "Recipe Desc 2", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505")
	];

	recipeClicked(recipe: Recipe) {
		this.onRecipeItemSelected.emit(recipe);
	}
}
