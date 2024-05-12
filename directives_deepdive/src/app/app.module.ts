import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './custom_directives/basic-highlight.directive';
import { BetterHighlightDirective } from './custom_directives/better-highlight.directive';
import { UnlessDirective } from './custom_directives/unless.directive';

@NgModule({
	declarations: [
		AppComponent,
		BasicHighlightDirective,
		BetterHighlightDirective,
		UnlessDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
