import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

interface Server {
	id: number;
	name: string,
	status: string
}

@Injectable({
	providedIn: 'root'
})
export class ServerResolver implements Resolve<Server> {

	constructor(private serverService: ServersService) {

	}

	resolve(route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
		return this.serverService.getServer(parseInt(route.params["id"]));
	}
}
