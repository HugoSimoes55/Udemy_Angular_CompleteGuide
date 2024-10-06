import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';
import { FormGroupName, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-shopping-list-create-edit',
	templateUrl: './shopping-list-create-edit.component.html',
	styleUrl: './shopping-list-create-edit.component.css'
})
export class ShoppingListCreateEditComponent implements OnInit, OnDestroy {
	@ViewChild("form") shopListForm: NgForm;

	editSub: Subscription;
	editMode: boolean = false;
	editedItemIndex: number;
	editedItem: Ingredient;

	constructor(private shopListServ: ShoppingListService) {

	}

	ngOnInit() {
		this.editSub = this.shopListServ.editModeEnabled.subscribe(
			(itemIndex: number) => {
				this.editMode = true;
				this.editedItemIndex = itemIndex;
				this.editedItem = this.shopListServ.GetIngredient(itemIndex);

				this.shopListForm.setValue({
					name: this.editedItem.Name,
					amount: this.editedItem.Amount
				});
			}
		);
	}

	onSubmitIngredient(form: NgForm) {
		const newIng = new Ingredient(form.value.name, form.value.amount);

		if (this.editMode) {
			this.shopListServ.UpdateIngredient(this.editedItemIndex, newIng);
		}
		else {
			this.shopListServ.AddIngredient(newIng);
		}

		this.ClearForm();
	}

	onClear() {
		this.ClearForm();
	}

	OnDeleteIngredient() {
		this.shopListServ.DeleteIngredient(this.editedItemIndex);

		this.ClearForm();
	}

	ClearForm() {
		this.editMode = false;
		this.editedItemIndex = null;
		this.editedItem = null;

		this.shopListForm.reset();
	}

	ngOnDestroy() {
		this.editSub.unsubscribe();
	}
}
