import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, forkJoin } from 'rxjs';

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
      users: this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
        catchError(() => {
          throw 'Error occured in users api';
        })
      ),
      todos: this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
        catchError(() => {
          throw 'Error occured in todos api';
        })
      ),
      albums: this.http.get('https://jsonplaceholder.typicode.com/albums').pipe(
        catchError(() => {
          throw 'Error occured in albums api';
        })
      ),
    });

    joinedAndDelayed$.subscribe({
      next(data) {
        this.users = data.users;
        this.albums = data.albums;
        this.todos = data.todos;
        console.log('data', data);
      },

      error(err) {
        console.log(err);
      },

      complete() {},
    });
  }
}
