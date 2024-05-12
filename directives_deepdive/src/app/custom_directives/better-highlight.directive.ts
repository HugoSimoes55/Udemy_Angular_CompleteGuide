import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, input } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	@Input() defaultColor: String = "transparent";
	@Input() highlightColor: String = "blue";

	@HostBinding("style.backgroundColor") backgroundColor: String;

	@HostListener('mouseenter') mouseover = this.mouseOver;
	@HostListener('mouseleave') mouseleave = this.mouseLeave;

	constructor(private elemRef: ElementRef, private element: Renderer2) {
	}

	ngOnInit(): void {
		// this.element.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
		this.backgroundColor = this.defaultColor;
	}

	mouseOver(eventData: Event) {
		// this.element.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
		this.backgroundColor = this.highlightColor;
	}

	mouseLeave(eventData: Event) {
		// this.element.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
		this.backgroundColor = this.defaultColor;
	}
}
