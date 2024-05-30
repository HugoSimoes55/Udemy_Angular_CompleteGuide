import { Component, OnInit } from '@angular/core';
import { AccountModel } from './models/account.model';
import { AccountService } from './services/account.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: []
})
export class AppComponent implements OnInit {
	accounts: AccountModel[] = [];

	constructor(private accountsService: AccountService) {

	}

	ngOnInit() {
		this.accounts = this.accountsService.accounts;
	}
}
