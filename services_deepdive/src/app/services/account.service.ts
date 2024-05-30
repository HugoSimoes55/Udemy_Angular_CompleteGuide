import { EventEmitter, Injectable } from '@angular/core';
import { AccountModel } from '../models/account.model';
import { LoggingService } from './logging.service';

@Injectable({
	providedIn: 'root',
})
export class AccountService {
	accounts: AccountModel[] = [
		new AccountModel('Master Account', 'active'),
		new AccountModel('Testaccount', 'inactive'),
		new AccountModel('Hidden Account', 'unknown')
	];

	StatusUpdated = new EventEmitter<string>();

	constructor(private logger: LoggingService) {

	}

	addAccount(newAccount: AccountModel) {
		this.accounts.push(newAccount);
		this.logger.logStatusChange(newAccount.Status);
	}

	updateStatus(id: number, newStatus: string) {
		this.accounts[id].Status = newStatus;
		this.logger.logStatusChange(newStatus);
	}
}
