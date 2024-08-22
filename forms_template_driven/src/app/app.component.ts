import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Forms Deep Dive';

	@ViewChild("form") signupForm: NgForm;
	defaultQuestion: string = "pet";
	answer: string = "";

	constructor(private titleServ: Title) {
		this.titleServ.setTitle(this.title);
	}

	suggestUserName() {
		const suggestedName = 'Superuser';
	}

	onSubmit() {
		console.log(this.signupForm);
	}
}
