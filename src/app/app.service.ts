import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  name = new BehaviorSubject<any>('Sakshi');

  fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
