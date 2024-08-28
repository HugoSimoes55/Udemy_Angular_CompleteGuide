import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Forms Reactive';

	genders = ['Male', 'Female'];
	signupForm: FormGroup;
	forbiddenUserNames: string[] = ["anna", "mark", "skyler"];

	constructor(private titleServ: Title) {
		this.titleServ.setTitle(this.title);
	}

	ngOnInit() {
		this.signupForm = new FormGroup({
			"userData": new FormGroup({
				"username": new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
				"email": new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
			}),
			"gender": new FormControl("Male"),
			"hobbies": new FormArray([])
		});

		// this.signupForm.valueChanges.subscribe((value) => {
		// 	console.log(value);

		// });

		// this.signupForm.statusChanges.subscribe((status) => {
		// 	console.log(status);

		// });

		this.signupForm.setValue({
			"userData": {
				"username": "Test 1",
				"email": "test1@test.com",
			},
			"gender": "Male",
			"hobbies": []
		});

		this.signupForm.patchValue({
			"userData": {
				"username": "Mark"
			}
		});
	}

	onSubmit() {
		console.log(this.signupForm);

		this.signupForm.reset();
	}

	getHobbies() {
		return (<FormArray>this.signupForm.get("hobbies")).controls;
	}

	onAddHobby() {
		const newHobby = new FormControl(null, Validators.required);

		(<FormArray>this.signupForm.get("hobbies")).push(newHobby);
	}

	forbiddenNames(control: FormControl): { [s: string]: boolean } {
		if (this.forbiddenUserNames.indexOf(control.value?.toLowerCase()) != -1) {
			return { "nameIsForbidden": true };
		}

		return null;
	}

	forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				if (control.value == "test@test.com") {
					resolve({ "emailIsForbidden": true });
				}
				else {
					resolve(null);
				}
			}, 1500);
		});

		return promise;
	}
}
