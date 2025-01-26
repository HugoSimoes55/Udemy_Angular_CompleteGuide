import { Component } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent {

	constructor(private storeServ: DataStorageService) {

	}

	SaveRecipesData() {
		this.storeServ.storeRecipes();
	}

	FetchRecipesData() {
		this.storeServ.fetchRecipes().subscribe();
	}

}
