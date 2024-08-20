import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Ingredient[];
	private IngChangedSub: Subscription;

	constructor(private shopListServ: ShoppingListService) {

	}

	ngOnInit() {
		this.IngChangedSub = this.shopListServ.IngredientsChanged.subscribe((ingrList: Ingredient[]) => {
			this.ingredients = ingrList;
		});

		this.ingredients = this.shopListServ.GetIngredients();
	}

	ngOnDestroy() {
		this.IngChangedSub.unsubscribe();
	}
}
