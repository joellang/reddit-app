import { Injectable, Input } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  @Input() posts: Post[];
  baseUrl: string = "http://localhost:8082/api/"
  constructor(private http: HttpClient) {
    this.GetPosts()
   }

  GetPosts(){
    this.http.get(this.baseUrl + "posts")
    .pipe( 
      map((value) => <Post[]> value)
    )
    .subscribe(posts => {this.posts = posts})
  }

}
