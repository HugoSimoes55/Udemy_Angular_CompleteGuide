import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpEventType,
} from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { EventType } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const modRequest = request.clone(
			{
				headers: request.headers.append("Auth", "123")
			});

		return next.handle(modRequest);
		//return next.handle(request);
	}
}
