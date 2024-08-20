import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Subscription } from 'rxjs-compat';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
	private firstObsSubscription: Subscription;

	constructor() { }

	ngOnInit() {
		// this.firstObsSubscription = interval(1000).subscribe(count => {
		// 	console.log(count);
		// });

		const customIntervalObs = Observable.create(observer => {
			let count: number = 0;

			setInterval(() => {
				// observer.error();
				// observer.complete();
				observer.next(count);

				if (count == 2) {
					observer.complete();
				}

				if (count > 3) {
					observer.error(new Error("Count is greater than 3!"));
				}

				count++;
			}, 1000);
		});

		this.firstObsSubscription = customIntervalObs.pipe(
			filter((data: number) => {
				return data > 0 ? true : false;
			}),
			map((data: number) => {
				return "Round: " + (data + 1);
			})).subscribe(
				data => {
					console.log(data);
				},
				error => {
					console.log(error);
					alert(error.message);
				},
				() => {
					console.log("Completed!");

				});
	}

	ngOnDestroy() {
		this.firstObsSubscription.unsubscribe();
	}
}
