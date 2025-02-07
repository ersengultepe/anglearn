import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NgForOf
  ],
  template:
    `
      <ul>
        <li *ngFor="let post of posts">
             {{post.title}}
        </li>
      </ul>
    `,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) {

  }

  posts?: any[];

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        console.log('Postlar alındı:', this.posts);
      },
      error: (error) => {
        console.error('Hata oluştu:', error);
      },
      complete: () => {
        console.log("bitti");
      }
    });
  }
}
