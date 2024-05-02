import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Recipe Book';
	linkToShow = "recipes";

	onLinkClicked(link: string) {
		this.linkToShow = link;
	}
}
