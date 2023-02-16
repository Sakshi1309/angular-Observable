import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  name = new BehaviorSubject<any>('Sakshi');
  users = {};
  albums = {};
  todos = {};

  fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  usingForkJoin() {
    const joinedAndDelayed$ = forkJoin({
      users: this.http.get('https://jsonplaceholder.typicode.com/users'),
      todos: this.http.get('https://jsonplaceholder.typicode.com/todos'),
      albums: this.http.get('https://jsonplaceholder.typicode.com/albums'),
    });
    joinedAndDelayed$.subscribe((data) => {
      (this.users = data.users),
        (this.albums = data.albums),
        (this.todos = data.todos);
      console.log(this.users);
      console.log(this.albums);
      console.log(this.todos);
    });
  }
}
