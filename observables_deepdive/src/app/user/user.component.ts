import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	id: number;

	constructor(private route: ActivatedRoute,
		private userServ : UserService
	) {
		
	}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params.id;
		});
	}

	OnActivate(){
		this.userServ.activatedEmitter.next(true);
	}
}
