import { Component, ViewChild } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
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
	genders: String[] = ["Male", "Female"];

	submitted: boolean = false;

	user = {
		username: "",
		email: "",
		secretQuestion: "",
		answer: "",
		gender: ""
	};

	constructor(private titleServ: Title) {
		this.titleServ.setTitle(this.title);
	}

	suggestUserName() {
		const suggestedName = 'Superuser';

		// this.signupForm.setValue({
		// 	userData: {
		// 		username: suggestedName,
		// 		email: suggestedName + "@something.com"
		// 	},
		// 	secret: "pet",
		// 	questionAnswer: "",
		// 	gender: "Male"
		// });

		this.signupForm.form.patchValue({
			userData: {
				username: suggestedName
			}
		});
	}

	onSubmit() {
		console.log(this.signupForm);

		this.user.username = this.signupForm.value.userData.username;
		this.user.email = this.signupForm.value.userData.email;
		this.user.secretQuestion = this.signupForm.value.secret;
		this.user.answer = this.signupForm.value.questionAnswer;
		this.user.gender = this.signupForm.value.gender;

		console.log(this.user);

		this.submitted = true;

		this.signupForm.reset();
	}
}
