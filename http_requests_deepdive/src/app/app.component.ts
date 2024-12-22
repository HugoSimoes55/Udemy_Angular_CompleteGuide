import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject, Subscription } from 'rxjs';
import { Post } from './models/post.model';
import { PostsService } from './shared/posts.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	loadedPosts: Post[] = [];
	isFetching: boolean = false;
	errorText: string = null;

	private errorHandling: Subscription = null;

	constructor(private http: HttpClient, private postServ: PostsService) { }

	ngOnInit() {

		this.errorHandling = this.postServ.errorSub.subscribe(errorMessage => {
			console.log(errorMessage);

		});

		this.fetchPosts();
	}

	onCreatePost(postData: Post) {
		// Send Http request
		console.log(postData);

		this.postServ.createAndStorePost(postData.title, postData.content);
	}

	onFetchPosts() {
		// Send Http request
		this.fetchPosts();
	}

	onClearPosts() {
		// Send Http request
		this.postServ.deleteAllPosts().subscribe(() => {

			this.loadedPosts = [];
		});

		this.fetchPosts();
	}

	onConfirmError() {
		this.errorText = null;
	}

	private fetchPosts() {
		this.isFetching = true;

		this.postServ.fetchPosts().subscribe(posts => {
			this.isFetching = false;

			this.loadedPosts = posts;
		}, error => {
			console.log(error);

			this.isFetching = false;
			this.errorText = error.message;
		});
	}

	ngOnDestroy() {
		this.errorHandling.unsubscribe();
	}
}
