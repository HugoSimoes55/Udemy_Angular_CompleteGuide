import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../shared/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editMode: boolean = false;
	recipeForm: FormGroup;

	constructor(private route: ActivatedRoute,
		private recipeServ: RecipeService) {

	}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = parseInt(params["id"]);
			this.editMode = params["id"] ? true : false;

			this.initForm();
		});
	}

	onSubmit() {
		console.log(this.recipeForm);

	}

	private initForm() {
		//let recipeName: string = "";
		//let recipeImagePath: string = "";
		//let recipeDescription: string = "";
		let recipeIngredients: FormArray = new FormArray([]);

		let recipe: Recipe = null;

		if (this.editMode) {
			recipe = this.recipeServ.GetRecipe(this.id);

			// recipeName = recipe.Name;
			// recipeImagePath = recipe.ImagePath;
			// recipeDescription = recipe.Description;

			if (recipe["Ingredients"]) {
				for (let ing of recipe.Ingredients) {
					recipeIngredients.push(new FormGroup({
						"name": new FormControl(ing.Name),
						"amount": new FormControl(ing.Amount),
					}));
				}
			}
		}

		this.recipeForm = new FormGroup({
			"name": new FormControl(recipe?.Name),
			"imagePath": new FormControl(recipe?.ImagePath),
			"description": new FormControl(recipe?.Description),
			"ingredients": recipeIngredients,
		});
	}

	get getIngredientControls() {
		return (<FormArray>this.recipeForm.get('ingredients')).controls;
	}
}
