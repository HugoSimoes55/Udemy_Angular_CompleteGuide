import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Forms Reactive';

	genders = ['Male', 'Female'];
	signupForm: FormGroup;

	constructor(private titleServ: Title) {
		this.titleServ.setTitle(this.title);
	}

	ngOnInit() {
		this.signupForm = new FormGroup({
			"username": new FormControl(null, Validators.required),
			"email": new FormControl(null, [Validators.required, Validators.email]),
			"gender": new FormControl("Male")
		});
	}

	onSubmit() {
		console.log(this.signupForm);

	}
}
