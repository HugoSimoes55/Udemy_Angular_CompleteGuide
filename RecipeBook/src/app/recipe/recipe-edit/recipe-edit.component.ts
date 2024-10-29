import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
		private recipeServ: RecipeService,
		private router: Router) {

	}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = parseInt(params["id"]);
			this.editMode = params["id"] ? true : false;

			this.initForm();
		});
	}

	AddIngredient() {
		(<FormArray>this.recipeForm.get("ingredients")).push(
			new FormGroup({
				"Name": new FormControl(null, Validators.required),
				"Amount": new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
			}));
	}

	DeleteIngredient(index: number) {
		(<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
	}

	onSubmit() {
		console.log(this.recipeForm);

		const newRecipe = new Recipe(
			this.recipeForm.value["name"],
			this.recipeForm.value["description"],
			this.recipeForm.value["imagePath"],
			this.recipeForm.value["ingredients"]
		);

		if (this.editMode) {
			this.recipeServ.UpdateRecipe(this.id, newRecipe);
		}
		else {
			this.recipeServ.AddRecipe(newRecipe);
		}

		this.CancelRecipeEdit();
	}

	CancelRecipeEdit() {
		this.router.navigate(["../"], { relativeTo: this.route });
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
						"Name": new FormControl(ing.Name, Validators.required),
						"Amount": new FormControl(ing.Amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
					}));
				}
			}
		}

		this.recipeForm = new FormGroup({
			"name": new FormControl(recipe?.Name, Validators.required),
			"imagePath": new FormControl(recipe?.ImagePath, Validators.required),
			"description": new FormControl(recipe?.Description, Validators.required),
			"ingredients": recipeIngredients,
		});
	}

	get getIngredientControls() {
		return (<FormArray>this.recipeForm.get('ingredients')).controls;
	}
}
