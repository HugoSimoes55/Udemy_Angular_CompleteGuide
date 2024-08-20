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

	constructor() {

	}

	ngOnInit() {
	}
}
