import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './models/post.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	HTTP_POSTS = "https://masterangularcourse-default-rtdb.firebaseio.com/posts.json";

	loadedPosts: Post[] = [];

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.fetchPosts();
	}

	onCreatePost(postData: Post) {
		// Send Http request
		console.log(postData);

		this.http.post(this.HTTP_POSTS, postData)
			.subscribe((responseData) => {
				console.log(responseData);
			});
	}

	onFetchPosts() {
		// Send Http request
		this.fetchPosts();
	}

	onClearPosts() {
		// Send Http request
	}

	private fetchPosts() {
		this.http.get<{ [key: string]: Post }>(this.HTTP_POSTS)
			.pipe(map(responseData => {
				const postsArray: Post[] = [];

				for (const key in responseData) {
					if (responseData.hasOwnProperty(key)) {
						postsArray.push({ ...responseData[key], id: key });
					}
				}

				return postsArray;
			}))
			.subscribe(posts => {
				this.loadedPosts = posts;
			});;
	}
}
