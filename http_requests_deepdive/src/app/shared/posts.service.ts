import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { catchError, map, pipe, Subject, tap, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PostsService {
	HTTP_POSTS = "https://masterangularcourse-default-rtdb.firebaseio.com/posts.json";
	errorSub: Subject<string> = new Subject<string>();

	constructor(private http: HttpClient) { }

	createAndStorePost(title: string, content: string) {
		const postData: Post = { title: title, content: content };

		this.http
			.post(this.HTTP_POSTS, postData,
				{
					observe: "response"
				}
			)
			.subscribe((responseData) => {
				console.log(responseData);

			}, error => {
				this.errorSub.next(error.message);
			});
	}

	fetchPosts() {
		let searchParams = new HttpParams()
		searchParams = searchParams.append("print", "pretty");
		searchParams = searchParams.append("custom", "key");

		return this.http
			.get<{ [key: string]: Post }>(this.HTTP_POSTS, {
				headers: new HttpHeaders({ "Custom-Header": "Hello" }),
				params: searchParams,
				responseType: "json"
			})
			.pipe(map(responseData => {
				const postsArray: Post[] = [];

				for (const key in responseData) {
					if (responseData.hasOwnProperty(key)) {
						postsArray.push({ ...responseData[key], id: key });
					}
				}

				return postsArray;
			}),
				catchError(errorRes => {
					return throwError(errorRes);
				})
			);
	}

	deleteAllPosts() {
		return this.http
			.delete(this.HTTP_POSTS,
				{
					observe: "events",
					responseType: "text"
				}
			)
			.pipe(tap(event => {
				console.log(event);

				if (event.type === HttpEventType.Sent) {
					// Note: body doesn't exist, so the code fails
					//console.log(event.body);
				}

				if (event.type === HttpEventType.Response) {
					console.log(event.body);

				}
			}));
	}
}
