import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { LoggingInterceptor } from './shared/logging.interceptor';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoggingInterceptor,
			multi: true
		}],
	bootstrap: [AppComponent]
})
export class AppModule { }
