import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  public title = new BehaviorSubject<string>(
    `*****where we will show the Component Name*****`
  );

  constructor() {}
}
