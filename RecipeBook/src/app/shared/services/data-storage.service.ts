import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from '../../recipe/recipe.model';
import { map, tap } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class DataStorageService {

	HTTP_URL_Recipes: string = "https://masterangularcourse-default-rtdb.firebaseio.com/recipes.json";

	constructor(private http: HttpClient, private recipesServ: RecipeService) {

	}

	storeRecipes() {
		const recipes = this.recipesServ.GetRecipes();

		this.http.put(this.HTTP_URL_Recipes, recipes).subscribe((response) => {
			console.log(response);
		});
	}

	fetchRecipes() {
		return this.http.get<Recipe[]>(this.HTTP_URL_Recipes)
			.pipe(
				map(recipes => {
					return recipes.map(recipe => {
						return { ...recipe, ingredients: recipe.Ingredients ? recipe.Ingredients : [] }
					});
				}),
				tap(recipes => {
					this.recipesServ.SetRecipes(recipes)
				}));
	}
}
