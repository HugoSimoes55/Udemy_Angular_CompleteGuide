import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoggingService {
	logStatusChange(status: string) {
		//console.log('Using Logging service');
		console.log('A server status changed, new status: ' + status);
	}
}
