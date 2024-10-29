import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy {
	recipes: Recipe[];
	subscription: Subscription;

	constructor(private recipeServ: RecipeService) {

	}

	ngOnInit() {
		this.subscription = this.recipeServ.recipesChanged.subscribe(
			(recipes: Recipe[]) => {
				this.recipes = recipes;
			}
		);

		this.recipes = this.recipeServ.GetRecipes();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
