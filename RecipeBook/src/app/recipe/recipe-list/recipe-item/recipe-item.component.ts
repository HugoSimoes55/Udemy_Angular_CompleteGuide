import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
	@Input() recipe: Recipe;

	constructor(private recipeServ: RecipeService) {

	}

	recipeClicked() {
		this.recipeServ.recipeSelected.emit(this.recipe);
	}
}
