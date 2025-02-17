import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate <CanComponentDeactivate>{

	canDeactivate(component: CanComponentDeactivate, 
		currentRoute: ActivatedRouteSnapshot, 
		currentState: RouterStateSnapshot, 
		nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return component.canDeactivate();
	}
}

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}