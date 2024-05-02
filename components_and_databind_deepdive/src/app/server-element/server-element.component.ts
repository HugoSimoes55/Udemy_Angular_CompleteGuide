import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrl: './server-element.component.css',
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
	@Input("srvElement") element: { type: string, name: string, content: string };
	@Input() name: String;

	@ViewChild("heading", { static: true }) header: ElementRef;
	@ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

	constructor() {
		console.log("contructor called");
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log("ngOnChanges called");
		console.log(changes);
	}

	ngOnInit(): void {
		console.log("ngOnInit called");
		console.log("Header Text Content is " + this.header.nativeElement.text);
		console.log("Paragraph Text Content is " + this.paragraph.nativeElement.text);
	}

	ngDoCheck(): void {
		console.log("ngDoCheck called");
	}

	ngAfterContentInit(): void {
		console.log("ngAfterContentInit called");
		console.log("Paragraph Text Content is " + this.paragraph.nativeElement.text);
	}

	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked called");
	}

	ngAfterViewInit(): void {
		console.log("ngAfterContentInit called");
		console.log("Header Text Content is " + this.header.nativeElement.text);
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterContentChecked called");
	}

	ngOnDestroy() {
		console.log("ngOnDestroy called");
	}
}
