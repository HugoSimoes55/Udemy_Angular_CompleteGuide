import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
	ingredients: Ingredient[];

	constructor(private shopListServ: ShoppingListService) {

	}

	ngOnInit() {
		this.shopListServ.IngredientsChanged.subscribe((ingrList: Ingredient[]) => {
			this.ingredients = ingrList;
		});

		this.ingredients = this.shopListServ.GetIngredients();
	}
}
