import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './services/logging.service';
import { NewLoggingService } from './services/new-logging.service';
import { AccountService } from './services/account.service';

@NgModule({
	declarations: [
		AppComponent,
		AccountComponent,
		NewAccountComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [
		{ provide: LoggingService, useClass: LoggingService },
		{ provide: AccountService, useClass: AccountService }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
