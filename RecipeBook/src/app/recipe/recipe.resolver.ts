import { Injectable } from '@angular/core';
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/services/data-storage.service';
import { RecipeService } from '../shared/services/recipe.service';

@Injectable({
	providedIn: 'root',
})
export class RecipeResolver implements Resolve<Recipe[]> {

	constructor(private storeServ: DataStorageService, private recipesServ: RecipeService) {

	}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	) {
		const recipes = this.recipesServ.GetRecipes();

		console.log(recipes);


		if (recipes.length === 0) {
			console.log("Recipe Resolver - Fetching recipes");


			return this.storeServ.fetchRecipes();
		}
		else {
			console.log("Recipe Resolver - Recipes already loaded");

			return recipes;
		}
	}
}
