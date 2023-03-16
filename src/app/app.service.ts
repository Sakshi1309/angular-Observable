import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, forkJoin, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  name = new BehaviorSubject<any>('Sakshi');
  lname: Subject<String> = new Subject<String>;
  users = {};
  albums = {};
  todos = {};

  fetchData() {
    this.lname.subscribe({
      next(data) {
        let a = "aaa"
        console.log("local data:- ", a);
        console.log("next data:- ", data);
      }
    });
    this.lname.next('Gupta');
    this.name.next("Sakshi.....");
    console.log("Behaviour subject", this.name.value)
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

  usingForkJoinWithError() {
    const users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    const todos$ = this.http.get('https://jsonplaceholder.typicode.com/todos');
    const albums$ = this.http.get(
      'https://jsonplaceholder.typicode.com/albums/1000'
    );
    return forkJoin([users$, todos$, albums$]).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
