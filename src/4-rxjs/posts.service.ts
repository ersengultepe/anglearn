import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import * as http from 'node:http';

@Injectable({
  providedIn: 'root'
})

export class PostsService{
  apiUrl:string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) {
  }

  getPosts():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }
}
