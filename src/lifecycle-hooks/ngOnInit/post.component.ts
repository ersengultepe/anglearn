import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  standalone: true,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts?: any[];

  constructor(private postService: PostService) {}

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
