import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { map, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PostsService {
	HTTP_POSTS = "https://masterangularcourse-default-rtdb.firebaseio.com/posts.json";
	errorSub: Subject<string> = new Subject<string>();

	constructor(private http: HttpClient) { }

	createAndStorePost(title: string, content: string) {
		const postData: Post = { title: title, content: content };

		this.http.post(this.HTTP_POSTS, postData).subscribe((responseData) => {
			console.log(responseData);

		}, error => {
			this.errorSub.next(error.message);
		});
	}

	fetchPosts() {
		return this.http.get<{ [key: string]: Post }>(this.HTTP_POSTS)
			.pipe(map(responseData => {
				const postsArray: Post[] = [];

				for (const key in responseData) {
					if (responseData.hasOwnProperty(key)) {
						postsArray.push({ ...responseData[key], id: key });
					}
				}

				return postsArray;
			}));
	}

	deleteAllPosts() {
		return this.http.delete(this.HTTP_POSTS);
	}
}
