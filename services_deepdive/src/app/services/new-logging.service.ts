import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewLoggingService {
	logStatusChange(status: string) {
		//console.log('Using NewLogging service.');
		console.log('A server status changed, new status: ' + status);
	}
}
