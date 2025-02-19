import {Component, OnInit} from '@angular/core';
import {DiService} from './di.service';
import {FormsModule} from '@angular/forms';
import {BehaviorSubject, debounceTime, distinctUntilChanged, of, switchMap} from 'rxjs';

@Component({
  selector: "app-di-api",
  template: `

    <h3>User View</h3>
    <input type="text" [(ngModel)]="userId" (ngModelChange)="getUser()">
    <p>User Name : {{userName$}}</p>
    <p>Name : {{name$}}</p>
    <p>User email : {{email$}}</p>

  `,
  imports: [
    FormsModule
  ],
  standalone: true,
  providers: [
    DiService
  ]
})

export class DiApiComponent implements OnInit{

  userId!:number
/*
  private userIdSubject = new BehaviorSubject<number>(0)
  userId$ = this.userIdSubject.asObservable()*/

  userName$!:string
  name$!:string
  email$!:string
  userIdInput: number = 0;

  constructor(private diService:DiService) { }

  ngOnInit() {
    /*this.userId$.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap(userId => {
        if(userId > 0){
          return this.diService.getUser(userId)
        }else{
          console.warn("Gelen user id hatalı", userId)
          return []
        }
      })
    ).subscribe({
      next: value => {
        this.userName$ = value.username
        this.name$ = value.name
        this.email$ = value.email
      }
    })*/
  }

  /*getUser() {
    this.userIdSubject.next(this.userIdInput); // Yeni userId'yi publish et
  }*/

  getUser() {
    if (this.userId > 0) {
      this.diService.getUser(this.userId)
        .subscribe({
          next: value => {
            this.userName$ = value.username
            this.name$ = value.name
            this.email$ = value.email
          }
        })
    } else {
      console.warn("Gelen userId hatalı", this.userId)
    }
  }

}
