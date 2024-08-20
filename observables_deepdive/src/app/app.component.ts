import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subject, Subscription } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	userActivated = false;
	private activatedSub: Subscription;

	constructor(private userServ: UserService) {

	}

	ngOnInit() {
		this.activatedSub = this.userServ.activatedEmitter.subscribe((data: boolean) => {
			this.userActivated = data;
		});
	}

	ngOnDestroy() {
		this.activatedSub.unsubscribe();
	}
}
