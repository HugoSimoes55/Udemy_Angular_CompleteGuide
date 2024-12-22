import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpEventType,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		console.log("Outgoing Request");
		console.log(request.url);
		console.log(request.headers);

		return next.handle(request)
			.pipe(tap(event => {
				if (event.type === HttpEventType.Response) {
					console.log("Response has arrived. Body data:");
					console.log(event.body);
				}
			}));
	}
}
