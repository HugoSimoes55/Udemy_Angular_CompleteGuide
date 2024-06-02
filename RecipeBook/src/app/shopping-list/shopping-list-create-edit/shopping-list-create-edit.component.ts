import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';

@Component({
	selector: 'app-shopping-list-create-edit',
	templateUrl: './shopping-list-create-edit.component.html',
	styleUrl: './shopping-list-create-edit.component.css'
})
export class ShoppingListCreateEditComponent {
	@ViewChild("nameInput") ingName: ElementRef;
	@ViewChild("amountInput") ingAmount: ElementRef;

	constructor(private shopListServ: ShoppingListService) {

	}

	onAddIngredient() {
		const newIng = new Ingredient(this.ingName.nativeElement.value, this.ingAmount.nativeElement.value);
		this.shopListServ.AddIngredient(newIng);
	}

	onClearingredients() {
		this.shopListServ.ClearIngredients();
	}
}
