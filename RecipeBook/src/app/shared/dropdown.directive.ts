import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDropdown]',
})
export class DropdownDirective {
	@HostListener("document:click", ["$event"]) toggleOpen = this.onClick;

	@HostBinding("class.open") isOpen: boolean = false;

	constructor(private elemRef: ElementRef, private element: Renderer2) {

	}

	onClick(event: Event) {
		this.isOpen = this.elemRef.nativeElement.contains(event.target) ? !this.isOpen : false;
	}
}
