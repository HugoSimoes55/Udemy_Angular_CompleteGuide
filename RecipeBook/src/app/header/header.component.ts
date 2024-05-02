import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent {
	@Output() linkClicked: EventEmitter<string> = new EventEmitter();

	onLinkClicked(link: string) {
		this.linkClicked.emit(link);
	}
}
