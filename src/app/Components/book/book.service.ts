import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  public title = new BehaviorSubject<string>('Show Component Name');

  constructor() {}
}
