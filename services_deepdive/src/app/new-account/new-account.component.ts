import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';
import { AccountModel } from '../models/account.model';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.css'],
	providers: []
})
export class NewAccountComponent {

	constructor(private logger: LoggingService, private accountService: AccountService) {
		accountService.StatusUpdated.subscribe((status) => alert("New Status: " + status));
	}

	onCreateAccount(accountName: string, accountStatus: string) {
		this.accountService.addAccount(new AccountModel(accountName, accountStatus));
		//this.logger.logStatusChange(accountStatus);
	}
}
