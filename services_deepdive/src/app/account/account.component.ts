import { Component, Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';
import { AccountModel } from '../models/account.model';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css'],
	providers: []
})
export class AccountComponent {
	@Input() account: AccountModel;
	@Input() id: number;

	constructor(private logger: LoggingService,
		private accountServer: AccountService) {

	}

	onSetTo(status: string) {
		this.accountServer.updateStatus(this.id, status);
		//this.logger.logStatusChange(status);
		this.accountServer.StatusUpdated.emit(status);
	}
}
