import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  template: `
    <h2>Posts from API</h2>
    <ul>
      <li *ngFor="let post of posts">{{post.title}}</li>
    </ul>
  `
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => this.posts = data);
  }
}
